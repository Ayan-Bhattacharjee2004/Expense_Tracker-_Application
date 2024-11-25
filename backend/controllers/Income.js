const IncomeSchema = require("../models/IncomeModel");

exports.addIncome = async (req, res) => {
    const { userId, title, amount, type, date, category, description } = req.body;

    // Create a new income object
    const income = new IncomeSchema({
        userId,
        title,
        amount,
        type,
        date,
        category,
        description,
    });

    try {
        // Validations
        if (!userId || !title || !amount || !type || !date || !category || !description) {
            return res.status(400).json({ message: 'All fields are required!' });
        }

        if (typeof amount !== 'number' || amount <= 0) {
            return res.status(400).json({ message: 'Amount must be a positive number!' });
        }

        // Save income to the database
        await income.save();

        // Success response
        return res.status(200).json({ message: 'Income added successfully!', income });
    } catch (error) {
        console.error('Error adding income:', error);

        // Error response
        return res.status(500).json({ message: 'An error occurred while adding income.', error: error.message });
    }
};



exports.getIncomes = async (req, res) => {
    try {
        const income=await IncomeSchema.find().sort({createdAt:-1})
        res.status(200).json(incomes)
        
    } catch (error) {
        res.status(500).json({maessage:'Server Error'})
        
    }
}
exports.deleteIncomes = async (req, res) => {
   
    const{userId}=req.params;
    IncomeSchema.findByIdAndDelete(userId)
        .then((income)=>{
            res.status(200).json({message:'Income Deleted'})
        })
        .catch((err)=>{
            res.status(500).json({message:'Server Error'})
        })
}