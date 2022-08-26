import './styles/App2.css';
import {BrowserRouter , Routes , Route , Link} from 'react-router-dom'
import {Home} from './pages/home'
import {Users} from './pages/users'
import {Profile} from './pages/profile'



function App() {
  return (
     <BrowserRouter>
        <nav className='navigation'>
          <Link to="/" className='link'>Home</Link>
          <Link to="/users" className='link'>Users</Link>
        </nav>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/profile/:id" element={<Profile />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;
