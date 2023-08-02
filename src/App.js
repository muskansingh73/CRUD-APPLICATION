import logo from './logo.svg';
import './App.css';

// import component
 import NavBar from './component/NavBar';
 import Home from './component/Person-home'
 import PersonList from './component/Person-list';
 import EditPersons from './component/EditPersons';
 import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PersonAdd from './component/Person-add';
 
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
       <Route path="/" element = {<Home />} /> 
        <Route path ="/add" element ={<PersonAdd />} />
        <Route path = "/all" element ={<PersonList />} />
        <Route path = "/edit/:id" element ={<EditPersons/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
