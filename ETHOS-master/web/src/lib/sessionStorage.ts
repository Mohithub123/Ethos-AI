export interface Session {
  id: string

  text?: string
  emotion?: string
  date?: string

  sentiment: string
  scenario: string
  timestamp: string

  score: number
}


export interface SessionStats {
  totalSessions: number
  averageScore: number

  sentimentBreakdown: {
    remorseful: number
    defensive: number
    neutral: number
  }

  trend: "improving" | "declining" | "stable"
  trendPercentage: number
}

const STORAGE_KEY = "ethos_sessions"

export const getSessions = (): Session[] => {
  if (typeof window === "undefined") return []
  const data = localStorage.getItem(STORAGE_KEY)
  return data ? JSON.parse(data) : []
}

export const saveSession = (session: Session) => {
  const sessions = getSessions()
  const updated = [session, ...sessions]
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
}

export const clearSessions = () => {
  localStorage.removeItem(STORAGE_KEY)
}