const JobsSearch = () => {
  return (
    <div className="w-75 d-flex justify-content-end mt-2 mb-2">
      <form className="d-flex align-items-end">
        <label className="p-2 bd-highlight">Search</label>
        <input
        className="p-2 bd-highlight"
          type="search"
          className="form-control"
          placeholder="Search..."
          aria-label="Search"
        />
      </form>
    </div>
  );
};

export default JobsSearch;
