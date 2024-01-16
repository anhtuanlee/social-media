import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export const useSetParams = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;
  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const handleQueryParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(key.toLowerCase(), value.toLowerCase());
    const queries = params.toString();

    router.push(pathname + '?' + queries);
  };
  const handleGetParams = (key: string) => {
    const params = searchParams.get(key);
    return params;
  };
  return {
    handleGetParams,
    handleQueryParams,
  };
};
