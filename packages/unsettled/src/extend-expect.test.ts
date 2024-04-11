import "./extend-expect";
import { describe, it, expect } from "vitest";

describe("extended expect", () => {
  it.fails("finds settled promises", async () => {
    await expect(Promise.resolve(42)).toBeUnsettled();
  });

  it("finds unsettled promises", async () => {
    await expect(new Promise(() => {})).toBeUnsettled();
  });

  it("works with expect.not", async () => {
    await expect(Promise.resolve(42)).not.toBeUnsettled();
  });

  it.fails("works with expect.not and fails", async () => {
    await expect(new Promise(() => {})).not.toBeUnsettled();
  });
});
