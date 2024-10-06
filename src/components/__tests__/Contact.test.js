import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("test cases for contact page", () => {
  test("should render contact page", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("should have a button", () => {
    render(<Contact />);
    const btn = screen.getByText("Submit");
    expect(btn).toBeInTheDocument();
  });

  test("should have input as placeholder name", () => {
    render(<Contact />);
    const input = screen.getByPlaceholderText("name");
    expect(input).toBeInTheDocument();
  });

  test("should have 2 input boxes", () => {
    render(<Contact />);
    const inputs = screen.getAllByRole("textbox");
    expect(inputs.length).toBe(2);
  });
});
