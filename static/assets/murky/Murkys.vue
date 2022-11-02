<template>
    <section class="murky-container">
        <div class="murky-background-container" v-for="(background, index) in backgrounds" :key="index">
            <img :src="background.src" class="murky-background-image" :style="{'z-index': index}"/>
            
        </div>

        <StaticBackground staticProfile="Murky" />

        <MurkyStore :storeActive="storeActive"/>

        <div class="murky-main-title">
            MURKYS <br/>RAFT
        </div>

        <div class="murky-menu">
            <a @click="storeActive = !storeActive">STORE</a><br/>
            <a>RANDOM FISH</a><br/>
            <a>ABOUT</a>
        </div>
        <article>
            Global leader in distribution of fish
        </article>
    </section>
</template>

<script>
import StaticBackground from "../../components/StaticBackground.vue"
import MurkyStore from "./MurkyStore.vue"

export default {
    components: {
        StaticBackground,
        MurkyStore,
    },
    props: ["updateInventory"],
    data() {
        return {
            backgrounds: [],
            storeActive: false,
        }
    },
    async created() {
        this.backgrounds = await this.importAll(require.context('./backgrounds', false, /\.(png|jpe?g|svg)$/))
    },
    methods: {
        importAll(r) {
            let backgroundsTemp = {}
            r.keys().forEach((background) => {
                backgroundsTemp[background.replace('./', '')] = r(background);
            });
            let backgroundsArray = Object.keys(backgroundsTemp).map(background => {let img = new Image(); img.src = require('./backgrounds/' + background); return img;})

            return backgroundsArray
        },

        pushFish() {
            console.log(this.player)
            //this.player.inventory.push("fishName")
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

<style scoped>
    .murky-container {
        height:100%;
        width:100%;
        position:relative;
        font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        overflow-y:hidden;
    
    }

    .murky-main-title {
        position:absolute;
        left:10px;
        font-size:10em;
        line-height:0.9em;
        z-index:1;
        
    }

    .murky-menu {
        width:20%;
        font-size:2em;
        font-style: italic;
        text-decoration: underline;
        z-index:1;

        position:absolute;
        bottom:20%;
        line-height: 2em;
        left:80%;
    }

    .murky-background-container {
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        z-index:-1;
        filter: hue-rotate(-10deg);
    }

    .murky-background-image {
        position:absolute;
        height:auto;
        width:100%;
    }

    article {
        position:absolute;
        bottom:10px;
        left:10px;
    }

    a {
        cursor:pointer;
    }
</style>