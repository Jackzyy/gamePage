<template>
    <div class="game">
        <div class="item-1">
            <div class="down-top">
                <img src="@/assets/img/down.png" alt="幻灵战歌">
            </div>
            <div class="first-page">
                <img src="@/assets/img/first_page_1.jpg" alt="幻灵战歌">
                <img src="@/assets/img/first_page_2.jpg" alt="幻灵战歌">
                <img src="@/assets/img/first_page_3.jpg" alt="幻灵战歌">
                <img src="@/assets/img/first_page_4.jpg" alt="幻灵战歌">
                <img src="@/assets/img/first_page_5.jpg" alt="幻灵战歌">
                <img src="@/assets/img/first_page_6.jpg" alt="幻灵战歌">
                <img src="@/assets/img/first_page_7.jpg" alt="幻灵战歌">
                <img src="@/assets/img/first_page_8.jpg" alt="幻灵战歌">
                <img src="@/assets/img/first_page_9.jpg" alt="幻灵战歌">
            </div>
        </div>
        <div class="item-2">
            <img v-lazy="item2" alt="幻灵战歌">
        </div>
        <div class="item-3 mgtop20">
            <img v-lazy="item3" alt="幻灵战歌">
            <div class="swiper">
                <Swipe :autoplay="3000" :show-indicators="false">
                    <SwipeItem v-for="img in item3Swiper" :key="img.id">
                        <img v-lazy="img" alt="幻灵战歌">
                    </SwipeItem>
                </Swipe>
            </div>
        </div>
        <div class="item-4 mgtop20">
            <img v-lazy="item4" alt="幻灵战歌">
            <div class="swiper">
                <Swipe :autoplay="3000" :show-indicators="false">
                    <SwipeItem v-for="img in item4Swiper" :key="img.id">
                        <img v-lazy="img" alt="幻灵战歌">
                    </SwipeItem>
                </Swipe>
            </div>
        </div>
        <div class="item-5 mgtop20">
            <img v-lazy="item5" alt="幻灵战歌">
            <div class="swiper">
                <Swipe :autoplay="3000" :show-indicators="false">
                    <SwipeItem v-for="img in item5Swiper" :key="img.id">
                        <img v-lazy="img" alt="幻灵战歌">
                    </SwipeItem>
                </Swipe>
            </div>
            <div class="down-bot">
                <img src="@/assets/img/down_bot.png" alt="幻灵战歌">
            </div>
        </div>
    </div>
</template>

<script>
import { Swipe, SwipeItem, Lazyload } from 'vant';
    export default {
        components:{
            Swipe,
            SwipeItem,
            Lazyload
        },
        data() {
            return {
                item2:require('@/assets/img/item2.png'),
                item3:require('@/assets/img/item3.png'),
                item4:require('@/assets/img/item4.png'),
                item5:require('@/assets/img/item5.png'),

                item3Swiper:[
                    require('@/assets/img/item3_swiper_1.png'),
                    require('@/assets/img/item3_swiper_2.png'),
                    require('@/assets/img/item3_swiper_3.png'),
                    require('@/assets/img/item3_swiper_4.png'),
                ],

                item4Swiper:[
                    require('@/assets/img/item4_swiper_1.png'),
                    require('@/assets/img/item4_swiper_2.png'),
                    require('@/assets/img/item4_swiper_3.png'),
                ],

                item5Swiper:[
                    require('@/assets/img/item5_swiper_1.png'),
                    require('@/assets/img/item5_swiper_2.png'),
                    require('@/assets/img/item5_swiper_3.png'),
                    require('@/assets/img/item5_swiper_4.png'),
                    require('@/assets/img/item5_swiper_5.png'),
                ]
            }
        },
    }
</script>

<style scoped lang='scss'>
    .game{
        img{
            display: block;
            width: 100%;
            height: 100%;
        }
        .mgtop10{
            margin-top: 20px;
        }

        .item-1{
            .down-top{
                width: 100vw;
                position: fixed;
                top: 0;
                z-index: 999;
            }
        }
        .item-3{
            position: relative;
            .swiper{
                width: 75%;
                height: 100%;
                position: absolute;
                top: 29.5%;
                left: 7%;
            }
        }
        .item-4{
            position: relative;
            .swiper{
                width: 100%;
                position: absolute;
                top: 16%;
                img{
                    margin: auto;
                    width: 68%;
                }
            }
        }
        .item-5{
            position: relative;
            margin-bottom: 70px;
            .swiper{
                width: 75%;
                position: absolute;
                top: 21.6%;
                left: 7%;
            }
            .down-bot{
                width: 36vw;
                position: absolute;
                left: 50%;
                bottom: 0;
                transform: translate(-50%)
            }
        }
    }
</style>