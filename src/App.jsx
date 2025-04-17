
import { Outlet, useNavigation } from 'react-router'
import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Nav/Navbar'

function App() {

  const navigation = useNavigation()
  const isnavigation = Boolean(navigation.location)

  return (
    <>
      <Navbar></Navbar>
      {
        isnavigation && <h1>Loading...................</h1>
      }
      <Outlet></Outlet>
      <Footer></Footer>

    </>
  )
}

export default App
