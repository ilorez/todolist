function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}
class Task {
    constructor(value, importance) {
        this.value = value
        this.importance = importance
        this.status = false
        this.id = `id_${makeid(12)}_${(new Date()).getTime()}`;
    }
    updateValue(newValue) {
        this.value = newValue
    }
    updateImportance(newImpo) {
        this.importance = newImpo
    }

}

export default Task