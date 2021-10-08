import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/user";

export const insertSignUpData = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const insertData = await getRepository(User);
    const email = req.body;
    const createUserData = insertData.create({
      email: `${req.body.email}`,
      password: `${req.body.password}`,
      checkpsw: `${req.body.checkpsw}`,
      name: `${req.body.checkpsw}`,
      phoneNum: `${req.body.phoneNum}`,
    });
    await insertData.save(createUserData);
    return res.status(201).send(createUserData);
  } catch (error) {
    throw new Error(error);
  }
};

export const searchAllUserData = async (req: Request, res: Response) => {
  try {
    const searchAllUser = await getRepository(User).find();
    return res.status(200).send(searchAllUser);
  } catch (error) {
    throw new Error(error);
  }
};
