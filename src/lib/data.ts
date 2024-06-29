import prisma from './prisma';

import { Payment } from '@prisma/client';

export const fetchPayments = async (): Promise<Payment[]> => {
  try {
    const data = await prisma.payment.findMany();

    return data;
  } catch (error: unknown) {
    console.error('Error: ', error);
    throw new Error('Failed to fetch payments data.');
  }
};
