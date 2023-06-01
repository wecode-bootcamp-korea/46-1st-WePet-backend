import verify from 'jsonwebtoken'
import { usersService } from '../services'

const loginRequired = async (req, res, next) => {		//비동기함수 실행

	// 1) Getting token and check of it's there
  const accessToken = req.headers.authorization			//추출된토큰을 accessToken에 할당한다

	if (!accessToken) {									//토큰이 없다면 에러메세지 표시
		const error = new Error('NEED_ACCESS_TOKEN')
		error.statusCode = 401
		
		return res.status(error.statusCode).json({message: error.message})
	}

  // 2) Verification token
  const decoded = await verify(accessToken, process.env.JWT_SECRET);	//토큰이 있다면 비동기적으로 실행 access토큰,env에있는씨크릿키를 할당한다

  // 3) Check if user still exists
	const user = await usersService.getUserById(decoded.sub)			//user에 userService의 getUserById의 파라미터값을 할당한다

	if (!user) {														//user가 false면 에러코드 실행
		const error = new Error('USER_DOES_NOT_EXIST')
		error.statusCode = 404
		
		return res.status(error.statusCode).json({message: error.message})
	}

  // 4) GRANT ACCESS
  req.user = user;				//..?
  next();						//다음을 실행하게 해주는 메소드
}