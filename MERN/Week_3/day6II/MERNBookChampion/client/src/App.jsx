// App.jsx - Main application component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import ShowAllBooks from './views/ShowAllBooks';
import ShowOneBook from './views/ShowOneBook';
import CreateBook from './views/CreateBook';
import UpdateBook from './views/UpdateBook';

const App = () => {
    return (
        <Router>
            <Nav />
            <div style={{ padding: '20px' }}>
                <Routes>
                    <Route path="/" element={<ShowAllBooks />} />
                    <Route path="/book/:id" element={<ShowOneBook />} />
                    <Route path="/create" element={<CreateBook />} />
                    <Route path="/update/:id" element={<UpdateBook />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
