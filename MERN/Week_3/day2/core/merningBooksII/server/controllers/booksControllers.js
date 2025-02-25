import Books from "../models/bookSchema.js"


const books=[]


const addBook = async (req, res) => {
    try {
        const newBook=await Books.create(req.body)
        return res.status(200).json(newBook)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
        
    }
}


const getAllBooks = async(req,res) =>{
    try {
        const allBooks= await Books.find()
        return res.status(200).json(allBooks)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
        
    }
}


const getOneBook = async(req,res) =>{
    try {
        const {id}= req.params
        const oneBook = await Books.findById(id)
        return res.status(200).json(oneBook)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
        
    }
}
const deleteBook = async(req,res) =>{
    try {
        const {id}= req.params
        const oneBook = await Books.findByIdAndDelete(id)
        return res.status(200).json()
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
        
    }
}


const updateBook= async (req,res) =>{
    try {
        const {id}=req.params
        const updatedBook = await Books.findByIdAndUpdate(id, req.body,{runValidators:true, new:true})
        return res.status(200).json(updatedBook)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
        
        
    }
}



export{addBook,deleteBook,getAllBooks,getOneBook,updateBook}