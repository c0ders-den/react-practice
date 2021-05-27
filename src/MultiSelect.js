import React, { useState } from "react";
import ClayMultiSelect from '@clayui/multi-select';
import TagProvider from './TagProvider';

class MultiSelect extends React.Component {
  constructor(props) {
    super(props)
    this.tagProvider = new TagProvider()
    this.state = {
      items: [],
      value: "",
      sourceItems: []
    }
  }

  componentDidMount() {
    this.tagProvider.fetchTags().then(async (data) => {
      const tags = await data.json()
      this.setState({ sourceItems: tags })
    }).catch((err) => console.error(err))
  }

  render() {
    return (
      <ClayMultiSelect
        {...this.props}
        inputName="myInput"
        sourceItems={this.state.sourceItems}
        inputValue={this.state.value}
        items={this.state.items}
        onChange={(data) => this.setState({ value: data })}
        onItemsChange={(item) => this.setState({ items: item })}
        spritemap={this.props.spritemap}
      />
    )
  }
}

MultiSelect.defaultProps = {
  spritemap: "/icons.svg"
}

export default MultiSelect