import { Link } from "react-router-dom";
import "../styles/nav.scss";
import { useRef, useEffect } from "react";
function Nav(props) {
  const headerRef = useRef(null);

  const handleScroll = () => {
    console.log("스크롤 중");
    console.log(window.scrollY);

    if (window.scrollY > 1900) {
      headerRef.current.className = "gnbBox on";
    } else {
      headerRef.current.className = "gnbBox";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="gnbBox" ref={headerRef}>
      <h1 className="logo" data-menuanchor="Main">
        <a href="https://rbsss2.github.io/Portfolio/">오대균 포트폴리오</a>
      </h1>

      <ul className="gnb menu">
        <li className="gnbList active" data-menuanchor="Main">
          {/* <Link to="#Main">Main</Link> */}
          <a href="https://rbsss2.github.io/Portfolio/">Main</a>
        </li>
        <li className="gnbList" data-menuanchor="Project">
          {/* <Link to="#Project">Project</Link> */}
          <a href="https://rbsss2.github.io/Portfolio/#Project">Project</a>
        </li>
        <li className="gnbList" data-menuanchor="Skill">
          {/* <Link to="#Skill">Skill</Link> */}
          <a href="https://rbsss2.github.io/Portfolio/#Skill">Skill</a>
        </li>
        <li className="gnbList" data-menuanchor="About">
          {/* <Link to="#About">About</Link> */}
          <a href="https://rbsss2.github.io/Portfolio/#About">About</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
