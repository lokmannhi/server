import { AppDataSource } from "../../../config/databaseConnection";
import { items } from "../../../entity/items";

const repository = AppDataSource.getRepository(items)

export const getItems = async () => {
    return await repository.find()
}