# vitest-unsettled

Custom Vitest matcher for checking if a Promise is settled (either resolved or rejected).

---

If you expect a promise to be settled, you probably assert on its value: `expect(p).resolves.toBe(value)`. But what if you want to assert that a promise is _not_ settled? You can't do that with the built-in matchers.

I've needed this a few times, so I made a custom matcher. Here's how it works.

```ts
let resolve = null;
const p = new Promise((r) => {
  resolve = r;
});
expect(p).toBeUnsettled(); // passes
resolve(12);
expect(p).not.toBeUnsettled(); // passes
```

## Installation

```sh
# with npm
npm install --save-dev vitest-unsettled
# yarn
yarn add --dev vitest-unsettled
# pnpm
pnpm add -D vitest-unsettled
```

## Setup

### Import `vitest-unsettled/extend-expect` module

The simplest way to use this library is to import `vitest-unsettled/extend-expect` from your [test setup file](https://vitest.dev/config/#setupfiles).

```ts
// vitest-setup.js
import "vitest-unsettled/extend-expect";
```

### Extend in test setup file

You can also import the matcher from `vitest-unsettled` and pass them to Vitest's `expect.extend` method yourself:

```ts
// vitest-setup.js
import { toBeUnsettled } from "vitest-unsettled";
import { extend } from "vitest";
expect.extend({ toBeUnsettled });
```

### With TypeScript

If you [imported the `vitest-unsettled/extend-expect` module](#import-vitest-unsettledextend-expect-module), you don't need to do anything else. Make sure your setup file is [included in your `tsconfig.json`](https://www.typescriptlang.org/tsconfig#include).

If you're extending the matchers yourself, you may need to add a type declaration to your test setup file:

```ts
import type { UnsettledMatcher } from "vitest-unsettled";
declare module "vitest" {
  export interface Assertion extends UnsettledMatcher {}
  export interface AsymmetricMatchersContaining extends UnsettledMatcher {}
}
```

Further reading:

- [Extending matchers in Vitest](https://vitest.dev/guide/extending-matchers.html)
- [Module augmentation in TypeScript](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation)

## Acknowledgements

I leaned heavily on the [chaance/vitest-axe](https://github.com/chaance/vitest-axe) project to see how to structure this project and README.
