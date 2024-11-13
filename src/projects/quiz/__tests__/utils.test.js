import { decodeObjectValues } from "../utils.ts";
import { test } from "vitest";
test("decoding", () => {
  expect(
    decodeObjectValues({
      key1: "Where is the &quot;Sonoran Desert&quot; located?",
      key2: "Another &quot;example&quot; with quotes.",
    })
  ).toStrictEqual({
    key1: 'Where is the "Sonoran Desert" located?',
    key2: 'Another "example" with quotes.',
  });
});

test("snapshot", () => {
  expect(
    decodeObjectValues({
      key1: "Where is the &quot;Sonoran Desert&quot; located?",
      key2: "Another &quot;example&quot; with quotes.",
    })
  ).toMatchSnapshot();
});
