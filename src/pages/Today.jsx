import { useEffect } from "react"
import TasksCard from "../components/TasksCard"
import getFormatedDate from "../scripts/getDate"
import useStore from "../store"

function Today() {
    const { tasks, addHabitsToToday } = useStore()
    const today = getFormatedDate(0)
    const todayTasks = tasks[today] === null || undefined ? false : tasks[today]

    useEffect(() => {
        addHabitsToToday()
    })
    // pending tasks
    const yesterday = getFormatedDate(-1)
    const yesterdayTasks = tasks[yesterday] === null || undefined ? false : tasks[yesterday]
    const pendingTasks = yesterdayTasks ? yesterdayTasks.filter(t => !t.status) : false
    return (
        <div className="flex flex-col gap-3">
            <TasksCard cardTitle="today" tasks={todayTasks} />
            <TasksCard cardTitle="pending" tasks={pendingTasks} />
        </div>
    )
}

export default Today