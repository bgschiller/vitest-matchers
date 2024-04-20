import "vitest-unsettled/extend-expect";

// If I uncomment these, it works. But I don't want to require this
// on the user's part.
// import type { UnsettledMatcher } from "vitest-unsettled";

// declare module "vitest" {
//   export interface Assertion<T = any> extends UnsettledMatcher<T> {}
//   export interface AsymmetricMatchersContaining extends UnsettledMatcher {}
// }
