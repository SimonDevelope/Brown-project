import { Repository, EntityRepository } from "typeorm";
import { Example } from "../entity/exampleEntity";

@EntityRepository(Example)
export class ExampleRepository extends Repository<Example> {
  inputExampleList(example1: string, example2: string) {
    return this.save({ example1, example2 });
  }

  searchList() {
    return this.find();
  }
}
