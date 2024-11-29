const IncomeSchema = require("../models/IncomeModel");

exports.addIncome = async (req, res) => {
    const { userId, title, amount, type, date, category, description } = req.body;

    try {
        // Validations
        if (!userId || !title || !amount || !date || !category || !description) {
            return res.status(400).json({ message: "All fields are required!" });
        }

        if (typeof amount !== "number" || amount <= 0) {
            return res.status(400).json({ message: "Amount must be a positive number!" });
        }

        // Create and save the income
        const income = new IncomeSchema({
            userId,
            title,
            amount,
            type,
            date,
            category,
            description,
        });

        await income.save();

        return res.status(200).json({ message: "Income added successfully!", income });
    } catch (error) {
        console.error("Error adding income:", error.message);
        return res.status(500).json({ message: "Server error occurred!" });
    }
};

exports.getIncomes = async (req, res) => {
    try {
        const incomes = await IncomeSchema.find().sort({ createdAt: -1 });
        res.status(200).json(incomes);
    } catch (error) {
        console.error("Error fetching incomes:", error.message);
        res.status(500).json({ message: "Server error occurred!" });
    }
};

exports.deleteIncome = async (req, res) => {
    const { id } = req.params; // `id` is the record ID (not `userId`)

    try {
        const income = await IncomeSchema.findByIdAndDelete(id);

        if (!income) {
            return res.status(404).json({ message: "Income not found!" });
        }

        res.status(200).json({ message: "Income deleted successfully!" });
    } catch (error) {
        console.error("Error deleting income:", error.message);
        res.status(500).json({ message: "Server error occurred!" });
    }
};
