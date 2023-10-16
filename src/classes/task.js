class Task {
    static count = 0
    constructor(value, importance) {
        this.value = value
        this.importance = importance
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