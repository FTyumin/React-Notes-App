import NotesList from "./components/NotesList";
import{ useState } from 'react';
import { nanoid } from 'nanoid'

const App=() => {
  const[notes, setNotes] = useState([
    {
    id:nanoid(),
    text:"This is text",
    date:"07/05/2023"
    },
    {
      id:nanoid(),
      text:"This is text 2",
      date:"07/05/2023"
    },
    {
      id:nanoid(),
      text:"This is text 3 ",
      date:"07/05/2023"
    },
  
])

  const addNote = (text) => {
    const date = new Date()
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  return (
    <div className="container">
      <NotesList notes={notes} handleAddNote= {addNote}/>
    </div>
  )
}

export default App;
