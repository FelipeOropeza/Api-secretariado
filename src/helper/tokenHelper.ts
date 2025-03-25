import jwt from 'jsonwebtoken';

class TokenHelper {
  static generateToken(userId: number, name: string, ra: string) {
    const payload = { userId, name, ra };
    const secretKey = process.env.JWT_SECRET_KEY || 'your_secret_key';

    return jwt.sign(payload, secretKey);
  }
}

export default TokenHelper;
