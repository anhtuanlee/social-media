'use client'; // Error components must be Client Components

import Button from '@/components/Button';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Error({ error }: { error: Error & { digest?: string } }) {
  const { push } = useRouter();
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col gap-4">
        <h2>Havent Account !</h2>
        <Button
          type="primary"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => push('/')
          }
        >
          Go Home
        </Button>
      </div>
    </div>
  );
}
