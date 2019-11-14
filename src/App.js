import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Members from './components/Members';
import MemberForm from './components/MemberForm';


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
      email: member.email,
      catchphrase: member.catchphrase,
    };
    setMembers([...members, newMember]);
  }
  return (
    <div className="App">
      <h1>My wonderful team!</h1>
      <MemberForm addMember={addMember}/>
      <Members members={members}/>
    </div>
  );
}

export default App;
