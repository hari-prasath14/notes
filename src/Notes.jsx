import React, { useContext, useEffect, useState } from 'react';
import { NotesContext } from './NoteMainPage';
import { PiNoteFill } from "react-icons/pi";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const Notes = () => {
    const noteValues = useContext(NotesContext);
    const [savedNotes, setSavedNotes] = useState([]);

    useEffect(() => {
        const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
        if (storedNotes.length) 
            {
            setSavedNotes(storedNotes);
        }
    }, []);

    useEffect(() => {
        
        if(noteValues.notes)
        {    
            const newNote = { id: Date.now(), ...noteValues };
            const updatedNotes = [...savedNotes, newNote];
            setSavedNotes(updatedNotes);
            localStorage.setItem('notes', JSON.stringify(updatedNotes));
        }    
       
    }, [noteValues]);

    const style = {
        textarea: {
            resize: 'none',
            padding: '60px 10px 5px 15px',
            color: '#203562',
            borderRadius: '10px',
            position : 'relative'
            
        },
        editbutton: {
            position: 'relative',
            right: '62px',
            bottom: '210px',
            fontSize: '17px'
        },
        deletebutton: {
            position: 'relative',
            right: '53px',
            bottom: '210px',
            fontSize: '15px'
        },
        title: {
            position: 'relative',
            left: '15px',
            bottom: '230px',
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#203562',
        }
    };

    const handleDelete = (id) =>{
        console.log(id);
    }

    return (
        <div style={{marginTop : '20px'}}>
            <PiNoteFill style={{ fontSize: '19px', marginRight: '6px', marginLeft: '10px' }} />
            <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#203562' }}>My Notes</span>
            <h6 style={{ marginTop: '20px', marginLeft: '10px', color: '#203562' }}>Recently viewed</h6>
            <div style={{ position: 'relative',display: 'flex',flexWrap: 'wrap' }}>
                {savedNotes.map((item, index) => (
                    <div className='col-lg-4' key={item.id} >
                        <textarea type='text'  cols={23} rows={7} style={style.textarea} disabled value={item.notes}></textarea>
                        <MdOutlineEdit style={style.editbutton} onClick = {() =>{
                            handleDelete(item.id)}}/>
                        
                        <RiDeleteBin6Line style={style.deletebutton} onClick = {() =>{
                            handleDelete(item.id)}}/>                                                                      
                            
                        {item.title.length == 0 ?
                        <p style={style.title}>No title</p>
                        :
                        <p style={style.title}>{item.title}</p>
                        }
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Notes;