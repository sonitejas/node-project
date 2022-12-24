import express from 'express'

const router = express.Router()

import UsersController from "../controllers/user"

router.get("/", UsersController.welcome)

export default router