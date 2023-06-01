import { createUser } from '../service/userService.js'

const signUp = async (req, res) => {
  try {
    const { email, password, name } = req.body
    if (!email || !password || !name) {
      return res.status(400).json({ messge: 'KEY_ERROR' })
    }
    await createUser(email, password, name)
    return res.status(201).json({ messge: 'SIGNUP_SUCCESS' })
  } catch (err) {
    console.log(err)
    return res.status(err.statusCode || 500).json({ messge: err.messge })
  }
}
const login = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json({ messge: 'KEY_ERROR' })
    }
    await userService.login(email, password)
  } catch (err) {
    console.log(err)
    return res.status(err.statusCode || 500).json({ message: err.message })
  }
}

export { signUp, login }
