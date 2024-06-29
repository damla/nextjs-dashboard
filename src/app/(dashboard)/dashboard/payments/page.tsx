import { paymentsTableColumns } from '@/components/dashboard/payments/columns';
import { Table } from '@/components/dashboard/payments/table';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { fetchPayments } from '@/lib/data';

import Loading from '../loading';

import { Suspense } from 'react';

export default async function Payments() {
  const payments = await fetchPayments();

  return (
    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
        <Card className="sm:col-span-4" x-chunk="dashboard-05-chunk-0">
          <CardHeader>
            <CardTitle>Your Payments</CardTitle>
            <CardDescription className="text-balance leading-relaxed">
              Introducing Our Dynamic Payments Dashboard for Seamless Management and Insightful
              Analysis.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      <Suspense fallback={<Loading />}>
        <Table data={payments} columns={paymentsTableColumns} />
      </Suspense>
    </div>
  );
}
