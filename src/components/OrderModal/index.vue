<template>
    <div class="orderModalContainer">
            <div class="orderModal">
                <div class="closeOrderModal">
                    <img class="closeOrderModalImg" src="../../svg/close-modal.svg" alt="" v-on:click="changeOrderModal"/>
                </div>
                <div class="orderModalHeadText">Sipariş seçin</div>
                <div class="orderModalContentContainer">
                    <div class="orderModalContentText">Son Siparişleriniz</div>
                    <div class="orderModalContentCard" v-on:click="changeOrderMultiModal">
                        <div class="orderModalContentCardLeft">
                            <div :style="`width:${38+24}px`" class="orderModalContentCardLeftImgContainer">
                                <img class="orderModalContentCardLeftImg" src="https://picsum.photos/200/200" alt=""/>
                                <img style="left:24px" class="orderModalContentCardLeftImg" src="https://picsum.photos/200/200" alt=""/>
                            </div>
                            <div class="orderModalContentCardLeftContent">
                                5 Ekim <br/> Cts, 22:12
                            </div>
                        </div>
                        <div class="orderModalContentCardRight">
                            <div class="orderModalContentCardRightContent">
                                <div class="orderModalContentCardRightContentTop">
                                    <div class="orderModalContentCardRightContentTopLeft">33</div>
                                    <div class="orderModalContentCardRightContentTopRight">TL</div>
                                </div>
                                <div class="orderModalContentCardRightContentBottom">Kredi Kartı</div>
                            </div>
                            <div class="orderModalContentCardRightIconContainer">
                                <img class="orderModalContentCardRightIcon" src="../../svg/icon-solid-chevron-right.svg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: "OrderModal",
        props: {
            "changeOrderModal" : {type:Function},
            "changeOrderMultiModal" : {type:Function}
        },
        data(){return {
            orderModalAnimationV:false,
        }},
        mounted() {
            this.orderModalAnimationV= !this.orderModalAnimationV
            console.log(this.orderModalAnimationV)
        }
    }
</script>

<style scoped lang="scss">
    .orderModalContainer {
        /*visibility: hidden;*/
        display: flex;
        justify-content: flex-end;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 1;
        background-color: rgba(0,0,0,0.69);

        & .orderModal {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 486px;
            height: 100vh;
            border-left: solid 1px #e5e5e5;
            background-color: #ffffff;

            & .closeOrderModal {
                display: flex;
                width: 439px;
                height: 72px;
                justify-content: flex-start;
                align-items: center;
                margin: 16px 0 0 0;

                & .closeOrderModalImg {
                    width: 40px;
                    height: 40px;
                    object-fit: contain;
                    cursor: pointer;
                }
            }

            & .orderModalHeadText {
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

            & .orderModalContentContainer {
                display: flex;
                flex-direction: column;
                width: 343px;
                height: max-content;
                margin: 24px 0 0 0;

                & .orderModalContentText{
                    width: 343px;
                    height: 24px;
                    font-size: 16px;
                    font-weight: 600;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.5;
                    letter-spacing: -0.32px;
                    color: #646464;
                    margin: 0 0 8px 0;
                }
                & .orderModalContentCard{
                    display: flex;
                    align-items: center;
                    min-width: 341px;
                    height: 64px;
                    border-radius: 8px;
                    border: solid 1px #e5e5e5;
                    background-color: #ffffff;
                    margin: 0 0 8px 0;
                    justify-content: space-between;
                    cursor: pointer;

                    &:hover {
                        border: solid 1px #ff6000;
                    }

                    & .orderModalContentCardLeft {
                        display: flex;
                        margin: 0 0 0 16px;

                        & .orderModalContentCardLeftImgContainer {
                            width: 38px;
                            height: max-content;
                            position: relative;
                            & .orderModalContentCardLeftImg {
                                width: 38px;
                                height: 38px;
                                border-radius: 50%;
                                border: 1px solid #e5e5e5;
                                position: absolute;
                            }
                        }

                        & .orderModalContentCardLeftContent {
                            width: max-content;
                            height: 42px;
                            font-size: 14px;
                            font-weight: normal;
                            font-stretch: normal;
                            font-style: normal;
                            line-height: 1.5;
                            letter-spacing: -0.28px;
                            color: #646464;
                            margin: 0 0 0 12px;
                        }
                    }

                    & .orderModalContentCardRight {
                        display: flex;
                        margin: 0 12px 0 0;
                        align-items: center;

                        & .orderModalContentCardRightContent {
                            display: flex;
                            flex-direction: column;
                            align-items: flex-end;
                            width: max-content;
                            height: 42px;

                            & .orderModalContentCardRightContentTop {
                                display: flex;
                                height: 21px;
                                width: max-content;
                                justify-content: flex-end;

                                & .orderModalContentCardRightContentTopLeft {
                                    width: max-content;
                                    height: 21px;
                                    font-size: 14px;
                                    font-weight: bold;
                                    font-stretch: normal;
                                    font-style: normal;
                                    line-height: 1.5;
                                    letter-spacing: -0.28px;
                                    text-align: right;
                                    color: #439e4a;
                                    margin: 0 2px 0 0;
                                }

                                & .orderModalContentCardRightContentTopRight {
                                    width: max-content;
                                    height: 21px;
                                    font-size: 12px;
                                    font-weight: bold;
                                    font-stretch: normal;
                                    font-style: normal;
                                    line-height: 1.75;
                                    letter-spacing: -0.24px;
                                    text-align: right;
                                    color: #439e4a;
                                }
                            }

                            & .orderModalContentCardRightContentBottom {
                                width: max-content;
                                height: 21px;
                                font-size: 14px;
                                font-weight: normal;
                                font-stretch: normal;
                                font-style: normal;
                                line-height: 1.5;
                                letter-spacing: -0.28px;
                                text-align: right;
                                color: #646464;
                            }
                        }

                        & .orderModalContentCardRightIconContainer {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            width: 24px;
                            height: 24px;
                            border-radius: 50%;
                            background-color: #f5f5f5;
                            margin: 0 0 0 12px;

                            & .orderModalContentCardRightIcon {
                                width: 12px;
                                height: 12px;
                                object-fit: contain;
                            }
                        }
                    }
                }
            }
        }
    }

    .orderModalContainer-enter {
        background-color: rgba(0,0,0,0);
    }
    .orderModalContainer-enter-active {
        background-color: rgba(0,0,0,0.69);
        transition: background-color 500ms;
    }
    .orderModalContainer-leave-to {
        background-color: rgba(0,0,0,0.69);
    }
    .orderModalContainer-leave-active {
        background-color: rgba(0,0,0,0);
        transition: background-color 500ms;
    }

    .orderModal-enter {
        transform: translateX(489px);
    }
    .orderModal-enter-active {
        transform: translateX(0);
        transition:transform 500ms;
    }
    .orderModal-leave {
        transform: translateX(0);
    }
    .orderModal-leave-active {
        transform: translateX(489px);
        transition: opacity 300ms, transform 300ms;
    }

</style>