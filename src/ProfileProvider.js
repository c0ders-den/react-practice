import React from 'react'

class ProfileProvider extends React.Component {
  constructor(props) {
    super(props)
  }

  fetchProfile = async () => {
    return await fetch('http://localhost:3001/profile')
  }
}

export default ProfileProvider