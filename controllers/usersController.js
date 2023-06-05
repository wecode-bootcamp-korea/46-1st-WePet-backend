import { usersService } from '../services/index.js'
import { checkDuplicateEmail } from '../services/usersService.js'
// 회원가입
const signUp = async (req, res) => {
  try {
    const { email, password, name } = req.body
    const isDuplicateEmail = await checkDuplicateEmail(email);  
    if (!email || !password || !name) {
      return res.status(400).json({ messge: 'KEY_ERROR' })
    } else if(isDuplicateEmail === true) {   //이메일 중복 확인
      return res.status(400).json({messge: 'Duplicate email'})
    }
    const result = await usersService.signUp(email, password, name)
    return res.status(201).json({ messge: 'SIGNUP_SUCCESS', result })
  } catch (err) {
    console.log(err)
    return res.status(err.statusCode || 500).json({ messge: err.messge })
  }
}
// 로그인
const login = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json({ messge: 'KEY_ERROR' })
    }
    const result = await usersService.login(email, password)
    return res.status(201).json({ messge: 'LOGIN_SUCCESS', result })
  } catch (err) {
    console.log(err)
    return res.status(err.statusCode || 500).json({ message: err.message })
  }
}

// 사용자 정보 삭제
const deleteUser = async (req, res, next) => {
  try {
    const userId = req.query.userId;
    const result = await usersService.deletedUser(userId);
    res.status(200).json({ message: 'User deleted successfully',result });
  } catch (error) {
    next(error);
    console.log(error)
  }
};
// 사용자 정보 수정
const updateUser = async (req, res) => {
  const { userId } = req.params;
  const updatedUserData = req.body;

  try {
    await updateUser(userId, updatedUserData);
    res.sendStatus(200);
  } catch (err) {
    res.status(err.statusCode || 500).json({ error: err.message });
  }
};

export {
  signUp,
  login,
  deleteUser,
  updateUser,
 }