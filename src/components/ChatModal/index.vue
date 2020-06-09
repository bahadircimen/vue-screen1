<template>
    <div class=chatModal>
        <div class=chatModalHead>
            <div class=chatModalIcon>
                <img class=chatModalIconImg src="https://images.hepsiburada.net/cst/assets/solutioncenter/236/icons/180x180.png" alt=""/>
                <div class=chatModalIconText>Çözüm Merkezi</div>
            </div>
            <div class=chatModalClose @click="changeChatModal">
                <img class=chatModalCloseImg src="../../svg/icon-logout.svg" alt=""/>
                <img class=chatModalCloseImgHover src="../../svg/icon-logoutOrange.svg" alt=""/>
                <div class=chatModalCloseText>Konuşmayı sonlandır</div>
            </div>
        </div>
        <div class=chatModalBody>
            <div class=chatModalBodyChatContainer>
                <div class=chatModalBodyChatRow>
                    <div class=chatModalBodyChatBubble>Merhaba Aziz Bahadirhan Cimen, size nasıl yardımcı olabilirim?</div>
                </div>
                <div class=chatModalBodyChatRow>
                    <div class=chatModalBodyNo>
                        <div class=chatModalBodyNoLeft>Sipariş No</div>
                        <div class=chatModalBodyNoRight>: 800 148 815</div>
                    </div>
                </div>
                <div style="align-items: flex-end" class=chatModalBodyChatRow>
                    <div class=chatModalBodyCard>
                        <img class=chatModalBodyCardImg src="https://picsum.photos/200/200" alt=""/>
                        <div class=chatModalBodyCardText>
                            <div class="chatModalBodyCardTextTop">Defacto J1153Az18 Modern Fit Tek Cep Kadife Gömlek</div>
                            <div class="chatModalBodyCardTextBottom">51,51 TL</div>
                        </div>
                    </div>
                </div>
                <div v-if="show" style="align-items: flex-end" class=chatModalBodyChatRow>
                    <div class=chatModalBodyCard>
                        <img class=chatModalBodyCardImg src="https://picsum.photos/200/200" alt=""/>
                        <div class=chatModalBodyCardText>
                            <div class="chatModalBodyCardTextTop">Defacto J1153Az18 Modern Fit Tek Cep Kadife Gömlek</div>
                            <div class="chatModalBodyCardTextBottom">51,51 TL</div>
                        </div>
                    </div>
                </div>
                <div class=chatModalBodyChatRow>
                    <div class=chatModalBodyChatBubble>Siparişiniz henüz teslim edilmemiştir. Siparişinizi teslim aldıktan sonra 14 gün içerisinde "Hesabım - Siparişlerim - Talep Oluştur" adımından iade işleminizi başlatabilirsiniz.</div>
                    <div class=chatModalBodyChatBubble>Devam etmek için bir seçim yapın.</div>
                    <div class=chatModalBodyChatBubbleAnimation>
                        <div class=chatModalBodyChatBubbleAnimationDot></div>
                        <div class=chatModalBodyChatBubbleAnimationDot></div>
                        <div class=chatModalBodyChatBubbleAnimationDot></div>
                    </div>
                </div>
                <img class=chatModalBodyIcon src="https://images.hepsiburada.net/cst/assets/solutioncenter/236/icons/180x180.png" alt=""/>
            </div>
            <div class="chatModalButtonContainer">
                <Button  v-for="data in chatButtonData" :type="'secondary'" :size="'small'" :text="data.text" :disabled="false" @onClick="onClick"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Button from "../../components/Button"
    export default {
        name: "chatModal",
        components:{
            Button
        },
        props: {
            "changeChatModal" : {type:Function},
        },
        data(){return {
            chatButtonData:[
                {text:"Sipariş ve ödeme"},
                {text:"Teslimat ve kargo"},
                {text:"İptal ve iade"},
                {text:"Servis ve teknik destek"},
                {text:"Kampanya ve hediye çekleri"},
                {text:"Başka bir sipariş ile ilgili sorum var"},
                {text:"Farklı bir konuda sorum var"},
                {text:"Konuşmayı sonlandır"},
            ],
            show:false
        }},
        methods:{
            onClick(){
                this.show=!this.show
            }
        }
    }
