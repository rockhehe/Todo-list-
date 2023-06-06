import React, {useState} from "react";

const Todo = () => {
  const [task,setTask] = useState('');
  const [list,setList] = useState([])


const handleInputChange = (event) => {
  setTask(event.target.value)
} 


const handleAddTask = () => {
  if (task.trim() !== '') {
  setList([...list,task])
  setTask('')
  }
}

  const handleDelete = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
    };

  

    const handletick = (index) => {
      setList(prevTaskList => {
        return prevTaskList.map((task, i) => {
          if (i === index) {
            return `✓ ${task}`;
          }
          return task;
        });
      });
    };

return (
  <div className="Todo-list">
    <h2>Todo</h2>
  <div>
          <input type="text" value={task} onChange={handleInputChange} placeholder="Add a task" />
          <button onClick={handleAddTask}>Add</button>
</div>
<ul>
  {list.map((task,index) => (
    <li key ={index}>{task}
    <div>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                  <button onClick={() => handletick(index)}>Complete</button>
    </div>              
    </li>
  ))}
</ul>
</div>
)
  };

  export default Todo;















































































































