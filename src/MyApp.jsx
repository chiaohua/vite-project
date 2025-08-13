import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import New from './pages/New'
const MyApp = () => {
    return (
        <div className="wrap">
            <Nav/>
            <hr />
            <Routes>
                {/* 首頁 */}
                <Route path="/" element={<Home/>}></Route>
                {/* About */}
                <Route path="/about" element={<About/>}></Route>
                <Route path="/new" element={<New/>}></Route>
            </Routes>
            <Footer/>
        </div>
    )
}

export default MyApp