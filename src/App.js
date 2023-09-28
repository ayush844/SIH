import './App.css';
import Calender from './Pages/Calender';
import CulturePage from './Pages/CulturePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <BrowserRouter>

      <>

        <Routes>

        <Route path='/culture/goanCulture' element={<CulturePage />} />

        <Route path='/eventsCalender' element={<Calender />} />
        

        </Routes>
        
      </>
    
    </BrowserRouter>

  );
}

export default App;
