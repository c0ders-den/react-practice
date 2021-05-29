import React from 'react'
import ClayNav from '@clayui/nav';
import ClayLink from '@clayui/link';

class AppLogo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ClayNav>
        <ClayNav.Item>
          <ClayLink href="/" className="nav-link">
            <img src={this.props.appLogo} />
          </ClayLink>
        </ClayNav.Item>
      </ClayNav>
    )
  }
}

AppLogo.defaultProps = {
  appLogo: "/logo.svg"
}

export default AppLogo