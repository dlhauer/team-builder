import React, {useState} from 'react';

function MemberForm(props) {

  const [member, setMember] = useState( {
    name: '',
    role: '',
    email: '',
    catchphrase: '',
  } );

  function handleChange(e) {
    setMember({...member, [e.target.name]: e.target.value});
  }

  function submitForm(e) {
    e.preventDefault();
    props.addMember(member);
    setMember( {
      name: '',
      role: '',
      email: '',
      catchphrase: '',
    } )
  }

  return (
    <form onSubmit={submitForm}>
      <label htmlFor='name'>Name </label>
      <input 
        id='name'
        type='text'
        name='name'
        placeholder='member name goes here, doofus'
        onChange={handleChange}
        value={member.name}
      />
      <label htmlFor='role'>Role </label>
      <select
        id='role'
        name='role'
        onChange={handleChange}
        value={member.role}>
        <option value=''></option>
        <option value='Hellraiser'>Hell Raiser</option>
        <option value='Rabble Rouser'>Rabble Rouser</option>
        <option value='Hooligan'>Hooligan</option>
      </select>
      <label htmlFor='email'>Email </label>
      <input 
        id='email'
        type='email'
        name='email'
        placeholder='email, please'
        onChange={handleChange}
        value={member.email}
      />
      <label htmlFor='catchphrase'>Catchphrase </label>
      <input 
        id='catchphrase'
        type='textarea'
        name='catchphrase'
        onChange={handleChange}
        value={member.catchphrase}
      />
      <button type='submit'>Add member</button>
    </form>
  );
}

export default MemberForm;