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
        const id = this.Todos.length+1
        let newTodo: Todo ={
            id,
            title: todo.title,
            state: todo.state
        } 
        this.Todos.push(newTodo)
        return {message: "created"}
    }
}

const todo = new TodoController();
console.log(todo.createTodo({title: "work" , state: State.START}));