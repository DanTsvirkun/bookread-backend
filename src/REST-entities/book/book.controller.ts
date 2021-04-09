import { Request, Response } from "express";
import BookModel from "./book.model";

export const addBook = async (req: Request, res: Response) => {
  const book = req.body;
  const user = req.user;
  const newBook = await BookModel.create({ ...book, pagesFinished: 0 });
  user?.books.push(newBook);
  await user?.save();
  res.status(201).send({ newBook });
};
