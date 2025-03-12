// app/components/forms/LoanSimulator.tsx
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

type Step = 'email' | 'details' | 'results';

interface UserData {
  email: string;
  name: string;
  address: string;
  idNumber: string; // RFC or CURP
  monthlyIncome: number;
}

export const LoanSimulator: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<Step>('email');
  const [userData, setUserData] = useState<UserData>({
    email: '',
    name: '',
    address: '',
    idNumber: '',
    monthlyIncome: 0
  });
  const [emailError, setEmailError] = useState<string>('');
  const [formErrors, setFormErrors] = useState({
    name: '',
    address: '',
    idNumber: '',
    monthlyIncome: ''
  });

  // Calculate maximum loan amount (30% of monthly income)
  const maxLoanAmount = userData.monthlyIncome * 0.3;

  // Validate email
  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = re.test(email);
    
    if (!isValid) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
    
    return isValid;
  };

  // Handle email submission
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateEmail(userData.email)) {
      setCurrentStep('details');
    }
  };

  // Validate details form
  const validateDetailsForm = (): boolean => {
    const errors = {
      name: '',
      address: '',
      idNumber: '',
      monthlyIncome: ''
    };
    
    let isValid = true;
    
    if (!userData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }
    
    if (!userData.address.trim()) {
      errors.address = 'Address is required';
      isValid = false;
    }
    
    if (!userData.idNumber.trim()) {
      errors.idNumber = 'RFC or CURP is required';
      isValid = false;
    }
    
    if (!userData.monthlyIncome || userData.monthlyIncome <= 0) {
      errors.monthlyIncome = 'Please enter a valid monthly income';
      isValid = false;
    }
    
    setFormErrors(errors);
    return isValid;
  };

  // Handle details form submission
  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateDetailsForm()) {
      setCurrentStep('results');
    }
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setUserData(prev => ({
      ...prev,
      [name]: name === 'monthlyIncome' ? parseFloat(value) || 0 : value
    }));
  };

  // Reset the simulator
  const handleReset = () => {
    setUserData({
      email: '',
      name: '',
      address: '',
      idNumber: '',
      monthlyIncome: 0
    });
    setCurrentStep('email');
  };

  // Format currency
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 2
    }).format(amount);
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-zinc-900 border-zinc-800 text-white">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Loan Simulator</CardTitle>
        <CardDescription className="text-zinc-400">
          {currentStep === 'email' && "Enter your email to start"}
          {currentStep === 'details' && "Tell us about yourself"}
          {currentStep === 'results' && "Your loan qualification"}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        {currentStep === 'email' && (
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={userData.email}
                onChange={handleChange}
                className="bg-zinc-800 border-zinc-700 text-white"
                required
              />
              {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
            </div>
            
            <Button type="submit" className="w-full bg-white text-black hover:bg-zinc-200">
              Continue
            </Button>
          </form>
        )}
        
        {currentStep === 'details' && (
          <form onSubmit={handleDetailsSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Your full name"
                value={userData.name}
                onChange={handleChange}
                className="bg-zinc-800 border-zinc-700 text-white"
              />
              {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                name="address"
                placeholder="Your home address"
                value={userData.address}
                onChange={handleChange}
                className="bg-zinc-800 border-zinc-700 text-white"
              />
              {formErrors.address && <p className="text-red-500 text-sm">{formErrors.address}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="idNumber">RFC or CURP</Label>
              <Input
                id="idNumber"
                name="idNumber"
                placeholder="Your RFC or CURP number"
                value={userData.idNumber}
                onChange={handleChange}
                className="bg-zinc-800 border-zinc-700 text-white"
              />
              {formErrors.idNumber && <p className="text-red-500 text-sm">{formErrors.idNumber}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="monthlyIncome">Monthly Income (MXN)</Label>
              <Input
                id="monthlyIncome"
                name="monthlyIncome"
                type="number"
                min="0"
                step="100"
                placeholder="0.00"
                value={userData.monthlyIncome || ''}
                onChange={handleChange}
                className="bg-zinc-800 border-zinc-700 text-white"
              />
              {formErrors.monthlyIncome && <p className="text-red-500 text-sm">{formErrors.monthlyIncome}</p>}
            </div>
            
            <div className="flex space-x-4 pt-2">
              <Button 
                type="button" 
                variant="outline" 
                className="flex-1 border-zinc-700 hover:bg-zinc-800"
                onClick={() => setCurrentStep('email')}
              >
                Back
              </Button>
              <Button 
                type="submit" 
                className="flex-1 bg-white text-black hover:bg-zinc-200"
              >
                Calculate
              </Button>
            </div>
          </form>
        )}
        
        {currentStep === 'results' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Your Information</h3>
              <div className="space-y-2 text-zinc-400">
                <p><span className="text-white font-medium">Email:</span> {userData.email}</p>
                <p><span className="text-white font-medium">Name:</span> {userData.name}</p>
                <p><span className="text-white font-medium">Monthly Income:</span> {formatCurrency(userData.monthlyIncome)}</p>
              </div>
            </div>
            
            <Separator className="bg-zinc-800" />
            
            <div>
              <h3 className="text-lg font-medium mb-4">Loan Qualification</h3>
              <div className="bg-zinc-800 p-4 rounded-md mb-4">
                <p className="text-zinc-400 mb-1">Maximum Monthly Payment</p>
                <p className="text-2xl font-bold">{formatCurrency(maxLoanAmount)}</p>
              </div>
              
              <div className="space-y-2 text-sm text-zinc-400">
                <p>• Based on 30% of your declared monthly income</p>
                <p>• Actual loan amounts may vary based on credit history</p>
                <p>• Contact a financial advisor for personalized options</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
      
      {currentStep === 'results' && (
        <CardFooter>
          <div className="w-full flex space-x-4">
            <Button 
              variant="outline" 
              className="flex-1 border-zinc-700 hover:bg-zinc-800"
              onClick={() => setCurrentStep('details')}
            >
              Edit Information
            </Button>
            <Button 
              className="flex-1 bg-white text-black hover:bg-zinc-200"
              onClick={handleReset}
            >
              Start Over
            </Button>
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

export default LoanSimulator;