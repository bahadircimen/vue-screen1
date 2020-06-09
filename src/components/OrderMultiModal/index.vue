<template>
    <div class=orderMultiModal>
    <div class=closeOrderMultiModal>
        <img class=closeOrderMultiModalImg src="../../svg/backModal.svg" alt="" v-on:click="changeOrderMultiModal"/>
    </div>
    <div class=orderMultiModalHeadText>Ürün Seçin</div>
    <div class=orderMultiModalContentContainer v-on:click="changeChatModal">
        <img class=orderMultiModalContentCardImg src="https://picsum.photos/200/200" alt=""/>
        <div class=orderMultiModalContentCardTextContainer>
            <div class=orderMultiModalContentCardTextTop>
                Dyson Cinetic Big Ball Animal Pro 2 Toz Torbasız Elektrikli Süpürge
            </div>
            <div class=orderMultiModalContentCardTextBottom>3.789 Tl</div>
        </div>
        <div class=orderMultiModalContentCardIconContainer>
            <img class=orderMultiModalContentCardIcon src="../../svg/icon-solid-chevron-right.svg" alt=""/>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        props: {
            "changeOrderMultiModal" : {type:Function},
            "changeChatModal" : {type:Function}
        }
    }
</script>

<style scoped lang="scss">
    .orderMultiModal {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 486px;
        height: 100vh;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 2;
        border-left: solid 1px #e5e5e5;
        background-color: #ffffff;

        & .closeOrderMultiModal {
            display: flex;
            width: 439px;
            height: 72px;
            justify-content: flex-start;
            align-items: center;
            margin: 16px 0 0 0;

            & .closeOrderMultiModalImg {
                width: 40px;
                height: 40px;
                object-fit: contain;
                cursor: pointer;
            }
        }

        & .orderMultiModalHeadText {
            width: 343px;
            height: 42px;
            font-size: 28px;
            font-weight: 600;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.5;
            letter-spacing: 0.33px;
            color: #484848;
        }

        & .orderMultiModalContentContainer {
            display: flex;
            width: 343px;
            height: 64px;
            justify-content: flex-start;
            align-items: center;
            cursor: pointer;
            margin: 24px 0 0 0;

            &:hover {
                & .orderMultiModalContentCardTextContainer {
                    & .orderMultiModalContentCardTextTop {
                        color: #ff6000;
                    }
                }
            }

            & .orderMultiModalContentCardImg {
                width: 38px;
                height: 38px;
                border-radius: 50%;
                border: 1px solid #e5e5e5;
            }

            & .orderMultiModalContentCardTextContainer {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                width: 243px;
                height: 64px;
                margin: 0 0 0 12px;

                & .orderMultiModalContentCardTextTop {
                    width: 243px;
                    height: 36px;
                    font-size: 12px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.5;
                    letter-spacing: -0.24px;
                    color: #646464;
                }

                & .orderMultiModalContentCardTextBottom {
                    width: max-content;
                    height: 18px;
                    font-size: 12px;
                    font-weight: 600;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.5;
                    letter-spacing: -0.24px;
                    color: #439e4a;
                }
            }

            & .orderMultiModalContentCardIconContainer {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 24px;
                height: 24px;
                border-radius: 50%;
                background-color: #f5f5f5;
                margin: 0 24px 0 0;

                & .orderMultiModalContentCardIcon {
                    width: 12px;
                    height: 12px;
                    object-fit: contain;
                }
            }
        }
    }

    .orderMultiModal-enter {
        transform: translateX(489px);
    }
    .orderMultiModal-enter-active {
        transform: translateX(0);
        transition:transform 500ms;
    }
    .orderMultiModal-leave {
        transform: translateX(0);
    }
    .orderMultiModal-leave-active {
        transform: translateX(489px);
        transition: opacity 300ms, transform 300ms;
    }
</style>