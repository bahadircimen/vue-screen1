<template>
    <div class="bullet-container">
        <div v-for="items in bulletItem" class="bullet">
            <span class="bullet-title" v-html="items.title"/>
            <div class="bullet-content">
                <img class="bullet-img" src="../../svg/arrow-right.svg" alt="">
                <span class="bullet-text" v-html="items.description"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Bullets",
        data(){
            return{
            }
        },
        props:{
            bulletItem:{type: Object},
        },
        methods:{

        }
    }
</script>

<style scoped lang="scss">
.bullet-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: max-content;

    & .bullet {
        width: 100%;
        height: max-content;
        display: flex;
        flex-direction: column;

        & .bullet-title {
            width: 100%;
            height: max-content;
            font-size: 16px;
            font-weight: 600;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.5;
            letter-spacing: -0.32px;
            color: #646464;
            margin: 0 0 8px 0;
        }

        & .bullet-content {
            display: flex;
            width: 100%;
            height: max-content;
            margin: 0 0 16px 0;

            &:last-child{
                margin: 0;
            }

            & .bullet-img {
                width: 12px;
                height: 12px;
                object-fit: contain;
                margin: 4px 8px 0 0;
            }

            & .bullet-text {
                font-size: 14px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.5;
                letter-spacing: -0.28px;
                color: #646464;
            }
        }
    }
}
</style>