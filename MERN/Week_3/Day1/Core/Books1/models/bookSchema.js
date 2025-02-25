import { model, Schema } from "mongoose";

const booksSchema = new Schema({
    title:{
        type: String,
        required: [true, "The title books are required Please enter the TITLE"],
        minLenght: [2, "Minimum Title's lenght is 2 characters "],
        maxLenght: [255, "Maximum Title's lenght is 255 characters "]
    },
    author:{
        type:String,
        required: [true, "The books have an AUTHOR required Please enter the AUTHOR"],
        minLenght: [2, "Minimum AUTHOR's lenght is 5 characters "],
        maxLenght: [255, "Maximum AUTHOR's lenght is 255 characters "]
    },
    pages:{
        type: Number,
        required :[true, "Your Book should Have minimum One page"]
    },
    isValidObjectId:{
        type: Boolean,
        default: false 


    }
    
},
{timestamps: true},
)

const Books = model("Books", booksSchema)
export default Books



