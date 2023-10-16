class Task {
    constructor(value, importance) {
        this.value = value
        this.importance = importance
        this.status = false
        this.id = `id_${(new Date()).getTime()}`;
    }
    updateValue(newValue) {
        this.value = newValue
    }
    updateImportance(newImpo) {
        this.importance = newImpo
    }

}

export default Task