
function getData(key) {
    try {
        const data = JSON.parse(localStorage.getItem(key))
        return data
    } catch (err) {
        console.error("the item not found", err)
        return false
    }
}

function setData(key, data) {
    try {
        localStorage.setItem(`${key}`, JSON.stringify(data))
        return true
    } catch (err) {
        console.error(err)
        return false
    }
}



export { getData, setData }
