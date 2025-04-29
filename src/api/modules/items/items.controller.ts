import { Request, Response } from "express";
import { getItems } from "./items.services";

export const getAllItems = async (req: Request, res: Response) => {
    const items = await getItems()
    return res.status(200).send(items)
}