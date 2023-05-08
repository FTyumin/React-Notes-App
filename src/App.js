import NotesList from "./components/NotesList";
import Header from "./components/Header";
import{ useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Search from "./components/SearchBox";

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

  const [searchText, setSearchText] = useState('')

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

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

  const deleteNote = (id) => {
      const newNotes = notes.filter((note) => note.id !==id)
      setNotes(newNotes)
    }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote = {setSearchText}/>
        <NotesList 
          notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText)
            )} 
          handleAddNote= {addNote}
          handleDeleteNote = {deleteNote}
        />
      </div>
    </div>
    
  )
}

export default App;
