import React, { createContext, useState } from 'react';
import Notes from './Notes';

export const NotesContext = createContext();

const NoteMainPage = () => {
    const [notes, setNotes] = useState('');
    const [title, setTitle] = useState('');
    const [noteValues, setNoteValues] = useState({});

    
    const handleChange = (e) => {
        if (e.key === 'Enter') {
            setNoteValues({ title, notes });
            setNotes('')
            setTitle('')
        } else {
            setNotes(e.target.value);
        }
    };

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    };

    return (
        <div style={{ marginTop: '40px', position: 'relative' }}>
            <textarea
                style={{
                    backgroundColor: '#F5F5F5',
                    paddingTop: '110px',
                    paddingLeft: '31px',
                    width: '90%',
                    height: '40vh',
                    border: 'none',
                    borderRadius: '7px',
                    resize: 'none',
                }}
                placeholder='Take a note...'
                onKeyDown={handleChange}
            ></textarea>
            <p
                style={{
                    position: 'absolute',
                    left: '30px',
                    top: '20px',
                    border: 'none',
                    cursor: 'pointer',
                    background: 'none',
                    color: '#203562',
                    fontSize: '20px',
                    fontWeight: 'bold',
                }}
            >
                Add a Note
            </p>

            <input
                type='text'
                id='title'
                placeholder='Title'
                onChange={handleChangeTitle}
                maxLength={15}
                style={{
                    position: 'absolute',
                    left: '25px',
                    top: '60px',
                    width: '90%',
                    border: 'none',
                    background: 'none',
                    paddingLeft: '5px',
                    outline: 'none',
                }}
            ></input>

            <NotesContext.Provider value={noteValues}>
                <Notes />
            </NotesContext.Provider>
        </div>
    );
};

export default NoteMainPage;