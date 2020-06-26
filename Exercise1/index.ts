import axios from 'axios';

// used to define structure of objects
interface Todo {
    id: number;
    title: string;
    completed: boolean;
};

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then(response => {
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
