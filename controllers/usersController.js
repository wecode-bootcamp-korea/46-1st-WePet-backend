import { usersService } from '../services/index.js'
import { checkDuplicateEmail } from '../services/usersService.js'
import { catchAsync } from '../utils/errorHandler.js'

const signUp = catchAsync(async (req, res) => {
    const { email, password, name } = req.body
    const isDuplicateEmail = await checkDuplicateEmail(email);  
    if (!email || !password || !name) {
      return res.status(400).json({ messge: 'KEY_ERROR' })
    } else if(isDuplicateEmail === true) {   //이메일 중복 확인
      return res.status(400).json({messge: 'DUPLICATE EMAIL'})
    }
    const result = await usersService.signUp(email, password, name)
    return res.status(201).json({ messge: 'SIGNUP_SUCCESS', result })
  })

const login = catchAsync(async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json({ messge: 'KEY_ERROR' })
    }
    const result = await usersService.login(email, password)
    return res.status(201).json({ messge: 'LOGIN_SUCCESS', result })
  })

const deleteUser = catchAsync(async (req, res) => {
    const userId = req.user;
    const result = await usersService.deletedUser(userId);
    res.status(200).json({ message: 'USER DELETED SUCCESS',result });
  })

const updateUser = catchAsync(async (req, res) => {
  const userId = req.user;
  const updatedUserData = req.body;
    await updateUser(userId, updatedUserData);
    res.status(201).json({message:'UPDATE SUCCESS', updatedUserData})
  })

const address = catchAsync(async(req, res) => {
  const { userId } = req.params;
  const userAddress = req.body;
    await updateUser(userId, userAddress);
    res.sendStatus(200);
  })

export {
  signUp,
  login,
  deleteUser,
  updateUser,
  address,

 }