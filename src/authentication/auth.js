import jwt from "jsonwebtoken";

export default function checkToken(req, res, next) {
    if(req.url.toLowerCase().trim() == '/user/login'.toLowerCase().trim()
        || req.url.toLowerCase().trim() == '/user/register'.toLocaleLowerCase().trim()){
            next()
        return        
    }

    const token = req.headers?.authorization?.split(" ")[1]
    try{
        const jwtObject =jwt.verify(token, process.env.JWT_SECRET)
        const isExpired = Date.now() >= jwtObject.exp * 1000
        if(isExpired){
            res.status(400).json({
                message: 'Token is expired'
            })
            res.end()
        }else{
            next()
            return
        }
    }catch(exception){
        res.status(400).json({
            message: exception.toString()
        })
    }
}