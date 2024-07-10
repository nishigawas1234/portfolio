"use client";
import React from "react";
import { Button } from "../components/Effects/moving-border";

export function MovingBorderDemo({ label }: { label: string }) {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-gradient-to-r from-blue-600 to-blue-900 hover:translate-x-[10px] ease-out duration-100 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        {label}
      </Button>
    </div>
  );
}
