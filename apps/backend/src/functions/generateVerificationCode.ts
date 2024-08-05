const jwt = require('jsonwebtoken');
import { jwtConstants } from 'src/auth/constants/jwtConstants';

// Function to generate a token
const generateVerificationCode = (email) => {
  const secret = jwtConstants.secret;
  const token = jwt.sign({ email }, secret, { expiresIn: '1h' });
  return token;
};

export default generateVerificationCode;
