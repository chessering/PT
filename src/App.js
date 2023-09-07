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
import RouteSummary from "./components/ODsay/RouteSummary";
import Pg1 from "./pages/Pg1";
import Pg2 from "./pages/Pg2";
import Pg3 from "./pages/Pg3";
import Pg4 from "./pages/Pg4";
import Pg5 from "./pages/Pg5";
import Pg6 from "./pages/Pg6";
import Pg7 from "./pages/Pg7";

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
          <Route path="/RouteSummary" element={<RouteSummary />} />
          <Route path="/Pg1" element={<Pg1 />} />
          <Route path="/Pg2" element={<Pg2 />} />
          <Route path="/Pg3" element={<Pg3 />} />
          <Route path="/Pg4" element={<Pg4 />} />
          <Route path="/Pg5" element={<Pg5 />} />
          <Route path="/Pg6" element={<Pg6 />} />
          <Route path="/Pg7" element={<Pg7 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
