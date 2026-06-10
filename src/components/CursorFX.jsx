import { useEffect, useRef } from 'react'

// Trailing cursor ring: lags behind the native cursor with a lerp,
// expands over interactive elements. Disabled on touch devices and
// for users who prefer reduced motion. The native cursor stays.
export default function CursorFX() {
  const ref = useRef(null)

  useEffect(() => {
    if (
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return
    }

    const el = ref.current
    let x = -100
    let y = -100
    let tx = -100
    let ty = -100
    let raf = 0

    const onMove = (e) => {
      tx = e.clientX
      ty = e.clientY
      el.style.opacity = '1'
      const interactive = e.target.closest(
        'a, button, input, textarea, select, label, [role="button"]',
      )
      el.classList.toggle('cursor-fx--active', !!interactive)
    }
    const onLeave = () => {
      el.style.opacity = '0'
    }
    const onDown = () => el.classList.add('cursor-fx--down')
    const onUp = () => el.classList.remove('cursor-fx--down')

    const loop = () => {
      x += (tx - x) * 0.16
      y += (ty - y) * 0.16
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerdown', onDown)
    window.addEventListener('pointerup', onUp)
    document.documentElement.addEventListener('mouseleave', onLeave)
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
      document.documentElement.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <div ref={ref} className="cursor-fx" aria-hidden="true">
      <span className="cursor-fx__dot" />
    </div>
  )
}
