
import React, { useState, useEffect} from 'react';
import './style.css';

import { Card } from '../../components/Card';

export function Home() {

  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState ({name: '', avatar:'', id:''});

  function handleAddStudent(){
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };

    setStudents(prevState =>[...prevState, newStudent]);

  }
  

  useEffect(() => {

    async function fetchData() {
      const response = await fetch ('https://api.github.com/users/maykbrito');
      const data = await response.json();

      setUser({
        name: data.name,
        avatar: data.avatar_url,
        id: data.id,
      });

    }

        fetchData();
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Lista de presença</h1>

        <div>
          <div className='teste'>
          <strong>{user.name}</strong>
          <small>{user.id}</small>
          </div>
          <img src={user.avatar} alt="foto do perfil" />
        </div>
      </header>

      <input 
        type="text" 
        placeholder="Digite o nome..."
        onChange={e => setStudentName(e.target.value)}>
      </input>
      <button type="button" onClick={handleAddStudent}>Adicionar</button>

      {
        students.map(student => (
          <Card
          key={student.time}
          name={student.name} 
          time={student.time}
          />
        ))
        
      }


    </div>

  )
}
