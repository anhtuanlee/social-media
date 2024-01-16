import { useEffect, useRef } from 'react';
import { DependencyList } from 'react';

export const useUpdateEffect = (callback: () => void, dependencies: DependencyList) => {
  const initMount = useRef(true);

  useEffect(() => {
    if (initMount.current) {
      initMount.current = false;

      return;
    }

    return callback();
  }, dependencies);

  useEffect(
    () => () => {
      initMount.current = true;
    },
    []
  );
};
