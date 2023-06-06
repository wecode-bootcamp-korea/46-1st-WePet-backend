import { usersService } from '../services/index.js'
import { checkDuplicateEmail } from '../services/usersService.js'
import { catchAsync } from '../utils/errorHandler.js'

const signUp = catchAsync(async (req, res) => {
  const { email, password, name } = req.body
  const isDuplicateEmail = await checkDuplicateEmail(email)
  if (!email || !password || !name) {
    return res.status(400).json({ message: 'KEY_ERROR' })
  } else if (isDuplicateEmail === true) {
    return res.status(400).json({ message: 'DUPLICATE EMAIL' })
  }
  const result = await usersService.signUp(email, password, name)
  return res.status(201).json({ message: 'SIGNUP_SUCCESS', result })
})

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({ message: 'KEY_ERROR' })
  }
  const result = await usersService.login(email, password)
  return res.status(201).json({ message: 'LOGIN_SUCCESS', result })
})

const deleteUser = catchAsync(async (req, res) => {
  const { userId } = req.body
  const result = await usersService.deletedUser(userId)
  console.log('!!!!!!!!', result, affectedRows)
  if (result.affectedRows > 0) {
    res.status(200).json({ message: 'USER DELETED SUCCESS', result })
  } else {
    res.status(401).json({ message: 'UNDEFINED USER', result })
  }
})

const updateUser = catchAsync(async (req, res) => {
  const { userId } = req.params
  const data = req.body
  const result = await usersService.updateUser(userId, data)
  if (result.affectedRows > 0) {
    res.status(200).json({ message: 'USER UPDATE SUCCESS', result })
  } else {
    res.status(400).json({ message: 'undefined user' })
  }
})

const postAddress = catchAsync(async (req, res) => {
  const { userId, address1, address2 } = req.body
  const result = await usersService.createNewAddress(userId, address1, address2)
  res.status(200).json({ message: 'CREATE SUCCESS', result })
})

const point = catchAsync(async (req, res) => {
  const { userId, userPoint } = req.body
  const result = await usersService.updatePayment(userId, userPoint)
  res.status(200).json({ message: result })
})

export { signUp, login, deleteUser, updateUser, postAddress, point }
