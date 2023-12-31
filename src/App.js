import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FindRoute from "./pages/FindRoute";
import ChooseVehicle from "./pages/ChooseVehicle";
import ChooseInput from "./pages/ChooseInput";
import InputText from "./pages/StartInput";
import InputCheck from "./pages/StartCheck";
import OutputText from "./pages/DestInput";
import OutputCheck from "./pages/DestCheck";
import OptimalWalk from "./pages/OptimalWalk";
import OptimalTransport from "./pages/OptimalTransport";
import ReNavigateCheck from "./pages/ReNavigateCheck";
import ReNavigate from "./pages/ReNavigate";
import SearchArea from "./pages/SearchArea";
import Map from "./pages/Map";
import Practice from "./pages/Practice";
import Report from "./pages/Report";
import ReportComplete from "./pages/ReportComplete";
import Start from "./pages/StartPage";
import Intro1 from "./pages/Intro1";
import Intro2 from "./pages/Intro2";
import Intro3 from "./pages/Intro3";
import Intro4 from "./pages/Intro4";
import WalkNavigation from "./pages/WalkNavigation";
import TTS from "./pages/TTS";
import TransportMap from "./components/ODsay/TransportMap";
import RouteSummary from "./components/ODsay/RouteSummary";
import RouteP1 from "./components/ODsay/RouteP1";
import RouteP2 from "./components/ODsay/RouteP2";
import RouteP3 from "./components/ODsay/RouteP3";
import RouteP4 from "./components/ODsay/RouteP4";
import NavigateEnd from "./pages/NavigateEnd";
import TransportNavigateEnd from "./components/ODsay/TransportNavigateEnd";
import BrailleBlockCaution from "./pages/BrailleBlockCaution";
import LoadingPage from "./pages/LoadingPage";
import PhotoOrReport from "./pages/PhotoOrReport";
import AdditionalReport from "./pages/AdditionalReport";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/Intro1" element={<Intro1 />} />
          <Route path="/Intro2" element={<Intro2 />} />
          <Route path="/Intro3" element={<Intro3 />} />
          <Route path="/Intro4" element={<Intro4 />} />
          <Route path="/health" element={<Practice />} />
          <Route path="/FindRoute" element={<FindRoute />} />
          <Route path="/ChooseVehicle" element={<ChooseVehicle />} />
          <Route path="/ChooseInput" element={<ChooseInput />} />
          <Route path="/StartInput" element={<InputText />} />
          <Route path="/StartCheck" element={<InputCheck />} />
          <Route path="/DestInput" element={<OutputText />} />
          <Route path="/DestCheck" element={<OutputCheck />} />
          <Route path="/OptimalWalk" element={<OptimalWalk />} />
          <Route path="/OptimalTransport" element={<OptimalTransport />} />
          <Route path="/ReNavigate" element={<ReNavigate />} />
          <Route path="/ReNavigateCheck" element={<ReNavigateCheck />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/SearchArea" element={<SearchArea />} />
          <Route path="/Report" element={<Report />} />
          <Route path="/ReportComplete" element={<ReportComplete />} />
          <Route path="/WalkNavigation" element={<WalkNavigation />} />
          <Route path="/TTS" element={<TTS />} />
          <Route path="/TransportMap" element={<TransportMap/>} />
          <Route path="/RouteSummary" element={<RouteSummary/>} />
          <Route path="/RouteP1" element={<RouteP1/>} />
          <Route path="/RouteP2" element={<RouteP2/>} />
          <Route path="/RouteP3" element={<RouteP3/>} />
          <Route path="/RouteP4" element={<RouteP4/>} />
          <Route path="/NavigateEnd" element={<NavigateEnd/>} />
          <Route path="/TransportNavigateEnd" element={<TransportNavigateEnd/>} />
          <Route path="/LoadingPage" element={<LoadingPage />} />
          <Route path="/BrailleBlockCaution" element={<BrailleBlockCaution />}/>
          <Route path="/PhotoOrReport" element={<PhotoOrReport />} />
          <Route path="/AdditionalReport" element={<AdditionalReport/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
