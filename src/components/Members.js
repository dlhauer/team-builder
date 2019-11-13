import React from 'react';

function Members(props) {
  return (
    <div className='members-list'>
      {props.members.map( member => (
        <div key={member.id}className='member'>
          <h2>Member {member.id}</h2>
          <p>{member.name}</p>
          <p>{member.role}</p>
          <p>{member.email}</p>
          <p>{member.catchphrase}</p>
        </div>
      ))}

    </div>
  );
}

export default Members;