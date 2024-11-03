import React from 'react';
import { motion } from 'framer-motion';
import Button from 'react-bootstrap/Button';

const CalculateButton = ({ onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Button variant="primary" size="lg" onClick={onClick} className="mt-3">
        חישוב
      </Button>
    </motion.div>
  );
};

export default CalculateButton;




