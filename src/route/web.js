import express from "express"
import { getHomepage } from "../controller/homeController";

let router = express.Router();

const inintWebRoute = (app) => {
    router.get('/', getHomepage);

    return app.use('/', router)
}

export default inintWebRoute;