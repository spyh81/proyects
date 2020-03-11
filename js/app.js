const app = new Vue({

    el: '#app',
    data: {
        titulo: 'Lista de la compra',
        tareas: [],
        nuevaTarea: ''
    },

    methods: {
        agregarTarea: function () {
            console.log('funciona', this.nuevaTarea);

            this.tareas.push({
                nombre: this.nuevaTarea
            })
            console.log(this.tareas);
            this.nuevaTarea = '';
            localStorage.setItem('lista-compra', JSON.stringify(this.tareas));
        },
        
        eliminarTarea: function(index) {
            this.tareas.splice(index, 1);
            localStorage.setItem('lista-compra', JSON.stringify(this.tareas));
        }
    },
    
    created: function() {
        let datosLS = JSON.parse(localStorage.getItem('lista-compra'));
        
        if(datosLS === null) {
            this.tareas = [];
        }
        
        else {
            this.tareas = datosLS;
        }
    }

});
