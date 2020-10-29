import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import Subheader from "./Subheader";

describe("the <Subheader /> component", () => {
  it("should render", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Subheader />);
    const component = renderer.getRenderOutput();

    expect(component).toMatchSnapshot();
  });
});
