import { Router } from "express";
import { addTransactionToDb ,addERC20ToDb,getTransactionsFromDb,getERC20BalanceFromDb,getNativeBalanceFromDb, addNativeToDb} from "../contollers/address.controller.js";

const router=Router()

router.route("/addtransactions").post(addTransactionToDb)
router.route("/addERC20").post(addERC20ToDb)
router.route("/addNative").post(addNativeToDb)
router.route("/getTransactions/:address?").get(getTransactionsFromDb)
router.route("/getERC20/:address?").get(getERC20BalanceFromDb)
router.route("/getNative/:address?").get(getNativeBalanceFromDb)

export default router
