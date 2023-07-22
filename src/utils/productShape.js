import PropTypes from 'prop-types';

export const productShape = PropTypes.shape({
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  stocked: PropTypes.bool.isRequired
}).isRequired;

export const productsShape = PropTypes.arrayOf(productShape).isRequired;
