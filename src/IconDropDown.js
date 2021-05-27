import React from 'react'
import ClayDropDown from '@clayui/drop-down'
import ClayButton from '@clayui/button'

class IconDropDown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
  }

  render() {
    return (
      <ClayDropDown
        active={this.state.active}
        onActiveChange={(active) => this.setState({ active: active })}
        trigger={
          <ClayButton displayType={null} className="nav-link nav-link-circle-border">

          </ClayButton>
        }
      >
        <ClayDropDown.ItemList>

          {[
            { href: '#', label: 'Your profile' },
            { href: '#', label: 'Your settings' },
            { href: '#', label: 'Your tasks' },
            { href: '#', label: 'Help' },
            { href: '#', label: 'Sign out' },
          ].map((item, i) => (
            <ClayDropDown.Item href={item.href} key={i}>
              {item.label}
            </ClayDropDown.Item>
          ))}

        </ClayDropDown.ItemList>
      </ClayDropDown>
    )
  }
}

export default IconDropDown