import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
jest.mock("axios", () => ({
  get: jest.fn(),
}));
import App from "./App";

test("renders the application header", () => {
  render(
    <MemoryRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <App />
    </MemoryRouter>
  );

  expect(
    screen.getByRole("heading", {
      name: /keep projects moving with one calm, powerful workspace/i,
    })
  ).toBeInTheDocument();
});
