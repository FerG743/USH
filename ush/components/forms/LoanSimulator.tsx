
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Custom CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes slide-in-right {
    from { opacity: 0; transform: translateX(20px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes slide-in-left {
    from { opacity: 0; transform: translateX(-20px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes fade-in-up {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes bounce-subtle {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-3px); }
    60% { transform: translateY(-2px); }
  }
  
  @keyframes pulse-subtle {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.8; }
  }
  
  .animate-fade-in {
    animation: fade-in 0.6s ease-out;
  }
  
  .animate-slide-in-right {
    animation: slide-in-right 0.5s ease-out;
  }
  
  .animate-slide-in-left {
    animation: slide-in-left 0.5s ease-out;
  }
  
  .animate-fade-in-up {
    animation: fade-in-up 0.6s ease-out;
  }
  
  .animate-bounce-subtle {
    animation: bounce-subtle 2s infinite;
  }
  
  .animate-pulse-subtle {
    animation: pulse-subtle 3s infinite;
  }
`;
document.head.appendChild(style);

type Step = 'product' | 'details' | 'results';

interface UserData {
  email: string;
  name: string;
  address: string;
  idNumber: string;
  monthlyIncome: number;
  productType: string;
  loanAmount: number;
  loanTerm: number;
  paymentFrequency: 'weekly' | 'biweekly' | 'monthly';
  collateral?: string;
  collateralValue?: number;
}

const productConfigs = {
  personal: {
    minAmount: 1000,
    maxAmount: 500000,
    minTerm: 2,
    maxTerm: 96,
    interestRate: 0.18,
    allowedFrequencies: ['weekly', 'biweekly', 'monthly'],
    needsCollateral: false
  },
  micro: {
    minAmount: 1000,
    maxAmount: 250000,
    minTerm: 1,
    maxTerm: 36,
    interestRate: 0.24,
    allowedFrequencies: ['weekly', 'biweekly', 'monthly'],
    needsCollateral: false
  },
  prenda: {
    minAmount: 5000,
    maxAmount: 1000000,
    minTerm: 1,
    maxTerm: 24,
    interestRate: 0.15,
    allowedFrequencies: ['monthly'],
    needsCollateral: true
  },
  pyme: {
    minAmount: 50000,
    maxAmount: 5000000,
    minTerm: 6,
    maxTerm: 60,
    interestRate: 0.16,
    allowedFrequencies: ['monthly'],
    needsCollateral: true
  }
};

export default function LoanSimulator() {
  const [currentStep, setCurrentStep] = useState<Step>('product');
  const [userData, setUserData] = useState<UserData>({
    email: '',
    name: '',
    address: '',
    idNumber: '',
    monthlyIncome: 0,
    productType: 'personal',
    loanAmount: 50000,
    loanTerm: 12,
    paymentFrequency: 'monthly',
    collateral: '',
    collateralValue: 0
  });
  
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    address: '',
    idNumber: '',
    monthlyIncome: '',
    loanAmount: '',
    collateral: '',
    collateralValue: ''
  });

  const [paymentAmount, setPaymentAmount] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [catEstimate, setCatEstimate] = useState(0);

  const currentConfig = productConfigs[userData.productType as keyof typeof productConfigs];

  useEffect(() => {
    if (userData.loanAmount > 0 && userData.loanTerm > 0) {
      calculateLoan();
    }
  }, [userData.loanAmount, userData.loanTerm, userData.paymentFrequency, userData.productType]);

  const calculateLoan = () => {
    const principal = userData.loanAmount;
    const annualRate = currentConfig.interestRate;
    
    let periodicRate: number;
    let numberOfPayments: number;
    
    switch (userData.paymentFrequency) {
      case 'weekly':
        periodicRate = annualRate / 52;
        numberOfPayments = userData.loanTerm * (52 / 12);
        break;
      case 'biweekly':
        periodicRate = annualRate / 26;
        numberOfPayments = userData.loanTerm * (26 / 12);
        break;
      default:
        periodicRate = annualRate / 12;
        numberOfPayments = userData.loanTerm;
    }

    const payment = (principal * periodicRate * Math.pow(1 + periodicRate, numberOfPayments)) /
                   (Math.pow(1 + periodicRate, numberOfPayments) - 1);
    
    const totalPaid = payment * numberOfPayments;
    const interestPaid = totalPaid - principal;
    const simpleCat = annualRate * 100 * 1.16;
    
    setPaymentAmount(payment);
    setTotalInterest(interestPaid);
    setTotalPayment(totalPaid);
    setCatEstimate(simpleCat);
  };

  const validateForm = () => {
    const errors = {
      name: '',
      email: '',
      address: '',
      idNumber: '',
      monthlyIncome: '',
      loanAmount: '',
      collateral: '',
      collateralValue: ''
    };
    
    let isValid = true;
    
    if (!userData.name.trim()) {
      errors.name = 'El nombre es requerido';
      isValid = false;
    }
    
    if (!userData.email.trim()) {
      errors.email = 'El correo electrónico es requerido';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
      errors.email = 'Ingrese un correo electrónico válido';
      isValid = false;
    }
    
    if (!userData.address.trim()) {
      errors.address = 'La dirección es requerida';
      isValid = false;
    }
    
    if (!userData.idNumber.trim()) {
      errors.idNumber = 'El RFC o CURP es requerido';
      isValid = false;
    }
    
    if (!userData.monthlyIncome || userData.monthlyIncome <= 0) {
      errors.monthlyIncome = 'Ingrese un ingreso mensual válido';
      isValid = false;
    }
    
    if (userData.loanAmount < currentConfig.minAmount || userData.loanAmount > currentConfig.maxAmount) {
      errors.loanAmount = `El monto debe estar entre ${currentConfig.minAmount} y ${currentConfig.maxAmount}`;
      isValid = false;
    }
    
    if (currentConfig.needsCollateral) {
      if (!userData.collateral || userData.collateral.trim() === '') {
        errors.collateral = 'La descripción de la garantía es requerida';
        isValid = false;
      }
      
      if (!userData.collateralValue || userData.collateralValue <= 0) {
        errors.collateralValue = 'El valor de la garantía es requerido';
        isValid = false;
      }
    }
    
    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = () => {
    if (currentStep === 'product') {
      setCurrentStep('details');
    } else if (currentStep === 'details') {
      if (validateForm()) {
        setCurrentStep('results');
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setUserData(prev => ({
      ...prev,
      [name]: name === 'monthlyIncome' || name === 'loanAmount' || name === 'collateralValue' 
        ? parseFloat(value) || 0 
        : value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAmountSliderChange = (value: number[]) => {
    setUserData(prev => ({
      ...prev,
      loanAmount: value[0]
    }));
  };

  const handleTermSliderChange = (value: number[]) => {
    setUserData(prev => ({
      ...prev,
      loanTerm: value[0]
    }));
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 2
    }).format(amount);
  };

  const handleReset = () => {
    setUserData({
      email: '',
      name: '',
      address: '',
      idNumber: '',
      monthlyIncome: 0,
      productType: 'personal',
      loanAmount: 50000,
      loanTerm: 12,
      paymentFrequency: 'monthly',
      collateral: '',
      collateralValue: 0
    });
    setCurrentStep('product');
  };

  return (
    <div className="w-full">
      <Card className="w-full bg-zinc-900 border-zinc-700 text-white shadow-xl transform transition-all duration-500 hover:shadow-2xl">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-xl sm:text-2xl font-bold text-white animate-fade-in">Simulador de Crédito HUSH</CardTitle>
          <CardDescription className="text-zinc-300 text-sm sm:text-base transition-all duration-300">
            {currentStep === 'product' && "Selecciona el tipo de producto y configura tu préstamo"}
            {currentStep === 'details' && "Completa tus datos personales"}
            {currentStep === 'results' && "Resultado de tu simulación"}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
          {currentStep === 'product' && (
            <div className="space-y-4 sm:space-y-6 animate-slide-in-right">
              <div className="space-y-3">
                <Label htmlFor="productType" className="text-base sm:text-lg font-semibold text-zinc-100">Tipo de Producto</Label>
                <Tabs 
                  value={userData.productType} 
                  onValueChange={(value) => handleSelectChange('productType', value)}
                  className="w-full"
                >
                  <TabsList className="grid grid-cols-2 sm:grid-cols-4 w-full bg-zinc-800 border border-zinc-600 h-auto p-1">
                    <TabsTrigger 
                      value="personal" 
                      className="data-[state=active]:bg-white data-[state=active]:text-black text-zinc-100 hover:text-zinc-200 hover:bg-zinc-700 text-xs p-2 font-medium transition-all duration-200 transform hover:scale-[1.02]"
                    >
                      Personal
                    </TabsTrigger>
                    <TabsTrigger 
                      value="micro" 
                      className="data-[state=active]:bg-white data-[state=active]:text-black text-zinc-100 hover:text-zinc-200 hover:bg-zinc-700 text-xs p-2 font-medium transition-all duration-200 transform hover:scale-[1.02]"
                    >
                      Micro
                    </TabsTrigger>
                    <TabsTrigger 
                      value="prenda" 
                      className="data-[state=active]:bg-white data-[state=active]:text-black text-zinc-100 hover:text-zinc-200 hover:bg-zinc-700 text-xs p-2 font-medium transition-all duration-200 transform hover:scale-[1.02]"
                    >
                      Prendario
                    </TabsTrigger>
                    <TabsTrigger 
                      value="pyme" 
                      className="data-[state=active]:bg-white data-[state=active]:text-black text-zinc-100 hover:text-zinc-200 hover:bg-zinc-700 text-xs p-2 font-medium transition-all duration-200 transform hover:scale-[1.02]"
                    >
                      PyME
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label htmlFor="loanAmount" className="text-sm font-medium text-zinc-100">Monto</Label>
                  <span className="text-lg font-bold text-emerald-400 transition-all duration-300 transform hover:scale-105">{formatCurrency(userData.loanAmount)}</span>
                </div>
                <div className="px-2">
                  <Slider
                    id="loanAmount"
                    min={currentConfig.minAmount}
                    max={currentConfig.maxAmount}
                    step={1000}
                    value={[userData.loanAmount]}
                    onValueChange={handleAmountSliderChange}
                    className="py-2"
                  />
                </div>
                <div className="flex justify-between text-xs text-zinc-300">
                  <span>{formatCurrency(currentConfig.minAmount)}</span>
                  <span>{formatCurrency(currentConfig.maxAmount)}</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label htmlFor="loanTerm" className="text-sm font-medium text-zinc-100">Plazo</Label>
                  <span className="text-lg font-bold text-cyan-400 transition-all duration-300 transform hover:scale-105">{userData.loanTerm} meses</span>
                </div>
                <div className="px-2">
                  <Slider
                    id="loanTerm"
                    min={currentConfig.minTerm}
                    max={currentConfig.maxTerm}
                    step={1}
                    value={[userData.loanTerm]}
                    onValueChange={handleTermSliderChange}
                    className="py-2"
                  />
                </div>
                <div className="flex justify-between text-xs text-zinc-300">
                  <span>{currentConfig.minTerm} meses</span>
                  <span>{currentConfig.maxTerm} meses</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="paymentFrequency" className="text-sm font-medium text-zinc-100">Frecuencia de Pago</Label>
                <Select 
                  value={userData.paymentFrequency}
                  onValueChange={(value) => handleSelectChange('paymentFrequency', value)}
                >
                  <SelectTrigger className="bg-zinc-800 border-zinc-600 text-zinc-100 h-10 focus:border-zinc-500 transition-all duration-200 hover:border-zinc-500 hover:bg-zinc-750 transform hover:scale-[1.02]">
                    <SelectValue placeholder="Selecciona frecuencia" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-800 border-zinc-600 text-zinc-100">
                    {currentConfig.allowedFrequencies.includes('weekly') && (
                      <SelectItem value="weekly" className="focus:bg-zinc-700 focus:text-zinc-100 hover:bg-zinc-700 transition-colors duration-150">Semanal</SelectItem>
                    )}
                    {currentConfig.allowedFrequencies.includes('biweekly') && (
                      <SelectItem value="biweekly" className="focus:bg-zinc-700 focus:text-zinc-100 hover:bg-zinc-700 transition-colors duration-150">Quincenal</SelectItem>
                    )}
                    {currentConfig.allowedFrequencies.includes('monthly') && (
                      <SelectItem value="monthly" className="focus:bg-zinc-700 focus:text-zinc-100 hover:bg-zinc-700 transition-colors duration-150">Mensual</SelectItem>
                    )}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          
          {currentStep === 'details' && (
            <div className="space-y-4 animate-slide-in-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-zinc-100">Correo Electrónico</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu.correo@ejemplo.com"
                    value={userData.email}
                    onChange={handleChange}
                    className="bg-zinc-800 border-zinc-600 text-zinc-100 h-10 focus:border-zinc-500 placeholder:text-zinc-400 transition-all duration-200 focus:ring-2 focus:ring-zinc-500/50 hover:border-zinc-500"
                  />
                  {formErrors.email && <p className="text-red-400 text-xs font-medium">{formErrors.email}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-zinc-100">Nombre Completo</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Tu nombre completo"
                    value={userData.name}
                    onChange={handleChange}
                    className="bg-zinc-800 border-zinc-600 text-zinc-100 h-10 focus:border-zinc-500 placeholder:text-zinc-400 transition-all duration-200 focus:ring-2 focus:ring-zinc-500/50 hover:border-zinc-500"
                  />
                  {formErrors.name && <p className="text-red-400 text-xs font-medium">{formErrors.name}</p>}
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="address" className="text-sm font-medium text-zinc-100">Dirección</Label>
                <Input
                  id="address"
                  name="address"
                  placeholder="Tu dirección completa"
                  value={userData.address}
                  onChange={handleChange}
                  className="bg-zinc-800 border-zinc-600 text-zinc-100 h-10 focus:border-zinc-500 placeholder:text-zinc-400 transition-all duration-200 focus:ring-2 focus:ring-zinc-500/50 hover:border-zinc-500"
                />
                {formErrors.address && <p className="text-red-400 text-xs font-medium">{formErrors.address}</p>}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="idNumber" className="text-sm font-medium text-zinc-100">RFC o CURP</Label>
                  <Input
                    id="idNumber"
                    name="idNumber"
                    placeholder="Tu RFC o CURP"
                    value={userData.idNumber}
                    onChange={handleChange}
                    className="bg-zinc-800 border-zinc-600 text-zinc-100 h-10 focus:border-zinc-500 placeholder:text-zinc-400 transition-all duration-200 focus:ring-2 focus:ring-zinc-500/50 hover:border-zinc-500"
                  />
                  {formErrors.idNumber && <p className="text-red-400 text-xs font-medium">{formErrors.idNumber}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="monthlyIncome" className="text-sm font-medium text-zinc-100">Ingreso Mensual</Label>
                  <Input
                    id="monthlyIncome"
                    name="monthlyIncome"
                    type="number"
                    min="0"
                    step="100"
                    placeholder="0.00"
                    value={userData.monthlyIncome || ''}
                    onChange={handleChange}
                    className="bg-zinc-800 border-zinc-600 text-zinc-100 h-10 focus:border-zinc-500 placeholder:text-zinc-400 transition-all duration-200 focus:ring-2 focus:ring-zinc-500/50 hover:border-zinc-500"
                  />
                  {formErrors.monthlyIncome && <p className="text-red-400 text-xs font-medium">{formErrors.monthlyIncome}</p>}
                </div>
              </div>
              
              {currentConfig.needsCollateral && (
                <div className="space-y-4 border-t border-zinc-600 pt-4">
                  <h4 className="text-base font-semibold text-zinc-200">Información de Garantía</h4>
                  <div className="space-y-2">
                    <Label htmlFor="collateral" className="text-sm font-medium text-zinc-100">Descripción de la Garantía</Label>
                    <Input
                      id="collateral"
                      name="collateral"
                      placeholder="Describe la garantía"
                      value={userData.collateral || ''}
                      onChange={handleChange}
                      className="bg-zinc-800 border-zinc-600 text-zinc-100 h-10 focus:border-zinc-500 placeholder:text-zinc-400 transition-all duration-200 focus:ring-2 focus:ring-zinc-500/50 hover:border-zinc-500"
                    />
                    {formErrors.collateral && <p className="text-red-400 text-xs font-medium">{formErrors.collateral}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="collateralValue" className="text-sm font-medium text-zinc-100">Valor Estimado</Label>
                    <Input
                      id="collateralValue"
                      name="collateralValue"
                      type="number"
                      min="0"
                      step="1000"
                      placeholder="0.00"
                      value={userData.collateralValue || ''}
                      onChange={handleChange}
                      className="bg-zinc-800 border-zinc-600 text-zinc-100 h-10 focus:border-zinc-500 placeholder:text-zinc-400 transition-all duration-200 focus:ring-2 focus:ring-zinc-500/50 hover:border-zinc-500"
                    />
                    {formErrors.collateralValue && <p className="text-red-400 text-xs font-medium">{formErrors.collateralValue}</p>}
                  </div>
                </div>
              )}
            </div>
          )}
          
          {currentStep === 'results' && (
            <div className="space-y-6 animate-fade-in-up">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column - Loan Details + Notes */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-center text-zinc-100">Detalles del Préstamo</h3>
                    <div className="bg-zinc-800 border border-zinc-600 p-4 sm:p-6 rounded-lg space-y-3 transform transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-750">
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-300 font-medium">Tipo de Producto</span>
                        <span className="font-semibold text-zinc-100">
                          {userData.productType === 'personal' && 'Crédito Personal'}
                          {userData.productType === 'micro' && 'Microcrédito'}
                          {userData.productType === 'prenda' && 'Crédito Prendario'}
                          {userData.productType === 'pyme' && 'Crédito PyME'}
                        </span>
                      </div>
                      <Separator className="bg-zinc-600" />
                      
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-300 font-medium">Monto del Préstamo</span>
                        <span className="font-semibold text-emerald-400">{formatCurrency(userData.loanAmount)}</span>
                      </div>
                      <Separator className="bg-zinc-600" />
                      
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-300 font-medium">Plazo</span>
                        <span className="font-semibold text-cyan-400">{userData.loanTerm} meses</span>
                      </div>
                      <Separator className="bg-zinc-600" />
                      
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-300 font-medium">Frecuencia de Pago</span>
                        <span className="font-semibold text-zinc-100">
                          {userData.paymentFrequency === 'weekly' && 'Semanal'}
                          {userData.paymentFrequency === 'biweekly' && 'Quincenal'}
                          {userData.paymentFrequency === 'monthly' && 'Mensual'}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Important Notes - Static */}
                  <div className="bg-zinc-950 border border-zinc-700 p-4 rounded-lg">
                    <p className="mb-3 font-semibold text-zinc-200">Notas importantes:</p>
                    <ul className="space-y-2 list-disc pl-5 text-sm text-zinc-300">
                      <li>Esta simulación es informativa y no constituye una oferta de crédito.</li>
                      <li>La aprobación final está sujeta a evaluación crediticia y políticas de HUSH Financiera.</li>
                      <li>Las tasas pueden variar según tu historial crediticio y perfil financiero.</li>
                      <li>Para más información, contacta a un asesor de HUSH Financiera.</li>
                    </ul>
                  </div>
                </div>
                
                {/* Right Column - Simulation Results */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-center text-zinc-100">Resultado de la Simulación</h3>
                  <div className="bg-gradient-to-br from-zinc-800 to-zinc-700 border border-zinc-600 p-6 rounded-lg transform transition-all duration-500 hover:shadow-xl hover:shadow-zinc-900/50">
                    <div className="text-center mb-6">
                      <p className="text-zinc-200 mb-2 text-base font-medium">
                        Pago {userData.paymentFrequency === 'weekly' ? 'Semanal' : userData.paymentFrequency === 'biweekly' ? 'Quincenal' : 'Mensual'}
                      </p>
                      <p className="text-3xl font-bold text-white animate-bounce-subtle">{formatCurrency(paymentAmount)}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-4 text-center mb-6">
                      <div className="bg-zinc-900 border border-zinc-600 p-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-zinc-800">
                        <p className="text-zinc-300 text-sm mb-1 font-medium">Total a Pagar</p>
                        <p className="text-xl font-bold text-zinc-100">{formatCurrency(totalPayment)}</p>
                      </div>
                      <div className="bg-zinc-900 border border-zinc-600 p-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-zinc-800">
                        <p className="text-zinc-300 text-sm mb-1 font-medium">Intereses</p>
                        <p className="text-xl font-bold text-orange-400">{formatCurrency(totalInterest)}</p>
                      </div>
                    </div>
                    
                    <Separator className="my-4 bg-zinc-600" />
                    
                    <div className="text-center">
                      <p className="text-zinc-200 text-sm mb-1 font-medium">CAT Estimado</p>
                      <p className="text-2xl font-bold text-yellow-400 animate-pulse-subtle">{catEstimate.toFixed(2)}%*</p>
                      <p className="text-xs text-zinc-400 mt-1">*Sin IVA. Calculado con fines informativos.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            {currentStep !== 'product' && (
              <Button 
                type="button" 
                variant="outline" 
                className="flex-1 border-zinc-600 bg-zinc-800 text-zinc-100 hover:bg-zinc-700 hover:text-white h-10 font-medium transition-all duration-200 transform hover:scale-105"
                onClick={() => setCurrentStep(currentStep === 'details' ? 'product' : 'details')}
              >
                Regresar
              </Button>
            )}
            
            {currentStep !== 'results' ? (
              <Button 
                type="button" 
                className="flex-1 bg-white text-zinc-900 hover:bg-zinc-100 hover:text-zinc-900 h-10 font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                onClick={handleSubmit}
              >
                {currentStep === 'product' ? 'Continuar' : 'Calcular'}
              </Button>
            ) : (
              <Button 
                type="button"
                className="flex-1 bg-white text-zinc-900 hover:bg-zinc-100 hover:text-zinc-900 h-10 font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                onClick={handleReset}
              >
                Nueva Simulación
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}