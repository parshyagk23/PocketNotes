import NotesGrpList from "./Components/NotesGrpList"
import  './Components/Components.css'
import DefaultNoteBox from "./Components/DefaultNoteBox"
import NotesBox from "./Components/NotesBox"
import { useState } from "react"
function App() {
  

  const [OpenNoteBox , SetOpenNoteBox] =useState(false)
  const [NoteName ,setNoteName] = useState([])
  // const [saveNote,setSaveNotes] = useState({
  //   note: [],
  //   Time:[],
  //   Date:[]
  // })

  return (
      <main style={{ display:'flex', overflow:'hidden' }} >
        <NotesGrpList SetOpenNoteBox={SetOpenNoteBox} setNoteName={setNoteName}   />
      
        {OpenNoteBox?(<NotesBox NoteName={NoteName}    />):(<DefaultNoteBox/>)}
        
        
      </main>
    
  )
}

export default App
