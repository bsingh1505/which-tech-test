import { render, fireEvent } from "@testing-library/react";
import Multiplication from "./Multiplication";

const setup = (overrideProps) => {
  const props = {
    multiplicationsUpto: 10,
    ...overrideProps,
  };
  const { container, getByText, getAllByTestId } = render(<Multiplication {...props} />);
  return {
    container,
    props,
    getByText,
    getAllByTestId,
  };
};

describe("Multiplcation component", () => {
  test(":: should render component", () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test(":: one click of item it should match snapshot and proper class assigned", () => {
    const { getByText } = setup();
    const item = getByText("3");
    const item4 = getByText("4");
    const item6 = getByText("6");
    fireEvent.click(item);
    expect(item).toHaveClass("Item-selected");
    expect(item4).not.toHaveClass("Item-selected");
    expect(item6).toHaveClass("Item-selected");
  });

  test(":: should render all the numbers", () => {
    const { getAllByTestId } = setup();
    const listItems = getAllByTestId("list-item");
    expect(listItems).toHaveLength(10);
  });

  test(":: should render expected numbers of item", () => {
    const { getAllByTestId } = setup({ multiplicationsUpto: 5 });
    const listItems = getAllByTestId("list-item");
    expect(listItems).toHaveLength(5);
  });
});
