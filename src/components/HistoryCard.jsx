import StatusTaskIcon from "./StatusTaskIcon";

function HistoryCard({ day, tasks }) {
    const importances = {
        'urgent': "red",
        'normal': "blue",
        'non-urgent': "green"
    }
    return (
        <div className="flex flex-col first-letter:uppercase bg-background-light w-full p-4 pb-10 shadow-md rounded-lg gap-3">
            <h2 className="first-letter:uppercase font-bold">{day}</h2>
            <div className="list-none flex flex-col gap-2 ml-3">
                {
                    tasks &&
                    tasks.map((task) => (
                        <li key={task.id} className="flex justify-between items-end">
                            <div className="flex gap-2">
                                <span >
                                    <StatusTaskIcon color={importances[task.importance]} status={task.status} />
                                </span>
                                <span className={(task.status ? "text-gray-500 line-through first-letter:uppercase" : "first-letter:uppercase")}>
                                    {task.value}
                                </span>
                            </div>
                            <div className="flex gap-2">
                                {/* <AddTaskPopDialog title={"Edit"} id={task.id} taskDefault={task.value} importanceDefault={task.importance} description={"Edit"} icon={editIcon} callBack={updateTask} />
                                <span onClick={() => deleteTask(cardTitle, task.id)}> <div dangerouslySetInnerHTML={{ __html: delteIcon }} /></span> */}
                            </div>
                        </li>
                    ))
                }
            </div>
        </div >
    )
}

export default HistoryCard