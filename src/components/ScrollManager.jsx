import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scrolls to top on route change; honors in-page hash links.
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // wait a frame so the new page has rendered
      requestAnimationFrame(() => {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}
