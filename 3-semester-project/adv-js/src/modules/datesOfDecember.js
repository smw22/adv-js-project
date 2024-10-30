export const getDecemberDates = () => {
    const dates = []
    const year = 2024
    const month = 11
  
    for (let day = 1; day <= 31; day++) {
      const date = new Date(Date.UTC(year, month, day))
      dates.push(date.toISOString().slice(0, 10)) // Format as 'YYYY-MM-DD'
      console.log(date)
    }
  
    return { dates }
}
