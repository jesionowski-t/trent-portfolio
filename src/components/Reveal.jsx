import { motion } from 'framer-motion'

// Fade-up reveal on scroll.
export default function Reveal({ children, delay = 0, y = 26, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.65, 0.27, 1] }}
    >
      {children}
    </motion.div>
  )
}

// Page-level transition wrapper for route changes.
export function Page({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: [0.21, 0.65, 0.27, 1] }}
    >
      {children}
    </motion.main>
  )
}

// Renders text where [bracketed] spans become italic serif accents.
export function AccentText({ text }) {
  const parts = text.split(/(\[[^\]]+\])/g)
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith('[') ? (
          <em key={i} className="accent-em">
            {part.slice(1, -1)}
          </em>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  )
}
