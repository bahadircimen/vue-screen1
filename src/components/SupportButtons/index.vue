<template>
    <button :class="buttonClassName">
        <img v-if="supportType==='message'" class="support-button-img" src="../../svg/icon-mail-adress-man.svg" alt="">
        <img v-else-if="supportType==='wa'" class="support-button-img" src="../../svg/icon-whats-app.svg" alt="">
        <img v-else="supportType==='call'" class="support-button-img" src="../../svg/icon-customer-services.svg" alt="">
        <span class="support-button-text" v-text="buttonText"/>
        <img v-if="supportType==='message'" class="support-button-icon" src="../../svg/component-circle-button.svg" alt="">
        <img v-else-if="supportType==='wa'" class="support-button-icon" src="../../svg/component-circle-button-wa.svg" alt="">
        <img v-else="supportType==='call'" class="support-button-icon" src="../../svg/component-circle-button-call.svg" alt="">
    </button>
</template>

<script>
    export default {
        name: "SupportButtons",
        data(){return{
            buttonText:"",
            buttonClassName:"",
        }},
        props:{
            supportType:{default:"call",require:true,type:String},
        },
        created() {
            this.change()
        },
        methods:{
            change(){
                if (this.supportType==="message"){
                    this.buttonText="Mesaj Yaz";
                    this.buttonClassName="support-button"
                }
                else if(this.supportType==="wa"){
                    this.buttonText="Whatsapp destek";
                    this.buttonClassName="support-button-wa"
                }
                else {
                    this.buttonText="Müşteri hiz. beni arasın";
                    this.buttonClassName="support-button-call"
                }
            },
        }
    }
</script>

<style scoped lang="scss">
    .support-button, .support-button-wa, .support-button-call{
        display: flex;
        box-sizing: border-box;
        width: 300px;
        height: 48px;
        border-radius: 8px;
        outline: none;
        cursor: pointer;
        border: none;
        font-size: 16px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: -0.32px;
        justify-content: space-between;
        padding: 12px 12px 12px 16px;

        & .support-button-text {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            height: 24px;
        }

        & .support-button-img {
            width: 24px;
            height: 24px;
            object-fit: contain;
            margin: 0 16px 0 0;
        }

        & .support-button-icon {
            width: 24px;
            height: 24px;
            object-fit: contain;
            transform: rotate(180deg);
        }
    }

    .support-button {
        color: #484848;
        background-color: #ffffff;
        border: solid 2px #cccccc;
        padding: 10px 10px 10px 14px;

        &:hover {
            background-color: #f9f9f9;
        }
    }

    .support-button-wa {
        color: #25d366;
        background-color: rgba(37, 211, 102, 0.08);

        &:hover {
            background-color: rgba(37, 211, 102, 0.14);
        }
    }

    .support-button-call {
        color: #484848;
        background-color: rgba(108, 132, 250, 0.08);

        &:hover {
            background-color: rgba(108, 132, 250, 0.14);
        }
    }
</style>