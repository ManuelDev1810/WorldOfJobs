import { render, screen, fireEvent } from "../../../test-utils";
import App from "../../../App";

const initialEmptyState = {
  jobs: {
    items: [],
    changed: false,
  },
  applications: {
    applications: [],
  },
};

describe("NewJob component", () => {
  it("should render basic fields", () => {
    //Arrange
    render(
      <App />,
      { preloadedState: initialEmptyState },
      { route: "/new-job" }
    );

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
    expect(screen.getByRole("textbox", { name: /logo/i })).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /description/i })
    ).toBeInTheDocument();
  });
});
