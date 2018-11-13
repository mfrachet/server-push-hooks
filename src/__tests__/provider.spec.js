import React from "react";
import { shallow } from "enzyme";
import Provider from "../provider";

jest.mock("socket.io-client", () => () => ({
  socket: "this is a socket"
}));

describe("Provider", () => {
  let props;

  const getWrapper = () => shallow(<Provider {...props}>Hello world</Provider>);

  beforeEach(() => {
    props = { url: "https://localhost:3000/" };
  });

  it("should match snapshot", () => {
    expect(getWrapper()).toMatchSnapshot();
  });
});
