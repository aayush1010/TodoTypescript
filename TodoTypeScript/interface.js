var Todo = /** @class */ (function () {
    function Todo() {
        this.listItems = [];
    }
    Todo.prototype.add = function (list) {
        this.listItems.push(list);
    };
    Todo.prototype.complete = function (itemId) {
        this.listItems[itemId].status = "COMPLETE";
    };
    Todo.prototype.undoComplete = function (itemId) {
        this.listItems[itemId].status = "ACTIVE";
    };
    Todo.prototype["delete"] = function (itemId) {
        this.listItems[itemId].status = "DELETED";
    };
    Todo.prototype.edit = function (itemId) {
        this.listItems[itemId].status = "EDIT";
    };
    Todo.prototype.done = function (itemId, newTodo) {
        this.listItems[itemId].status = "ACTIVE";
        this.listItems[itemId].todo = newTodo;
    };
    Todo.prototype.display = function () {
        for (var item in this.listItems) {
            console.log(this.listItems[item].todo);
        }
    };
    return Todo;
}());
var list = new Todo();
function addItem(todo, status) {
    list.add({
        todo: todo,
        status: status
    });
}
function completeItem(itemId) {
    list.complete(itemId);
}
function undoCompleteItem(itemId) {
    list.undoComplete(itemId);
}
function deleteItem(itemId) {
    list["delete"](itemId);
}
function editItem(itemId) {
    list.edit(itemId);
}
function doneItem(itemId, newTodo) {
    list.done(itemId, newTodo);
}
function displayItem() {
    list.display();
}
