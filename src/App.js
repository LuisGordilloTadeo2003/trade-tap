import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/style.css"

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import { Routes, Route } from 'react-router-dom';
import MainContent from './components/MainContent';
import RegisterLoginPage from './components/Pages/RegisterLoginPage/RegisterLoginPage';

function App() {
  /*
  -Componenetes Reutilizables:
    +ElementCard:
      WorkerResult
      Request
      Reserve
      Commission
      Service
  -NavBar:
    RegisteredBtn
    ProfileBtn
  -MainContent:
    +LoginRegisterPage:
      LoginForm
      RegisterForm
      Logo
    +HomePage:
      SearchBar
      ProfessionList:
        ProfessionIcon
        ProffesionName
      RankingTable:
        WorkerRanking
      SixWorkers:
        SixWorkersCard
    +SearchPage:
      SearchBar
      ResultList:
        Worker
    +ProposalPage:
      Proposal
      PendingProposals
    +RequestPage:
      Request:
        Information
        Btn:
          AcceptOrReject
          Show
      ApprovedRequests
      PendingRequests
    +ReservesPage
    +CommissionPage
    +ServicePage
    +ProfilePage:
      Information [Picture - Name - Direction]
      ProfilePublication
      Profile:
        ProfileWorker
        ProfileClient
      ProfileRequest
  -Footer
  */

  let path = window.location.pathname;

  return (
    <div className="App custom-bg-color ">
      <div className="justify-content-center align-items-center text-white">
        <Routes>
          <Route element={<RegisterLoginPage />} path="/login"></Route>
          <Route element={<RegisterLoginPage />} path="/register"></Route>
        </Routes>

        {
          (path === "/login" || path === "/register") ? (
            <RegisterLoginPage />
          ) : (
            <>
              <div className="row mb-4">
                <NavBar />
              </div>
              <div className="row">
                <MainContent />
              </div>
              <div className="row mt-4">
                <Footer />
              </div>
            </>
          )
        }




      </div>
    </div>
  );
}

export default App;
