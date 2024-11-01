import React from 'react';

const InvestmentDurationInput = ({ value, onChange, unit, onUnitChange }) => {
  return (
    <div>
      <label htmlFor="investmentDuration">תקופת ההשקעה:</label>
      <input
        type="number"
        id="investmentDuration"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="הזן משך זמן"
      />
      <select value={unit} onChange={(e) => onUnitChange(e.target.value)}>
        <option value="years">שנים</option>
        <option value="months">חודשים</option>
      </select>
    </div>
  );
};

export default InvestmentDurationInput;
