import "../styles/subprojectpage.scss";
import img1 from "../assets/images/directory.PNG";
import { FaQuestion } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

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
            <li>react 프레임워크</li>
            <li>scss 스타일</li>
            <li>Tool - VS Code,GitHub, figma</li>
            <li>라이브러리 - swiper, fullpage jQuery </li>
            <li>일러스트 - favicon 제작</li>
          </ul>
          <div className="projectdes">
            <h2>페이지 구성 </h2>
          </div>
          <ul>
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
            <li className="description">
              <span className="subtitle">
                jQuery를 이용하지 않고
                <span className="sub">
                  {" "}
                  fullpage구현 방법이 없는지 고민
                </span>{" "}
                <FaQuestion />
              </span>
              <br />
              <p className="title">문제</p>
              <span className="subtitle">
                - CSS3 scroll-snap 를 이용하여 구현하였으나 스크롤 시
                <span className="sub">
                  {" "}
                  페이지 전환 동작이 원활하게 되지 않음.
                </span>
              </span>
              <br />
              <p className="title">해결</p>
              <span className="subtitle">
                - 비교적{" "}
                <span className="sub">라이브러리 jQuery가 원활하여 사용</span>
                하기로 함.
              </span>
            </li>
            <li className="titleBox description">
              <span className="subtitle">
                Navigation을 Routes link를 이용한{" "}
                <span className="sub">내부 페이지 전환</span> <FaCheck />
              </span>
              <br />

              <p className="title">문제</p>
              <span className="subtitle">
                - jQuery 사용 시 a태그로만 이동이 가능함을 깨달음
              </span>
              <br />

              <p className="title">해결</p>
              <span className="subtitle">
                - fullpage가 아닌
                <span className="sub">SubPage 내에서 subNav 생성하여</span>
                Routes,Link 구현 함
              </span>
            </li>
            <li className="titleBox description">
              <span className="subtitle">
                ProjectPage를 버튼을 최소화하고자
                <span className="sub"> 가로스크롤로 구현</span> <FaCheck />
              </span>
              <br />
              <p className="title">문제</p>
              <span className="subtitle">
                - HTML5/CSS3/JS로 구현하였으나 React로는 구현이 되지 않음.
              </span>

              <br />
              <p className="title">해결</p>
              <span className="subtitle">
                -{" "}
                <span className="sub">
                  swiper로 대체하여 라이브러리 사용 함.{" "}
                </span>
                다음 프로젝트 진행 시 가로스크롤 페이지 구성
              </span>
            </li>
            <li className="titleBox description">
              <span className="subtitle">
                subPage <span className="sub">SPA 구현</span> 시 URL 라우팅을
                위한 React Router 표준 라이브러리 사용
              </span>{" "}
              <FaCheck />
              <br />
              <p className="title">문제</p>
              <span className="subtitle">
                - <span className="sub">Browser Router</span>를 사용하였으나
                웹브라우저 홈 경로 리소스를 정상적으로 불러오지 못함
              </span>
              <br />
              <p className="title">해결</p>
              <span className="subtitle">
                - <span className="sub">Hash Router</span> 사용. 서버구축이 되지
                않아 URL을 재로드할 필요는 없으나 홈페이지 URL이 SEO측면에서
                구리다.
              </span>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default PortfolioSubPage;
