"use client";

import { Container } from "@/components/Container"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("An error occurred:", error);
  }, [error]);

  return (
    <Container className="flex-1 flex items-center justify-center">
			<Alert variant="destructive" className="max-w-md">
				<AlertTitle className="text-xl font-bold">
					Something went wrong
				</AlertTitle>
				<AlertDescription className="mt-2 text-sm">
          {error.message || "An unexpected error has occurred. Please try again."}
        </AlertDescription>
        <div className="mt-4 flex space-x-2">
          <Button variant="default" onClick={() => reset()}>
            Try Again
          </Button>
          <Button variant="outline" asChild>
            <a href="/">Go Home</a>
          </Button>
        </div>
      </Alert>
    </Container>
  );
}
