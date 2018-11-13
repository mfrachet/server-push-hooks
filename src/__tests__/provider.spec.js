import React from "react";
import { shallow } from "enzyme";
import Provider from "../provider";
import { Context } from "../context";

describe("Provider", () => {
  let url;

  const getWrapper = () => shallow(<Provider initialState={initialState} />);

  beforeEach(() => {
    url = "http://localhost/";
  });

  it("should have a Context.Provider with props that matches the initial state and the change state handler", () => {
    const wrapper = getWrapper();

    expect(wrapper.find(Context.Provider).prop("value")).toEqual({
      state: initialState,
      changeState: wrapper.instance().changeState
    });
  });

  it("should have changed the Context Provider value prop based on state information and parameters", () => {
    const wrapper = getWrapper();

    wrapper.instance().changeState("name")("Thomas");

    expect(wrapper.find(Context.Provider).prop("value")).toEqual({
      state: { name: "Thomas" },
      changeState: wrapper.instance().changeState
    });
  });

  it("should have changed the Context Provider value prop based on state information only", () => {
    const wrapper = getWrapper();

    wrapper.instance().changeState()({ surname: "Thomas" });

    expect(wrapper.find(Context.Provider).prop("value")).toEqual({
      state: { name: "Marvin", surname: "Thomas" },
      changeState: wrapper.instance().changeState
    });
  });
});
