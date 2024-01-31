import './App.css';
import RegisterLoginLayout from './components/Layouts/CommonLayout/RegisterLoginLayout';
import HomePageLayout from './components/Layouts/CommonLayout/HomePageLayout'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App custom-bg-color ">
      <HomePageLayout />
      { /* 
      <Routes>
        <Route element={<RegisterLoginLayout />} path='/login'></Route>
        <Route element={<InfoPageLayout />} path='/'></Route>
      </Routes>
      */}

    </div>
  );
}

export default App;
