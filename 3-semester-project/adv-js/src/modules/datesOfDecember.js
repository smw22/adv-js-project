import { ref } from 'vue'

// Function to generate all dates in December 2024 without wrapping issues
export const getDecemberDates = () => {
    const dates = []
    const year = 2024
    const month = 11 // December is month 11 in JavaScript Date (0-indexed)

    // Loop through all days in December (1 to 31)
    for (let day = 1; day <= 31; day++) {
        const date = new Date(Date.UTC(year, month, day))
        dates.push(date.toISOString().slice(0, 10)) // Format as 'YYYY-MM-DD'
    }

    return dates
}

// Store the array of dates in a reactive ref
const decemberDates = ref(getDecemberDates())