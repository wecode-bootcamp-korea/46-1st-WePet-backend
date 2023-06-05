import { database } from './dataSource.js'
// 유저 회원가입
const createUserDao = async (email, password, name) => {
  try {
    await database.query(
      `INSERT INTO users (
            email,
            password,
            name
        ) VALUES (
          ?, ?, ?)`,
      [email, password, name]
    )
  } catch (err) {
    console.log(err)
    const error = new Error('INVALID_DATA_INPUT!')
    error.statusCode = 400
    throw error
  }
}
// 로그인
const getUserByEmail = async (email) => {
  try {
    const [user] = await database.query(
      `SELECT 
        u.id,
        u.email,
        u.password,
        u.name,
        u.points
        FROM users u
        WHERE u.email = ?
        `,
        [email]
    )
    return user
  } catch (err) {
    console.log(err)
    const error = new Error('INVALID_DATA_INPUT')
    error.statusCode = 400
    throw error
  }
}
//access_token을 verify해서 얻어낸 userId를  auth.js -> userService -> userDao의 흐름으로 전달한다.
const getUserById = async (userId) => {
  try {
    const user = await database.query(
      `SELECT 
        u.email,
        u.password,
        u.name,
        u.points
      FROM users u
      WHERE u.id = ?
      `,
      [userId]
    )
    return user
  } catch (err) {
    console.log(err)
    const error = new Error('INVALID_DATA_INPUT')
    error.statusCode = 400
    throw error
  }
}

// 유저 정보 삭제
const deleteUser = async (userId) => {
  try {
    await database.query(
      `DELETE FROM users
       WHERE id = ?`,
      [userId]
    );
  } catch (err) {
    const error = new Error('INVALID_DATA_INPUT');
    error.statusCode = 400;
    throw error;
  }
};

// 사용자 정보 수정
const updateUser = async (userId, updatedUserData) => {
  try {
    await database.query(
      `UPDATE users
       SET email = ?,
           password = ?,
           name = ?
       WHERE id = ?`,
      [updatedUserData.email, updatedUserData.password, updatedUserData.name, userId]
    );
  } catch (err) {
    const error = new Error('INVALID_DATA_INPUT');
    error.statusCode = 400;
    throw error;
  }
};
//point
// const point = async(userId, point) => {
//   try {
//     await database.
//   }
// }

//address
// const address = async(address1, address2) => {
//   try {
//     await database.query.userId(
//       `INSERT INTO (
//         address1,
//         address2
//       ) VALUES (?, ?)`,[address1, address2]
//     )
//   } catch(err) {
//     console.log(err)
//     const error = new Error('INVALID_DATA_INPUT!')
//     error.statusCode = 400
//     throw error
//   }
// }

export {
  createUserDao,
  getUserByEmail,
  getUserById,
  deleteUser,
  updateUser
}
