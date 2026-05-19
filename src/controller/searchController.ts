import { type Request, type Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject.js";
import { Pet } from "../models/pet.js";

export const search = (req: Request, res: Response) => {
  let query: string = req.query.q as string;

  let list = Pet.getFromName(query);

  if (!query) {
    res.redirect("/");
    return;
  }

  res.render("pages/pages", {
    menu: createMenuObject(""),
    list,
    query,
  });
};
