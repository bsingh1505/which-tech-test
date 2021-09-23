import { render } from "@testing-library/react";
import Header from "./Header";

const setup = (overrideProps) => {
  const props = {
    multiplicationsUpto: 10,
    ...overrideProps,
  };
  const { container, getByTestId } = render(<Header {...props} />);
  return {
    container,
    props,
    getByTestId,
  };
};

describe("Header component", () => {
  test(":: should render component", () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
  test(":: check the content", () => {
    const { getByTestId } = setup();
    const header = getByTestId("header-content");
    expect(header).toHaveTextContent("Practise multiplications at your own pace and have fun!!!");
  });
});
