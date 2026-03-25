import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders reserve a table link", () => {
  render(<App />);

  expect(
    screen.getByRole("link", { name: /reserve a table/i }),
  ).toBeInTheDocument();
});
