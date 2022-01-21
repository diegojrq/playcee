import './App.css';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<HomeScreen/>} />
        

      </Routes>

      </BrowserRouter>



    </div>
  );
}

export default App;
