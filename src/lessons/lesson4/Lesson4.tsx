import React from 'react'
import './lesson_4';
import {onCreatePromise, onRejectPromise, onResolvePromise} from "./lesson_4";

const Lesson4 = () => {
    return (
        <div>
            <button id='btn-create-promise' onClick={onCreatePromise}>Create Promise</button>
            <button id='btn-resolve-promise' onClick={onResolvePromise}>Resolve Promise</button>
            <button id='btn-reject-promise' onClick={onRejectPromise}>Reject Promise</button>
        </div>
    );
}


export default Lesson4;