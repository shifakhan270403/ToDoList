import React, { useState } from "react";
import Create from './Create'

function Home(){
    const [todos, setTodos] = useState([])
    return(
    <div class='home'>
        <h2>Todo List</h2>
        <Create />
        {   
            todos.length === 0 
            ?
            <div><h2>NO RECORD</h2></div>
            :
            todos.map(todo => (
                <div>
                    {todo}
                </div>
            ))
        }

    </div>
        
    )
}

export default Home