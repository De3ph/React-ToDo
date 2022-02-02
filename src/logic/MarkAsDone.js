export const MarkAsDone = (doneTodo, todos, setTodo, doneTodos, setDoneTodos) => {

    let newTodos = todos.filter((todo) => {
        return todo !== doneTodo
    });
    setTodo(newTodos);
    let newDoneTodos = doneTodos.slice();
    newDoneTodos.push(doneTodo);
    setDoneTodos(newDoneTodos);
    console.log(doneTodos);
}