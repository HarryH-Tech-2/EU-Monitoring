// Deterministic pseudo-random number generator for stable values across renders
class SeededRandom {
  private seed: number

  constructor(seed: number) {
    this.seed = seed
  }

  next(): number {
    this.seed = (this.seed * 9301 + 49297) % 233280
    return this.seed / 233280
  }

  range(min: number, max: number): number {
    return Math.floor(this.next() * (max - min + 1)) + min
  }

  pick<T>(array: T[]): T {
    return array[Math.floor(this.next() * array.length)]
  }
}

// Create a singleton seeded random instance
const sessionSeed = Date.now()
export const seededRandom = new SeededRandom(sessionSeed)

// Helper to get stable random values
export const getStableValue = (key: string, min: number, max: number): number => {
  const hash = key.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  const rng = new SeededRandom(sessionSeed + hash)
  return rng.range(min, max)
}
