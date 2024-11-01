import React from 'react';

const CompoundFrequencySelector = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="compoundFrequency">תדירות חישוב הריבית:</label>
      <select id="compoundFrequency" value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="daily">יומית</option>
        <option value="monthly">חודשית</option>
        <option value="annually">שנתית</option>
      </select>
    </div>
  );
};

export default CompoundFrequencySelector;
