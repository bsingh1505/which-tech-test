import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders header and multiplcation component", () => {
  render(<App />);
  expect(screen).toMatchSnapshot();
});
