import { create } from "zustand";
import { getData, getNormalData, setData, setNormalData } from "./scripts/manageLocalStorage";
import getFormatedDate, { reFormateDate } from "./scripts/getDate";
import Task from "./classes/task";
const useStore = create((set, get) => ({
    tasks: getData('tasks') || {},
    habits: getData('habits') || { 'tasks': [] },
    setTask: (location, value, importance) => {
        const task = new Task(value, importance)
        if (location === 'habits') {
            let habits = get().habits
            if (habits) {
                habits["tasks"] = [...habits["tasks"], task]
            } else {
                habits["tasks"] = [task]
            }
            setData('habits', habits)
            set({ habits: habits })
            // add the habit to today tasks
            // get().setTask('today', value, importance) // commeted because if the today habits not added yet an you add a habit it;s will add twice
        } else {
            let tasks = get().tasks
            const plusDays = location === 'tomorrow' ? 1 : 0
            const day = getFormatedDate(plusDays)
            if (tasks[day]) {
                tasks[day] = [...tasks[day], task]
            } else {
                tasks[day] = [task]
            }
            setData('tasks', tasks)
            set({ tasks: tasks })
        }
    },
    updateTaskStatus: (key, task_id) => {
        if (key === "today" || "pending") {
            // console.log("habit")
            // const habits = get().habits
            // habits["tasks"].find(t => t.id === task_id).status = !habits["tasks"].find(t => t.id === task_id).status
            // setData('habits', habits)
            // set({ habits: habits })
            // console.log("else")
            const tasks = get().tasks

            let day = reFormateDate(parseInt(task_id.replace(/\D*/, "")))
            if (tasks[day].find(t => t.id === task_id) === undefined) {
                day = reFormateDate(parseInt(task_id.replace(/\D*/, "")) + (24 * 60 * 60 * 1000))

            }
            tasks[day].find(t => t.id === task_id).status = !tasks[day].find(t => t.id === task_id).status
            setData('tasks', tasks)
            set({ tasks: tasks })

        } else {
            console.log("you can't update status of this task")
        }
    },
    updateTask: (key, value, importance, task_id) => {
        if (key === "habits") {
            // console.log("habit")
            const habits = get().habits
            habits['tasks'].find(t => t.id === task_id).value = value
            habits['tasks'].find(t => t.id === task_id).status = false
            habits['tasks'].find(t => t.id === task_id).importance = importance
            setData('habits', habits)
            set({ habits: habits })
        } else {
            // console.log("else")
            const tasks = get().tasks
            const plusDay = key === "tomorrow" ? (24 * 60 * 60 * 1000) : 0
            let day = reFormateDate(parseInt(task_id.replace(/\D*/, "")) + plusDay)
            if (tasks[day].find(t => t.id === task_id) === undefined) {
                day = reFormateDate(parseInt(task_id.replace(/\D*/, "")) + (24 * 60 * 60 * 1000))

            }
            tasks[day].find(t => t.id === task_id).value = value
            tasks[day].find(t => t.id === task_id).status = false
            tasks[day].find(t => t.id === task_id).importance = importance
            setData('tasks', tasks)
            set({ tasks: tasks })
        }
    },
    deleteTask: (key, task_id) => {
        if (key === "habits") {
            // console.log("habit")
            const habits = get().habits
            console.log(task_id)
            // console.log(habits["tasks"])
            const taskIndex = habits["tasks"].indexOf(habits["tasks"].find(e => e.id === task_id))
            // console.log(taskIndex)
            habits["tasks"] = [...habits["tasks"].slice(0, taskIndex), ...habits["tasks"].slice(taskIndex + 1,)]
            setData('habits', habits)
            set({ habits: habits })
        } else {
            // console.log("else")
            const tasks = get().tasks
            const plusDay = key === "tomorrow" ? (24 * 60 * 60 * 1000) : 0

            let day = reFormateDate(parseInt(task_id.replace(/\D*/, "")) + plusDay)
            if (tasks[day].find(t => t.id === task_id) === undefined) {
                day = reFormateDate(parseInt(task_id.replace(/\D*/, "")) + (24 * 60 * 60 * 1000))

            }
            // console.log(task_id.replace(/\D*/, ""))
            let dayTasks = tasks[day]
            const taskIndex = dayTasks.indexOf(dayTasks.find(e => e.id === task_id))
            dayTasks = [...dayTasks.slice(0, taskIndex), ...dayTasks.slice(taskIndex + 1,)]
            tasks[day] = dayTasks
            // delete tasks[day].find(t => t.id === task_id)
            setData('tasks', tasks)
            set({ tasks: tasks })
        }
    },
    addHabitsToToday: () => {
        const today = getFormatedDate(0)
        if (getNormalData('lastDayThatHabitAddedTo') != today) {
            const habits = get().habits
            habits['tasks'].forEach(habit => get().setTask('today', habit.value, habit.importance))
            setNormalData('lastDayThatHabitAddedTo', today)
        }
    }

}))

export default useStore