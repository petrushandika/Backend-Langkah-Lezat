import * as dotenv from 'dotenv';
dotenv.config();

const CONFIG = {
  SECRET_SAUCE: process.env.SECRET_SAUCE,
  PORT: process.env.PORT,
};

export default CONFIG;
