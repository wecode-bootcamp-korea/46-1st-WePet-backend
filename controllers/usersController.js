import { usersService } from '../services/index.js'
//회원가입
const signUp = async (req, res) => {
  try {
    const { email, password, name } = req.body
    if (!email || !password || !name) {
      return res.status(400).json({ messge: 'KEY_ERROR' })
    }
    const result = await usersService.signUp(email, password, name)
    return res.status(201).json({ messge: 'SIGNUP_SUCCESS', result })
  } catch (err) {
    console.log(err)
    return res.status(err.statusCode || 500).json({ messge: err.messge })
  }
}
//로그인
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

// 사용자 정보 업데이트
const updateUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const { email, password, name } = req.body; // 업데이트할 사용자 정보

    const updatedUserData = { email, password, name };  // 업데이트할 사용자 정보 객체 생성

    const result = await usersService.updateUser(userId, updatedUserData);
    res.status(200).json({ message: 'User updated successfully', result });
  } catch (error) {
    next(error);
    console.log('!')
  }
};

// 사용자 정보 삭제
const deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const result = await usersService.deleteUser(userId);
    res.status(200).json({ message: 'User deleted successfully',result });
  } catch (error) {
    next(error);
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!')
  }
};


export {
  signUp,
  login,
  deleteUser,
  updateUser
 }