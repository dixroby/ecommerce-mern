import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'dix',
    email: 'dix@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Dixroby Arone',
    email: 'alestilodefe@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
]

export default users
