import './App.css';
import Navbar from './components/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './screens/Home/Home'
import {useState, useEffect} from 'react'
import api from './services/apiConfig'

function App() {

  const [reviews, setReviews] = useState([])

useEffect(() => {
 const getReviews = async () => {
    const res = await api.get('/reviews')
    console.log(res)
    setReviews(res.data)
 }
 getReviews()
}, [])
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home reviews={reviews}/>}/>
      </Routes>
    </div>
  );
}

export default App;
