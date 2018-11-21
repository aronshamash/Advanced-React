import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = (url) => {
  NProgress.start();
}

Router.onRouteChangeComplete = (url) => {
  NProgress.done();
}

Router.onRouteChangeError = (url) => {
  NProgress.done();
}

const Logo = styled.h1`
  padding: 2rem;
  margin-left: 2rem;
  position: relative;
  transform: skew(-7deg);

  a {
    text-decoration: none;
    background: ${props => props.theme.red};
    color: ${props => props.theme.white};
    padding: 1rem;
  }

  @media (max-width: 1200px) {
    margin: 0;
    text-align: center;
  }
`;

const StyledHeader = styled.header`
  .bar {
    border-bottom: 10px solid ${props => props.theme.black};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${props => props.theme.lightgrey};
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Logo>
        <Link href="/">
          <a>Sick Fits</a>
        </Link>
      </Logo>
      <Nav />
    </div>
    <div className="sub-bar">
      search
    </div>
    <div>
      Cart
    </div>
  </StyledHeader>
);

export default Header;