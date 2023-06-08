import { userService } from '../services/index.js'
import { catchAsync } from '../utils/errorHandler.js'
import { checkDuplicateEmail } from '../services/usersService.js'

const signUp = catchAsync(async (req, res) => {
    const { email, password, name } = req.body
    const isDuplicateEmail = await checkDuplicateEmail(email);  
    if (!email || !password || !name) {
      const error = new Error('Key_Error')
      error.statusCode = 400
      throw error
    } else if(isDuplicateEmail === true) {
      const error = new Error('Duplicate Email')
      error.statusCode = 400
      throw error
    }
    const result = await userService.signUp(email, password, name)
    return res.status(201).json({ message: 'Signup_Success', result })
  })

const login = catchAsync(async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
      const error = new Error('Key_Error')
      error.statusCode = 400
      throw error
    }
    const result = await userService.login(email, password)
    return res.status(201).json({ message: 'Login_Success', result })
  })

const deleteUser = catchAsync(async (req, res) => {
    const userId = req.user.id;
    const result = await userService.deleteUser(userId);
    res.status(201).json({ message: 'User Delete Success', result });
  })

const updateUser = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const updatedUserData = req.body;
  await userService.updateUser(userId, updatedUserData);
  return res.status(201).json({message:'Update Success', updatedUserData})
  })

const updateAddress = catchAsync(async(req, res) => {
  const userId = req.user.id;
  const { address1, address2, userName, phoneNumber, memo } = req.body;
  await userService.updateUserAddress(userId, address1, address2, userName, phoneNumber, memo);
  return res.status(200).json({ message:'Update Success' });
  })

export {
  signUp,
  login,
  deleteUser,
  updateUser,
  updateAddress,
 }
