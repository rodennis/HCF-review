import './App.css';
import {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import { verifyUser } from './services/users'
import Home from './screens/Home/Home'
import api from './services/apiConfig'
import SignIn from './screens/SignIn/SignIn';
import Facilities from './screens/Facilities/Facilities'
import Navbar from './components/Navbar/Navbar'
import HomeNavbar from './components/Navbar/HomeNavbar'

function App() {

  const [user, setUser] = useState(null)
  const [facilities, setFacilities] = useState([])
  const [foundFacilities, setFoundFacilities] = useState([])
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [homeName, setHomeName] = useState('')
  const [notFound, setNotFound] = useState('')

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
      {user ? <Navbar setFoundFacilities={setFoundFacilities} name={name} setName={setName} city={city} setCity={setCity} facilities={facilities} setNotFound={setNotFound} state={state} setState={setState}/>  : <HomeNavbar />  }
      <Routes>
        <Route path='/' element={<Home setFoundFacilities={setFoundFacilities} homeName={homeName} setHomeName={setHomeName} facilities={facilities} setNotFound={setNotFound}/>}/>
        <Route path='/signIn' element={<SignIn setUser={setUser}/>}/> 
        <Route path='/facilities' element={<Facilities name={name} foundFacilities={foundFacilities} notFound={notFound}/>}/>
        <Route path='/facility/:id' />
      </Routes>
    </div>
  );
}

export default App;
