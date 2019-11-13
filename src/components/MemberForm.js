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

  //Why oh why?!

  // let nameInput = document.getElementById('name');
  // console.log(nameInput);
  // nameInput.oninvalid = function(e) {
  //   e.target.setCustomValidity('Name must contain between 2 and 30 letters, no numbers or special characters.');
  // }

  return (
    <form onSubmit={submitForm}>
      <label htmlFor='name'>Name </label>
      <input 
        required
        id='name'
        type='text'
        name='name'
        pattern='[A-Za-z\s]{2,30}'
        title='Name must contain at between 2 and 30 letters, no numbers or special characters.'
        placeholder='member name goes here, doofus'
        onChange={handleChange}
        value={member.name}
      />
      <label htmlFor='role'>Role </label>
      <select
        required
        id='role'
        name='role'
        onChange={handleChange}
        value={member.role}>
        <option value=''></option>
        <option value='Hellraiser'>Hellraiser</option>
        <option value='Rabble Rouser'>Rabble Rouser</option>
        <option value='Hooligan'>Hooligan</option>
      </select>
      <label htmlFor='email'>Email </label>
      <input 
        required
        id='email'
        type='email'
        name='email'
        placeholder='email, please'
        onChange={handleChange}
        value={member.email}
      />
      <label htmlFor='catchphrase'>Catchphrase </label>
      <input 
        required
        id='catchphrase'
        type='textarea'
        name='catchphrase'
        pattern='[A-Za-z]+[A-Za-z.?,\s]*{3,120}' //How to do an apostrophe?
        title='Catchphrase must contain between 3 and 120 letters, no bizarre punctuation, and no numbers.'
        onChange={handleChange}
        value={member.catchphrase}
      />
      <button type='submit'>Add member</button>
    </form>
  );
}

export default MemberForm;