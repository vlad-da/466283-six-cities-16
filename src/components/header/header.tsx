import HeaderLogo from '../header-logo/header-logo';
import HeaderAuth from '../header-auth/header-auth';

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <HeaderLogo />
          <HeaderAuth />
        </div>
      </div>
    </header>
  );
}

export default Header;
