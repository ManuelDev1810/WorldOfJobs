import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchJobsData } from "../../../store/job-actions";

const JobsSearch = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const identifier = setTimeout(() => {
      dispatch(fetchJobsData(search));
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [search, dispatch]);

  return (
    <div className="w-75 d-flex justify-content-end mt-2 mb-2">
      <form className="d-flex align-items-end">
        <label className="p-2 bd-highlight">Search</label>
        <input
          type="search"
          className="form-control"
          placeholder="by title or company"
          aria-label="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};

export default JobsSearch;
