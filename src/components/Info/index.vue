<template>
    <div class="info-container">
        <div class="info">
            <img class="info-img" src="../../svg/information.svg" alt="">
            <span class="info-text" v-html="infoText"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Info",
        props: {
            infoText:{type:String}
        }
    }
</script>

<style scoped lang="scss">
    .info-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: max-content;

        & .info {
            display: flex;
            width: 100%;
            height: max-content;
            margin: 0 0 16px 0;

            &:last-child{
                margin: 0;
            }

            & .info-img {
                width: 32px;
                height: 32px;
                object-fit: contain;
                margin: 0 8px 0 0;
            }

            & .info-text {
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

</style>