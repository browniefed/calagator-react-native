import padStart from "lodash/padStart";

const DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Nov',
    'Dec'
]

const getDate = (date) => {
    const _date = new Date(date);
    return `${getMonth(_date)} ${getDay(_date)} ${_date.getFullYear()}`
}

const getDayOfWeek = (date) => {
    const _date = new Date(date);
    return DAYS[_date.getDay()]
}

const getMonth = (_date) => MONTHS[_date.getMonth()];
const getDay = (_date) => padStart(_date.getDate(), 2, '0');

const getTime = (date) => {
    const _date = new Date(date);
    let hours = _date.getHours();
    const minutes = _date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${hours}:${padStart(minutes, 2, '0')} ${ampm}`
}

export {
    getDate,
    getDayOfWeek,
    getMonth,
    getDay,
    getTime
}