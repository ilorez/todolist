import StatusTaskIcon from "../components/StatusTaskIcon"
import TasksCard from "../components/TasksCard"
import useStore from "../store"

function Today() {
    const ar = [
        {
            'id': 1,
            'value': 'runnig',
            'status': true,
            'importance': 1
        },
        {
            'id': 2,
            'value': 'go to gym',
            'status': false,
            'importance': 2
        },
        {
            'id': 3,
            'value': 'playing football',
            'status': false,
            'importance': 3
        }
    ]
    return (
        <>
            <TasksCard cardTitle="today" tasks={ar} />
        </>
    )
}
export default Today