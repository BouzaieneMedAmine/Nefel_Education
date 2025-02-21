// \ //in order to use express
// // the keyword 'import' =>  after the add of "type": "module"  in package.json (an ES6 syntax)
// import express from 'express'

// // create an app instance : using express 
// const app =express()  dzdcdcdc
// //  just for clarification : we can make as much as we want or need of express ()instances const app2 =express()
// app.use(express.json()); // middleware
// // we will declare our port : it will be like what our server will listen to 
// const port = 3000


import express from "express";
import { faker } from "@faker-js/faker";

const app = express();
const PORT = 3001;

 
const createUser = () => ({
  _id: faker.database.mongodbObjectId(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  phoneNumber: faker.phone.number(),
});

 
const createCompany = () => ({
  _id: faker.database.mongodbObjectId(),
  name: faker.company.name(),
  address: {
    street: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    zipCode: faker.location.zipCode(),
    country: faker.location.country(),
  },
});

 
app.get("/api/users/new", (req, res) => {
  res.json(createUser());
});

 
app.get("/api/companies/new", (req, res) => {
  res.json(createCompany());
});
 
app.get("/api/user/company", (req, res) => {
  res.json({
    user: createUser(),
    company: createCompany(),
  });
});

 app.listen(PORT, () => {
  console.log(`🔥 Server running on http://localhost:${PORT}`);
});

// \ //in order to use express
// // the keyword 'import' =>  after the add of "type": "module"  in package.json (an ES6 syntax)
// import express from 'express'

// // create an app instance : using express 
// const app =express()
// //  just for clarification : we can make as much as we want or need of express ()instances const app2 =express()
// app.use(express.json()); // middleware
// // we will declare our port : it will be like what our server will listen to 
// const port = 3000


// //array of data 
// const languages = [
//     { id: 1, name: 'JavaScript' },
//     { id: 2, name: 'Python' },
//     { id: 3, name: 'Java' },
//     { id: 4, name: 'C++' },
//     { id: 5, name: 'Ruby' }
// ];
// // lets make a route to get our languages array 
// app.get('/languages',(req,res)=>{
    
//     res.json(languages)//
// })

// // another route to add data inside our array 
// app.post('/languages',(req,res)=>{
//     console.log("this is the body",req.body)
//     const newLanguage=req.body
//     languages.push(newLanguage)
//     res.status(200).json(languages)

// })
// // make a route toget language by id 
// app.get("/languages/:idD",(req,res)=>{
//     console.log("req params",req.params)
//     const {idD}=req.params
//     const language=languages.find(lang=>lang.id === parseInt(idD))
//     if(language){
//         res.status(201).json(language)
//     } else {
//         res.status(404).send("stop using the url directly !!!")
//     }
// })


// //PUT request: Update an entire language resource
// app.put('/languages/:idD', (req, res) => {

//     const { idD } = req.params;
//     const updatedLanguage = req.body;
//     console.log(updatedLanguage)
//     // we want to find the index of the element we want to update
//     const index = languages.findIndex(lang => lang.id === parseInt(idD));
    
//     if (index !== -1) {
//         languages[index] = { id: parseInt(idD), ...updatedLanguage };
//         res.json(languages);
//     } else {
//         res.status(404).send("Language not found");
//     }
// });


// // Define our first route 
// app.get('/',(req,res)=>{
// res.send("Hello11 from our first server ; Am Bali")
// })
// app.get('/api',(req,res)=>{
//     res.send("Hello from our first server ; Am Bali from / apidfgdsf")
//     })

// // we will make a console for our server to make sure it's working
// app.listen(port,()=>{
//     console.log(`Server is running on https://localhost:${port}`)
// })

 