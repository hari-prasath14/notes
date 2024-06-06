import React from 'react';
import { PiNoteFill } from "react-icons/pi";

const NoteMenu = () => {
    return (
        <div style={{ height: '100%', backgroundColor: '#F5F5F5', padding: '20px'}}>
           <p style={{color : '#203562',fontSize :'22px',fontWeight : 'bold',margin :'10px 0px 60px 0px'}}>Notes App</p>

                    <button style={{
                    borderRadius:'4px',
                    backgroundColor :'#203562',
                    color :'white',
                    position:'relative',
                    left : '20px',
                    width:'70%',
                    border :'none' 
                }}
                
                    
                    ><PiNoteFill style={{fontSize:'19px',paddingBottom : '2px' }} /> Notes</button>
                
        </div>
    );
};

export default NoteMenu;