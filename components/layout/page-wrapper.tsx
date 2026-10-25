import { cn } from "@/lib/utils";
import React from "react";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function PageWrapper({ children, className }: PageWrapperProps) {
  return (
    <main
      id="main-content"
      className={cn(
        "relative z-[1] flex-grow pt-[var(--header-offset)] min-h-[calc(100vh-var(--header-offset))]",
        className
      )}
    >
      {children}
    </main>
  );
}
