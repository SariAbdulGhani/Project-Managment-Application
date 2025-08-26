import NewTask from "./NewTask";

export default function Tasks({tasks, onAddTask, onDeleteTask , projectId}){
    const projectTasks = tasks.filter(task => task.projectId === projectId);
    
    return <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <NewTask onAddTask={onAddTask}/>
        {projectTasks.length===0 && (<p className="text-stone-800 my-4">This project does not have any tasks yet.</p>)}
        {projectTasks.length>0 && <ul className="p-4 mt-8 rounded-md bg-stone-100">
            {projectTasks.map(task => (
                <li key={task.id} className="flex  justify-between my-4 border-b border-stone-300">
                    <span className="text-stone-600">{task.text}</span>
                    <button className="text-stone-700 hover:text-red-800" onClick={() => onDeleteTask(task.id)}>Delete</button>
                </li>
            ))}
            </ul>}
        <ul></ul>
    </section>
}