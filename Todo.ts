enum State{
    QUEUE="queue",
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

interface ITodo{
    createTodo(todo : createTodoDTO): void;
    deleteTodo(id: number): void;
    getById(id: number) : void;
    getAll(): void;
}

abstract class  TodoRepository implements ITodo {
    protected Todo : [];
    constructor(){
        this.Todo = [];
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

    public createTodo(todo: createTodoDTO): any {
        return {NewTodo: "created"}
    }
}

const todo = new TodoController();
console.log(todo.createTodo({title: "work" , state: State.QUEUE}));