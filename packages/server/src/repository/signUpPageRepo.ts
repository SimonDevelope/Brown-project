import { Repository, EntityRepository } from "typeorm";
import { SignUpPage } from "../entity/signUpPage";

@EntityRepository(SignUpPage)
export class SignUpRepo extends Repository<SignUpPage> {
  inputSignUpInfo(title: string) {
    return this.save({ title });
  }

  searchAllInfoList() {
    return this.find();
  }
}
