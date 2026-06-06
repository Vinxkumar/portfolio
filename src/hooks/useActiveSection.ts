// src/hooks/useActiveSection.ts
import { useEffect, useState } from "react"

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const sections = ["landing", "about", "projects", "skills", "contact"]

    const handleScroll = () => {
      // ✅ [...sections].reverse() — spreads into new array, doesn't mutate original
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id)
          return
        }
      }
      setActiveSection("") // reset when scrolled back to top
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return activeSection
}