export const getDecemberDates = () => {
    const dates = []
    const year = 2024
    const month = 11
  
    for (let day = 1; day <= 31; day++) {
      const date = new Date(Date.UTC(year, month, day))
      dates.push(date.toISOString().slice(0, 10)) // Format as 'YYYY-MM-DD'
    }

    //january dates
    const offDates = []
    const offYear = 2025
    const offMonth = 0o1
    for (let offDay = 1; offDay <= 4; offDay++) {
      const offDate = new Date(Date.UTC(offYear, offMonth, offDay))
      offDates.push(offDate.toISOString().slice(0, 10)) // Format as 'YYYY-MM-DD'
    }

  
    return { dates, offDates } 
}

