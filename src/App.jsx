import Header from './component/include/Header'
import Footer from './component/include/Footer'
import Home from './component/Home'
import About from './component/About'
import useGlobal from './component/hooks/useGlobal'

import { Route, Routes } from 'react-router'

function App() {
  useGlobal();
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App