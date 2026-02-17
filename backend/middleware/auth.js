import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
    const { token, itemId } = req.body;
    console.log('req', req.body)
    console.log('token', token)
    if (!token) {
        return res.json({ success: false, message: 'Not Authorized!!!' })
    }
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode._id;
        next();

    } catch (error) {
        console.log('Err', error)
        res.json({ success: false, message: error })
    }

}

export default authMiddleware