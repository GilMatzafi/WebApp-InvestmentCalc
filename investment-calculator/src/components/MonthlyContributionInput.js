import React from 'react';
import Form from 'react-bootstrap/Form';

const MonthlyContributionInput = ({ value, onChange }) => {
  return (
    <Form.Group controlId="monthlyContribution" className="mb-3">
      <Form.Label>הפקדה חודשית:</Form.Label>
      <Form.Control
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="הזן סכום חודשי"
      />
    </Form.Group>
  );
};

export default MonthlyContributionInput;

