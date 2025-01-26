import jwt from 'jsonwebtoken';

const isAuthenticated = (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                message: "User not authenticated",
                success: false
            });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        console.log('Decoded Token: ', decoded); // Log the decoded token
        if (!decoded) {
            return res.status(401).json({
                message: "Invalid token",
                success: false
            });
        };
        req.id = decoded.userId;
        next();
    } catch (error) {
        console.log('JWT Verification Error: ', error); // Log detailed error information
        return res.status(401).json({
            message: "Invalid token",
            success: false
        });
    }
}

export default isAuthenticated;