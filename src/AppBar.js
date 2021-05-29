import React from 'react';
import AppLogo from './AppLogo';
import AppMenu from './AppMenu';
import MenuProvider from './MenuProvider';
import MenuSwitcher from './MenuSwitcher';
import ProfileMenu from './ProfileMenu';

class AppBar extends React.Component {
  constructor(props) {
    super(props)
    this.menuProvider = new MenuProvider()
    this.state = {
      menu: []
    }
  }

  componentDidMount() {
    this.menuProvider.fetchAppMenu().then(async (data) => {
      const appMenu = await data.json()
      this.setState({ menu: appMenu })
    })
  }

  render() {
    return (
      <>
        <nav className="application-bar application-bar-light navbar navbar-expand-md border-bottom drop-shadow">
          <div className="container-fluid">
            <AppLogo />
            <AppMenu menu={this.state.menu} />
            <ProfileMenu />
          </div>
        </nav>
      </>
    )
  }
}

export default AppBar