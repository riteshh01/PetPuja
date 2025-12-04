import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {

    // Token can come as "authorization" or "token"
    const token = req.headers.authorization || req.headers.token;

    if (!token) {
        return res.json({ success: false, message: "Not Authorized. Login Again." });
    }

    try {
        // decode token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // ensure req.body exists
        if (!req.body) req.body = {};

        // Attach user id
        req.body.userId = decoded.id;

        next();

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Invalid Token" });
    }
};

export default authMiddleware;