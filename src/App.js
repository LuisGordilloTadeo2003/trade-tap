import './App.css';
import RegisterLoginLayout from './components/Layouts/CommonLayout/RegisterLoginLayout';
import InfoPageLayout from './components/Layouts/CommonLayout/InfoPageLayout'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App custom-bg-color ">
      <InfoPageLayout />
      {/*  
      <Routes>
        <Route element={<RegisterLoginLayout />} path='/login'></Route>
      </Routes>
      */}
    </div>
  );
}

export default App;
