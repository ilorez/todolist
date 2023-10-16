import TasksCard from "../components/TasksCard"
import getFormatedDate from "../scripts/getDate"
import useStore from "../store"
function Habits() {
    const { habits } = useStore()
    // const tomorrow = getFormatedDate(1)
    const habitsTasks = habits["tasks"] === null || undefined ? false : habits['tasks']

    return (
        <>
            <TasksCard cardTitle="habits" tasks={habitsTasks} />
        </>
    )
}
export default Habits