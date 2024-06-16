"use client";

import { Button } from "@nextui-org/react";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    /* eslint-disable no-console */
    console.error(error);
  }, [error]);

  return (
    <div className="w-full h-screen flex items-center justify-center text-center">
      <div>
        <h2>Something went wrong!</h2>
        <Button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </Button>
      </div>
    </div>
  );
}
