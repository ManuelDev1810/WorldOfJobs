import { render, screen } from "../../../test-utils";
import userEvent from "@testing-library/user-event";
import App from "../../../App";

const initialState = {
  jobs: {
    items: [
      {
        company: "Amazon",
        date: "2022-01-22",
        description: "Senior Backend Developer remotely",
        id: 1642893043059,
        remote: true,
        resume:
          "C:\\fakepath\\5-Estrategias de CE y marketing digital para PyMEs.pdf",
        title: "Senior Backend Developer",
        vacancies: "4",
      },
    ],
    changed: false,
  },
  ui: { notification: null },
};

const initialEmptyState = {
    jobs: {
      items: [],
      changed: false,
    },
    ui: { notification: null },
  };

describe("JobSearch", () => {
  it('should "Search when there an user write in the search field and when there is data', () => {
    //Arrange
    render(<App />, { preloadedState: initialState }, { route: "/" });

    //Act
    userEvent.type(
      screen.getByRole("searchbox", { name: /search/i }),
      "Amazon"
    );

    //Assert
    expect(
      screen.getByText("Senior Backend Developer - Amazon")
    ).toBeInTheDocument();
  });

  it('should not find anything when there is not match', () => {
    //Arrange
    render(<App />, { preloadedState: initialState }, { route: "/" });

    //Act
    userEvent.type(
      screen.getByRole("searchbox", { name: /search/i }),
      "Google"
    );

    //Assert
    expect(
      screen.getByText("No jobs available")
    ).toBeInTheDocument();
  });

  it('should not find anything when there are not jobs', () => {
    //Arrange
    render(<App />, { preloadedState: initialEmptyState }, { route: "/" });

    //Act
    userEvent.type(
      screen.getByRole("searchbox", { name: /search/i }),
      "Amazon"
    );

    //Assert
    expect(
      screen.getByText("No jobs available")
    ).toBeInTheDocument();
  });
});
