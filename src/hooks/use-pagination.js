import { useCallback, useEffect, useMemo, useReducer } from "react";

const initialConfiuration = {
  items: [],
  itemsPerPage: 5,
};

const initialState = {
  currentPage: 1,
  items: [],
  numbersOfPages: 1,
};

function paginationReducer(prevState, action) {
  switch (action.type) {
    case "configure-pagination":
      return {
        ...prevState,
        items: action.payload.items,
        numbersOfPages: action.payload.numbersOfPages,
      };
    case "change-page":
      return {
        ...prevState,
        currentPage: action.payload.currentPage,
      };
    default:
      return { ...prevState };
  }
}

const usePagination = (configuration = initialConfiuration) => {
  const [paginationState, dispatch] = useReducer(
    paginationReducer,
    initialState
  );

  //Items per page
  const itemsPerPage = useMemo(() => {
    return configuration.items.slice(
      configuration.itemsPerPage * paginationState.currentPage -
        configuration.itemsPerPage,
      configuration.itemsPerPage * paginationState.currentPage
    );
  }, [
    configuration.itemsPerPage,
    configuration.items,
    paginationState.currentPage,
  ]);

  //Numbers of pages
  const numbersOfPages = useMemo(() => {
    let result = 1;
    if (configuration.items.length >= configuration.itemsPerPage) {
      result = Math.ceil(
        configuration.items.length / configuration.itemsPerPage
      );
    }
    return result;
  }, [configuration.itemsPerPage, configuration.items.length]);

  useEffect(() => {
    dispatch({
      type: "configure-pagination",
      payload: { numbersOfPages: numbersOfPages, items: itemsPerPage },
    });
  }, [
    numbersOfPages,
    itemsPerPage,
  ]);

  let changePage = useCallback((pageNumber) => {
    dispatch({ type: "change-page", payload: { currentPage: pageNumber } });
  }, []);

  let pagination = () => {
    let paginationContent = [];

    for (let i = 1; i <= paginationState.numbersOfPages; i++) {
      if (paginationState.currentPage === i) {
        paginationContent.push(
          <li
            aria-current="page"
            className="page-item active"
            key={i}
            onClick={() => changePage(i)}
          >
            <span className="page-link">{i}</span>
          </li>
        );
      } else {
        paginationContent.push(
          <li className="page-item" key={i} onClick={() => changePage(i)}>
            <button className="page-link">{i}</button>
          </li>
        );
      }
    }

    return (
      <nav className="mt-2">
        <ul className="pagination">{paginationContent.map((pageNumber) => pageNumber)}</ul>
      </nav>
    );
  };

  return {
    items: paginationState.items,
    pagination,
  };
};

export default usePagination;
