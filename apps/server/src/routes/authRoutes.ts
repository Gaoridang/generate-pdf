import express from 'express';
import signUp from '../controllers/authControllers';

const authRouter = express.Router();

authRouter.post('/signup', signUp);

export default authRouter;
