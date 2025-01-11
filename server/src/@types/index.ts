export interface Account {
  username: string
  password: string
  role: 'user' | 'admin'
}

export interface Inventory {
  name: string
  quantity: number
  price: number
  status: 'special' | 'regular'
}

export interface Transaction {
  item: string
  status: 'approved' | 'pending' | 'declined'
  user: string
}

export interface Task {
  task: string
  description: string
  points: number
  status: 'completed' | 'pending'
}