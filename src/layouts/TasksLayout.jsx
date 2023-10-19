import { Badge, Flex } from "@radix-ui/themes"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import AddTaskPopDialog from "../components/AddTaskPopDialog"
import useStore from "../store"
import { useEffect } from "react"
// import { useStore } from "../store"


function TasksLayout() {
    const location = useLocation()
    const navigate = useNavigate();
    useEffect(() => {
        if (location.pathname === "/tasks") {

            navigate("/tasks/today");
        }
    })

    const { setTask } = useStore()
    const icon = `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path id="path-icon-plus" fillRule="evenodd" clipRule="evenodd" d="M3.875 27C3.875 14.2284 14.2284 3.875 27 3.875C39.7716 3.875 50.125 14.2284 50.125 27C50.125 39.7716 39.7716 50.125 27 50.125C14.2284 50.125 3.875 39.7716 3.875 27ZM27 0.125C12.1573 0.125 0.125 12.1573 0.125 27C0.125 41.8427 12.1573 53.875 27 53.875C41.8427 53.875 53.875 41.8427 53.875 27C53.875 12.1573 41.8427 0.125 27 0.125ZM28.875 19.5C28.875 18.4645 28.0355 17.625 27 17.625C25.9645 17.625 25.125 18.4645 25.125 19.5V25.125H19.5C18.4645 25.125 17.625 25.9645 17.625 27C17.625 28.0355 18.4645 28.875 19.5 28.875H25.125V34.5C25.125 35.5355 25.9645 36.375 27 36.375C28.0355 36.375 28.875 35.5355 28.875 34.5V28.875H34.5C35.5355 28.875 36.375 28.0355 36.375 27C36.375 25.9645 35.5355 25.125 34.5 25.125H28.875V19.5Z" fill="#1C274C" />
</svg>`
    return (
        <>
            <Flex gap="2" justify={"between"} className="px-3">
                <Badge color="orange">Urgent</Badge>
                <Badge color="blue">Normal</Badge>
                <Badge color="green">Non-urgent</Badge>
            </Flex>

            <Outlet />
            <div variant="ghost" className="fixed bottom-10 right-10 bg-none add-button">
                <AddTaskPopDialog title={"Add"} taskDefault={""} importanceDefault={"normal"} callBack={setTask} description={"Enter"} icon={icon} />
            </div>

        </>
    )
}

export default TasksLayout