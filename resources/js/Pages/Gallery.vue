<template>
    <div>
        <div class="header">
            Gallery
        </div>
        <div class="gallery">
            <div class="column" v-for="image in images" :key="image.id">
                <div class="item">
                    <a :href="'http://127.0.0.1:8000/storage/' + image.image_path" class="imglink">
                        <img :src="'http://127.0.0.1:8000/storage/' + image.image_path" class="img">
                    </a>
                    <div class="imginfo">
                        <span class="imgtitle">Meat</span>
                        <span class="imgdesc">A Piece of Meat!</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import * as axios from "axios";

export default {
    name: "Gallery",
    data() {
        return {
            images: []
        }
    },
    mounted() {
        const url = `http://127.0.0.1:8000/api/images/getByUser/${this.$auth.user().id}`;
        return axios.get(url)
            // get data
            .then(x => {
                let self = this;
                x.data.forEach(function(item) {
                    self.images.push(item);
                })
            });
    }
}
</script>
<style scoped>
.header{
    font-size: 6vw;
    font-family: "Quicksand";
    text-align: center;
    align-content: center;
    margin-top: 5vw;
    margin-bottom: 5vw;
}

.gallery{
    display: flex;
}

.column{
    display: block;
    margin-right: .5vw;
    width: 100%;
}

.item{
    overflow: hidden;
    position: relative;
    margin-bottom: .5vw;
    box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4);
    border-radius: 1%;
}

.imginfo{
    opacity: 0;
    bottom: -.78vw;
    left: .6vw;

    padding: .35vw;
    color: black;
    position: absolute;
    font-size: .65vw;
    font-family: "Quicksand";
    transition: .2s;
    background-color: white;
}

.imglink:hover + .imginfo, .imginfo:hover{
    opacity: 1;
    bottom: .78vw;
}

.imgdesc{
    font-size: .58vw;
    color: dimgray;
    display: block;
}

.img{
    display: block;
    position: relative;
    transition: .2s;
    width: 100%;
    height: 100%;
}
</style>
