import React from 'react'
import ClayLink from '@clayui/link';
import MenuProvider from './MenuProvider';


class MenuSwitcher extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      admin: false
    }
    this.menuProvider = new MenuProvider()
  }

  switchMenu = () => {
    this.setState({ admin: !this.state.admin })
  }

  render() {
    return (
      <ClayLink href="#" onClick={() => { this.switchMenu() }} className="nav-link nav-link-circle-border" style={{ marginTop: '16px' }} >
        settings
      </ClayLink>
    )
  }
}

export default MenuSwitcher