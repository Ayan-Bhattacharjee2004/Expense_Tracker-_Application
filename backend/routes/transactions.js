const router = require('express').Router()
const{addIncome, getIncomes, deleteIncomes}=require('../controllers/Income')

router.post('/add-income',addIncome)
    .get('get-income', getIncomes)
    .delete('delete-income/:userId', deleteIncomes)
module.exports = router;
