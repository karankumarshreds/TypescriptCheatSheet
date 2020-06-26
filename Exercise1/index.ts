import axios from 'axios';

// used to define structure of objects
// This is a new type with the defined 
// properties (no other properties can be used)
interface Todo {
    id: number;
    title: string;
    completed: boolean;
};

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then(response => {
    // data has a type of Todo-type
    const data = response.data as Todo;
    const id = data.id;
    const title = data.title;
    const completed = data.completed;
    listTodos(id, title, completed);
});

const listTodos = (id: number, title: string, completed: boolean) => {
    console.log(`Todo has ID of ${id}`);
    console.log(`Todo has title of ${title}`);
    console.log(`Todo has been completed? ${completed}`);
};
