import { expect } from "vitest";
import { type UnsettledMatcher, toBeUnsettled } from "./to-be-unsettled";

expect.extend({ toBeUnsettled });

declare module "vitest" {
  export interface Assertion<T = any> extends UnsettledMatcher<T> {}
  export interface AsymmetricMatchersContaining extends UnsettledMatcher {}
}
