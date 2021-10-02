import { getRepository } from "typeorm";
import { SignupInformation } from "../entity/signup_information";

export const SignupController = async () => {
  const signUpRepo = getRepository(SignupInformation);
  const signUpInformation = signUpRepo.create([
    { title: "아이디(이메일주소)" },
    { title: "비밀번호" },
    { title: "비밀번호 확인" },
    { title: "이름" },
    { title: "휴대폰 번호" },
  ]);
  await signUpRepo.save(signUpInformation).catch((err) => {
    console.log("Error:", err);
  });
  await signUpRepo.find().catch((err) => {
    console.log(err);
    console.log("find all info");
  });
  console.log("new information");
};
