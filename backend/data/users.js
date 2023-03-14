import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Emmason Oby',
    email: 'emmason@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Kat Cont',
    email: 'kat@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
