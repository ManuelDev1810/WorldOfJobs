const NewJob = () => {
  return (
    <div className="d-flex justify-content-center mt-2 mb-2">
      <div className="list-group w-50">
        <form>
          <div class="mb-3">
            <label for="title" class="form-label">
              Title
            </label>
            <input
              type="text"
              class="form-control"
              id="title"
              placeholder="Title"
            />
          </div>
          <div class="mb-3">
            <label for="company" class="form-label">
              Company
            </label>
            <input
              type="text"
              class="form-control"
              id="company"
              placeholder="Company"
            />
          </div>
          <div class="mb-3">
            <label for="vacancies" class="form-label">
              Vacancies
            </label>
            <input
              type="number"
              class="form-control"
              id="vacancies"
              placeholder="Vacancies"
            />
          </div>
          <div class="mb-3 form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="remote"
            />
            <label class="form-check-label" for="remote">
              Remote
            </label>
          </div>
          <div class="mb-3">
            <label for="resume" class="form-label">
              Add Resume
            </label>
            <input class="form-control" type="file" id="resume" />
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">
              Description
            </label>
            <textarea
              class="form-control"
              id="description"
              rows="3"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewJob;
