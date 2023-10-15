class Task {
    static count = 0
    constructor(value, importance, date) {
        this.value = value
        this.importance = importance
        this.date = date;
        this.status = false
        this.id = ++this.constructor.count;
    }
    updateValue(newValue) {
        this.value = newValue
    }
    updateImportance(newImpo) {
        this.importance = newImpo
    }

}

export default Task