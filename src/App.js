import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Member from './components/Members';

function App() {
  const [members, setMembers] = useState( [
    {
      id: 1,
      name: 'Dan Hauer',
      role: 'Rabble Rouser',
      email: 'fake.email@internet.com',
      catchphrase: 'Is that it?',
    }
  ] );

  function addMember(member) {
    const newMember = {
      id: Date.now(),
      name: member.name,
      role: member.role,
      catchphrase: member.catchphrase,
    };
    setMembers([...members, newMember]);
  }
  return (
    <div className="App">
      <h1>My wonderful team!</h1>
      {/* <MemberForm addMember={addMember}/> */}
      <Member members={members}/>
    </div>
  );
}

export default App;