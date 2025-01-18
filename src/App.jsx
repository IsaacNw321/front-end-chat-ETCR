import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Nav';
import { UserChat } from './components/UserChat';
import { Login } from './sessions/Login';
import LandingPage from './pages/LandingPage';
import Profile from './pages/Profile';
import { ProtectedRoute } from './components/ProtectRoute';
import { useUser } from './context/UserContext';
import Chat from './components/Chat';
const App = () => {
  const {user} = useUser()
  console.log(user)
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />    
        <Route element={<ProtectedRoute isAllowed={!!user}/>}>
          <Route path="/profile" element={<Profile />} />
          <Route path='/chat' element={<Chat/>}/>
        </Route>
        <Route path='/dashboard' element={
       <ProtectedRoute isAllowed={!!user && user.role === 'SUPERUSER' }>
        <UserChat/>
       </ProtectedRoute>
       }/>  
      </Routes>
    </BrowserRouter>
  );
};

export default App;