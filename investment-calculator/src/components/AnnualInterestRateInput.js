import React from 'react';
import Form from 'react-bootstrap/Form';

const AnnualInterestRateInput = ({ value, onChange }) => {
  return (
    <Form.Group controlId="annualInterestRate" className="mb-3">
      <Form.Label>ריבית שנתית (%):</Form.Label>
      <Form.Control
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="הזן שיעור ריבית"
        step="0.01"
        min="0"
      />
    </Form.Group>
  );
};

export default AnnualInterestRateInput;

