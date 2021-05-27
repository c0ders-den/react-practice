import ClayLink from '@clayui/link';
import ClayButton from '@clayui/button';
import ClayDropDown from '@clayui/drop-down';
import React, { useState } from 'react';

class MenuDropDown extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      expand: false
    }
  }

  render() {
    return (
      <ClayDropDown
        trigger={<ClayButton displayType={null} className="nav-link link-outline link-outline-borderless">{this.props.title}</ClayButton>}
        active={this.state.expand}
        onActiveChange={(expanded) => this.setState({ expand: expanded })}
      >
        <ClayDropDown.ItemList>
          {this.props.items.map((item, i) => (
            <ClayDropDown.Item href={item.href} key={i} className="font-weight-bold">
              {item.label}
            </ClayDropDown.Item>
          ))}
        </ClayDropDown.ItemList>
      </ClayDropDown>

    )
  }
}

export default MenuDropDown;