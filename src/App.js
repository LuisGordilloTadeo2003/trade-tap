import './App.css';
import RegisterLoginPage from './components/Pages/RegisterLoginPage/RegisterLoginPage';
import HomePageLayout from './components/Layouts/HomePageLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  /*
  NavBar:
    RegisteredBtn
    ProfileBtn
  MainContent:
    LoginRegisterPage:
      Login
      Register
    HomePage
    ProposalPage:
      Proposals
      PendingProposals
    RequestPage:
      Requests
      PendingRequests
    ReservesPage
    CommissionPage
    ServicePage
    ProfilePage:
      Information [Picture - Name - Direction]
      ProfilePublication
      Profile:
        ProfileWorker
        ProfileClient
      ProfileRequest
  Footer
  */
  return (
    <div className="App custom-bg-color ">
      <Routes>
        <Route element={<RegisterLoginPage />} path='/login'></Route>
        <Route element={<RegisterLoginPage />} path='/register'></Route>
        <Route element={<HomePageLayout />} path='/'></Route>
      </Routes>

    </div>
  );
}

export default App;
