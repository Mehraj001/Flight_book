
import './App.css';
import FlightSearch from './components/FlightSearch';
// import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PassengerDetail from './components/PassengerDetail';
import Conclusion from './components/Conclusion';
import Selectshett from './components/Selectshett';
import SelfCheking from './components/SelfCheking';
import Boaarding from './components/Boaarding';
import Task2 from './components/Task2';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<FlightSearch />} />
      <Route path="/passenger-details" element={<PassengerDetail />} />
      <Route path="/conclusion" element={<Conclusion />} />
      <Route path="/select-seat" element={<Selectshett />} />
      <Route path="/self-check-in" element={<SelfCheking />} />
      <Route path="/boarding-pass" element={<Boaarding />} />
      <Route path="/task" element={<Task2 />} />
      </Routes>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
