import { getData, setData } from "../scripts/manageLocalStorage"
function Today() {
    setData('2023-08-25', "birthday")
    let dataDate = getData('2023-08-25')
    console.log(dataDate)

    return (
        <>
            <h2>I'm Today page</h2>

        </>
    )
}
export default Today