import React from 'react'
import ClayNav from '@clayui/nav'
import MenuDropDown from './MenuDropDown'

class AppMenu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ClayNav>
        <ClayNav.Item className="toolbar-nav-item">
          <MenuDropDown title={'Home'} items={[
            { href: '#', label: 'Dashboard' },
            { href: '#', label: 'Trash' }
          ]} />
        </ClayNav.Item>
        <ClayNav.Item className="toolbar-nav-item">
          <MenuDropDown title={'Plan'} items={[
            { href: '#', label: 'Blacklog' },
            { href: '#', label: 'Feature' },
            { href: '#', label: 'User Stories' },
            { href: '#', label: 'Timeboxes' },
          ]} />
        </ClayNav.Item>
        <ClayNav.Item className="toolbar-nav-item">
          <MenuDropDown title={'Track'} items={[
            { href: '#', label: 'Iteration Stauts' },
            { href: '#', label: 'Team Status' },
            { href: '#', label: 'Feature Status' },
            { href: '#', label: 'Milestone Status' },
            { href: '#', label: 'Release Status' },
          ]} />
        </ClayNav.Item>
        <ClayNav.Item className="toolbar-nav-item">
          <MenuDropDown title={'Defects'} items={[
            { href: '#', label: 'Issues' },
          ]} />
        </ClayNav.Item>
        <ClayNav.Item className="toolbar-nav-item">
          <MenuDropDown title={'Reports'} items={[
            { href: '#', label: 'Reports' },
            { href: '#', label: 'Create Reports' },
          ]} />
        </ClayNav.Item>
      </ClayNav>
    )
  }
}

export default AppMenu