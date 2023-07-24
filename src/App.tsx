import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const mainName = {
    color: "rgb(20, 60, 244)",
    fontWeight: "bold",
  };

  const subColor = {
    color: "#282a30",
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid flex-row">
        <a className="navbar-brand" href="https://www.questgen.ai/">
          <span style={mainName}>QuestGen</span>
        </a>
        <div className="" id="navbarNavAltMarkup">
          <nav className="nav">
            <a
              className="nav-link active fw-bold"
              aria-current="page"
              href="https://www.questgen.ai/"
              style={subColor}
            >
              Home
            </a>
            <a
              className="nav-link active fw-bold"
              aria-current="page"
              href="https://www.questgen.ai/"
              style={subColor}
            >
              Pricing
            </a>
            <a
              className="nav-link active fw-bold"
              aria-current="page"
              href="https://www.questgen.ai/"
              style={subColor}
            >
              Team
            </a>
            <a
              className="nav-link active fw-bold"
              aria-current="page"
              href="https://www.questgen.ai/"
              style={subColor}
            >
              Blog
            </a>
            <a
              className="nav-link active fw-bold"
              aria-current="page"
              href="https://www.questgen.ai/"
              style={subColor}
            >
              Contact
            </a>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="https://www.questgen.ai/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="https://www.questgen.ai/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="https://www.questgen.ai/">
                    Another action
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="https://www.questgen.ai/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </nav>
        </div>
      </div>
    </nav>
  );
}

export default App;
