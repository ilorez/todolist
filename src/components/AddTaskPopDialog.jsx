import { Button, Dialog, Flex, Select, Text, TextField } from "@radix-ui/themes";
import Task from "../classes/task";
import { useLocation } from "react-router-dom";
function AddTaskPopDialog() {
    const loaction = useLocation()
    function handleSubmit(event) {
        event.preventDefault()
        let data = Object.fromEntries(new FormData(event.currentTarget))
        let taskLocation = loaction.pathname.split("/").pop()
        // const isTomorrow = taskLocation === "tomorrow" ? 1:0 
        const task = new Task(data.task, data.imporatance)
        //TODO add task to the correct pace based on taskLocaton
        console.log(task)
    }
    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="path-icon-plus" fillRule="evenodd" clipRule="evenodd" d="M3.875 27C3.875 14.2284 14.2284 3.875 27 3.875C39.7716 3.875 50.125 14.2284 50.125 27C50.125 39.7716 39.7716 50.125 27 50.125C14.2284 50.125 3.875 39.7716 3.875 27ZM27 0.125C12.1573 0.125 0.125 12.1573 0.125 27C0.125 41.8427 12.1573 53.875 27 53.875C41.8427 53.875 53.875 41.8427 53.875 27C53.875 12.1573 41.8427 0.125 27 0.125ZM28.875 19.5C28.875 18.4645 28.0355 17.625 27 17.625C25.9645 17.625 25.125 18.4645 25.125 19.5V25.125H19.5C18.4645 25.125 17.625 25.9645 17.625 27C17.625 28.0355 18.4645 28.875 19.5 28.875H25.125V34.5C25.125 35.5355 25.9645 36.375 27 36.375C28.0355 36.375 28.875 35.5355 28.875 34.5V28.875H34.5C35.5355 28.875 36.375 28.0355 36.375 27C36.375 25.9645 35.5355 25.125 34.5 25.125H28.875V19.5Z" fill="#1C274C" />
                </svg>
            </Dialog.Trigger>
            <Dialog.Content style={{ maxWidth: 450 }}>
                <form onSubmit={handleSubmit}>
                    <Dialog.Title>Add task</Dialog.Title>
                    <Dialog.Description size="2" mb="4">
                        Enter the task inforamtion
                    </Dialog.Description>

                    <Flex direction="column" gap="3">
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Task
                            </Text>
                            <TextField.Input
                                defaultValue=""
                                placeholder="what you want to do ?"
                                name="task"
                            />
                        </label>
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Importance
                            </Text>
                            <Select.Root defaultValue="normal" name="imporatance">
                                <Select.Trigger />
                                <Select.Content >
                                    <Select.Item value="urgent">Urgent</Select.Item>
                                    <Select.Item value="normal">Normal</Select.Item>
                                    <Select.Item value="non-urgen">Non-urgen</Select.Item>
                                </Select.Content>
                            </Select.Root>
                        </label>
                    </Flex>

                    <Flex gap="3" mt="4" justify="end">
                        <Dialog.Close>
                            <Button variant="soft" color="gray">
                                Cancel
                            </Button>
                        </Dialog.Close>
                        <Dialog.Close>
                            <button type="submit">Save</button>
                        </Dialog.Close>
                    </Flex>
                </form>
            </Dialog.Content>
        </Dialog.Root>
    )
}
export default AddTaskPopDialog