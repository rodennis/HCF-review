import './App.css';
import {Routes, Route} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Home from './screens/Home/Home'
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
      <Routes>
        <Route path='/' element={<Home reviews={reviews}/>}/>
        <Route path='/review/:id' element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
