import { Link } from "react-router-dom";
import { useAuth } from "../context/auth.context";
function NavbarHeader() {
  const { user } = useAuth();
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-sm-0">
            <li class="nav-item">
              <Link class="nav-link" to="/">
                Home
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/about">
                about
              </Link>
            </li>
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                to="/products"
              >
                products
              </Link>
            </li>
            <li class="nav-item dropdown">
              <Link class="nav-link" to="/contact">
                contact us
              </Link>
            </li>
            <li>
              <Link class="nav-link" to="/cart">
                <i class="bi bi-cart4"></i>
              </Link>
            </li>

            {user?.biz && (
              <>
                <li class="nav-item">
                  <Link class="nav-link" to="/addproduct">
                    add product
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/addarticle">
                    add article
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/products/ViewAllProducts">
                  View all products
                  </Link>
                </li>
              </>
            )}
            {user ? (
              <li class="nav-item">
                <Link class="nav-link" to="/logout">
                  log out
                </Link>
              </li>
            ) : (
              <>
                <li class="nav-item">
                  <Link class="nav-link" to="/login">
                    login
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/signup">
                    sign up
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/signupbiz">
                    business
                  </Link>
                </li>
              </>
            )}
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default NavbarHeader;
