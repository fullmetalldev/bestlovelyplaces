import {Routes, Route} from 'react-router-dom';
import Header from "./Components/Header";
import Home from "./Pages/Home";
import "animate.css";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </div>
    );
}

export default App;
