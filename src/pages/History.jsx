import { useEffect, useState } from "react"
import getFormatedDate from "../scripts/getDate"
import useStore from "../store"
import HistoryCard from "../components/HistoryCard"

function History() {
    const { tasks } = useStore()
    const today = getFormatedDate(0)
    console.log((new Date(today)).getTime())
    const [days, setDays] = useState([])


    useEffect(() => {
        let allDays = []
        for (const day in tasks) {
            console.log((new Date(day)).getTime() < (new Date(today)).getTime())
            if ((new Date(day)).getTime() < (new Date(today)).getTime()) {

                let dayName = day === getFormatedDate(-1) ? "yesterday" : day
                allDays.push(<HistoryCard day={dayName} tasks={tasks[day]} key={day} />)

            }
        }
        setDays(allDays)
    }, [tasks])
    console.log(days)
    return (
        <>
            <h2 className=" w-full bg-background-light p-2 font-bold text-center rounded-lg shadow-md">Tasks History</h2>
            <div className="flex flex-col gap-4">
                {days}
            </div>
        </>
    )
}
export default History