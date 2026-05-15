import { Router } from "express";
import * as pageController from "../controller/pageController.js";
import * as searchController from "../controller/searchController.js";

const router = Router();

router.get("/", pageController.home);
router.get("/dogs", pageController.dogs);
router.get("/cats", pageController.cats);
router.get("/fishes", pageController.fishes);

router.get("/search", searchController.search);

export default router;
