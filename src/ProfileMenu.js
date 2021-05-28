import React from 'react'
import ClayNav from '@clayui/nav'
import ProfileProvider from './ProfileProvider'
import IconDropDown from './IconDropDown'

class ProfileMenu extends React.Component {
  constructor(props) {
    super(props)
    this.profileProvider = new ProfileProvider()
    this.state = {
      menu: []
    }
  }

  componentDidMount() {
    this.profileProvider.fetchProfile().then(async (data) => {
      const profile = await data.json()
      this.createProfileMenu(profile)
    }).catch(err => console.log(err))
  }

  createProfileMenu = (profile) => {
    this.setState({
      menu: [
        { action: '/user/' + profile.username, label: 'Signed in as ' + profile.username, type: 'link', method: 'get' },
        { type: "divider" }
      ]
    })
  }

  render() {
    return (
      <ClayNav>
        <ClayNav.Item className="toolbar-nav-item">
          <IconDropDown menuItems={this.state.menu} />
        </ClayNav.Item>
      </ClayNav>
    )
  }
}

export default ProfileMenu