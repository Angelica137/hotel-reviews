import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import Button from "./Button";

describe("the <Button /> component", () => {
  it("should render the correct children", () => {
    const children = "this is button";
    const component = shallow(<Button>{children}</Button>);

    expect(component.props().children).toEqual(children);
  });
});
