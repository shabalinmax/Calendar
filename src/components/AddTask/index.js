import React from 'react';
import './AddTask.css'
const AddTask = () => {
    return (
        <div>
            <div className={'setTask'}>
                <div className={'setTaskDescription'}>
                    enter your plan into the schedule:
                </div>
                <div className="input">
                    <input type="text"/>
                    <button>submit</button>
                </div>
            </div>
        </div>
    );
};

export default AddTask;
