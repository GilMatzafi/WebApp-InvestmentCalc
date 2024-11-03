import React from 'react';
import Button from 'react-bootstrap/Button';

const CalculateButton = ({ onClick }) => {
  return (
    <Button className="mt-3 btn-lg calculate-button" onClick={onClick}>
      חישוב
    </Button>
  );
};

export default CalculateButton;



