export interface Account {
  username: string
  password: string
  role: 'user' | 'admin'
  points: number
}

export interface FormData {
  username: Account['username']
  password: Account['password']
}
