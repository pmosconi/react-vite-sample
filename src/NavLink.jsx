import Link from "@cloudscape-design/components/link";
import { useLink } from 'use-awsui-router';
import PropTypes from 'prop-types';

export function NavLink({children, ...props}) {
  const { handleFollow } = useLink();
  return (
    <Link onFollow={handleFollow} {...props}>
      {children}
    </Link>
  );
}

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
};