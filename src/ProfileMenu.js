import React from 'react'
import ClayNav from '@clayui/nav'
import ProfileProvider from './ProfileProvider'
import IconDropDown from './IconDropDown'
import MenuSwitcher from './MenuSwitcher'

class ProfileMenu extends React.Component {
  constructor(props) {
    super(props)
    this.profileProvider = new ProfileProvider()
    this.state = {
      menu: [],
      avatar: ""
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
        { type: "divider" },
        { action: '/user/' + profile.username, label: 'Your profile', type: 'link', method: 'get' },
        { action: '/user/' + profile.username + '/workspaces', label: 'Your workspaces', type: 'link', method: 'get' },
        { action: '/user/' + profile.username + '/projects', label: 'Your projects', type: 'link', method: 'get' },
        { action: '/user/' + profile.username + '/tasks', label: 'Your tasks', type: 'link', method: 'get' },
        { type: "divider" },
        { action: '/user/' + profile.username + '/preferences', label: 'Preferences', type: 'link', method: 'get' },
        { action: '/help', label: 'Help', type: 'link', method: 'get' },
        { type: "divider" },
        { action: '/user/' + profile.username + '/signout', label: 'Sign out', type: 'link', method: 'get' },
      ],
      avatar: profile.avatar
    })
  }

  render() {
    return (
      <ClayNav>
        <ClayNav.Item>
          <MenuSwitcher />
        </ClayNav.Item>
        <ClayNav.Item className="toolbar-nav-item">
          <IconDropDown icon={this.state.avatar} menuItems={this.state.menu} />
        </ClayNav.Item>
      </ClayNav>
    )
  }
}

export default ProfileMenu