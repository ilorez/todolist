import TasksCard from "../components/TasksCard"
import getFormatedDate from "../scripts/getDate"
import useStore from "../store"

function Today() {
    const { tasks } = useStore()
    const today = getFormatedDate(0)
    const todayTasks = tasks[today] === null || undefined ? false : tasks[today]

    return (
        <>
            <TasksCard cardTitle="today" tasks={todayTasks} />
        </>
    )
}

export default Today