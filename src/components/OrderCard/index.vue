<template>
    <div class="orderCardContainer">
        <div class=orderCard>
            <img class=orderCardImg src="https://picsum.photos/200/200" alt=""/>
            <div class=orderCardTextContainer>
                <span class=orderCardTextTop v-html="orderCardTextTop"/>
                <span class=orderCardTextBottom v-html="orderCardTextBottom"/>
            </div>
        </div>
        <div class="orderCardParagraph" v-html="orderCardParagraph"></div>
    </div>
</template>

<script>
    export default {
        name: "OrderCard.vue",
        props:{
            orderCardTextTop:{default:"Dyson Cinetic Big Ball Animal Pro 2 Toz Torbasız Elektrikli Süpürge"},
            orderCardTextBottom:{default:"3.789 Tl" },
            orderCardParagraph:{default:"Ürününüzü 08.09.2019 tarihine kadar Hepsiburada’ya başvurarak iade koşulları dahilinde, kargo bedeli ödemeden\n" +
                    "ücretsiz olarak iade edebilirsiniz. İade işlemini başlatmak için buraya tıklayın."}
        }
    }
</script>

<style scoped lang="scss">
    .orderCardContainer {
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        width: 100%;
        height: max-content;
        padding: 20px 16px 16px 16px;
        border-radius: 8px;
        border: solid 1px #e5e5e5;
        background-color: #ffffff;

        & .orderCard {
            display: flex;
            width: 100%;
            height: max-content;
            justify-content: flex-start;
            align-items: center;

            & .orderCardImg {
                width: 38px;
                height: 38px;
                border-radius: 50%;
                border: 1px solid #e5e5e5;
                margin: 0 12px 0 0;
            }

            & .orderCardTextContainer {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                width: 100%;
                height: max-content;

                & .orderCardTextTop {
                    width: 100%;
                    height: max-content;
                    font-size: 12px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.5;
                    letter-spacing: -0.24px;
                    color: #646464;
                }

                & .orderCardTextBottom {
                    width: 100%;
                    height: max-content;
                    font-size: 12px;
                    font-weight: 600;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.5;
                    letter-spacing: -0.24px;
                    color: #439e4a;
                }
            }
        }

        & .orderCardParagraph {
            width: 100%;
            height: max-content;
            font-size: 14px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.5;
            letter-spacing: -0.28px;
            color: #646464;
            margin: 20px 0 0 0;
        }
    }
</style>