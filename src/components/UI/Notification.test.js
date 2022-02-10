import { render, screen } from "../../test-utils";
import Notification from "./Notification";

describe("Search component", () => {
  test("should render alert-success", () => {
    //Arrage
    const {container} = render(<Notification status={"sucess"} message={"Job created"} />);

    //Act

    //Assert
    expect(container.getElementsByClassName('alert alert-success').length).toBe(1);
    expect(screen.getByText("Job created")).toBeInTheDocument();
  });

  test("should render alert-danger", () => {
    //Arrage
    const {container} = render(<Notification status={"error"} message={"There was an error"} />);

    //Act

    //Assert
    expect(container.getElementsByClassName('alert alert-danger').length).toBe(1);
    expect(screen.getByText("There was an error")).toBeInTheDocument();
  });

  test("should render alert-primary", () => {
    //Arrage
    const {container} = render(<Notification status={"pending"} message={"Sending request"} />);

    //Act

    //Assert
    expect(container.getElementsByClassName('alert alert-primary').length).toBe(1);
    expect(screen.getByText("Sending request")).toBeInTheDocument();
  });
});
