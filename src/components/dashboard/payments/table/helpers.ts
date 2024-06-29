import { Payment, Status } from '@prisma/client';

export const getVariant = (status: Payment['status']) => {
  switch (status) {
    case Status.PENDING:
      return 'default';
    case Status.PROCESSING:
      return 'outline';
    case Status.SUCCESS:
      return 'success';
    case Status.FAILED:
      return 'destructive';
  }
};

export const formatted = (amount: Payment['amount']) => {
  const value = parseFloat(amount);

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value);
};
