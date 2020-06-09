<template>
    <Screen1/>
<!--    <div class="mainContainer">-->



<!--        <div class="head">sad</div>-->
<!--        <Button :type="'primary'" :size="'default'" :text="'Siparişim ile ilgili sorum var'" :disabled="false" @onClick="changeOrderModal"/>-->
<!--        <button @click="changeOrderModal">dsad</button>-->
<!--        <transition name="slide-left" appear>-->
<!--            <OrderModal v-if="orderModal" :orderModal="orderModal" :orderModalAnimation="orderModalAnimation" :changeOrderModal="changeOrderModal" :changeOrderMultiModal="changeOrderMultiModal"/>-->
<!--        </transition>-->

<!--        <OrderMultiModal v-if="orderMultiModal" :changeOrderMultiModal="changeOrderMultiModal" :changeChatModal="changeChatModal"/>-->
<!--        <ChatModal v-if="chatModal" :changeChatModal="changeChatModal"/>-->
<!--    </div>-->
</template>

<script>
    import OrderModal from "../components/OrderModal/index.vue";
    import OrderMultiModal from "../components/OrderMultiModal/index.vue";
    import ChatModal from "../components/ChatModal/index.vue"
    import Button from "../components/Button/index.vue"
    import Screen1 from "../screens/Screen1/Screen1";
    export default {
        name: "MainContainer",
        components:{
            OrderModal,
            OrderMultiModal,
            ChatModal,
            Button,
            Screen1
        },
        data(){return {
            orderModal:false,
            orderModalAnimation:false,
            orderMultiModal:false,
            orderMultiModalAnimation:false,
            chatModal:false,
            chatModalAnimation:false,
        }},
        methods: {
            changeOrderModal(){
                this.orderModal= !this.orderModal,this.orderModalAnimation= !this.orderModalAnimation

            },

            changeOrderMultiModal(){
                if (this.orderMultiModal){
                    setTimeout(()=> {
                        this.orderMultiModal= !this.orderMultiModal
                    }, 500)
                    this.orderMultiModalAnimation= !this.orderMultiModalAnimation
                }
                else {
                    this.orderMultiModal= !this.orderMultiModal,this.orderMultiModalAnimation= !this.orderMultiModalAnimation
                }
            },

            changeChatModal(){
                if (this.chatModal){
                    setTimeout(()=> {
                        this.chatModal= !this.chatModal
                    }, 500)
                    this.chatModalAnimation= !this.chatModalAnimation
                }
                else {
                    this.chatModal= !this.chatModal,this.chatModalAnimation= !this.chatModalAnimation,this.orderModal= !this.orderModal,this.orderModalAnimation= !this.orderModalAnimation,this.orderMultiModal= !this.orderMultiModal,this.orderMultiModalAnimation= !this.orderMultiModalAnimation
                }
            },
        }
    }
</script>

<style scoped lang="scss">
    .mainContainer {
        width: 100%;
        height: 100%;

        & .head {
            width: 100vw;
            height: 96px;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.16);
            background-color: #ffffff;
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

    .slide-left-enter-active, .slide-left-leave-active {
        transition: transform .5s ease-in-out;
    }

    .slide-left-enter,
    .slide-left-leave-to {
        transform: translateX(100%) !important;
    }

    .slide-left-enter-to,
    .slide-left-leave {
        transform: translateX(0) !important;
    }

</style>