export interface Account {
  username: string
  password: string
  role: 'user' | 'admin'
  points: number
}

export interface Inventory {
  name: string
  quantity: number
  price: number
  status: 'special' | 'regular'
  image: string
  description: string
}

export interface Transaction {
  item: string
  status: 'approved' | 'pending' | 'declined'
  username: string
}

export interface Task {
  task: string
  description: string
  points: number
  users: string[]
  status: 'completed' | 'pendingCompletion' | 'pendingVerification'
  markedCompleted: Date | null
  verified: Date | null
}