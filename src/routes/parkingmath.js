export const sum = 3+4;

export const isRestricted = date => {
    const curHours = date.getHours();
    console.log(curHours)

    if(curHours < 2 || curHours >= 15) return false;
    return true;
}
export const isDateEven = date => {
    console.log(date.getDate())
    return (date.getDate() % 2) == 0
}
export const nextRestrictedDate = date => {
    const curHours = date.getHours();

    if(curHours < 15)
      return date;

    const date2 = new Date(date);
    date2.setDate(date.getDate() + 1);
    return date2
}