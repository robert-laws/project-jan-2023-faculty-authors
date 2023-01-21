import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Publications,
  Publication,
  Home,
  NewPublication,
  About,
  Login,
} from './pages';
function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/publications' element={<Publications />} />
        <Route path='/publication/:id' element={<Publication />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />

        {/* Admin Routes */}
        <Route path='/new' element={<NewPublication />} />
      </Routes>
    </Router>
  );
}

export default App;
