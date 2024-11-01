import React from 'react';

const AnnualInterestRateInput = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="annualInterestRate">ריבית שנתית (%):</label>
      <input
        type="number"
        id="annualInterestRate"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="הזן שיעור ריבית"
        step="0.01"
        min="0"
      />
    </div>
  );
};

export default AnnualInterestRateInput;
