function getFormatedDate(plusDays = 0) {
    const date = new Date();

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate() + plusDays;

    const formDate = [year, month, day].join('-');
    return formDate
}

export function reFormateDate(date) {
    date = new Date(date)
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formDate = [year, month, day].join('-');
    return formDate
}
export default getFormatedDate