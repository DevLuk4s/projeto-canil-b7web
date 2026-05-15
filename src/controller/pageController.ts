import { type Request, type Response } from "express";

export const home = (req: Request, res: Response) => {
  res.send("home no controller");
  // res.render("pages/")
};

export const dogs = (req: Request, res: Response) => {
  // res.render("pages/")
};

export const cats = (req: Request, res: Response) => {
  // res.render("pages/")
};

export const fishes = (req: Request, res: Response) => {
  // res.render("pages/")
};