</script>

<style scoped lang="scss">
    .chatModal {
        position: fixed;
        top: 96px;
        right: 0;
        width: 720px;
        height: calc(100vh - 96px);
        flex-direction: column;
        background-color: #ffffff;
        box-shadow: -4px 10px 24px 0px rgba(0,0,0,0.08);

        & .chatModalHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 624px;
            height: 56px;
            padding: 0 48px;
            font-size: 14px;
            font-weight: 600;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.71;
            letter-spacing: -0.28px;
            color: #484848;
            border-bottom: 2px solid rgba(0,0,0,0.08);
            border-top: 2px solid rgba(0,0,0,0.08);

            & .chatModalIcon {
                display: flex;
                height: 32px;
                align-items: center;
                justify-content: center;

                & .chatModalIconImg {
                    width: 32px;
                    height: 32px;
                    object-fit: contain;
                    margin: 0 8px 0 0;
                }

                & .chatModalIconText{
                    width: max-content;
                    height: 24px;
                }
            }

            & .chatModalClose {
                display: flex;
                height: 24px;
                align-items: center;
                justify-content: center;
                cursor: pointer;

                &:hover{
                    color: #ff6000;
                    & .chatModalCloseImgHover {
                        display: block;
                    }
                    & .chatModalCloseImg {
                        display: none;
                    }
                }

                & .chatModalCloseImg {
                    display: block;
                    width: 20px;
                    height: 20px;
                    object-fit: contain;
                    margin: 0 8px 0 0;
                }

                & .chatModalCloseImgHover {
                    display: none;
                    width: 20px;
                    height: 20px;
                    object-fit: contain;
                    margin: 0 8px 0 0;
                }

                & .chatModalCloseText{
                    width: max-content;
                    height: 24px;
                }
            }
        }

        & .chatModalBody {
            display: flex;
            width: 624px;
            height: calc(100vh - 96px - 56px);
            flex-direction: column;
            padding: 24px 48px;

            & .chatModalBodyChatContainer {
                display: flex;
                flex-direction: column;
                width: 624px;
                position: relative;
                animation:chatModalBodyChatContainer 1s ease-in 0s 1 none;



                & .chatModalBodyChatRow {
                    display: flex;
                    position: relative;
                    flex-direction: column;
                    height: max-content;
                    width: 624px;
                    margin: 0 0 24px 0;
                    animation:chatModalBodyChatRow 0.8s ease-in 0s 1 none;

                    &:first-child{
                        animation: none;
                    }

                    &:nth-child(2){
                        animation: none;
                    }

                    & .chatModalBodyChatBubble {
                        width: max-content;
                        max-width: 232px;
                        height: max-content;
                        border-radius: 20px;
                        border-bottom-left-radius: 0;
                        background-color: #f5f5f5;
                        font-size: 14px;
                        font-weight: normal;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 1.2;
                        letter-spacing: -0.28px;
                        color: #646464;
                        padding: 11px 16px 12px 16px;
                        margin: 4px 0 0 0;


                        &:first-child {
                            margin: 0;
                        }

                        &:nth-child(2) {
                            border-bottom-left-radius: 20px;
                            border-top-left-radius: 0;
                            animation:chatModalBodyChatBubble 1.3s ease 0s 1 none;
                        }
                    }

                    & .chatModalBodyChatBubbleAnimation {
                        display: flex;
                        visibility: hidden;
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        justify-content: center;
                        align-items: center;
                        width: max-content;
                        height: max-content;
                        border-radius: 20px;
                        border-top-left-radius: 0;
                        background-color: #f5f5f5;
                        padding: 11px 16px 12px 16px;
                        margin: 4px 0 0 0;
                        animation:chatModalBodyChatBubbleAnimation 1.3s ease 0s 1 none;

                        .chatModalBodyChatBubbleAnimationDot {
                            display:inline-block;
                            width:6px;
                            height:6px;
                            border-radius:50%;
                            margin-right:2px;
                            background:#646464;
                            animation: chatModalBodyChatBubbleAnimationDot 0.5s linear 0s 10;

                            &:nth-child(2) {
                                animation-delay: -0.1s;
                            }

                            &:nth-child(3) {
                                animation-delay: -0.3s;
                            }
                        }
                    }

                    & .chatModalBodyNo {
                        display: flex;
                        height: 20px;
                        width: max-content;
                        font-size: 12px;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 1.4;
                        letter-spacing: -0.24px;
                        align-self: center;
                        color: #9b9b9b;

                        & .chatModalBodyNoLeft {
                            font-weight: normal;
                        }

                        & .chatModalBodyNoRight {
                            font-weight: bold;
                        }
                    }

                    & .chatModalBodyCard {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        width: 247px;
                        height: 62px;
                        border-radius: 8px;
                        border: solid 1px rgba(0,0,0,0.08);
                        background-color: #ffffff;
                        padding: 8px 15px 8px 16px;
                        animation:chatModalBodyCard 0.3s ease 0.8s 1 none;

                        & .chatModalBodyCardImg {
                            width: 38px;
                            height: 38px;
                            object-fit: contain;
                            border-radius: 50%;
                            border: 1px solid rgba(0,0,0,0.08);
                        }

                        & .chatModalBodyCardText {
                            display: flex;
                            flex-direction: column;
                            width: 190px;
                            height: 54px;
                            & .chatModalBodyCardTextTop {
                                height: max-content;
                                font-size: 12px;
                                font-weight: normal;
                                font-stretch: normal;
                                font-style: normal;
                                line-height: 1.5;
                                letter-spacing: -0.24px;
                                color: #646464;
                            }
                            & .chatModalBodyCardTextBottom {
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
                    }
                }

                & .chatModalBodyIcon {
                    position: absolute;
                    z-index: 3;
                    width: 16px;
                    height: 16px;
                    object-fit: contain;
                    bottom: 0;
                    left: 0;
                }
            }
        }

        & .chatModalButtonContainer {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            width: 624px;
            animation:chatModalButtonContainer 0.8s ease-in 0s 1 none;
        }
    }

    @keyframes chatModalBodyChatContainer{
        from{max-height: 96px}
        to{max-height: 100%}
    }

    @keyframes chatModalBodyChatRow{
        from{opacity: 0}
        to{opacity: 0}
    }

    @keyframes chatModalBodyChatBubbleAnimationDot {
        0%, 60%, 100% {
            display: none;
            transform: translateY(0);
        }

        30% {
            display: none;
            transform: translateY(-6px);
        }
    }

    @keyframes chatModalBodyChatBubbleAnimation{
        from{visibility: visible}
        to{visibility: visible}
    }

    @keyframes chatModalBodyChatBubble{
        from{visibility: hidden}
        to{visibility: hidden   }
    }

    @keyframes chatModalBodyCard{
        from{opacity: 0;transform: translateY(24px)}
        to{opacity: 1;transform: translateY(0)}
    }

    @keyframes chatModalButtonContainer{
        from{opacity: 0}
        to{opacity: 0}
    }


    .chatModal-enter {
        transform: translateX(720px);
    }
    .chatModal-enter-active {
        transform: translateX(0);
        transition:transform 300ms;
    }
    .chatModal-leave {
        transform: translateX(0);
    }
    .chatModal-leave-active {
        transform: translateX(720px);
        transition: transform 300ms;
    }
</style>