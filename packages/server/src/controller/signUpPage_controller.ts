import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { SignUpPage } from "../entity/signUpPage";

export const insertSignUpInfo = async (req: Request, res: Response) => {
  try {
    const insertInfo = await getRepository(SignUpPage);
    const createContent = insertInfo.create([
      { title: "아이디(이메일주소)" },
      { title: "비밀번호" },
      { title: "비밀번호 확인" },
      { title: "이름" },
      { title: "핸드폰 번호" },
    ]);
    await insertInfo.save(createContent);
  } catch (e) {
    throw new Error(e);
  }
};

export const searchAllInfo = async (req: Request, res: Response) => {
  try {
    const searchAllInfo = await getRepository(SignUpPage).find();
    return res.status(200).send(searchAllInfo);
  } catch (e) {
    throw new Error(e);
  }
};
