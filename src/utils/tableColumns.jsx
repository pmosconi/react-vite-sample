import { InStock, OutOfStock } from '../StockIndicators';
import { NavLink } from '../NavLink';

export const COLUMNS = [
  {
    header: 'Category',
    id: 'category',
    cell: item => item.category || "",
  },
  {
    header: 'Name',
    id: 'name',
    cell: item => <NavLink href={`/product/${item.name}`}>{item.name}</NavLink>,
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