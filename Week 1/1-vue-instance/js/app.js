const app = Vue.createApp({
    data() {
        return {
            title: "Muhammet Sarıcan Vue App",
            content: "I am learning vue js with dear Gokhan Kandemir from kablosuzkedi youtube channel.",
            eduflow: {
                title:"Eğitim ve müfredat için tıklayınız.",
                url: "https://eduflow.kablosuzkedi.com",
                target:"_blank",
                alt: "mufredat-gokhan-kandemir-vue-bootcamp"
            },
            coords:{
                x:"45",
                y:"45"
            }
        }
    },
    methods:{
        changeTitle(title){
            this.title=title
        },
        updateCoords(moveText){
            this.coords.x=event.x;
            this.coords.y=event.y;
        }
    }
})

app.mount('#app');