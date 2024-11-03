import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import InitialInvestmentInput from './InitialInvestmentInput';
import InvestmentDurationInput from './InvestmentDurationInput';
import AnnualInterestRateInput from './AnnualInterestRateInput';
import CompoundFrequencySelector from './CompoundFrequencySelector';
import MonthlyContributionInput from './MonthlyContributionInput';
import CalculateButton from './CalculateButton';

const InvestmentCalculator = () => {
  // הגדרת state עבור כל אחד מהערכים מהקומפוננטים
  const [initialInvestment, setInitialInvestment] = useState('');
  const [monthlyContribution, setMonthlyContribution] = useState('');
  const [investmentDuration, setInvestmentDuration] = useState('');
  const [investmentUnit, setInvestmentUnit] = useState('years');
  const [annualInterestRate, setAnnualInterestRate] = useState('');
  const [compoundFrequency, setCompoundFrequency] = useState('annually');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const P = parseFloat(initialInvestment);
    const r = parseFloat(annualInterestRate) / 100;
    const t = investmentUnit === 'years' ? parseFloat(investmentDuration) : parseFloat(investmentDuration) / 12;
    const n = compoundFrequency === 'daily' ? 365 : compoundFrequency === 'monthly' ? 12 : 1;
    const M = parseFloat(monthlyContribution);
  
    // חישוב סכום הקרן המקורי
    const A = P * Math.pow((1 + r / n), n * t);
  
    // חישוב הסכום מההפקדות החודשיות
    let futureValueOfMonthlyContribution = 0;
    if (M > 0) {
      const months = t * 12;
      const monthlyRate = r / 12;
      futureValueOfMonthlyContribution = M * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
    }
  
    const totalAmount = A + futureValueOfMonthlyContribution;
    setResult(totalAmount.toFixed(2));
  };
  

  return (
    <Container className="mt-5">
      <h1 className="text-center display-4 mb-4 title">מחשבון השקעות</h1>
      
      <Card className="p-4 shadow-sm custom-card">
        <Form>
          <InitialInvestmentInput value={initialInvestment} onChange={setInitialInvestment} />
          <InvestmentDurationInput 
            value={investmentDuration} 
            onChange={setInvestmentDuration} 
            unit={investmentUnit} 
            onUnitChange={setInvestmentUnit} 
          />
          <MonthlyContributionInput value={monthlyContribution} onChange={setMonthlyContribution} />
          <AnnualInterestRateInput value={annualInterestRate} onChange={setAnnualInterestRate} />
          <CompoundFrequencySelector value={compoundFrequency} onChange={setCompoundFrequency} />
          
          <div className="text-center">
            <CalculateButton onClick={handleCalculate} />
          </div>
        </Form>
      </Card>

      {result && (
        <h2 className="result text-center">תוצאה: ₪{result}</h2>
      )}
    </Container>
  );
};

export default InvestmentCalculator;
