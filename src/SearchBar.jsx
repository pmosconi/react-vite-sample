import PropTypes from 'prop-types';
import { Checkbox , TextFilter, SpaceBetween  } from "@cloudscape-design/components";

export function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}) {
  return (
    <form>
      <SpaceBetween size="m">
        <TextFilter 
          type="text" 
          filteringText={filterText} placeholder="Search..." 
          onChange={({ detail }) => onFilterTextChange(detail.filteringText)} 
        />
          <Checkbox  
            checked={inStockOnly} 
            onChange={({ detail }) => onInStockOnlyChange(detail.checked)}>
            Only show products in stock
        </Checkbox>
      </SpaceBetween>
    </form>
  );
}

SearchBar.propTypes = {
  filterText: PropTypes.string.isRequired,
  inStockOnly: PropTypes.bool.isRequired,
  onFilterTextChange: PropTypes.func.isRequired,
  onInStockOnlyChange: PropTypes.func.isRequired
};