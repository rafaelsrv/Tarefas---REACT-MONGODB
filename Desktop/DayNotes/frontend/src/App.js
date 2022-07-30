import React, {useState, useEffect} from 'react'
import api from './services/api'
import './global.css'
import './sidebar.css'
import './app.css'
import './main.css'
import Notes from './Components/Notes'





function App() {

  

  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [allNotes, setAllNotes] = useState([])

  useEffect(() =>{

    async function getAllNotes(){
      const response = await api.get('/annotations', )

      setAllNotes(response.data)
    }

    getAllNotes()
  },[])

  async function handleSubmit(e){
    e.preventDefault();

    const response = await api.post('/annotations',{
      title,
      notes,
      priority: false
    })

    setTitle("")
    setNotes("")

  }
  return (

    <div id="app">
      <aside>
        <strong>Caderno de notas</strong>
        
        <form onSubmit={handleSubmit}>

          <div className="input-block">
            <label htmlFor="title">Título da Anotação</label>
            <input 
            required
            value = {title}
            onChange = {e => setTitle(e.target.value)}/>
            
            <div className="input-block">
              <label htmlFor="nota">Anotações</label>
              <textarea 
              required
              value = {notes}
              onChange = {e => setNotes(e.target.value)}/>
            </div>

            <button type="submit">Salvar</button>
          </div>

        </form>
      </aside>

      <main>
        <ul>
          {allNotes.map(data => (
            <Notes data={data}/> 
          ))}
          
           
        </ul>
      </main>

    </div>
  )
}

export default App;
