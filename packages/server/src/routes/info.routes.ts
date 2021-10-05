import { Router } from "express";
import {
  insertSignUpInfo,
  searchAllInfo,
} from "../controller/signUpPage_controller";

const router = Router();

router.use(insertSignUpInfo, searchAllInfo);
router.get("/signupinfo/AllList", searchAllInfo);
router.post("/signupinfo/insertInfo", insertSignUpInfo);

export default router;
