import { useState } from 'react';
import { productsShape } from './utils/productShape';
import { ProductTable } from './ProductTable';
import { SearchBar } from './SearchBar';
import Container from "@cloudscape-design/components/container";
import SpaceBetween from "@cloudscape-design/components/space-between";

export function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <Container>
      <SpaceBetween size= "l">
        <SearchBar 
          filterText={filterText} 
          inStockOnly={inStockOnly} 
          onFilterTextChange={setFilterText} 
          onInStockOnlyChange={setInStockOnly} 
        />
        <ProductTable 
          products={products} 
          filterText={filterText}
          inStockOnly={inStockOnly} 
        />
        </SpaceBetween>
    </Container>
  );
}

FilterableProductTable.propTypes = {
  products: productsShape
};