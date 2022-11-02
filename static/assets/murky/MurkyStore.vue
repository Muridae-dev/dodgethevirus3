<template>
    <div class="store-container" :class="storeActive ? 'active' : null">
        <div class="fish-list">
            <div class="fish-one" v-for="fish in fishes" :key="fish.name" @click="() => {activeFish = fish}">
                <div class="fish-portrait-one">
                    <img :src="require(`./fishes/${fish.imgSrc}`)" />
                </div>

                <div class="fish-description-one">
                    <header>
                            {{fish.name}}
                    </header>
                    <div class="fish-price">
                        {{fish.price}} P
                    </div>
                    
                </div>
            </div>
        </div>

        <div class="fish-spotlight">
            <div class="fish-portrait-spotlight">
                <img :src="activeFish.name ? require(`./fishes/${activeFish.imgSrc}`) : null "/>
            </div>

            <div class="fish-portrait-description">
                {{activeFish.description}}
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "murkyStore",
    props: ["storeActive"],
    data() {
        return {
            fishes: [
                {
                    name: "Arapaima",
                    imgSrc: "arapaima.jpg",
                    price: "15,000",
                    description: "The stately arapaima is quite large. Indeed, it is among the largest freshwater fish there are. Furthermore, these fascinating fish make quite the family unit. That is to say, male arapaimas protect their young by holding them gently in their mouths. Meanwhile, female arapaimas swim circles around these full-mouthed fathers fending off predators. It simply goes to show that cold-blooded creatures can be heartwarming too.",
                },
                {
                    name: "Barreleye",
                    imgSrc: "barreleye.jpg",
                    price: "22,500",
                    description: "The barreleye is a deep-sea fish with protuberant eyes and a clear head, so some of its organs are... visible. At first blush, a transparent head seems absurd, but there is a reason: so it can see things directly above! But I must confess--the more I learn about deep-sea fish, the happier I am to live on dry land.",
                },
                {
                    name: "Betta",
                    imgSrc: "betta.webp",
                    price: "2,500",
                    description: "The betta has long fins and beautiful coloring. It is a tropical fish popular in decorative aquariums. They're very territorial and will fight to complete exhaustion, so aquarists must keep them carefully. Rarely do such beauty and violence commingle outside the rowdiest of sunset-viewing parties.",
                },
                {
                    name: "Blue Marlin",
                    imgSrc: "blueMarlin.jpg",
                    price: "10,000",
                    description: "The blue marlin has a distinctive angular shape and no scales. It is an unusual relative of the tuna. These mighty fish can exceed 13 feet from bill to tail. Some accounts even have it fighting with whales! No wonder it's a popular target for sport fishing: unlike most fish, it seems like a worthy opponent."
                },
                {
                    name: "Catfish",
                    imgSrc: "catfish.webp",
                    price: "800",
                    description: "Catfish don't have scales and are rather slimy. Believe it or not, this slime helps them breathe! Some species of catfish are nocturnal, and they'll feed on almost anything. They use a suctioning action to pull in their food. Did I mention they can grow as large as you or I..."
                },
                {
                    name: "Clownfish",
                    imgSrc: "clownFish.jpg",
                    price: "1,200",
                    description: "Few can deny the delightful qualities of the clown fish. These vibrant fish make their home among venomous anemones. It's a mutually beneficial arrangement. The clown fish finds safety in the anemone's wriggling arms, as well as leftover scraps of food. In return, the clown fish ward off parasites and predators for the anemone. Thus these colorful fish remind us of the importance of maintaining good cheer among our roommates."
                },
                {
                    name: "Coelacanth",
                    imgSrc: "coelacanth.webp",
                    price: "22,500",
                    description: `Coelacanths are ancient fish once believed to be extinct but recently discovered around South Africa. Called "living fossils," they have apparently changed very little over the past 400 million years. They can live for over 60 years and reach lengths of six feet but have rather small brains, even for fish. They have more fins and harder scales than the average fish, making them a rather resilient breed. Their flavor is very different from most fish, and they contain a fat that is indigestible by humans. It's for that second reason that eating them really isn't highly recommended.`
                },
                {
                    name: "Dorado",
                    imgSrc: "dorado.webp",
                    price: "50,000",
                    description: `So shiny! This massive fish's name, dorado, means "golden" in Spanish—a fitting title. They look like salmon but are very toothy, carnivorous, and related to piranha. They're such ferocious fish that other fish regularly flee from them, fearful of becoming a snack. Their ferocious natures and power make them a prize catch among anglers.`
                },
                {
                    name: "Giant Snakehead",
                    imgSrc: "giantSnakehead.jpg",
                    price: "5,500",
                    description: "The giant snakehead is quite a sight to behold! One glance conjurs up visions of its namesake. This resilient creature can even find a home in the mud, where it is able to breathe. As a matter of fact, it dislikes cold weather, so during wintertime the mud serves as its temporary home. I hear that they eat anything that swims past their head... While odd, I feel a sense of kinship with them."
                },
                {
                    name: "Golden Trout",
                    imgSrc: "goldenTrout.jpg",
                    price: "15,000",
                    description: "The golden trout is a beautifully colored fish that can only live in very clean waters. They are difficult to come across since they are found only in high mountain streams. As a side note, I find it much easier to appreciate fish that aren't such prima donnas about everything."
                },
                {
                    name: "Goldfish",
                    imgSrc: "goldfish.jpg",
                    price: "1,300",
                    description: "Goldfish are so cute and delicate... but do you know how big they can get? Why, they can grow up to... a foot in length! Well, sometimes. The size of the tank they're kept in tends to restrict their growth. And just how big will this goldfish get? I look forward to finding out!"
                },
                {
                    name: "Great White Shark",
                    imgSrc: "greatWhiteShark.jpg",
                    price: "55,300",
                    description: "The triangular teeth of sharks appear to have evolved from scales sometime in the past. When a tooth breaks, it quickly falls out and a new one grows in, keeping them always in good shape for prey. Sharks can be fearsome creatures, able to smell blood from several miles away. They can even jump out of the water to catch prey, making them powerful predators. Contrary to their tough image, their bones are made out of cartilage and erroneously used as health food."
                },
                {
                    name: "Guppy",
                    imgSrc: "guppy.jpg",
                    price: "1,300",
                    description: "Guppies are tropical fish that are related to killifish and live in warm rivers. They are popular fish that have been bred to have beautiful flowing tail fins. Mother guppies give birth to their babies after the eggs hatch in their bellies. They give birth at a rate that's nearly constant, so their population tends to grow rather quickly."
                },
                {
                    name: "Hammerhead Shark",
                    imgSrc: "hammerheadShark.jpg",
                    price: "30,000",
                    description: `The hammerhead shark is a shark with a head like a hammer, which is what you'd expect. However, despite being sharks, they are actually fairly laid back, which is not what you'd expect. With their eyes positioned on the two ends of their "hammer," they can see in almost all directions. Oddly, their nose holes are located right next to their eyes on their hammer section. They have a number of small holes on the front and lower portions of their heads as well. These holes allow them to detect prey, even fish hiding below them and out of sight. While they eat a nice array of fish, it seems that rays are their favorite source of food. Rays, beware!`
                },
                {
                    name: "King Salmon",
                    imgSrc: "kingSalmon.jpg",
                    price: "4,000",
                    description: "King salmon grow to about twice the size of regular salmon, which really helps them embody the name. This size essentially makes them the actual kings of salmon, though they are also called chinook salmon. In some regions, they return to the river in spring or summer and live there until spawning in the fall. In rare cases, king salmons' meat will be white, but these are not as popular since pink is the standard."
                },
                {
                    name: "Mahi-Mahi",
                    imgSrc: "mahiMahi.webp",
                    price: "9,000",
                    description: `The mahi-mahi is an ocean fish known for its wide, somewhat-cute face. It can reach over six feet long. It is known by different names including "dolphinfish," even though it has no relation to dolphins. They live in only in warm, tropical waters...which perhaps explains the relaxed, happy look on their faces.`
                },
                {
                    name: "Pike",
                    imgSrc: "pike.jpg",
                    price: "1,800",
                    description: "The pike has always reminded me a bit of salmon, although a pike can grow rather larger. These brutes can grow to over four feet long...sometimes MUCH over! Hoo hoo! It is carnivorous and preys not only on other fish, but also mammals and some waterfowl...If I were to meet one in the water, I would have a most difficult time keeping my wits about me."
                },
                {
                    name: "Piranah",
                    imgSrc: "piranah.jpg",
                    price: "2,500",
                    description: "They have terrifyingly sharp teeth, which contributes to their ferocious reputation. Oddly enough, they are actually quite timid, though they are still very dangerous fish. If they can't find food, they will resort to cannibalism or tear apart any animal they can grab hold of. Take care so they don't end up biting your hand with their sharp teeth!"
                },
                {
                    name: "Puffer Fish",
                    imgSrc: "pufferFish.jpg",
                    price: "800",
                    description: "Like its cousin the blowfish, when the puffer fish feels threatened it inflates into a spiky balloon. The biggest difference between them is that the puffer fish is not deadly poisonous like its kin. So while it may look scary, the substantially reduced risk to life and limb makes it much better company."
                },
                {
                    name: "Red Snapper",
                    imgSrc: "redSnapper.jpg",
                    price: "3,000",
                    description: `Red snappers are gregarious fish that often form schools close to reefs and shipwrecks. They are a prized food fish, but because of demand, other species are often served as "red snapper". They usually live up to 50 years. The oldest recorded red snapper was thought to be 57.`
                },
                {
                    name: "Saw Shark",
                    imgSrc: "sawShark.jpg",
                    price: "26,300",
                    description: `As you might expect from the name, the saw shark is a shark with a head that resembles a saw. This unusual appendage is used both to dig potential prey out of the sand and as a weapon against said prey. Given that, it seems like a more appropriate name would have been "shovel-sword shark"`
                },
                {
                    name: "Stringfish",
                    imgSrc: "stringfish.jpg",
                    price: "22,800",
                    description: "The stringfish grows slowly, but also lives quite a long time for a fish, with up to 15 years being typical. Consequently, while it takes a while, they can get quite large—perhaps even up to six feet long! The stringfish is perhaps the best embodiment in the fish world of 'slow and steady wins the race.' "
                },
                {
                    name: "Sturgeon",
                    imgSrc: "sturgeon.jpg",
                    price: "15,000",
                    description: "The sturgeon is a large and long-lived fish which has changed little in the last 300 million years. One curious behavior of theirs is leaping high out of the water and falling back in on their sides. The smacking sounds of their re-entry can be heard for up to half a mile away, likely more underwater! No one knows why they do it, but I like to think it's their impression of bread popping out of toaster!"
                },
                {
                    name: "Surgeonfish",
                    imgSrc: "surgeonfish.jpg",
                    price: "2,300",
                    description: "Careful, now! These fish are particularly dangerous, despite their seemingly docile appearance. With its saturated blue and yellow tones, the surgeonfish is quite breathtaking. It's got to keep up with all the other vibrant fish that live in the coral too, I wager. Quite the competition! Its spine is sharp as a blade, so care must be taken when handling these beauties..."
                },
                {
                    name: "Tuna",
                    imgSrc: "tuna.jpg",
                    price: "10,500",
                    description: "Tuna can reach almost 10 feet in length and weigh over 800 pounds, which is huge in the fish world. Combining this great size with their good flavor makes them literally the biggest catch for most anglers. Tuna can't breathe when they aren't moving, so their entire lives revolve around constantly swimming. To sleep, they merely slow down. This ability to swim while sleeping is a huge advantage. They're also rather fast, capable of beating both sets of fins so hard they reach speeds of 50 mph."
                }


            ],
            activeFish: {name: "Arapaima",
                    imgSrc: "arapaima.jpg",
                    price: "15,000",
                    description: "The stately arapaima is quite large. Indeed, it is among the largest freshwater fish there are. Furthermore, these fascinating fish make quite the family unit. That is to say, male arapaimas protect their young by holding them gently in their mouths. Meanwhile, female arapaimas swim circles around these full-mouthed fathers fending off predators. It simply goes to show that cold-blooded creatures can be heartwarming too.",
},
        }
    }
}
</script>

