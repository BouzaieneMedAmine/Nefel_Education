

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css' 
import ShowAllBooks from './views/ShowAllBooks.jsx'
import ShowOneBook from './views/ShowOneBook.jsx'
import CreateBook from './views/CreateBook.jsx'

function App() {
  

  return (
<>
  <Router>
  
    <Routes>
    <Route path="/book" element={<ShowAllBooks />} ></Route>
    <Route path="/onebook/:id" element= {<ShowOneBook />} ></Route>
    <Route path='/create' element={<CreateBook/>} ></Route>

    </Routes>
  </Router>
</>
  )
}

export default App
