enum State{
    START="start",
    DONE="done",
    CANCEL="cancel",
    TOP_LIST="topList"
}

type Todo = {
    id: number,
    title: string,
    state: State
}

type createTodoDTO = {
    title: string,
    state: State
}

type ResponseMethod = {
    message: string
}

interface ITodo{
    createTodo(todo : createTodoDTO): void;
    deleteTodo(id: number): void;
    getById(id: number) : void;
    getAll(): void;
}

abstract class  TodoRepository implements ITodo {
    protected Todos : Todo[];
    constructor(){
        this.Todos = [];
    }

    public createTodo(todo: createTodoDTO): void {
        
    }
    public deleteTodo(id: number): void {
        
    }
    public getAll(): void {
        
    }

    public getById(id: number): void {
        
    }
}

class TodoController extends TodoRepository{
    constructor(){
        super()
    }

    public createTodo(todo: createTodoDTO): ResponseMethod {
        let id = this.Todos.length+1;
        if(this.Todos.length > 0){ //?   never generate a duplicate id
            let lastOne : number = this.Todos.length-1
            id = this.Todos[lastOne].id+1
        }
        let newTodo: Todo ={
            id,
            title: todo.title,
            state: todo.state
        } 
        this.Todos.push(newTodo)
        return {message: "created"}
    }
    public getAll(): Todo[] {
        return this.Todos;
    }

    public getById(id: number): Todo | ResponseMethod {
        const todo = this.Todos.find(todo => todo.id == id);
        if(!todo) return {message: "todo not founded"}
        return todo
    }

    public deleteTodo(id: number): ResponseMethod {
        const todo = this.getById(id);
        const NewTodos = this.Todos.filter(todo => todo.id !== id);
        this.Todos = NewTodos;
        return {message: "todo deleted"}
    }
}

const todo = new TodoController();
console.log(todo.createTodo({title: "work" , state: State.START}));
console.log(todo.createTodo({title: "course" , state: State.START}));
console.log(todo.createTodo({title: "gym" , state: State.TOP_LIST}));
console.log(todo.getAll());
console.log(todo.getById(3));
console.log(todo.deleteTodo(2));
console.log(todo.getAll());
console.log(todo.createTodo({title: "class" , state: State.TOP_LIST}));
console.log(todo.getAll());



