import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type Step = 'product' | 'details' | 'results';

interface UserData {
  email: string;
  name: string;
  address: string;
  idNumber: string; // RFC o CURP
  monthlyIncome: number;
  productType: string;
  loanAmount: number;
  loanTerm: number;
  paymentFrequency: 'weekly' | 'biweekly' | 'monthly';
  collateral?: string;
  collateralValue?: number;
}

// Configuración según los productos de HUSH
const productConfigs = {
  personal: {
    minAmount: 1000,
    maxAmount: 500000,
    minTerm: 2,
    maxTerm: 96,
    interestRate: 0.18, // 18% anual para este ejemplo
    allowedFrequencies: ['weekly', 'biweekly', 'monthly'],
    needsCollateral: false
  },
  micro: {
    minAmount: 1000,
    maxAmount: 250000, // Aproximación de 30 mil UDIS
    minTerm: 1,
    maxTerm: 36,
    interestRate: 0.24, // 24% anual para este ejemplo
    allowedFrequencies: ['weekly', 'biweekly', 'monthly'],
    needsCollateral: false
  },
  prenda: {
    minAmount: 5000,
    maxAmount: 1000000,
    minTerm: 1,
    maxTerm: 24,
    interestRate: 0.15, // 15% anual para este ejemplo
    allowedFrequencies: ['monthly'],
    needsCollateral: true
  },
  pyme: {
    minAmount: 50000,
    maxAmount: 5000000,
    minTerm: 6,
    maxTerm: 60,
    interestRate: 0.16, // 16% anual para este ejemplo
    allowedFrequencies: ['monthly'],
    needsCollateral: true
  }
};

