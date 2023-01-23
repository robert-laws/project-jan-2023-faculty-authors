import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Publications,
  Publications2,
  Publication,
  Home,
  NewPublication,
  About,
  Contact,
  Login,
} from './pages';
function App() {
  return (
    <div className='bg-white flex flex-col min-h-screen'>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path='/' element={<Home />} />
          <Route path='/publications' element={<Publications />} />
          <Route path='/publications2' element={<Publications2 />} />
          <Route path='/publication/:id' element={<Publication />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />

          {/* Admin Routes */}
          <Route path='/new' element={<NewPublication />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
