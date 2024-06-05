import Counter from "./Counter";
import { render, screen, fireEvent } from "@testing-library/react";

test("should render Counter component", () => {
    render(<Counter />);
    const counterElement = screen.getByTestId("counter-selector");
    expect(counterElement).toBeInTheDocument();
});

test("should render count 0", () => {
    render(<Counter />);
    const countElement = screen.getByTestId("count-selector");
    expect(countElement).toHaveTextContent("Count: 0");
});

test("increment value on button click", () => {
    render(<Counter />);
    const buttonElement = screen.getByTestId("increment-button");
    fireEvent.click(buttonElement);
    const countElement = screen.getByTestId("count-selector");
    expect(countElement).toHaveTextContent("Count: 1");
    expect(countElement).not.toHaveTextContent("Count: 0");
});

test("increment value on  double button click", () => {
    render(<Counter />);
    const buttonElement = screen.getByTestId("increment-button");
    fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);
    const countElement = screen.getByTestId("count-selector");
    expect(countElement).toHaveTextContent("Count: 2");
});

test("decrement value on button click", () => {
    render(<Counter />);
    const buttonElement = screen.getByTestId("decrement-button");
    fireEvent.click(buttonElement);
    const countElement = screen.getByTestId("count-selector");
    expect(countElement).toHaveTextContent("Count: -1");
    expect(countElement).not.toHaveTextContent("Count: 0");
});

test("decrement value alfter increment on button click", () => {
    render(<Counter />);
    const incrementButtonElement = screen.getByTestId("increment-button");
    const decrementButtonElement = screen.getByTestId("decrement-button");
    fireEvent.click(incrementButtonElement);
    expect(screen.getByTestId("count-selector")).toHaveTextContent("Count: 1");
    fireEvent.click(decrementButtonElement);
    expect(screen.getByTestId("count-selector")).toHaveTextContent("Count: 0");
});