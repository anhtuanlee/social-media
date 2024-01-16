'use client';
import { wrapGrid } from 'animate-css-grid';
import { ReactNode, useEffect, useRef, useState } from 'react';

import useWindowResize from '@/hooks/useWindowResize';
import { cn } from '@/utils';

function Wrapper({ children, className }: { children: ReactNode; className: string }) {
  const [isOpenSidebar, setSidebar] = useState<boolean>(false);
  const { isTablet } = useWindowResize();
  const gridRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isTablet) {
      setSidebar(false);
    }
  }, [isTablet]);
  useEffect(() => {
    if (gridRef.current) {
      wrapGrid(gridRef.current);
    }
  }, [isOpenSidebar, gridRef]);

  return <div className={cn(className)}> {children}</div>;
}

export default Wrapper;
