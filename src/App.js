import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Publications,
  Publications2,
  Publications3,
  Publication,
  Home,
  About,
  Contact,
  Login,
  NotFound,
  PubCards,
} from './pages';

import { NewPublication, EditPublication } from './pages/admin';
function App() {
  return (
    <div className='bg-white flex flex-col min-h-screen'>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path='/' element={<Home />} />
          <Route path='/publications-old' element={<Publications />} />
          <Route path='/publications-old-2' element={<Publications2 />} />
          <Route path='/publication/:id' element={<Publication />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />

          <Route path='/pubcards' element={<PubCards />} />
          <Route path='/publications' element={<Publications3 />} />

          {/* Admin Routes */}
          <Route path='/admin/new' element={<NewPublication />} />
          <Route path='/admin/edit/:id' element={<EditPublication />} />

          {/* 404 */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
