import { describe, expect, it } from "vitest";
import { toBeUnsettled } from "./to-be-unsettled";

describe("toBeUnsettled", () => {
  it("reports on a resolved promise", async () => {
    const result = await toBeUnsettled(Promise.resolve(42));
    expect(result.pass).toBe(false);
    expect(result.message()).toMatchInlineSnapshot(
      '"expected to be an unsettled promise, but resolved with 42"'
    );
  });

  it("reports on a rejected promise", async () => {
    const result = await toBeUnsettled(Promise.reject(new Error("foo")));
    expect(result.pass).toBe(false);
    expect(result.message()).toMatchInlineSnapshot(
      '"expected to be an unsettled promise, but rejected with [Error: foo]"'
    );
  });

  it("reports on a pending promise", async () => {
    const result = await toBeUnsettled(new Promise(() => {}));
    expect(result.pass).toBe(true);
  });

  it("reports on a pending promise with message (like when using expect(...).not.toBeUnsettled())", async () => {
    const result = await toBeUnsettled(new Promise(() => {}));
    expect(result.pass).toBe(true);
    expect(result.message()).toMatchInlineSnapshot('"expected not to be unsettled, but timed out waiting"');
  });
});
