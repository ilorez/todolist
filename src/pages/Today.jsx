import StatusTaskIcon from "../components/StatusTaskIcon"
import TasksCard from "../components/TasksCard"
import getFormatedDate from "../scripts/getDate"
import useStore from "../store"

function Today() {
    const { tasks, setTask } = useStore()
    const today = getFormatedDate(0)
    const ar = tasks[today] === undefined ? false : tasks[today]
    return (
        <>
            <TasksCard cardTitle="today" tasks={ar} />
        </>
    )
}
export default Today