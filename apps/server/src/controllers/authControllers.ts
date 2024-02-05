import type { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { SignFormSchema } from '../libs/schema';

const signUp = async (req: Request, res: Response): Promise<void> => {
  try {
    const validation = SignFormSchema.safeParse(req.body);
    if (validation.success) {
      const { name, email, password } = validation.data;

      // TODO: Implement sign up logic, upload to mongoDB
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = { name, email, password: hashedPassword };
      console.log('hashedPassword: ', hashedPassword);

      res.status(200).send({ message: 'User signed up successfully!', newUser });
    } else {
      res.status(400).send({ message: validation.error.message });
    }
  } catch (error) {
    console.error('Server Error: ', error);
    res.status(500).send({ message: 'Error signing up user.' });
  }
};

export default signUp;
