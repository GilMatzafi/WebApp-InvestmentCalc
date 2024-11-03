import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import InitialInvestmentInput from './InitialInvestmentInput';
import InvestmentDurationInput from './InvestmentDurationInput';
import AnnualInterestRateInput from './AnnualInterestRateInput';
import CompoundFrequencySelector from './CompoundFrequencySelector';
import MonthlyContributionInput from './MonthlyContributionInput';
import CalculateButton from './CalculateButton';
import InvestmentGrowthChart from './InvestmentGrowthChart';

const InvestmentCalculator = () => {
  // הגדרת state עבור כל אחד מהערכים מהקומפוננטים
  const [initialInvestment, setInitialInvestment] = useState('');
  const [monthlyContribution, setMonthlyContribution] = useState('');
  const [investmentDuration, setInvestmentDuration] = useState('');
  const [investmentUnit, setInvestmentUnit] = useState('years');
  const [annualInterestRate, setAnnualInterestRate] = useState('');
  const [compoundFrequency, setCompoundFrequency] = useState('annually');
  const [result, setResult] = useState(null);
  const [chartData, setChartData] = useState([]);


  const handleCalculate = () => {
    const P = parseFloat(initialInvestment);
    const r = parseFloat(annualInterestRate) / 100;
    const t = investmentUnit === 'years' ? parseFloat(investmentDuration) : parseFloat(investmentDuration) / 12;
    const n = compoundFrequency === 'daily' ? 365 : compoundFrequency === 'monthly' ? 12 : 1;
    const M = parseFloat(monthlyContribution);
  
    // חישוב הסכום הראשוני עם ריבית דריבית
    let data = [];
    let accumulatedAmount = P;
    let futureValueOfMonthlyContribution = 0;
  
    for (let year = 1; year <= t; year++) {
      // חישוב הקרן בתום כל שנה
      accumulatedAmount = accumulatedAmount * Math.pow(1 + r / n, n);
  
      // חישוב הערך העתידי של הפקדות חודשיות במהלך כל שנה
      if (M > 0) {
        futureValueOfMonthlyContribution = M * ((Math.pow(1 + r / 12, year * 12) - 1) / (r / 12));
      }
  
      const totalAmount = accumulatedAmount + futureValueOfMonthlyContribution;
  
      // הוספת הנתונים עבור השנה לגרף
      data.push({ year, amount: parseFloat(totalAmount.toFixed(2)) });
    }
  
    setChartData(data);
    setResult(data[data.length - 1].amount.toFixed(2));
  };
  
  

  return (
    <Container className="mt-5">
      <motion.h1 
            className="text-center display-4 mb-4 title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <a href="/" className="title-link">מחשבון השקעות</a>
        </motion.h1>      
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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="result text-center">תוצאה: ₪{result}</h2>
          <InvestmentGrowthChart data={chartData} />
        </motion.div>
    )}
    </Container>
  );
};

export default InvestmentCalculator;
