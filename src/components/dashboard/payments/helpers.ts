import { Payment } from './types';

export const getVariant = (status: Payment['status']) => {
  switch (status) {
    case 'pending':
      return 'default';
    case 'processing':
      return 'outline';
    case 'success':
      return 'success';
    case 'failed':
      return 'destructive';
  }
};

export const formatted = (amount: string) => {
  const value = parseFloat(amount);

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value);
};
