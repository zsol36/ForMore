import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Main } from './Components/Mainpage/Main'
import { Footer } from './Components/Footer/Footer'
import { Rolunk } from './Components/Us/Rolunk'
import { Szolgaltatasaink } from './Components/Szolgaltatasaink/szolgaltatasaink'
import { References } from './Components/References/References'
import { Contact } from './Components/Contanct/Contact'
function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  //Rólunk Szolgáltatásaink Referenciák Kapcsolat.
  return (
    <>
    <Navbar />
     <Routes>
        <Route path='/' element={<Main></Main>} ></Route>
        <Route path='/rolunk' element={<Rolunk></Rolunk>} ></Route>
        <Route path='/szolgaltatasaink' element={<Szolgaltatasaink></Szolgaltatasaink>} ></Route>
        <Route path='/referenciak' element={<References></References>} ></Route>
        <Route path='/kapcsolat' element={<Contact></Contact>} ></Route>
     </Routes>
     <Footer />
    </>
  )
}

export default App
