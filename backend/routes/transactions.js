const router = require("express").Router();
const { addIncome, getIncomes, deleteIncome } = require("../controllers/Income");

router.post("/add-income", addIncome);
router.get("/get-income", getIncomes);
router.delete("/delete-income/:id", deleteIncome);

module.exports = router;
