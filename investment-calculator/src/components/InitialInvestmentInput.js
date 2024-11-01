import React from 'react';

const InitialInvestmentInput = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="initialInvestment">סכום התחלתי:</label>
      <input
        type="number"
        id="initialInvestment"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="הזן סכום התחלתי"
      />
    </div>
  );
};

export default InitialInvestmentInput;