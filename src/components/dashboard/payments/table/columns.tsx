'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

import { formatted, getVariant } from './helpers';
import { TableActions } from './table-actions';

import { Payment } from '@prisma/client';
import { CaretSortIcon } from '@radix-ui/react-icons';
import { ColumnDef } from '@tanstack/react-table';

export const paymentsTableColumns: ColumnDef<Payment>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Status
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <Badge
        className="inline-flex w-24 items-center justify-center"
        variant={getVariant(row.getValue('status'))}
      >
        {row.getValue('status')}
      </Badge>
    )
  },
  {
    accessorKey: 'userEmail',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Email
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    }
  },
  {
    accessorKey: 'amount',
    header: () => <div className="text-left">Amount</div>,
    cell: ({ row }) => (
      <div className="text-left font-medium">{formatted(row.getValue('amount'))}</div>
    )
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Created At
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date: Date = row.getValue('createdAt');

      return <div suppressHydrationWarning>{date.toLocaleString()}</div>;
    }
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => <TableActions paymentId={row.original.id} />
  }
];
