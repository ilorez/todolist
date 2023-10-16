import { Button, Dialog, Flex, Select, Text, TextField } from "@radix-ui/themes";
import { useLocation } from "react-router-dom";

function AddTaskPopDialog({ title, description, taskDefault, importanceDefault, callBack, icon, id = "" }) {
    const loaction = useLocation()
    function handleSubmit(event) {
        event.preventDefault()
        let data = Object.fromEntries(new FormData(event.currentTarget))
        let taskLocation = loaction.pathname.split("/").pop()
        if (title === "Add") {
            callBack(taskLocation, data.task, data.importance)
        } else if (title === "Edit") {
            callBack(taskLocation, data.task, data.importance, id)
        }
    }
    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <div dangerouslySetInnerHTML={{ __html: icon }} />

            </Dialog.Trigger>
            <Dialog.Content style={{ maxWidth: 450 }}>
                <form onSubmit={handleSubmit}>
                    <Dialog.Title>{title} task</Dialog.Title>
                    <Dialog.Description size="2" mb="4">
                        {description} the task inforamtion
                    </Dialog.Description>

                    <Flex direction="column" gap="3">
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Task
                            </Text>
                            <TextField.Input
                                required
                                defaultValue={taskDefault}
                                placeholder="what you want to do ?"
                                name="task"
                            />
                        </label>
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Importance
                            </Text>
                            <Select.Root defaultValue={importanceDefault} name="importance">
                                <Select.Trigger />
                                <Select.Content >
                                    <Select.Item value="urgent">Urgent</Select.Item>
                                    <Select.Item value="normal">Normal</Select.Item>
                                    <Select.Item value="non-urgent">Non-urgent</Select.Item>
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