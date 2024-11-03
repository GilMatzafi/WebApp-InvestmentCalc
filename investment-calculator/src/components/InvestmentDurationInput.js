import React from 'react';
import Form from 'react-bootstrap/Form';

const InvestmentDurationInput = ({ value, onChange, unit, onUnitChange }) => {
  return (
    <Form.Group controlId="investmentDuration" className="mb-3">
      <Form.Label>תקופת ההשקעה:</Form.Label>
      <Form.Control
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="הזן משך זמן"
      />
      <Form.Select value={unit} onChange={(e) => onUnitChange(e.target.value)}>
        <option value="years">שנים</option>
        <option value="months">חודשים</option>
      </Form.Select>
    </Form.Group>
  );
};

export default InvestmentDurationInput;

