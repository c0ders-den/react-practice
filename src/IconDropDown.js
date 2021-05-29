import React from 'react'
import ClayDropDown from '@clayui/drop-down'
import ClayButton from '@clayui/button'
import ClayDropDownItem from '@clayui/drop-down/lib/Item'

class IconDropDown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
  }

  renderListElement = (item, i) => {
    var e
    switch (item.type) {
      case 'divider':
        e = <li aria-hidden="true" className="dropdown-divider" role="presentation" key={i}></li>
        break
      case 'form':
        break
      case 'link':
        e =
          <ClayDropDownItem href={item.action} data-method={item.method} rel="nofollow" key={i}>
            {item.label}
          </ClayDropDownItem>
        break
      default:
        break;
    }
    return e
  }

  render() {
    return (
      <ClayDropDown
        active={this.state.active}
        onActiveChange={(active) => this.setState({ active: active })}
        trigger={
          <ClayButton displayType={null} className="nav-link nav-link-circle-border">
            <img src={this.props.icon} className="rounded-circle toolbar-icon"/>
          </ClayButton>
        }
      >
        {this.props.menuItems.map((item, i) => {
          return (this.renderListElement(item, i))
        })}
      </ClayDropDown>
    )
  }
}

export default IconDropDown