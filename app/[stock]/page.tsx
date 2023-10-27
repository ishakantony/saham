import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getStockByName } from '@/lib/data/stock-by-name';

const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card',
  },
]

export default function Stock({ params }: { params: { stock: string } }) {
  const { stock } = params
  const stockDetails = getStockByName();
  const stockDetailsRowOne = stockDetails[0];

  const headerRows = ["Title", ...(stockDetailsRowOne.data.map(sdd => {
    return `${sdd.year} - Q${sdd.quarter}`
  }))]

  const bodyRows = stockDetails.map(sd => {

    return [sd.title, ...(sd.data.map(sdd => sdd.value))]

  })

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Table>
        <TableCaption><h1 className='text-3xl'>{stock}</h1></TableCaption>
        <TableHeader>
          <TableRow>

            { headerRows.map((title, index) => {

              if (index === 0) {
                return <TableHead key={title} className='w-[50px]'>{title}</TableHead>;
              } else {
                return <TableHead key={title} className="w-[100px] text-right">{title}</TableHead>;
              }

            }) }

          </TableRow>
        </TableHeader>
        <TableBody>
          {bodyRows.map((row, index) => (
            <TableRow key={index}>

              { row.map((value, index) => {

              if (index === 0) {
                return <TableCell key={value} className='w-[50px]'>{value}</TableCell>;
              } else {
                return <TableCell key={value} className="w-[100px] text-right">{value}</TableCell>;
              }

              }) }

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  )
}
