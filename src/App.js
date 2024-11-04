import { Route, Routes } from "react-router-dom";
import { SignIn, SignUp } from "./components/pages";
import { Navbar } from "./components/Navbar";
import { Tutor, ReportsAndAnalytics, HrDashboard } from "./components/pages";
import 'remixicon/fonts/remixicon.css';

import './App.css';
// import { HrDashboard } from "./components/pages/HrDashboard";
// import { Tutor } from "./components/pages/Tutor";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path='/' element={<HrDashboard />} />
          <Route path='/tutor' element={<Tutor />} />
          <Route path='/reportsandanalytics' element={<ReportsAndAnalytics />} />
          <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
