
function getData(date) {
    try {
        const data = JSON.parse(localStorage.getItem(date))
        return data
    } catch (err) {
        console.error("the date key not found", err)
        return false
    }
}

function setData(date, data) {
    try {
        localStorage.setItem(`${date}`, JSON.stringify(data))
        return true
    } catch (err) {
        console.error(err)
        return false
    }
}

export { getData, setData }