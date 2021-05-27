import React from "react";

class TagProvider extends React.Component {
  constructor(props) {
    super(props)

  }

  fetchTags = async () => {
    return await fetch('http://localhost:3001/tags')
  }
}

export default TagProvider