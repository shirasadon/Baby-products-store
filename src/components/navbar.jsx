import { Link } from "react-router-dom";
import { useAuth } from "../context/auth.context";
function NavbarHeader() {
  const { user } = useAuth();
  return (
    <>
      <nav
        style={{
          height: "150px",
          backgroundColor: "#ff0066",
          fontSize: "20px",
          fontFamily: "cursive",
        }}
        className="navbar navbar-expand-sm "
        aria-label="Third navbar example"
      >
        <div className="container" id="navbarSupportedContent">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarsExample03">
            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  about
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  to="/products"
                >
                  products
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link" to="/contact">
                  contact us
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/cart">
                  <i className="bi bi-cart4"></i>
                </Link>
              </li>
              {user?.biz && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/addproduct">
                      add product
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/addarticle">
                      add article
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/products/ViewAllProducts">
                      View all products
                    </Link>
                  </li>
                </>
              )}
              {user ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/logout">
                    log out
                  </Link>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                      sign up
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signupbiz">
                      business
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarHeader;
