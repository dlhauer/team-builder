import React from 'react';

function Members(props) {
  return (
    <div className='members-list'>
      {props.members.map( member => (
        <div key={member.id}className='member'>
          <h2>Name: {member.name}</h2>
          <p>Role: {member.role}</p>
          <p>Email: {member.email}</p>
          <p>Catchphrase: "{member.catchphrase}"</p>
        </div>
      ))}

    </div>
  );
}

export default Members;