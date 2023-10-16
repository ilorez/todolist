import useStore from "../store"
import AddTaskPopDialog from "./AddTaskPopDialog"
import StatusTaskIcon from "./StatusTaskIcon"

function TasksCard({ cardTitle, tasks }) {
    const { updateTaskStatus, updateTask, deleteTask } = useStore()
    const importances = {
        'urgent': "red",
        'normal': "blue",
        'non-urgent': "green"
    }
    const delteIcon = `<svg width="30" height="30" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 30V42.5" stroke="#DA2A2A" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M35 30V42.5" stroke="#DA2A2A" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10 17.5H50" stroke="#DA2A2A" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15 25V45C15 49.1423 18.3579 52.5 22.5 52.5H37.5C41.6423 52.5 45 49.1423 45 45V25" stroke="#DA2A2A" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22.5 12.5C22.5 9.73857 24.7386 7.5 27.5 7.5H32.5C35.2615 7.5 37.5 9.73857 37.5 12.5V17.5H22.5V12.5Z" stroke="#DA2A2A" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `
    const editIcon = `<svg width="30" height="30" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M53.5324 16.2638L29.6824 40.1137C27.3074 42.4887 20.2573 43.5887 18.6823 42.0137C17.1073 40.4387 18.1823 33.3887 20.5573 31.0137L44.4324 7.13872C45.0211 6.49637 45.7339 5.98002 46.5279 5.62077C47.3216 5.26152 48.1801 5.06677 49.0514 5.04842C49.9224 5.0301 50.7884 5.18845 51.5966 5.51397C52.4049 5.8395 53.1389 6.3255 53.7541 6.9425C54.3694 7.5595 54.8534 8.29475 55.1766 9.1039C55.4999 9.91307 55.6561 10.7793 55.6354 11.6504C55.6146 12.5216 55.4174 13.3795 55.0561 14.1724C54.6946 14.9653 54.1764 15.6768 53.5324 16.2638Z" stroke="#1C274C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.8326 10.2637H15.3326C12.6805 10.2637 10.1371 11.3172 8.26172 13.1926C6.38637 15.068 5.33264 17.6115 5.33264 20.2637V45.2637C5.33264 47.9159 6.38637 50.4594 8.26172 52.3347C10.1371 54.2102 12.6805 55.2637 15.3326 55.2637H42.8326C48.3576 55.2637 50.3326 50.7637 50.3326 45.2637V32.7637" stroke="#1C274C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>    
    `
    let fill = !(cardTitle === 'today' || cardTitle === 'pending')
    const handleTaskStatus = (task_id) => {
        // console.log(task_id)
        updateTaskStatus(cardTitle, task_id)
    }

    return (
        <div className="flex flex-col first-letter:uppercase bg-background-light w-full p-4 pb-10 shadow-md rounded-lg gap-3">
            <h2 className="first-letter:uppercase font-bold">{cardTitle} Tasks </h2>
            <div className="list-none flex flex-col gap-2 ml-3">
                {!tasks && (cardTitle === 'today' || cardTitle === 'tomorrow') && <div className="text-gray-400" key={"task_message"}> There's no tasks </div >}
                {!tasks && (cardTitle === 'pending') && <div className="text-gray-400" key={"task_message"}> There's no pending tasks :) </div >}
                {
                    tasks &&
                    tasks.map((task) => (
                        <li key={task.id} className="flex justify-between items-end">
                            <div className="flex gap-2">
                                <span onClick={() => handleTaskStatus(task.id)}>
                                    <StatusTaskIcon color={importances[task.importance]} status={task.status} fill={fill} />
                                </span>
                                <span className={(task.status ? "text-gray-500 line-through first-letter:uppercase" : "first-letter:uppercase")}>
                                    {task.value}
                                </span>
                            </div>
                            <div className="flex gap-2">
                                <AddTaskPopDialog title={"Edit"} id={task.id} taskDefault={task.value} importanceDefault={task.importance} description={"Edit"} icon={editIcon} callBack={updateTask} />
                                <span onClick={() => deleteTask(cardTitle, task.id)}> <div dangerouslySetInnerHTML={{ __html: delteIcon }} /></span>
                            </div>
                        </li>
                    ))
                }
            </div>
        </div >
    )
}
export default TasksCard