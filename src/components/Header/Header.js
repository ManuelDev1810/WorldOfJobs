import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-3 bg-dark text-white d-flex align-items-end">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li key={"home"}>
              <NavLink className={(navData) => navData.isActive ? "fs-4 text-white" : "nav-link px-2 text-white text-decoration-none" } to="/jobs">
                <span>World Of Jobs</span>
              </NavLink>
            </li>
            <li key={"new-job"}>
              <NavLink className={(navData) => navData.isActive ? "fs-4 text-white" : "nav-link px-2 text-white text-decoration-none"} to='/new-job' >
                  <span>Create Job</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <span className="fs-4 text-white">FINDING YOUR JOB IS MY JOB</span>
      </div>
    </header>
  );
};

export default Header;
