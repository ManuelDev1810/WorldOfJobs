import { render, screen } from "../../test-utils";
import App from "../../App";

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

describe("Jobs component", () => {
  test('render "No jobs available" when there are not jobs', () => {
    //Arrange
    render(<App />, { preloadedState: initialEmptyState }, {route: '/'});

    //Act

    //Assert
    expect(screen.getByText("No jobs available")).toBeInTheDocument();
  });

  test('render "Jobs" when available', async () => {
    //Arrange
    render(<App />, { preloadedState: initialState }, {route: '/'});

    //Act

    //Assert
    expect(screen.getByText("Senior Backend Developer - Amazon")).toBeInTheDocument();
  });
});
