import { Badge, Flex } from "@radix-ui/themes"
import { Outlet } from "react-router-dom"
import AddTaskPopDialog from "../components/AddTaskPopDialog"


function TasksLayout() {
    
    
    return (
        <>
            <Flex gap="2" justify={"between"} className="px-3">
                <Badge color="orange">Urgent</Badge>
                <Badge color="blue">Normal</Badge>
                <Badge color="green">Non-urgent</Badge>
            </Flex>

            <Outlet />
            <div variant="ghost" className="fixed bottom-10 right-10 bg-none add-button">
                <AddTaskPopDialog />
            </div>

        </>
    )
}

export default TasksLayout