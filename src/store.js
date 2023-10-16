import { create } from "zustand";
import { getData, setData } from "./scripts/manageLocalStorage";
import getFormatedDate, { reFormateDate } from "./scripts/getDate";
import Task from "./classes/task";
const useStore = create((set, get) => ({
    tasks: getData('tasks') || {},
    habits: getData('habits') || {},
    setTask: (location, value, importance) => {
        const task = new Task(value, importance)
        if (location === 'habits') {
            let habits = get().habits
            if (habits) {
                habits = [...habits, task]
            } else {
                habits = [task]
            }
            setData('habits', habits)
            set({ habits: habits })
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
    }
}))

export default useStore