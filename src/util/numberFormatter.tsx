import React from 'react';

interface NumberFormatterProps {
  value: number;
}

const NumberFormatter: React.FC<NumberFormatterProps> = ({ value }) => {
  const formatNumber = (num: number): string => {
    if (num < 1000) {
      return num.toString();
    } else if (num < 1000000) {
      return (num / 1000).toFixed(1) + 'K';
    } else if (num < 1000000000) {
      return (num / 1000000).toFixed(2) + 'Mio';
    } else {
      return (num / 1000000000).toFixed(2) + 'B';
    }
  };

  return <>{formatNumber(value)}</>;
};

export default NumberFormatter;