export const LoanSimulator: React.FC = () => {
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

  // Calculate loan details whenever relevant fields change
  useEffect(() => {
    if (userData.loanAmount > 0 && userData.loanTerm > 0) {
      calculateLoan();
    }
  }, [userData.loanAmount, userData.loanTerm, userData.paymentFrequency, userData.productType]);

  // Calculate loan payment and related metrics
  const calculateLoan = () => {
    const principal = userData.loanAmount;
    const termInYears = userData.loanTerm / 12;
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
      default: // monthly
        periodicRate = annualRate / 12;
        numberOfPayments = userData.loanTerm;
    }

    // Calculate payment amount using the formula for regular loan payments
    const payment = (principal * periodicRate * Math.pow(1 + periodicRate, numberOfPayments)) /
                   (Math.pow(1 + periodicRate, numberOfPayments) - 1);
    
    const totalPaid = payment * numberOfPayments;
    const interestPaid = totalPaid - principal;
    
    // Calculate simple CAT (Costo Anual Total) - this is simplified
    const simpleCat = annualRate * 100 * 1.16; // Adding 16% for VAT as an example
    
    setPaymentAmount(payment);
    setTotalInterest(interestPaid);
    setTotalPayment(totalPaid);
    setCatEstimate(simpleCat);
  };

  // Validate form fields
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
    
    // Basic validation
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
      errors.loanAmount = `El monto debe estar entre $${currentConfig.minAmount} y $${currentConfig.maxAmount}`;
      isValid = false;
    }
    
    // Validate collateral if needed
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

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentStep === 'product') {
      setCurrentStep('details');
    } else if (currentStep === 'details') {
      if (validateForm()) {
        setCurrentStep('results');
      }
    }
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setUserData(prev => ({
      ...prev,
      [name]: name === 'monthlyIncome' || name === 'loanAmount' || name === 'collateralValue' 
        ? parseFloat(value) || 0 
        : value
    }));
  };

  // Handle select changes
  const handleSelectChange = (name: string, value: string) => {
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle slider change for loan amount
  const handleAmountSliderChange = (value: number[]) => {
    setUserData(prev => ({
      ...prev,
      loanAmount: value[0]
    }));
  };

  // Handle slider change for loan term
  const handleTermSliderChange = (value: number[]) => {
    setUserData(prev => ({
      ...prev,
      loanTerm: value[0]
    }));
  };

  // Format currency
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 2
    }).format(amount);
  };

  // Reset simulator
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
    <Card className="w-full mx-auto bg-zinc-900 border-zinc-800 text-white">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Simulador de Crédito HUSH</CardTitle>
        <CardDescription className="text-zinc-400">
          {currentStep === 'product' && "Selecciona el tipo de producto y configura tu préstamo"}
          {currentStep === 'details' && "Completa tus datos personales"}
          {currentStep === 'results' && "Resultado de tu simulación"}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit}>
          {currentStep === 'product' && (
            <div className="space-y-6">
              <div className="space-y-4">
                <Label htmlFor="productType">Tipo de Producto</Label>
                <Tabs 
                  value={userData.productType} 
                  onValueChange={(value) => handleSelectChange('productType', value)}
                  className="w-full"
                >
                  <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full bg-zinc-800">
                    <TabsTrigger value="personal" className="data-[state=active]:bg-white data-[state=active]:text-black">
                      Crédito Personal
                    </TabsTrigger>
                    <TabsTrigger value="micro" className="data-[state=active]:bg-white data-[state=active]:text-black">
                      Microcrédito
                    </TabsTrigger>
                    <TabsTrigger value="prenda" className="data-[state=active]:bg-white data-[state=active]:text-black">
                      Crédito Prendario
                    </TabsTrigger>
                    <TabsTrigger value="pyme" className="data-[state=active]:bg-white data-[state=active]:text-black">
                      Crédito PyME
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label htmlFor="loanAmount">Monto del Préstamo</Label>
                  <span className="text-lg font-semibold">{formatCurrency(userData.loanAmount)}</span>
                </div>
                <Slider
                  id="loanAmount"
                  min={currentConfig.minAmount}
                  max={currentConfig.maxAmount}
                  step={1000}
                  value={[userData.loanAmount]}
                  onValueChange={handleAmountSliderChange}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-zinc-500">
                  <span>{formatCurrency(currentConfig.minAmount)}</span>
                  <span>{formatCurrency(currentConfig.maxAmount)}</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label htmlFor="loanTerm">Plazo (meses)</Label>
                  <span className="text-lg font-semibold">{userData.loanTerm} meses</span>
                </div>
                <Slider
                  id="loanTerm"
                  min={currentConfig.minTerm}
                  max={currentConfig.maxTerm}
                  step={1}
                  value={[userData.loanTerm]}
                  onValueChange={handleTermSliderChange}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-zinc-500">
                  <span>{currentConfig.minTerm} meses</span>
                  <span>{currentConfig.maxTerm} meses</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="paymentFrequency">Frecuencia de Pago</Label>
                <Select 
                  value={userData.paymentFrequency}
                  onValueChange={(value) => handleSelectChange('paymentFrequency', value)}
                >
                  <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white">
                    <SelectValue placeholder="Selecciona frecuencia" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                    {currentConfig.allowedFrequencies.includes('weekly') && (
                      <SelectItem value="weekly">Semanal</SelectItem>
                    )}
                    {currentConfig.allowedFrequencies.includes('biweekly') && (
                      <SelectItem value="biweekly">Quincenal</SelectItem>
                    )}
                    {currentConfig.allowedFrequencies.includes('monthly') && (
                      <SelectItem value="monthly">Mensual</SelectItem>
                    )}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          
          {currentStep === 'details' && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu.correo@ejemplo.com"
                  value={userData.email}
                  onChange={handleChange}
                  className="bg-zinc-800 border-zinc-700 text-white"
                />
                {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="name">Nombre Completo</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Tu nombre completo"
                  value={userData.name}
                  onChange={handleChange}
                  className="bg-zinc-800 border-zinc-700 text-white"
                />
                {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="address">Dirección</Label>
                <Input
                  id="address"
                  name="address"
                  placeholder="Tu dirección completa"
                  value={userData.address}
                  onChange={handleChange}
                  className="bg-zinc-800 border-zinc-700 text-white"
                />
                {formErrors.address && <p className="text-red-500 text-sm">{formErrors.address}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="idNumber">RFC o CURP</Label>
                <Input
                  id="idNumber"
                  name="idNumber"
                  placeholder="Tu RFC o CURP"
                  value={userData.idNumber}
                  onChange={handleChange}
                  className="bg-zinc-800 border-zinc-700 text-white"
                />
                {formErrors.idNumber && <p className="text-red-500 text-sm">{formErrors.idNumber}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="monthlyIncome">Ingreso Mensual (MXN)</Label>
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
              
              {currentConfig.needsCollateral && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="collateral">Descripción de la Garantía</Label>
                    <Input
                      id="collateral"
                      name="collateral"
                      placeholder="Describe la garantía (propiedad, vehículo, etc.)"
                      value={userData.collateral || ''}
                      onChange={handleChange}
                      className="bg-zinc-800 border-zinc-700 text-white"
                    />
                    {formErrors.collateral && <p className="text-red-500 text-sm">{formErrors.collateral}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="collateralValue">Valor Estimado de la Garantía (MXN)</Label>
                    <Input
                      id="collateralValue"
                      name="collateralValue"
                      type="number"
                      min="0"
                      step="1000"
                      placeholder="0.00"
                      value={userData.collateralValue || ''}
                      onChange={handleChange}
                      className="bg-zinc-800 border-zinc-700 text-white"
                    />
                    {formErrors.collateralValue && <p className="text-red-500 text-sm">{formErrors.collateralValue}</p>}
                  </div>
                </>
              )}
            </div>
          )}
          
          {currentStep === 'results' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Detalles del Préstamo</h3>
                <div className="bg-zinc-800 p-6 rounded-md space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Tipo de Producto</span>
                    <span className="font-medium">
                      {userData.productType === 'personal' && 'Crédito Personal'}
                      {userData.productType === 'micro' && 'Microcrédito'}
                      {userData.productType === 'prenda' && 'Crédito Prendario'}
                      {userData.productType === 'pyme' && 'Crédito PyME'}
                    </span>
                  </div>
                  <Separator className="bg-zinc-700" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Monto del Préstamo</span>
                    <span className="font-medium">{formatCurrency(userData.loanAmount)}</span>
                  </div>
                  <Separator className="bg-zinc-700" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Plazo</span>
                    <span className="font-medium">{userData.loanTerm} meses</span>
                  </div>
                  <Separator className="bg-zinc-700" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Frecuencia de Pago</span>
                    <span className="font-medium">
                      {userData.paymentFrequency === 'weekly' && 'Semanal'}
                      {userData.paymentFrequency === 'biweekly' && 'Quincenal'}
                      {userData.paymentFrequency === 'monthly' && 'Mensual'}
                    </span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Resultado de la Simulación</h3>
                <div className="bg-zinc-800 p-6 rounded-md">
                  <div className="text-center mb-6">
                    <p className="text-zinc-400 mb-1">Pago {userData.paymentFrequency === 'weekly' ? 'Semanal' : userData.paymentFrequency === 'biweekly' ? 'Quincenal' : 'Mensual'}</p>
                    <p className="text-3xl font-bold">{formatCurrency(paymentAmount)}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-zinc-400 text-sm mb-1">Total a Pagar</p>
                      <p className="font-medium">{formatCurrency(totalPayment)}</p>
                    </div>
                    <div>
                      <p className="text-zinc-400 text-sm mb-1">Intereses</p>
                      <p className="font-medium">{formatCurrency(totalInterest)}</p>
                    </div>
                  </div>
                  
                  <Separator className="my-4 bg-zinc-700" />
                  
                  <div className="text-center">
                    <p className="text-zinc-400 text-sm mb-1">CAT Estimado</p>
                    <p className="font-medium">{catEstimate.toFixed(2)}%*</p>
                    <p className="text-xs text-zinc-500 mt-2">*Sin IVA. Calculado con fines informativos.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-zinc-950 p-4 rounded-md text-sm text-zinc-400">
                <p className="mb-2">Notas importantes:</p>
                <ul className="space-y-1 list-disc pl-4">
                  <li>Esta simulación es informativa y no constituye una oferta de crédito.</li>
                  <li>La aprobación final está sujeta a evaluación crediticia y políticas de HUSH Financiera.</li>
                  <li>Las tasas pueden variar según tu historial crediticio y perfil financiero.</li>
                  <li>Para más información, contacta a un asesor de HUSH Financiera.</li>
                </ul>
              </div>
            </div>
          )}
          
          <div className="flex space-x-4 mt-8">
            {currentStep !== 'product' && (
              <Button 
                type="button" 
                variant="outline" 
                className="flex-1 border-zinc-700 hover:bg-zinc-800"
                onClick={() => setCurrentStep(currentStep === 'details' ? 'product' : 'details')}
              >
                Regresar
              </Button>
            )}
            
            {currentStep !== 'results' ? (
              <Button 
                type="submit" 
                className="flex-1 bg-white text-black hover:bg-zinc-200"
              >
                {currentStep === 'product' ? 'Continuar' : 'Calcular'}
              </Button>
            ) : (
              <Button 
                type="button"
                className="flex-1 bg-white text-black hover:bg-zinc-200"
                onClick={handleReset}
              >
                Nueva Simulación
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoanSimulator;