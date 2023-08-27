import useSWR from "swr";

export const useClientFetch = (url: string) => {
  return useSWR(url);
};
