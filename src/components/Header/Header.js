const Header = () => {
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <span class="fs-4">World Of Jobs</span>
            </li>
            <li>
              <a class="nav-link px-2 text-secondary">
                Jobs
              </a>
            </li>
            <li>
              <a class="nav-link px-2 text-white">
                Apply for job vacancy
              </a>
            </li>
            <li>
              <a class="nav-link px-2 text-white">
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
