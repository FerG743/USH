"use client";

import React from 'react';
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { Calculator, X } from "lucide-react";
import LoanSimulator from "../forms/LoanSimulator";
import { cn } from "@/lib/utils";

interface LoanSimulatorModalProps {
  buttonVariant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
  buttonText?: string;
  className?: string;
  id?: string;
  triggerButton?: boolean;
}

export const LoanSimulatorModal: React.FC<LoanSimulatorModalProps> = ({
  buttonVariant = "default",
  buttonText = "Simulate Loan",
  className = "",
  id,
  triggerButton = true,
}) => {
  return (
    <DialogPrimitive.Root>
      {triggerButton && (
        <DialogPrimitive.Trigger asChild>
          <Button
            variant={buttonVariant}
            className={className}
          >
            {buttonText}
            <Calculator className="ml-2 h-4 w-4" />
          </Button>
        </DialogPrimitive.Trigger>
      )}

      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        <DialogPrimitive.Content
          className={cn(
            "fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%]",
            // Adjusted width to be more balanced - not too wide, not too narrow
            "w-[95vw] sm:w-[85vw] md:w-[75vw] lg:w-[65vw] xl:w-[55vw] 2xl:w-[50vw]",
            // Set min and max width for better content containment
            "min-w-[320px] max-w-[900px]",
            // Adjusted height to be more proportional
            "h-auto max-h-[85vh] sm:max-h-[80vh]",
            // Optional: Set a min-height if content is too small
            "min-h-[400px]",
            "bg-zinc-950 border border-zinc-800 rounded-lg shadow-lg",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
            "data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
            "duration-200",
            "flex flex-col overflow-hidden"
          )}
        >
          <DialogPrimitive.Close className="absolute right-4 top-4 z-10 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
            <X className="h-5 w-5 text-white" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>

          {/* Added padding to the content wrapper for better spacing */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 sm:p-8">
            {/* Debug: Add a colored background to see the actual container size */}
            <div className="w-full h-full bg-red-500/10 rounded">
              <LoanSimulator />
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default LoanSimulatorModal;