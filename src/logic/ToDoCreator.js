const ToDoCreator = (newToDo , todos, setTodos) => {

    if (newToDo === '') {
        return
    }
    else {
        setTodos([...todos, newToDo]);
    }
}

export {ToDoCreator};