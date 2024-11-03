import React from 'react';
import Form from 'react-bootstrap/Form';

const InitialInvestmentInput = ({ value, onChange }) => {
  return (
    <Form.Group controlId="initialInvestment" className="mb-3">
      <Form.Label>סכום התחלתי:</Form.Label>
      <Form.Control
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="הזן סכום התחלתי"
      />
    </Form.Group>
  );
};

export default InitialInvestmentInput;

