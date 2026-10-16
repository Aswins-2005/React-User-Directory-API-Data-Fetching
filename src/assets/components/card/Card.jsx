import React from 'react'

const Card = ({user}) => {
  return (
    <div className='card'>
        <h3> {user.name}</h3>
        <p><strong>Email : </strong>{user.email} </p>
        <p><strong>phno : </strong>{user.phone} </p>
        <p><strong>city : </strong>{user.address.city}</p>
        <p><strong>company : </strong>{user.company.name} </p>
    </div>
  )
}

export default Card;
