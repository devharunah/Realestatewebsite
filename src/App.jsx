
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Properly setup my react router 
import Layout from './Layout';
import Morehouses from './morehouses';
import Contactus from './contactus';
import About from './about';
import Houses from './houses';
import Signup from './signup';
import Login from './login';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        {/* Created my layout.jsx so that if navigates to any of these
        componets if the user try to go back the layout.jsx componet will be renderd
       CAUTION CREATE THE LAYOUT COMPONET ALL THE AIS WONT DO THAT FOR YOU */}
       <Route path="/about" element={<About />} />
        <Route path="/houses" element={<Houses />} />
        <Route path="/morehouses" element={<Morehouses />} />
        <Route path ="/contactus" element={<Contactus />} />
        <Route path='/signup' element = { <Signup/>}/>
        <Route path= '/login' element = {<Login/>} />
        
      </Routes>
    </Router>
  );
}

export default App;

