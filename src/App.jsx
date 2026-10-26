import { useState } from "react";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Students from "./Students.jsx";
import Contact from "./Contact.jsx";

const SCHOOL_NAME = "EAV KIVUMU TSS";
const CLASS_NAME = "TVET Certificate IV — Software Development";

function Header({ schoolName, currentView, onNavigate }) {
  const views = ["Home", "About", "Students", "Contact"];

  return (
    <header>
      <h1>{schoolName}</h1>
      <p>{CLASS_NAME}</p>
      <nav aria-label="Main navigation">
        {views.map((view) => (
          <button
            key={view}
            type="button"
            onClick={() => onNavigate(view)}
            aria-current={currentView === view ? "page" : undefined}
          >
            {view}
          </button>
        ))}
      </nav>
      <hr />
    </header>
  );
}

function Footer({ schoolName }) {
  return (
    <footer>
      <hr />
      <p>{schoolName} | ReactJS Class Website</p>
    </footer>
  );
}

export default function App() {
  const [currentView, setCurrentView] = useState("Home");
  const [clickCount, setClickCount] = useState(0);

  function navigateTo(view) {
    setCurrentView(view);
  }

  return (
    <main>
      <Header
        schoolName={SCHOOL_NAME}
        currentView={currentView}
        onNavigate={navigateTo}
      />

      {currentView === "Home" && (
        <Home
          schoolName={SCHOOL_NAME}
          className={CLASS_NAME}
          onNavigate={navigateTo}
          clickCount={clickCount}
          onCountClick={() => setClickCount((count) => count + 1)}
        />
      )}
      {currentView === "About" && <About schoolName={SCHOOL_NAME} />}
      {currentView === "Students" && <Students schoolName={SCHOOL_NAME} />}
      {currentView === "Contact" && (
        <Contact schoolName={SCHOOL_NAME} onNavigate={navigateTo} />
      )}

      <Footer schoolName={SCHOOL_NAME} />
    </main>
  );
}
