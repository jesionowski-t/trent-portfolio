import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// Cinematic systems-convergence scene.
// On a fresh page load the camera flies past every input node and
// lands framing the whole network converging on the Efficient
// Workflows core. SPA navigations (and reduced-motion users) skip
// straight to the final framing. Click skips the flight.
let playedThisPageLoad = false

const INPUTS = [
  'Finance',
  'Reporting',
  'Operations',
  'Vendors & MIS',
  'Spreadsheets',
  'Scheduling',
  'Billing',
  'Manual entry',
]

const ACCENT = '#00e599'
const FLIGHT_SECONDS = 8

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

function drawPill(canvas, label) {
  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.beginPath()
  ctx.roundRect(8, 8, canvas.width - 16, canvas.height - 16, 30)
  ctx.fillStyle = 'rgba(16, 16, 22, 0.92)'
  ctx.fill()
  ctx.lineWidth = 3
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.30)'
  ctx.stroke()
  ctx.font = '500 44px "Geist Mono", ui-monospace, monospace'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = '#d3d3dd'
  ctx.fillText(label, canvas.width / 2, canvas.height / 2 + 2)
}

function drawHubLabel(canvas, text) {
  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.font = '600 52px "Geist Mono", ui-monospace, monospace'
  if ('letterSpacing' in ctx) ctx.letterSpacing = '8px'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = '#f1f1f3'
  ctx.fillText(text.toUpperCase(), canvas.width / 2, canvas.height / 2)
}

