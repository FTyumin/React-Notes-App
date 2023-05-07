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

  return (
    <div className="container">
      <NotesList notes={notes}/>
    </div>
  )
}

export default App;
