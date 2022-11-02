<template>
    <div class="kahuna-container">
        <NavBar :linkObject="linkObject" componentName="KahunaBurger" />

        <div class="kahuna-title-container">
            BIG KAHUNA BURGER
        </div>

        <div class="kahuna-main-gallery">
            <MainGallery :galleryObject="mainGallery" /> <br />
        </div>

        <div class="kahuna-about-container">
            <div class="kahuna-about">
                <img :src-="require('./images/hoodie.jpeg')" />    
            </div>
            <div class="kahuna-about">

            </div>
        </div>

        <EneftesGallery1 :galleryObject="galleryCards" />
    </div>
</template>

<script>
import EneftesGallery1 from '@/components/EneftesGallery1.vue';
import MainGallery from '@/components/MainGallery.vue';
import NavBar from '@/components/NavBar.vue';

export default {
    components: {
    EneftesGallery1,
    MainGallery,
    NavBar
},
    data() {
        return {
            linkObject: [
                {
                    text: "BURGERS",
                },
                {
                    text: "ABOUT US",
                },
                {
                    text: "MERCH",
                },

            ],
            galleryCards: [
                {
                    imgSrc: require('./images/cards/butch.jpg'),
                    description: 'A short nonsensical description',
                    cost: 1000,
                },
                {
                    imgSrc: require('./images/cards/marsellus.jpeg'),
                    description: 'A short nonsensical description',
                    cost: 1000,
                },
                {
                    imgSrc: require('./images/cards/mia.jpeg'),
                    description: 'A short nonsensical description',
                    cost: 1000,
                },
                {
                    imgSrc: require('./images/cards/vincent.webp'),
                    description: 'A short nonsensical description',
                    cost: 1000,
                },
                {
                    imgSrc: require('./images/cards/wolfe.jpeg'),
                    description: 'A short nonsensical description',
                    cost: 1000,
                },
            ],
            mainGallery: [
                {
                    imgSrc: require('./images/burger1.jpeg'),
                    description: "LE BIG MAC"
                },
                {
                    imgSrc: require('./images/burger2.jpeg'),
                    description: "SAY WHAT AGAIN" ,
                },
                {
                    imgSrc: require('./images/burger3.webp'),
                    description: "KEEP CHILLIN'"
                },
                {
                    imgSrc: require('./images/burger4.jpeg'),
                    description: "ROYALE WITH CHEESE"
                },
                {
                    imgSrc: require('./images/burger5.webp'),
                    description: "REVELATIONS" ,
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .kahuna-container {
        background:black;
        height:auto;
        width:100%;
    }

    .kahuna-title-container {
        position: relative;
        margin-top:50px;
        padding-top:10px;
        color:gold;
        background:black;
        font-size:4em;
        font-family: Glusp;
        text-align: center;
        width:100%;
        height:auto;

    }

    .kahuna-about-container {
        height:800px;
        width:100%;

        .kahuna-about {
            width:50%;
            height:100%;
            float:left;

            img {
                height:100%;
                width:auto;
            }
        }

    }

    .kahuna-main-gallery {
        position:relative;
        height:70vh;
        width:100%;
    }
</style>