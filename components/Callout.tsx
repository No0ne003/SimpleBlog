import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CalloutProps {
  children?: ReactNode;
  type?: "default" | "warning" | "danger";
}

export function Callout({
  children,
  type = "default",
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn(
        "my-6 items-start rounded-md border-l-4 p-4 w-full dark:max-w-none",
        {
          "border-rose-900 bg-rose-400/15": type === "danger",
          "border-yellow-600 bg-yellow-400/15": type === "warning",
        },
      )}
      {...props}
    >
      <div>{children}</div>
    </div>
  );
}
