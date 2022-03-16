import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

//In React Router V6 there's not way no test location yet, you need to create a custom history object for it
describe("Header component", () => {
  test('render "Jobs" redirect element', () => {
    //Arrange
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Act

    //Assert
    const anchorElement = screen.getByText("World Of Jobs").parentElement;
    expect(anchorElement).toHaveAttribute(
      "href",
      expect.stringContaining("/jobs")
    );
  });

  // test('render "New Job" redirect element', () => {
  //   //Arrange
  //   render(
  //     <MemoryRouter>
  //       <Header />
  //     </MemoryRouter>
  //   );

  //   //Act

  //   //Assert
  //   const anchorElement = screen.getByText("Create job vacancy").parentElement;
  //   expect(anchorElement).toHaveAttribute(
  //     "href",
  //     expect.stringContaining("/new-job")
  //   );
  // });

  // test('render "FINDING YOUR JOB IS MY JOB" as a text', () => {
  //     //Arrange
  //     render(<MemoryRouter><Header /></MemoryRouter>)

  //     //Act

  //     //Arrange
  //     const textElement = screen.getByText("FINDING YOUR JOB IS MY JOB");
  //     expect(textElement).toBeInTheDocument();
  // })
});
