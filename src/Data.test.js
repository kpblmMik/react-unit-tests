import { render, waitFor, screen } from "@testing-library/react";
import Data from "./Data";

test("should render Data component", () => {
    render(<Data />);
    const dataElement = screen.getByTestId("data-selector");
    expect(dataElement).toBeInTheDocument();
});

test("should render data", async () => {
    const mockData = [
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }];
    jest.spyOn(window, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(mockData),
        }),
    );

    const { getByTestId, getByText } = render(<Data />);
    expect(getByText("Loading ...")).toBeInTheDocument();

    await waitFor(() => {
        expect(getByTestId("data-list")).toBeInTheDocument()
    });

    const dataElement = await screen.findByTestId("data-selector");
    window.fetch.mockRestore();
});