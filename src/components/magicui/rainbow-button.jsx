import React from "react";

import { cn } from "@/lib/utils";

export const ShimmerButton = React.forwardRef(
  (
    {
      borderRadius = "100px",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        style={{
          "--radius": borderRadius,
        }}
        className={cn(
          "group relative flex cursor-pointer items-center justify-center whitespace-nowrap border border-white/20 px-6 py-3 text-white bg-black/40 backdrop-blur-sm [border-radius:var(--radius)]",
          "transition-all duration-300 ease-in-out",
          "hover:border-white/40 hover:bg-white/10 hover:scale-105",
          "active:scale-100",
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);

ShimmerButton.displayName = "ShimmerButton";
