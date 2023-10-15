import { create } from "zustand";
import { getData, setData } from "./scripts/manageLocalStorage";
import { reFormateDate } from "./scripts/getDate";
// const ta = {
//     '2023-10-15': [
//         {
//             'date': 'Sun Oct 15 2023 22:18:17 GMT+0100 (GMT+01:00)',
//             "id": 1,
//             "importance": "normal",
//             "status": false,
//             "value": "so"
//         },
//         {
//             'date': 'Sun Oct 15 2023 22:18:17 GMT+0100 (GMT+01:00)',
//             "id": 2,
//             "importance": "normal",
//             "status": false,
//             "value": "so"
//         },
//         {
//             'date': 'Sun Oct 15 2023 22:18:17 GMT+0100 (GMT+01:00)',
//             "id": 3,
//             "importance": "normal",
//             "status": false,
//             "value": "so"
//         }
//     ],
//     '2023-10-16': [{
//         'date': 'Sun Oct 15 2023 22:18:17 GMT+0100 (GMT+01:00)',
//         "id": 2,
//         "importance": "urgent",
//         "status": false,
//         "value": "so"
//     }]
// }
// setData('tasks', ta)
const useStore = create((set, get) => ({
    tasks: getData('tasks'),
    habits: getData('habits'),
    setTask: (task) => {
        let tasks = get().tasks
        const day = reFormateDate(task.date)
        if (tasks[day]) {
            tasks[day] = [...tasks[day], task]
        } else {
            tasks[day] = [task]
        }
        setData('tasks', tasks)
        set({ tasks: tasks })
    }
}))

export default useStore