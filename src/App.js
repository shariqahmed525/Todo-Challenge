import React, { useState } from 'react'

const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [edit, setEdit] = useState(false);
  const [index, setIndex] = useState(0);

  const submit = e => {
    e.preventDefault();
    setTodos([...todos, text])
    setText('')
  }

  const update = e => {
    e.preventDefault();
    todos[index] = text;
    setTodos([...todos])
    setText('');
    setEdit(false);
    setIndex('');
  }

  const handleEdit = (i, v) => {
    setEdit(true);
    setIndex(i);
    setText(v);
  }

  const handleDelete = (i) => {
    todos.splice(i, 1);
    setTodos([...todos]);
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <form onSubmit={edit ? update : submit}>
        <input type="text" value={text} onChange={e => setText(e.target.value)} />
        <input type="submit" value={edit ? 'Udpate' : 'Add'} />
      </form>
      <ul>
        {todos.map((v, i) => {
          return (
            <li key={i}>
              {v} {' '}
              <button onClick={() => handleEdit(i, v)}>Edit</button>
              <button onClick={() => handleDelete(i)}>Delete</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App;