import { prefixTokenName } from "./utils";

test.each([
  ["CSS", "--foo"],
  ["SASS", "$foo"],
  ["JS", "foo"],
  ["unknown", "foo"],
])("prefixTokenName for %s is %s", (format, expected) => {
  expect(prefixTokenName(format, "foo")).toBe(expected);
});
