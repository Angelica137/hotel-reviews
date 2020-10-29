import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import Button from "./Button";

describe("the <Button /> component", () => {
  const renderer = new ShallowRenderer();

  it("should render", () => {
    const children = "This is a button";
    renderer.render(<Button>{children}</Button>);
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });
});
