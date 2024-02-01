import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/style.css"

import NavBar from "./components/NavBar";
import HomePage from "./components/Pages/HomePage/HomePage";
import RegisterLoginPage from "./components/Pages/RegisterLoginPage/RegisterLoginPage";
import RequestPage from "./components/Pages/RequestPage/RequestPage";
import ReservesPage from "./components/Pages/ReservesPage/ReservesPage";
import ProfilePage from "./components/Pages/ProfilePage/ProfilePage";
import Footer from "./components/Footer";

import { Routes, Route } from 'react-router-dom';

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
  return (
    <div className="App custom-bg-color ">
      <div className="justify-content-center align-items-center text-white">
        <div className="row mb-4">
          <NavBar />
        </div>
        <div className="row">
          <Routes>
            <Route element={<HomePage />} path="/"></Route>
            <Route element={<RegisterLoginPage />} path="/login"></Route>
            <Route element={<RegisterLoginPage />} path="/register"></Route>
            <Route element={<RequestPage />} path="/request"></Route>
            <Route element={<ReservesPage />} path="/reserves"></Route>
            <Route element={<ProfilePage />} path="/profile/worker"></Route>
            <Route element={<ProfilePage />} path="/profile/client"></Route>
          </Routes>
        </div>
        <div className="row mt-4">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