function makeGlowTexture(inner, outer) {
  const c = document.createElement('canvas')
  c.width = c.height = 256
  const ctx = c.getContext('2d')
  const g = ctx.createRadialGradient(128, 128, 0, 128, 128, 128)
  g.addColorStop(0, inner)
  g.addColorStop(1, outer)
  ctx.fillStyle = g
  ctx.fillRect(0, 0, 256, 256)
  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

export default function FlowScene() {
  const mountRef = useRef(null)

  useEffect(() => {
    const el = mountRef.current
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let disposed = false

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    el.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 200)

    const disposables = []
    const fontRedraws = []

    // ── input nodes: arc on the left ────────────────────────
    const HUB = new THREE.Vector3(2.8, 0, 0)
    const nodeGroups = []
    const nodePositions = INPUTS.map((label, i) => {
      const y = 3.35 - i * 0.96
      const x = -3.1 - 1.2 * Math.sin((Math.PI * i) / (INPUTS.length - 1))
      const z = (i % 2 === 0 ? 1 : -1) * 0.55
      return new THREE.Vector3(x, y, z)
    })

    INPUTS.forEach((label, i) => {
      const canvas = document.createElement('canvas')
      canvas.width = 512
      canvas.height = 128
      drawPill(canvas, label)
      const tex = new THREE.CanvasTexture(canvas)
      tex.colorSpace = THREE.SRGBColorSpace
      tex.anisotropy = 4
      fontRedraws.push(() => {
        drawPill(canvas, label)
        tex.needsUpdate = true
      })
      const mat = new THREE.SpriteMaterial({ map: tex, transparent: true })
      const sprite = new THREE.Sprite(mat)
      sprite.scale.set(3.1, 0.78, 1)
      sprite.position.copy(nodePositions[i])
      scene.add(sprite)
      nodeGroups.push(sprite)
      disposables.push(tex, mat)
    })

    // ── hub: layered glow + core + ring + label ─────────────
    const glowTex = makeGlowTexture('rgba(0, 229, 153, 0.85)', 'rgba(0, 229, 153, 0)')
    const haloMat = new THREE.SpriteMaterial({
      map: glowTex,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
    })
    const halo = new THREE.Sprite(haloMat)
    halo.scale.set(5.4, 5.4, 1)
    halo.position.copy(HUB)
    scene.add(halo)

    const coreMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(ACCENT) })
    const core = new THREE.Mesh(new THREE.SphereGeometry(0.34, 32, 32), coreMat)
    core.position.copy(HUB)
    scene.add(core)

    const ringMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(ACCENT),
      transparent: true,
      opacity: 0.5,
      side: THREE.DoubleSide,
    })
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.45, 0.015, 8, 90), ringMat)
    ring.position.copy(HUB)
    scene.add(ring)
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(1.05, 0.01, 8, 90), ringMat.clone())
    ring2.material.opacity = 0.3
    ring2.position.copy(HUB)
    ring2.rotation.x = Math.PI / 3
    scene.add(ring2)

    const hubCanvas = document.createElement('canvas')
    hubCanvas.width = 1024
    hubCanvas.height = 128
    drawHubLabel(hubCanvas, 'Efficient workflows')
    const hubTex = new THREE.CanvasTexture(hubCanvas)
    hubTex.colorSpace = THREE.SRGBColorSpace
    fontRedraws.push(() => {
      drawHubLabel(hubCanvas, 'Efficient workflows')
      hubTex.needsUpdate = true
    })
    const hubLabelMat = new THREE.SpriteMaterial({ map: hubTex, transparent: true })
    const hubLabel = new THREE.Sprite(hubLabelMat)
    hubLabel.scale.set(4.6, 0.58, 1)
    hubLabel.position.set(HUB.x - 0.2, HUB.y - 2.15, HUB.z)
    scene.add(hubLabel)
    disposables.push(glowTex, haloMat, coreMat, ringMat, hubTex, hubLabelMat)

    // ── curves + traveling pulses ───────────────────────────
    const pulseTex = makeGlowTexture('rgba(160, 255, 220, 1)', 'rgba(0, 229, 153, 0)')
    disposables.push(pulseTex)
    const curves = []
    const pulses = []
    nodePositions.forEach((p, i) => {
      const mid = new THREE.Vector3((p.x + HUB.x) / 2, p.y * 0.35, (p.z + HUB.z) / 2 + 0.6)
      const curve = new THREE.QuadraticBezierCurve3(p.clone(), mid, HUB.clone())
      curves.push(curve)

      const geo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(64))
      const mat = new THREE.LineDashedMaterial({
        color: 0x55606e,
        transparent: true,
        opacity: 0.65,
        dashSize: 0.14,
        gapSize: 0.18,
      })
      const line = new THREE.Line(geo, mat)
      line.computeLineDistances()
      scene.add(line)
      disposables.push(geo, mat)

      for (let k = 0; k < 2; k++) {
        const pm = new THREE.SpriteMaterial({ map: pulseTex, transparent: true, depthWrite: false })
        const pulse = new THREE.Sprite(pm)
        pulse.scale.set(0.34, 0.34, 1)
        pulses.push({ sprite: pulse, curve, offset: k * 0.5 + i * 0.09, speed: 0.16 + (i % 4) * 0.025 })
        scene.add(pulse)
        disposables.push(pm)
      }
    })

    // ── ambient dust ────────────────────────────────────────
    const dustGeo = new THREE.BufferGeometry()
    const dustCount = 220
    const dustPos = new Float32Array(dustCount * 3)
    for (let i = 0; i < dustCount; i++) {
      dustPos[i * 3] = (Math.random() - 0.5) * 26
      dustPos[i * 3 + 1] = (Math.random() - 0.5) * 16
      dustPos[i * 3 + 2] = (Math.random() - 0.5) * 14 - 2
    }
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3))
    const dustMat = new THREE.PointsMaterial({
      color: 0x6a7282,
      size: 0.045,
      transparent: true,
      opacity: 0.7,
    })
    scene.add(new THREE.Points(dustGeo, dustMat))
    disposables.push(dustGeo, dustMat)

    // ── camera choreography ─────────────────────────────────
    const camEnd = new THREE.Vector3(-0.4, 0.45, 14.2)
    const lookEnd = new THREE.Vector3(-0.4, -0.1, 0)

    const camWaypoints = [
      nodePositions[0].clone().add(new THREE.Vector3(0.4, 0.9, 5.2)),
      ...nodePositions.map((p, i) =>
        p.clone().add(new THREE.Vector3(1.5, 0.15, 2.6 + (i % 2) * 0.5)),
      ),
      new THREE.Vector3(1.2, -1.6, 6.4),
      camEnd.clone(),
    ]
    const camPath = new THREE.CatmullRomCurve3(camWaypoints, false, 'centripetal')

    const lookWaypoints = [
      nodePositions[0].clone(),
      ...nodePositions.map((p, i) => nodePositions[Math.min(i + 1, INPUTS.length - 1)].clone()),
      HUB.clone(),
      lookEnd.clone(),
    ]
    const lookPath = new THREE.CatmullRomCurve3(lookWaypoints, false, 'centripetal')

    let flightT = playedThisPageLoad || reduceMotion ? 1 : 0
    const skip = () => {
      flightT = 1
    }
    el.addEventListener('pointerdown', skip)

    // pointer parallax for the idle phase
    const parallax = { x: 0, y: 0, tx: 0, ty: 0 }
    const onPointerMove = (e) => {
      const r = el.getBoundingClientRect()
      parallax.tx = ((e.clientX - r.left) / r.width - 0.5) * 2
      parallax.ty = ((e.clientY - r.top) / r.height - 0.5) * 2
    }
    el.addEventListener('pointermove', onPointerMove, { passive: true })

    // ── sizing ──────────────────────────────────────────────
    const resize = () => {
      const w = el.clientWidth
      const h = el.clientHeight
      if (w === 0 || h === 0) return
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(el)

    // crisp text once webfonts arrive
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => {
        if (!disposed) fontRedraws.forEach((fn) => fn())
      })
    }

    // ── render loop ─────────────────────────────────────────
    const clock = new THREE.Clock()
    let raf = 0
    const baseY = nodePositions.map((p) => p.y)

    const tick = () => {
      const dt = Math.min(clock.getDelta(), 0.05)
      const t = clock.elapsedTime

      // nodes bob gently
      nodeGroups.forEach((s, i) => {
        s.position.y = baseY[i] + Math.sin(t * 0.8 + i * 1.1) * 0.07
      })

      // pulses stream toward the hub
      pulses.forEach((p) => {
        const u = (t * p.speed + p.offset) % 1
        p.sprite.position.copy(p.curve.getPoint(u))
        p.sprite.material.opacity = 0.25 + 0.75 * Math.sin(Math.PI * u)
      })

      // hub life
      ring.rotation.z += dt * 0.25
      ring2.rotation.z -= dt * 0.18
      const breathe = 1 + Math.sin(t * 1.8) * 0.05
      halo.scale.set(5.4 * breathe, 5.4 * breathe, 1)
      core.scale.setScalar(1 + Math.sin(t * 1.8) * 0.06)

      if (flightT < 1) {
        // cinematic flight
        flightT = Math.min(1, flightT + dt / FLIGHT_SECONDS)
        const e = easeInOutCubic(flightT)
        camera.position.copy(camPath.getPoint(e))
        const look = lookPath.getPoint(Math.min(1, e * 1.04))
        camera.lookAt(look)
      } else {
        // idle: drift + parallax around the final framing
        parallax.x += (parallax.tx - parallax.x) * 0.04
        parallax.y += (parallax.ty - parallax.y) * 0.04
        if (!playedThisPageLoad) playedThisPageLoad = true
        camera.position.set(
          camEnd.x + Math.sin(t * 0.28) * 0.25 + parallax.x * 0.4,
          camEnd.y + Math.sin(t * 0.21) * 0.18 - parallax.y * 0.35,
          camEnd.z,
        )
        camera.lookAt(lookEnd)
      }

      renderer.render(scene, camera)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      disposed = true
      cancelAnimationFrame(raf)
      ro.disconnect()
      el.removeEventListener('pointerdown', skip)
      el.removeEventListener('pointermove', onPointerMove)
      disposables.forEach((d) => d.dispose?.())
      renderer.dispose()
      if (renderer.domElement.parentNode === el) el.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="scene3d"
      role="img"
      aria-label="Animated 3D scene: finance, reporting, operations, vendors and MIS, spreadsheets, scheduling, billing, and manual entry all streaming into a glowing core labeled efficient workflows"
    />
  )
}
