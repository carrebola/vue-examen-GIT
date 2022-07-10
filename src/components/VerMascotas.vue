<template>
    <div class="container">
        <h1>Mascotas</h1>
        <div v-for="item in arrayMascotas.datos" :key="item.nombre" class="card mb-3" style="max-width: 540px;">
            <div  class="row g-0">
                <div class="col-md-4">
                <img :src=urlImagen(item.imagen) class="img-fluid rounded-start" alt="">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{item.nombre}}</h5>
                    <p class="card-text">{{item.descripción}}</p>
                    
                </div>
                </div>
            </div>
            </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                arrayMascotas: []
            }
        },
        methods: {
            urlImagen(imagen) {
                return 'https://ejemplo-soc.herokuapp.com/imagenes/'+imagen 
            },
            async verMascotas() {
                console.log('ver mascotas');
                
                try {
                    const resultado = await fetch('https://ejemplo-soc.herokuapp.com/api/mascotas');
                    const result = await resultado.json() 
                    this.arrayMascotas = result
                } catch (error) {
                    console.log(error);
                }
                
            }
        },
        computed: {
            
        },
        mounted () {
            this.verMascotas()
            
        },
    }
</script>

<style lang="scss" scoped>

</style>