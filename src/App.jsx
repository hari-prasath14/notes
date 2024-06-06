import { useState } from 'react'
import './App.css'
import NoteMainPage from './NoteMainPage'
import NoteMenu from './NoteMenu'

function App() {

  return (
    
    <div className='containe-fluid' style={{backgroundColor : '#E0ECFA'}}>
            <div className='row' >
                <div className='col-sm-3' style={{padding :'0px'}}>
                  <NoteMenu/>
                </div>
                <div className='col-sm' style={{marginLeft :'30px',padding :'0px'}}>
                    <NoteMainPage/>
                </div>

            </div>
        </div>   
       
  )
}

export default App
