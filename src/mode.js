import React , {useState} from 'react';

export function Mode(prop) {
    
    return(
    <div>
    <p>To switch mode press the below button</p>
    
    <h4>Currently it is {prop.current_mode} mode.</h4>
    </div>
    );
}