import "../styles/subprojectpage.scss";
import img1 from "../assets/images/directory.PNG";

function PortfolioSubPage(props) {
  return (
    <section>
      <div className="projectContainer">
        <div className="projectday">
          <h2>작업기간 : `23.01.17 ~ `23.02.20</h2>
        </div>
        <article className="projectBox">
          <span className="projectLine"></span>
          <div className="projectdes des1">
            <h2>목표</h2>
          </div>
          <ul>
            <li>포트폴리오 기획부터 코딩까지 시각화하고 재설계하기. </li>
          </ul>
          <div className="projectdes">
            <h2>디렉토리 구조</h2>
          </div>
          <ul className="projectlist">
            <li>
              <img src={img1} alt="" />
            </li>
          </ul>
          <div className="projectdes">
            <h2>사용 기술</h2>
          </div>
          <ul>
            <li>jQuery</li>
            <li>react</li>
            <li>scss 스타일</li>
            <li>Tool - VS Code,GitHub, figma</li>
            <li>라이브러리 - swiper</li>
            <li>일러스트 - favicon 제작</li>
          </ul>
          <div className="projectdes">
            <h2>페이지 구성 </h2>
          </div>
          <ul>
            <li>fullpage - CDN 이용하여 jQuery 사용 </li>
            <li>Nav - jQuery 사용으로 a태그 네비게이션 설정</li>
            <li>Main - video 태그 설정 keyframes를 이용한 애니메이션</li>
            <li>Project - 라이브러리 swiper를 이용한 Slide 구현</li>
            <li>Skill - map을 이용하여 반복구문 리스트 출력 </li>
            <li>About - useEffect,useState 삼항연산자 사용하여 UpBtn 구현</li>
          </ul>
          <div className="projectdes">
            <h2>문제 및 해결</h2>
          </div>
          <ul>
            <li>
              <strong>소개</strong> - fullpage 구현
              <br />
              <strong>목표</strong> - jQuery를 이용하지 않고 구현하는 방법이
              없는지 고민
              <br />
              <strong>문제</strong> - CSS3 scroll-snap 를 이용하여 구현하였으나
              스크롤 시 페이지 전환 동작이 깔끔하지 못함
              <br />
              <strong>해결</strong> - jQuery가 깔끔하여서 사용하기로 함.
            </li>
            <li>
              <strong>소개</strong> - Navigation
              <br />
              <strong>목표</strong> - Routes link를 이용한 페이지 전환
              <br />
              <strong>문제</strong> - jQuery 사용 시 a태그로만 이동이 가능함을
              깨달음
              <br />
              <strong>해결</strong> - fullpage가 아닌 SubPage 내에서 subNav
              생성하여 Routes,Link 구현 함
            </li>
            <li>
              <strong>소개</strong> - ProjectPage
              <br />
              <strong>목표</strong> - 버튼을 최소화하고자 가로스크롤 구현
              <br />
              <strong>문제</strong> - HTML5/CSS3/JS로 구현하였으나 React로는
              구현이 되지 않음.
              <br />
              <strong>해결</strong> - swiper로 대체하여 라이브러리 사용토록 함.
              다음 프로젝트 진행 시 가로스크롤 페이지 구성
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default PortfolioSubPage;
