import React from 'react'

const User = ({user}) => {
  return (
    <div className='User'>
        <div className='left'>
            <img src={user.avatar} alt='' className='leftImg'/>
        </div>
        <div className='right'>
            <span>{`${user.first_name} ${user.last_name}`}</span>
            <span>{user.email}</span>
        </div>
    </div>
  )
}

export default User