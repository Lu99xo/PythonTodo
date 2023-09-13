async function getDataFromPython(){
    document.getElementById('myele').innerText = await eel.get_data()();
}

async function getTasks() {

    const tasks = await eel.get_tasks()()
    const divTasks = document.getElementById('tasks')

    divTasks.innerHTML = ''
    let taskDisplay = ''
   
        for ( let task of tasks) {
            taskDisplay += '<p class="singleTask">' + task + '</p>'// error here 
        }
    
    divTasks.innerHTML = taskDisplay
} 

document.getElementById('mybtn').addEventListener('click', async() =>{
    if (document.getElementById('taskInp').value != ''){
       

        await eel.add(document.getElementById('taskInp').value)
        // call function
        getTasks()
    } else {
        alert("empty task hero!");
    }

})

document.getElementById('sendbtn').addEventListener('click', async() => {
    
    await eel.delete(document.getElementById('taskInp').value)
   // call function
    getTasks()

})