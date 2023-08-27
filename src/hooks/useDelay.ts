export function useDelay({ ms }: { ms: number }) {
  return delay(ms);
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
