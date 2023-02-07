import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import SubPageNav from "./components/SubPageNav";

import SubProjectPage1 from "./components/SubProjectPage1";
import SubProjectPage2 from "./components/SubProjectPage2";
import SubProjectPage3 from "./components/SubProjectPage3";
import SubProjectPage4 from "./components/SubProjectPage4";

import "./assets/styles/style.scss";

function App() {
  return (
    <div>
      <Nav />
      <SubPageNav />
      <Routes>
        <Route path="/subprojectpage1" element={<SubProjectPage1 />} />
        <Route path="/subprojectpage2" element={<SubProjectPage2 />} />
        <Route path="/subprojectpage3" element={<SubProjectPage3 />} />
        <Route path="/subprojectpage4" element={<SubProjectPage4 />} />
      </Routes>
    </div>
  );
}

export default App;
