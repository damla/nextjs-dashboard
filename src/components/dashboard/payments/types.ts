export interface Payment {
  id: string;
  amount: string;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
}
