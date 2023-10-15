
function getData(item) {
    try {
        const data = JSON.parse(localStorage.getItem(item))
        return data
    } catch (err) {
        console.error("the item not found", err)
        return false
    }
}

function setData(item, data) {
    try {
        localStorage.setItem(`${item}`, JSON.stringify(data))
        return true
    } catch (err) {
        console.error(err)
        return false
    }
}



export { getData, setData }
