import Link from 'next/link';
import StyledNav from './styles/NavStyles';

const Nav = () => (
  <StyledNav>
    <Link prefetch href="/items">
      <a>Items</a>
    </Link>
    <Link prefetch href="/sell">
      <a>Sell</a>
    </Link>
    <Link prefetch href="/signup">
      <a>Signup</a>
    </Link>
    <Link prefetch href="/orders">
      <a>Orders</a>
    </Link>
    <Link prefetch href="/me">
      <a>Me</a>
    </Link>
  </StyledNav>
);

export default Nav;