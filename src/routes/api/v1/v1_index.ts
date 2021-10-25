import express from "express";
import { Request, Response, NextFunction } from "express";
import db from "../../../data/db.js";
import cookieParser from "cookie-parser";
import auth_middleware from './auth/auth_middleware';

const router = express.Router();

router.use(cookieParser());
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/', (req: Request, res: Response) => {
  res.send('This is the api route');
});

router.use('/auth', require('./auth/auth_index'));

router.get('/db', async (req: Request, res: Response) =>  {
  try {
        const database = await db("user");
        res.json({ database });
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
});

router.get('/restricted', auth_middleware.authorize, (req, res) => {
  res.send("You're in!");
})

export default router;