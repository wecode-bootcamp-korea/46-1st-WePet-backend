import { createUser } from '../service/userService.js'

const signUp = async ( req, res ) => {
    try {
        const { email, password, name } = req.body;
        if(!email || !password || !name) {
            return res.status(400).json({ messge: "KEY_ERROR"});
        }
        await createUser( name, email, password );
        return res.status(201).json({ messge: "SIGNUP_SUCCESS"});
    } catch (err) {
        console.log(err);
        return res.status(err.statusCode || 500).json({ messge: err.messge});
    }
};

// const signIn = async ( req, res ) => {
//     try {

//     }
// }


export { signUp }