<style lang="scss" scoped>
    $background-color: rgb(29, 192, 124);
    $depth-color: rgb(19, 163, 108);

    .store-container {
        position: absolute;
        height:100%;
        width:100%;
        background:black;

        transition:opacity 1s;

        z-index:-99;

        opacity:0;
    }

    .active {
        opacity: 1;
        z-index: 9;
    }

    .fish-list {
        height:100%;
        width:50%;
        float:left;
        background:white;
        overflow-y:auto;
        
    }

    .fish-list::-webkit-scrollbar {
        display: none;
    }

    .fish-one {
        height:100px;
        width:100%;
        border-top: 3px solid black;
        border-bottom: 8px solid $depth-color;
        background:$background-color;
        position: relative;

        .fish-portrait-one {
            position:relative;
            height:80px;
            width:80px;
            left:20px;
            top:7px;

            border-radius:50%;
            border:3px solid black;
            
            z-index: 1;
            overflow: hidden;
        }

        img {
            height:100%;
            width:auto;
            margin:auto;
            z-index: 0;
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
        }

        .fish-description-one {
            position: absolute;
            height:90%;
            padding-top:4%;
            width:60%;
            text-align: center;
            color:black;

            font-family:kaOne;

            top:0;
            left:150px;
            
            header {
                font-size:1.5em;
            }
        }



    }

    .fish-spotlight {
        width:calc(50% - 2px);
        height:100%;
        float:left;

        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content:center;
        justify-content: center;
        gap:7%;

        border-left:2px solid black;
        background:$background-color;

        .fish-portrait-spotlight {
            height:auto;
            width:100%;
            text-align: center;
        

            img {
                height:auto;
                width:80%;
                border:3px solid black;
                box-shadow: 10px 10px black;
            
            }
        }

        .fish-portrait-description {
            width:70%;
            height:auto;
            color:black;
            text-align:center;
            margin:auto;
            border:3px solid black;
            box-shadow: 10px 10px black;
            padding:10px;
            background:$depth-color;

            font-weight:bold;
            font-size:1.2em;
            font-family: BreeSerif;
        }

        
    }
</style>