new Vue({
    el:"#app",
    mounted() {
        console.log('Component mounted.')
    },
    data() {
        return {
          pathImg: 'images/img.jpg',
          nameFood:'Select an New image',
          description: null,
          fileName:"",
          objects:"",
          state: true,
        };
    },
    methods: {
        formSubmit(e) {
            e.preventDefault();
            var self = this;
            axios.get('api.php', {
                params: {
                    pathImg: this.pathImg
                }
            })
            .then(function (response) {
                self.description = response.data;   
                self.fileName = self.description.filename;
                self.objects = self.description.objects;                
            })
            .catch(function (error) {
                console.log(error);
            });
        }

    }
})