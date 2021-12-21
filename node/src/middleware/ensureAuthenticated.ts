import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).json({
            errorCode: "token.invalid",
        });
    }

    // coloquei essa vírgula para separar o Bearer do token, pois senão virá assim Bearer 123
    // ou seja, só quero o token que é 123

    const [, token] = authToken.split(" ")

    try {
        const { sub } = verify(token, process.env.JWT_SECRET) as IPayload;

        req.user_id = sub;

        return next();
    } catch (err) {
        return res
            .status(401)
            .json({ errorCode: "token expired" });
    }
}