

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import ShowAllBooks from './views/ShowAllBooks.jsx'
import ShowOneBook from './views/ShowOneBook.jsx'
import CreateBook from './views/CreateBook.jsx'
import UpdateBook from './views/UpdateBook.jsx'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  

  return (
<>
  <Router>
  
    <Routes>
    <Route path="/" element={<ShowAllBooks />} ></Route>
    <Route path="/onebook/:id" element= {<ShowOneBook />} ></Route>
    <Route path='/create' element={<CreateBook/>} ></Route>
    <Route path='/update/:id' element={<UpdateBook/>}></Route>

    </Routes>
  </Router>
</>
  )
}

export default App
