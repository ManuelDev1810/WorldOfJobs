import { render, screen } from "../../../test-utils";
import userEvent from "@testing-library/user-event";
import App from "../../../App";
import { waitFor } from "@testing-library/react";

const initialState = {
  jobs: {
    items: [
      {
        company: "Amazon",
        date: "2022-01-22",
        description: "Senior Backend Developer remotely",
        id: 1642893043059,
        remote: true,
        logo: "https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png",
        title: "Senior Backend Developer",
        vacancies: "4",
      },
    ],
    changed: false,
  },
  applications: { applications: [] },
};

const initialEmptyState = {
  jobs: {
    items: [],
    changed: false,
  },
  applications: { applications: [] },
};

describe("JobSearch", () => {
  it('should "Search when an user write in the search field and when there is data', () => {
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

  it("should not find anything when there is not match", async () => {
    //Arrange
    render(<App />, { preloadedState: initialState }, { route: "/" });

    //Act
    userEvent.type(
      screen.getByRole("searchbox", { name: /search/i }),
      "ddsfgdsgdgbfdsfdffgdfdffgdgffdgdfgfdfdgfdgdfg"
    );

    //Assert
    await waitFor(() =>
      expect(screen.getByText("No jobs available")).toBeInTheDocument()
    );
  });

  it("should not find anything when there are not jobs", async () => {
    //Arrange
    render(<App />, { preloadedState: initialEmptyState }, { route: "/" });

    //Act
    userEvent.type(
      screen.getByRole("searchbox", { name: /search/i }),
      "Amazon"
    );

    //Assert
    await waitFor(() =>
      expect(screen.getByText("No jobs available")).toBeInTheDocument()
    );
  });
});
