"use client";
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";
import { LoanSimulator } from "../forms/LoanSimulator";

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
    <Dialog id={id}>
      {triggerButton && (
        <DialogTrigger asChild>
          <Button 
            variant={buttonVariant} 
            className={className}
          >
            {buttonText}
            <Calculator className="ml-2 h-4 w-4" />
          </Button>
        </DialogTrigger>
      )}
      <DialogContent className="sm:max-w-md bg-black border-zinc-800 text-white">
        <DialogHeader>
          <DialogTitle className="text-white">Loan Simulator</DialogTitle>
          <DialogDescription className="text-zinc-400">
            Calculate your potential loan amount based on your income.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <LoanSimulator />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoanSimulatorModal;