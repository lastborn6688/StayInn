import React from 'react'
import { Link } from 'react-router-dom'

const Hotelcard = ({room, index}) => {
  return (
      <Link to={'/rooms/' + room._id}>

      </Link>
  )
}

export default Hotelcard
