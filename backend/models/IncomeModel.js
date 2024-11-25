const mongoose =require('mongoose');

const IncomeSchema= new mongoose.Schema({
    userId: { // Links income to a user
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title:{
        type :String,
        required:true,
        trim:true,
        maxLength:50
    },
    amount:{
        type:Number,
        required:true,
        trim:true,
        maxLength:50
    },
    type:{
        type:String,
        default:"income"
    },
    date:{
        type:Date,
        required:true,
        trim:true,
    },
    category:{
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        required:true,
        trim:true,
        maxLength:50
    },
},{timestamps:true})

module.exports=mongoose.model('Income',IncomeSchema)