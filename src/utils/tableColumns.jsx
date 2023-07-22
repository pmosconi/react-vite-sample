import { InStock, OutOfStock } from '../StockIndicators';
import Link from "@cloudscape-design/components/link";

export const COLUMNS = [
  {
    header: 'Category',
    id: 'category',
    cell: item => item.category || "",
  },
  {
    header: 'Name',
    id: 'name',
    cell: item => <Link href={`/product/${item.name}`}>{item.name}</Link>,
  },
  {
    header: 'Price',
    id: 'price',
    cell: item => item.price,
  },
  {
    header: 'Stocked',
    id: 'stocked',
    cell: item => item.stocked ? <InStock /> : <OutOfStock />,
  },
];