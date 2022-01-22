const JobsSearch = (props) => {
  const searchJobHandler = (event) => {
    event.preventDefault();
    props.search(event.target.value);
  };

  return (
    <div className="w-75 d-flex justify-content-end mt-2 mb-2">
      <form className="d-flex align-items-end">
        <label className="p-2 bd-highlight">Search</label>
        <input
          type="search"
          className="form-control"
          placeholder="by title or company"
          aria-label="Search"
          onChange={(e) => searchJobHandler(e)}
        />
      </form>
    </div>
  );
};

export default JobsSearch;
