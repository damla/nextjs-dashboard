'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import { useState } from 'react';

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: Props) {
  const [show, setShow] = useState<boolean>(false);
  const showError = () => {
    setShow(!show);
  };

  return (
    <Card className="flex h-[90vh] flex-col items-center justify-center">
      <CardHeader>
        <CardTitle className="text-center text-xl md:text-3xl">
          Oops, something went wrong!
        </CardTitle>
      </CardHeader>
      <CardContent>
        {show && (
          <pre className="mx-3 whitespace-pre-wrap rounded-sm border-4 border-solid border-slate-600 bg-slate-600 p-4 text-gray-100 md:mx-20">
            {error.message}
          </pre>
        )}
      </CardContent>
      <CardFooter className="flex items-center justify-center gap-2">
        <Button variant="destructive" onClick={() => reset()}>
          Try Again
        </Button>
        <Button onClick={showError} variant="outline">
          Show the error
        </Button>
      </CardFooter>
    </Card>
  );
}
