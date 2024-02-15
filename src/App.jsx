import NotesGrpList from "./Components/NotesGrpList"
import  './Components/Components.css'
import DefaultNoteBox from "./Components/DefaultNoteBox"
import NotesBox from "./Components/NotesBox"
import { useState } from "react"
function App() {
  

  const [OpenNoteBox , SetOpenNoteBox] =useState(false)
  const [NoteName ,setNoteName] = useState([])
 
  return (
   
      <main >
        <div className="mobile-note" >
         {OpenNoteBox?( OpenNoteBox?(<NotesBox NoteName={NoteName} SetOpenNoteBox={SetOpenNoteBox} />):(<DefaultNoteBox/>)):(  <NotesGrpList SetOpenNoteBox={SetOpenNoteBox} setNoteName={setNoteName} />)}
        </div>
      
      <div className="desktop-note"  >
       <NotesGrpList SetOpenNoteBox={SetOpenNoteBox} setNoteName={setNoteName} />
        {OpenNoteBox?(<NotesBox NoteName={NoteName}/>):(<DefaultNoteBox/>)}
      </div>
        
        
      </main>
    
  )
}

export default App
