import { Badge, Flex } from "@radix-ui/themes"
import { Outlet } from "react-router-dom"


function TasksLayout() {
    return (
        <>
            <Flex gap="2">
                <Badge color="orange">Urgent</Badge>
                <Badge color="blue">Normal</Badge>
                <Badge color="green">Non-urgent</Badge>
            </Flex>
            <Outlet />
        </>
    )
}

export default TasksLayout