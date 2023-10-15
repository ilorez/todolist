import StatusTaskIcon from "./StatusTaskIcon"

function TasksCard({ cardTitle, tasks }) {
    const importances = {
        1: "red",
        2: "blue",
        3: "green"
    }
    let fill = !(cardTitle === 'today' || cardTitle === 'pending')


    return (
        <div className="flex flex-col first-letter:uppercase bg-background-light w-full p-4 pb-10 shadow-md rounded-lg gap-3">
            <h2 className="first-letter:uppercase font-bold">{cardTitle} Tasks </h2>
            <div className="list-none flex flex-col gap-2 ml-3">
                {
                    tasks.map((task) => (
                        <li key={task.id} className="flex gap-2"><span><StatusTaskIcon color={importances[task.importance]} status={task.status} fill={fill} /></span> <span className={(task.status ? "text-gray-500 line-through first-letter:uppercase" : "first-letter:uppercase")}>{task.value}</span></li>
                    ))
                }
            </div>
        </div >
    )
}
export default TasksCard