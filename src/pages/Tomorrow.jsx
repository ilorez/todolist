import TasksCard from "../components/TasksCard"
import getFormatedDate from "../scripts/getDate"
import useStore from "../store"

function Tomorrow() {
    const { tasks } = useStore()
    const tomorrow = getFormatedDate(1)
    const tomorrowTasks = tasks[tomorrow] === null || undefined ? false : tasks[tomorrow]

    return (
        <>
            <TasksCard cardTitle="tomorrow" tasks={tomorrowTasks} />
        </>
    )
}
export default Tomorrow