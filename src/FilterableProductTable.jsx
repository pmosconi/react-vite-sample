import { useState, useEffect } from 'react';
import { ProductTable } from './ProductTable';
import { SearchBar } from './SearchBar';
import {Container, SpaceBetween, Spinner} from "@cloudscape-design/components";

export function FilterableProductTable() {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:8000')
      .then(response => response.json())
      .then(json => {
        setProducts(json);
        setIsLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

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
          products={products} 
          filterText={filterText}
          inStockOnly={inStockOnly} 
        />
        </SpaceBetween>
    </Container>
  );
}
