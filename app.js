new Vue({
    el: '#app',

    data() {
        return {
            courses: [],
            title: "",
            time: 0
        }
    },
    computed: {
        totalTime(){
            let timer = 0
            this.courses.forEach(it => {
                timer += parseInt(it.time) 
            })
            return timer
        }
    },

    methods: {
        addCourse(){
            this.courses.push({ title: this.title, time: this.time })
            this.title = ''
            this.time = 0
        }
    },
})