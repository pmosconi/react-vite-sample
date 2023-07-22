import PropTypes from 'prop-types';
import { productsShape } from './utils/productShape';
import { COLUMNS } from './utils/tableColumns';
import { Table, Box, Header } from "@cloudscape-design/components";

export function ProductTable({ products, filterText, inStockOnly }) {
  let currentCategory;

  const rows = products.filter(product => 
    (filterText.length ? product.name.toLowerCase().includes(filterText.toLowerCase()) : true)
    && (inStockOnly ? product.stocked : true)
  ).map(product => {
    if (product.category !== currentCategory) {
      currentCategory = product.category;
      return product;
    }
    return { ...product, category: null };
  });

  return (
    <Table 
      columnDefinitions={COLUMNS}
      items={rows}
      loadingText="Loading products..."
      sortingDisabled
      empty={
        <Box
          margin={{ vertical: "xs" }}
          textAlign="center"
          color="inherit"
        >
          <b>No product found</b>
        </Box>
        }
        header={<Header>Products</Header>}
    />
  );
}

ProductTable.propTypes = {
  filterText: PropTypes.string.isRequired,
  inStockOnly: PropTypes.bool.isRequired,
  products: productsShape
};