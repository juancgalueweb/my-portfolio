import { useEffect, useState } from 'react'

export enum TypePhase {
  Typing,
  Pausing,
  Deleting
}

const TYPING_INTERVAL = 150
const PAUSE_MS = 2000
const DELETE_INTERVAL = 50

const useTyped = (
  heroTitle: string[]
): {
  typed: string
  selectedTyped: string
  phase: TypePhase
} => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [phase, setPhase] = useState(TypePhase.Typing)
  const [typed, setTyped] = useState('')

  useEffect(() => {
    switch (phase) {
      case TypePhase.Typing: {
        const nextTyped = heroTitle[selectedIndex].slice(0, typed.length + 1)

        if (nextTyped === typed) {
          setPhase(TypePhase.Pausing)
          return
        }

        const timeout = setTimeout(() => {
          setTyped(nextTyped)
        }, TYPING_INTERVAL)

        return () => clearTimeout(timeout)
      }
      case TypePhase.Deleting: {
        if (!typed) {
          const nextIndex = selectedIndex + 1
          setSelectedIndex(heroTitle[nextIndex] ? nextIndex : 0)
          setPhase(TypePhase.Typing)
          return
        }
        const nextRemaining = heroTitle[selectedIndex].slice(
          0,
          typed.length - 1
        )

        const timeout = setTimeout(() => {
          setTyped(nextRemaining)
        }, DELETE_INTERVAL)

        return () => clearTimeout(timeout)
      }
      case TypePhase.Pausing:
      default: {
        const timeout = setTimeout(() => {
          setPhase(TypePhase.Deleting)
        }, PAUSE_MS)

        return () => clearTimeout(timeout)
      }
    }
  }, [typed, heroTitle, phase, selectedIndex])

  return { typed, selectedTyped: heroTitle[selectedIndex], phase }
}

export default useTyped
