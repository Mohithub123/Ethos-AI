export interface Session {
  id: string
  text: string
  emotion: string
  score: number
  date: string
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