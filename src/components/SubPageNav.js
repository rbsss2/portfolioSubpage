import { Link } from "react-router-dom";

import "../styles/subpagenav.scss";
function SubProjectPage1(props) {
  return (
    <nav>
      <ul className="nav">
        {/* <li className="/">
          <Link to="/">설명페이지</Link>
        </li> */}
        <li className="projectNav">
          <Link to="/subprojectpage1">파이브스톤</Link>
        </li>
        <li className="projectNav">
          <Link to="/subprojectpage2">플레이디</Link>
        </li>
        <li className="projectNav">
          <Link to="/subprojectpage3">개인프로젝트</Link>
        </li>
        <li className="projectNav">
          <Link to="/subprojectpage4">다함께차차차</Link>
        </li>
      </ul>
    </nav>
  );
}

export default SubProjectPage1;
