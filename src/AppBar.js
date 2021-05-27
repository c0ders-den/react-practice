import React from 'react';
import AppLogo from './AppLogo';
import AppMenu from './AppMenu';
import ProfileMenu from './ProfileMenu';

class AppBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <nav className="application-bar application-bar-light navbar navbar-expand-md drop-shadow">
          <div className="container-fluid">
            <AppLogo />
            <AppMenu />
            <ProfileMenu />
          </div>
        </nav>
      </>
    )
  }
}

export default AppBar