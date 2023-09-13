import eel

from data.todo import ToDo

todo_app = ToDo()

@eel.expose
def add(task) :
    todo_app.add(task)

@eel.expose
def delete(task) :
    todo_app.delete(task)


@eel.expose
def get_tasks() :
    return todo_app.get_tasks()

