'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';

import { Payment } from '@prisma/client';
import { Table } from '@tanstack/react-table';
import { ChevronDownIcon, PlusCircle } from 'lucide-react';

interface Props {
  table: Table<Payment>;
}

export const TableControls = ({ table }: Props) => {
  return (
    <div className="flex flex-col gap-2 py-4 sm:flex-row sm:gap-0">
      <Input
        placeholder="Filter emails..."
        value={(table.getColumn('userEmail')?.getFilterValue() as string) ?? ''}
        onChange={(event) => table.getColumn('userEmail')?.setFilterValue(event.target.value)}
        className="max-w-sm bg-background"
      />
      <div className="mr-auto flex items-center gap-2 sm:ml-auto sm:mr-0">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
        <Button className="ml-auto gap-1">
          <PlusCircle className="h-4 w-4 sm:ml-2" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Add Payment</span>
        </Button>
      </div>
    </div>
  );
};
