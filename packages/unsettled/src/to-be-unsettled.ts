import prettyFormat from "pretty-format";

export interface UnsettledMatcher<R = unknown> {
  toBeUnsettled(): R;
}

export async function toBeUnsettled(prom: Promise<unknown>) {
  const [resolved, error] = await Promise.race([prom, timeoutNextTick()])
    .then((x: unknown) => [x, undefined])
    .catch((err: unknown) => [undefined, err]);

  const pass = resolved === TIMED_OUT;

  return pass
    ? {
        message: () => `expected not to be unsettled, but timed out waiting`,
        pass: true,
      }
    : {
        message: () =>
          `expected to be an unsettled promise, but ${
            error
              ? `rejected with ${prettyFormat(error)}`
              : `resolved with ${prettyFormat(resolved)}`
          }`,
        pass: false,
      };
}

function timeoutNextTick() {
  return new Promise((resolve) => {
    process.nextTick(() => {
      resolve(TIMED_OUT);
    });
  });
}

const TIMED_OUT = Symbol();
