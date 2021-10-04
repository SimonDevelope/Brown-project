import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Example } from "../entity/exampleEntity";

export const insertExample = async (req: Request, res: Response) => {
  try {
    const result = await getRepository(Example);
    const createResult = result.create({ examle1: "on", example2: "my way" });
    await result.save(createResult);
  } catch (e) {
    throw new Error(e);
  }
};

export const searchAllList = async (req: Request, res: Response) => {
  try {
    const result = await getRepository(Example).find();
    return res.status(200).send(result);
  } catch (e) {
    throw new Error(e);
  }
};
