const Header = () => {
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li key={"home"}>
              <span className="fs-4">World Of Jobs</span>
            </li>
            <li key={"jobs"}>
              <a className="nav-link px-2 text-secondary">
                Jobs
              </a>
            </li>
            <li key={"new-job"}>
              <a className="nav-link px-2 text-white">
                Create job vacancy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
