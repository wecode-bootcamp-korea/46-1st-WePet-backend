import { createDao, updateUser, deleteUser} from '../models/userDao.js'

//비밀번호 8자리이상 특수문자사용
const createUser = async (email, password, name) => {
  const pwValidation = new RegExp(
    '^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})'
  )
  if (!pwValidation.test(password)) {
    const err = new Error('PASSWORD_IS_NOT_VALID')
    err.statusCode = 409
    throw err;
  }
  const createUser = await createDao(email, password, name)
  return createUser;
}

export { createUser }
