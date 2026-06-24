import "./App.css";
import heroImg from "./assets/hero.png";

function App() {
  return (
    <div className="page">
      <div
        className="dashboard"
        style={{
          "--hero-image": `url(${heroImg})`,
        }}
      >
        {/* 상단 헤더 */}
        <header className="hero">
          <div className="left-logo">
            <div className="logo-emblem">AI</div>
            <p>국방AI통합관리</p>
          </div>

          <div className="right-logo">
            <div className="right-emblem" />
            <p>대한민국 육군</p>
          </div>

          <div className="hero-title-area">
            <p>국방 AI 인원 종합 시스템</p>
            <h1>A Military Coprehensive</h1>
          </div>

          {/* 인사 문구 + 우측 아이콘 */}
          <div className="hello-area">
            <p>안녕하세요 000소대장님</p>
            <span className="hello-person-icon" />
          </div>

          <nav className="main-nav">
            <div className="nav-empty" />
            <button className="nav-button">HOME</button>
            <button className="nav-button">PERSONNEL</button>
            <button className="nav-button nav-active">APPROVAL</button>
            <button className="nav-icon nav-alarm" aria-label="alarm">
              <span />
            </button>
            <button className="nav-icon nav-user" aria-label="user">
              <span />
            </button>
          </nav>
        </header>

        {/* 비상 소집 */}
        <section className="emergency-section">
          <div className="emergency-left">
            <div className="plus-icon" />
            <div className="siren-icon" />
          </div>

          <div className="emergency-right">
            <div className="emergency-text">
              <h2>
                <span className="emergency-main-text">
                  Emergency Call Button
                </span>
                <span className="emergency-warning-text">
                  *Do not use Outside of Emergency*
                </span>
              </h2>

              <p>
                <span className="emergency-main-sub">
                  병사 긴급 소집 확인버튼
                </span>
                <span className="emergency-warning-sub">
                  *긴급 시 외 사용금지*
                </span>
              </p>
            </div>

            <button className="emergency-button">비상 소집</button>
          </div>
        </section>

        {/* 기능 영역 */}
        <section className="feature feature-ai">
          <div className="feature-icon document-icon" />

          <div className="feature-text feature-text-top">
            <h3>AI Organization Of Work</h3>
            <p>AI 근무 편성</p>
          </div>

          <button className="go-button go-button-top">바로가기</button>
        </section>

        <section className="feature feature-personnel">
          <div className="feature-icon personnel-icon" />

          <div className="feature-text feature-text-top">
            <h3>Personnel Check</h3>
            <p>실시간 병력 산출 및 조회</p>
          </div>

          <button className="go-button go-button-top">바로가기</button>
        </section>

        <section className="feature feature-schedule">
          <div className="feature-icon small-calendar-icon" />

          <div className="feature-text feature-text-bottom">
            <h3>Schedule</h3>
            <p>일정 관리</p>
          </div>

          <button className="go-button go-button-bottom">바로가기</button>
        </section>

        <section className="feature feature-dashboard">
          <div className="feature-icon small-calendar-icon" />

          <div className="feature-text feature-text-bottom">
            <h3>DashBoard</h3>
            <p>부대현황 대시보드</p>
          </div>

          <button className="go-button go-button-bottom">바로가기</button>
        </section>

        {/* 하단 조회 영역 */}
        <section className="bottom-section">
          <div className="bottom-text">
            <h3>Check The Real-Time 1st Platoon Troops</h3>
            <p>000 소대장님 실시간 1소대 병력 확인</p>
          </div>

          <button className="bottom-card bottom-schedule">
            <div className="bottom-card-icon">
              <strong>1</strong>
              <span className="bottom-calendar-icon" />
            </div>
            <p>소대 일정 조회</p>
          </button>

          <button className="bottom-card bottom-personnel">
            <div className="bottom-card-icon">
              <strong>1</strong>
              <span className="bottom-personnel-icon" />
            </div>
            <p>소대 병력 조회</p>
          </button>
        </section>
      </div>
    </div>
  );
}

export default App;