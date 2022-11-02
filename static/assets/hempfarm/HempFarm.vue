<template>
    <div class="main-container" ref="mainContainer" id="backgroundH">
        <img src="./images/backgroundHempV1.png" alt="hemp background" class="hemp-background" />

        <StaticBackground staticProfile="HempFarm" />

        <div class="title-container">
            <img src="./images/hempGraff.png" />
            <img src="./images/farmGraff.png" />
            <!--<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Arrow Down</title><path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="48" d="M112 268l144 144 144-144M256 392V100"/></svg>-->
        </div>

        <div class="clouds">
            <!-- Here the clouds are being moved on the X-Axis based on the "scrollValue" of the Y-Axis 
                 Dividing "scrollValue" makes the clouds scroll in different speeds
                 The initial number, ex. -200, is the base position on the X-axis -->
            <div class="cloud-1" ref="cloud1" :style="{left: `${-200 - (scrollValue/0.5)}px`}">
                <img src="./images/cloud1alt.png" alt="hemp background"/>
            </div>
            <div class="cloud-2" :style="{left: `${50 - (scrollValue)/0.8}px`}">
                <img src="./images/cloud2alt.png" alt="hemp background"/>
            </div>
            <div class="cloud-3" :style="{left: `${100 - (scrollValue)/1.2}px`}">
                <img src="./images/cloud3alt.png" alt="hemp background"/>
            </div>

            
            <div class="cloud-4" :style="{right: `${-200 - (scrollValue/0.5)}px`}">
                <img src="./images/cloud4alt.png" alt="hemp background"/>
            </div>
            <div class="cloud-5" :style="{right: `${50 - (scrollValue)/0.8}px`}">
                <img src="./images/cloud5alt.png" alt="hemp background"/>
            </div>
            <div class="cloud-6" :style="{right: `${100 - (scrollValue)/1.2}px`}">
                <img src="./images/cloud6alt.png" alt="hemp background"/>
            </div>
        </div>

        <div class="hemp-about-container">
            <h1>WHAT WE DO</h1>
            We sell Eneftes, a digital license to a work of art. <br/>
            Owning a piece of the art means you can use it legally in any use case imaginable. <br/>
            Each piece of art is displayed here on the website as well as the current owner. <br/>
            Buyers are allowed to contact owners to see if they are willing to sell <br/><br/>
            For each purchase a natural Hemp-plant is planted, Hemp can be used as a food source, a way to make paper, textiles,
            even a type of plastic. It's fast growing and produces a natural pesticide making it very easy to grow. <br/>
            A guestimated time of sale is around 10 minutes real-time and prices will be negotiated from a local chat room. <br/>
            Well what are you waiting for? Get out there and by some Eneftes!<br/><br/>
            DISCLAIMER: Hemp is not to be confused with the production of Cannabis, it can and is most commonly grown without producing THC, just like any other plant. <br/>
        </div>

        <div class="hemp-eneftes-container">
            <EneftesGallery1 :galleryObject="galleryImages" baseUrl="../assets/hempfarm/images/AI-Images/" />
        </div>

        <!--<div class="ground-container">
            <img src="./images/ground1.png" alt="ground background 1" class="ground-background" />
            <img src="./images/ground2.png" alt="ground background 1" class="ground-background" /> 
            <img src="./images/ground3.png" alt="ground background 1" class="ground-background" /> 
        </div>-->
    </div>
</template>

