import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import Subheader, { Title, SubHeaderButton } from "./Subheader";

describe("the <Subheader /> component", () => {
  it("should render", () => {
    const component = shallow(<Subheader />);

    expect(component).toMatchSnapshot();
  });

  it("should render with a dynamic title", () => {
    const title = "Test Application";
    const component = shallow(<Subheader title={title} />);

    expect(component.find(Title).text()).toEqual(title);
  });

  it("should render with a goback and form button amd handle the onClick event", () => {
    const mockGoBack = jest.fn();
    const mockOpenForm = jest.fn();
    const component = shallow(
      <Subheader goBack={mockGoBack} openForm={mockOpenForm} />
    );

    const goBackButton = component.find(SubHeaderButton).at(0);
    expect(goBackButton.exists()).toBe(true);

    const openFormButton = component.find(SubHeaderButton).at(1);
    expect(openFormButton.exists()).toBe(true);

    goBackButton.simulate("click");
    expect(mockGoBack).toHaveBeenCalled();

    openFormButton.simulate("click");
    expect(mockOpenForm).toHaveBeenCalled();
  });
});
