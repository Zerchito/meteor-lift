import { parseMeteorRelease } from "./meteor-release.js";

describe("parseMeteorRelease", () => {
  it("parses a stable release", () => {
    expect(parseMeteorRelease("METEOR@3.0.4\n")).toEqual({ version: "3.0.4", major: 3 });
  });

  it("parses a two-part version", () => {
    expect(parseMeteorRelease("METEOR@2.16")).toEqual({ version: "2.16", major: 2 });
  });

  it("parses a pre-release version", () => {
    expect(parseMeteorRelease("METEOR@3.1-beta.1")).toEqual({ version: "3.1-beta.1", major: 3 });
  });

  it("ignores blank lines, comments and Windows line endings", () => {
    expect(parseMeteorRelease("# pinned\r\n\r\nMETEOR@2.12\r\n")).toEqual({ version: "2.12", major: 2 });
  });

  it("returns null for content that is not a Meteor release", () => {
    expect(parseMeteorRelease("")).toBeNull();
    expect(parseMeteorRelease("none")).toBeNull();
    expect(parseMeteorRelease("METEOR@")).toBeNull();
  });
});
