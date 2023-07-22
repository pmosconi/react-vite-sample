import { InStock, OutOfStock } from '../StockIndicators';

export const COLUMNS = [
  {
    header: 'Category',
    id: 'category',
    cell: item => item.category || "",
  },
  {
    header: 'Name',
    id: 'name',
    cell: item => item.name,
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
  }
];