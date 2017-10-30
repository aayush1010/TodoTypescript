interface todoList {
    todo: string,
    status: string,
}

class Todo {
    public listItems : todoList[];
    constructor() {
        this.listItems = [];
    }
    add(list : todoList) {
        this.listItems.push(list);
    }
    complete(itemId : number){
        this.listItems[itemId].status = "COMPLETE";
    }
    undoComplete(itemId : number){
        this.listItems[itemId].status = "ACTIVE";
    }
    delete(itemId : number){
        this.listItems[itemId].status = "DELETED";
    }
    edit(itemId: number){
        this.listItems[itemId].status = "EDIT";
    }
    done(itemId: number, newTodo:string){
        this.listItems[itemId].status = "ACTIVE";
        this.listItems[itemId].todo = newTodo;
    }
    display() {
        for(var item in this.listItems){
            console.log(this.listItems[item].todo);
        }
    }

}

var list = new Todo();

function addItem(todo: string, status: string) {
    list.add({
        todo:  todo,
        status: status,
    });
}
function completeItem(itemId : number){
    list.complete(itemId);

}

function undoCompleteItem(itemId : number){
    list.undoComplete(itemId);
}

function deleteItem(itemId: number){
    list.delete(itemId);
}

function editItem(itemId: number){
    list.edit(itemId);
}
function doneItem(itemId: number, newTodo: string){
    list.done(itemId, newTodo);
}
function displayItem() {
    list.display();
}
