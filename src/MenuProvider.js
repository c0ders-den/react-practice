import React from 'react'

class MenuProvider extends React.Component {
  constructor(props) {
    super(props)
  }

  fetchAppMenu = async () => {
    return await fetch('http://localhost:3001/appMenu')
  }

  fetchAdminMenu = async () => {
    return await fetch('http://localhost:3001/adminMenu')
  }
}

export default MenuProvider