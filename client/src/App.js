import './App.css';
import {Routes, Route} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Home from './screens/Home/Home'
import api from './services/apiConfig'
import SignIn from './screens/SignIn/SignIn';
import { verifyUser } from './services/users'
import Facilities from './screens/Facilities/Facilities'

function App() {

  const [user, setUser] = useState(null)
  const [facilities, setFacilities] = useState([])

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])

useEffect(() => {
 const getReviews = async () => {
    const res = await api.get('/reviews')
    console.log(res)
    setFacilities(res.data)
 }
 getReviews()
}, [])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home facilities={facilities} user={user}/>}/>
        <Route path='/signIn' element={<SignIn setUser={setUser}/>}/> 
        <Route path='/facilities' element={<Facilities facilities={facilities} user={user}/>}/>
      </Routes>
    </div>
  );
}

export default App;