<script>
/*
    MAKE A GUIDE THAT EXPLAINS THE USES AND BENEFITS OF HEMP

*/
import AOS from "aos";
import EneftesGallery1 from "../../components/EneftesGallery1.vue";
import StaticBackground from "../../components/StaticBackground.vue"
export default {
    props: ["componentContainer"],
    components: {
        EneftesGallery1,
        StaticBackground
    },
    data() {
        return {
            scrollValue: 0,
            galleryImages: [
                {
                    imgSrc: require('./images/AI-Images/holyHemp6.png'),
                    price: "1000"
                },
                {
                    imgSrc: require('./images/AI-Images/holyHemp7.png'),
                    price: "1000"
                },
                {
                    imgSrc: require('./images/AI-Images/holyHemp8.png'),
                    price: "1000"
                },
                {
                    imgSrc: require('./images/AI-Images/holyHemp9.png'),
                    price: "1000"
                },
                {
                    imgSrc: require('./images/AI-Images/holyHemp10.png'),
                    price: "1000"
                },
                {
                    imgSrc: require('./images/AI-Images/holyHemp5.png'),
                    price: "1000"
                },

            ]
        }
        
    },
    mounted() {
        document.querySelector("#component-container-HempFarm").addEventListener("scroll", () => {this.handleScroll()});
        this.scrollValue = document.querySelector("#component-container-HempFarm").scrollTop;
    },
    destroyed() {
       document.querySelector("#component-container-HempFarm").removeEventListener("scroll", () => {this.handleScroll()});
    },
    methods: {
        handleScroll(event) {
            //console.log(document.querySelector("#component-container-HempFarm").scrollTop)
            this.scrollValue = document.querySelector("#component-container-HempFarm").scrollTop;
                       
        },
    },

}
</script>

<style lang="scss" scoped>
    //$start-gradient-color:  rgb(0, 140, 255);
    $start-gradient-color:black;

    .main-container {
        position:relative;
        width:100%;
        height:3000px;
        //background: linear-gradient(0deg, rgba(254,255,53,1) 0%, rgba(255,137,68,1) 30%, $start-gradient-color 50%,$start-gradient-color 100%);
        background:black;
        overflow:hidden;

        .hemp-background {
            position:relative;
            height:auto;
            width:100%;
            z-index:1;
            overflow-y:hidden;  
            
        }

        .title-container {
            height:auto;
            width:80%;
            font-size:10em;
            text-align: center;
            color:black;

            position:absolute;
            top:12.5%;
            left:50%;
            transform:translate(-50%,-50%);
            z-index:5;
            //background:rgba(0, 27, 179, 0.5);
            border-radius:50%;

            svg {
                margin:auto;
                margin-top:50px;
                width:15%;
                height:auto;
                color:black;
            }

            img {
                width:50%;
                height:auto;
            }
        }

        .hemp-about-container {
            position:absolute;
            top:120vh;
            left:50%;
            transform:translateX(-50%);
            height:auto;
            max-height:40vh;
            width:60vw;
            border-radius:50px;
            text-align:center;
            font-family:RobotoBlack;
            color:black;
            padding-left:5%;
            padding-right:5%;
            padding-bottom:30px;
            background:rgba(237, 251, 255, 0.9);
            z-index: 5;

            h1 {
                font-size:2em;
                text-decoration: underline;
            }
        }

        .hemp-eneftes-container {
            height:400px;
            width:80%;
            overflow:hidden;
            position:absolute;
            top:180vh;
            left:50%;
            transform:translateX(-50%);
            z-index:10;
            background:rgba(0, 0, 0, 0.5);
        }

        .clouds {
            height:100%;
            width:100%;
            position:absolute;
            left:0;
            top:50vh;
            z-index:3;
            

            img {
                width:100%;
                height:auto;
            }

            .cloud-1 {
                position:absolute;
                width:700px;
                height:auto;
                top:100px;
                
            }

            .cloud-2 {
                position:absolute;
                width:700px;
                height:auto;
                top:130px;
                left:50px;
            }

            .cloud-3 {
                position:absolute;
                width:700px;
                height:auto;
                top:300px;
                left:100px;
            }

            .cloud-4 {
                position:absolute;
                width:700px;
                height:auto;
                top:140px;
                right:-200px;
            }

            .cloud-5 {
                position:absolute;
                width:700px;
                height:auto;
                top:130px;
                right:50px;
            }

            .cloud-6 {
                position:absolute;
                width:700px;
                height:auto;
                top:300px;
                right:100px;
            }
        }

        .ground-container {
            position:absolute;
            bottom:0;
            height:auto;
            width:100%

        }

        .ground-background {
            position:absolute;
            bottom:0;
            width:100%;
            height:auto;
            z-index: 8;

        }
    }
</style>