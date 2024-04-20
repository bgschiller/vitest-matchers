import { expect, test } from "vitest";

test("unsettled", () => {
  expect(Promise.resolve(1)).not.toBeUnsettled();

  expect(new Promise(() => {})).toBeUnsettled();
});
