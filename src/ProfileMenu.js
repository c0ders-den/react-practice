import React from 'react'
import ClayNav from '@clayui/nav'
import MenuDropDown from './MenuDropDown'
import IconDropDown from './IconDropDown'

class ProfileMenu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ClayNav>
        <ClayNav.Item className="toolbar-nav-item">
          <IconDropDown />
        </ClayNav.Item>
      </ClayNav>
    )
  }
}

export default ProfileMenu