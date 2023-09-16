import useSWR, { Fetcher } from "swr";

type Key = string | string[];

export const useClientFetch = (url: Key, fetcher: Fetcher) => {
  return useSWR(url, fetcher);
};
