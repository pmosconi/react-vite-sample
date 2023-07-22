import { useState } from 'react';
import { ProductTable } from './ProductTable';
import { SearchBar } from './SearchBar';
import {Container, SpaceBetween, Spinner} from "@cloudscape-design/components";
import { useQuery } from '@tanstack/react-query';

const getProducts = () =>  fetch('http://localhost:8000')
  .then(response => response.json())
  .then(json => json);

export function FilterableProductTable() {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  const { data: products, isLoading } = useQuery({ queryKey: ['products'], queryFn: getProducts });

  if (isLoading) {
    return (
      <Container>
        <Spinner size="large" />
      </Container>
    );
  }

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
          products={products || []} 
          filterText={filterText}
          inStockOnly={inStockOnly} 
        />
        </SpaceBetween>
    </Container>
  );
}
