import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./Components/MainPage/Home/Home";
import RegisterContainer from "./Components/RegistrationForm/Register/RegisterContainer";
import LoginContainer from "./Components/RegistrationForm/Login/LoginContainer";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/login' element={<LoginContainer/>}/>
            <Route path='/register' element={<RegisterContainer/>}/>
        </Routes>
    </div>
  );
}

export default App;
