import './App.css';
import React from 'react';
import InitialInvestmentInput from './components/InitialInvestmentInput';
import InvestmentDurationInput from './components/InvestmentDurationInput';
import AnnualInterestRateInput from './components/AnnualInterestRateInput';
import CompoundFrequencySelector from './components/CompoundFrequencySelector';
import CalculateButton from './components/CalculateButton';
import InvestmentCalculator from './components/InvestmentCalculator';


function App() {
  return (
    <div className="App">
      <InvestmentCalculator />
    </div>
  );
}

export default App;

