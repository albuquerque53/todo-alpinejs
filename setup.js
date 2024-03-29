function setup() {
    return {
        activities: [],
        name: '',
        date: '',

        getCurrentDate() {
            const currentDate = new Date();

            const currentYear = currentDate.getFullYear();
            const currentMonth = currentDate.getMonth() + 1;
            const currentDay = currentDate.getDate();
            
            return `${currentYear}-${String(currentMonth).padStart(2, '0')}-${String(currentDay).padStart(2, '0')}`;
        },

        initValues() {
            this.date = this.getCurrentDate()
        },

        createActivity() {
            this.activities.push({
                id: Math.random().toString(16).slice(2),
                completed: false,
                name: this.name,
                date: this.date
            })
        },
        
        filterActivities(completed) {
            return this.activities.filter(
                activity => activity.completed == completed
            )
        }
    }
}
