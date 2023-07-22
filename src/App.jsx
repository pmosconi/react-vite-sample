import { FilterableProductTable } from './FilterableProductTable';
import { PRODUCTS } from './utils/products';

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
