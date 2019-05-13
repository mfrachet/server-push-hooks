import { useContext, useEffect, useRef } from "react";
import { useSocket } from "../useSocket";

jest.mock("react");

describe("useSocket", () => {
  let socketMock;
  let callback;

  beforeEach(() => {
    callback = jest.fn();
    socketMock = { on: jest.fn() };
    useContext.mockImplementation(() => socketMock);
    useEffect.mockImplementation(fn => fn());
    useRef.mockImplementation(() => ({ current: null }));
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should have called the useContext, useState and useEffect hooks", () => {
    useSocket("something");

    expect(useContext).toHaveBeenCalled();
    expect(useEffect).toHaveBeenCalled();
  });

  it("should have return the socket value and the socket himself", () => {
    expect(useSocket("something")).toEqual(socketMock);
  });

  it("shouldnt have called the socketMock on when no event key", () => {
    const socket = useSocket();

    expect(socket).toEqual(socketMock);
    expect(socket.on).not.toHaveBeenCalled();
  });
});
