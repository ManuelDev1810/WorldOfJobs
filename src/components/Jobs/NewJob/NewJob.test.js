import { render, screen } from "../../../test-utils";
import userEvent from "@testing-library/user-event";
import App from "../../../App";

const initialEmptyState = {
  jobs: {
    items: [],
    changed: false,
  },
  ui: { notification: null },
};

describe("NewJob component", () => {
  it("should render basic fields", () => {
    //Arrange
    render(<App />, { preloadedState: initialEmptyState }, {route: '/new-job'});

    //Act

    //Assert
    expect(screen.getByRole("textbox", { name: /title/i })).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /company/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("spinbutton", { name: /vacancies/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("checkbox", { name: /remote/i })
    ).toBeInTheDocument();
    expect(screen.getByText("Add Resume")).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /description/i })
    ).toBeInTheDocument();
  });

  test('it should create a "Job" when all the information is there and the create button is clicked', () => {
    //Arrange
    render(<App />, { preloadedState: initialEmptyState }, {route: '/new-job'});

    //Act
    userEvent.type(
      screen.getByRole("textbox", { name: /title/i }),
      "Senior Backend Developer"
    );
    userEvent.type(screen.getByRole("textbox", { name: /company/i }), "Amazon");
    userEvent.type(screen.getByRole("spinbutton", { name: /vacancies/i }), "4");
    userEvent.click(screen.getByRole("checkbox"));
    userEvent.type(
      screen.getByText("Add Resume"),
      "C:\\fakepath\\5-Estrategias de CE y marketing digital para PyMEs.pdf"
    );
    userEvent.type(
      screen.getByRole("textbox", { name: /description/i }),
      "Senior Backend Developer remotely"
    );

    userEvent.click(screen.getByRole("button"));

    //Assert
    //If the form is clean, that means that the action was dispatch to the store in order to create the job.
    expect(
        screen.getByRole("textbox", { name: /title/i })
      ).not.toHaveValue();
  });
});
