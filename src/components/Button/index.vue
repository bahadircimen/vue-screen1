<template>
    <button :disabled="disabled" :class="type + '-' + size" v-on:click="onClick">
        <img v-if="iconLeft" class="left" :src="iconLeft" alt=""/>
        {{text}}
        <img v-if="iconRight" class="right" :src="iconRight" alt=""/>
    </button>
</template>

<script>
    export default {
        name: "Button",
        props: {
            type:{type:String},
            size:{type:String, default:"Default"},
            iconLeft:{type:String},
            iconRight:{type:String},
            text:{type:String},
            // onClick:{type:Function},
            disabled:{type:Boolean, default:false},
            style:{type:Object}
        },
        methods: {
            onClick(){
                this.$emit("onClick")
            }
        }
    }
</script>

<style scoped lang="scss">
    button[class*="primary"] {
        background-color:#ff6000;
        color:white;
        border: none;
    }

    button[class*="secondary"] {
        background-color:rgba(#ff6000,0.08);
        color:#ff6000;
        border: none;
    }

    button[class*="ghost"] {
        background-color:white;
        color:#484848;
        border:solid 2px #cccccc;
    }

    button[class*="link"] {
        background-color:white;
        color:#484848;
        border: none;
    }

    button[class*="large"] {
        width: max-content;
        height: 56px;
        font-size: 16px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: -0.32px;
        text-align: center;
        padding:16px 24px 16px 24px;

        & img.left {
            width: 24px;
            height: 24px;
            margin: 0 12px 0 0;
        }

        & img.right {
            width: 24px;
            height: 24px;
            margin: 0 0 0 12px;
        }
    }

    button[class*="default"] {
        width: max-content;
        height: 48px;
        font-size: 16px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: -0.32px;
        text-align: center;
        padding:12px 16px 12px 16px;

        & img.left {
            width: 24px;
            height: 24px;
            margin: 0 8px 0 0;
        }

        & img.right {
            width: 24px;
            height: 24px;
            margin: 0 0 0 8px;
        }
    }

    button[class*="small"] {
        width: max-content;
        height: 40px;
        font-size: 14px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.71;
        letter-spacing: -0.28px;
        text-align: center;
        justify-content: center;
        padding:8px 16px 8px 16px;

        & img.left {
            width: 20px;
            height: 20px;
            margin: 0 8px 0 0;
        }

        & img.right {
            width: 20px;
            height: 20px;
            margin: 0 0 0 8px;
        }
    }

    button[class*="tiny"] {
        width: max-content;
        height: 32px;
        font-size: 12px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 2;
        letter-spacing: -0.24px;
        text-align: center;
        padding:2px 8px 6px 8px;

        & img.left {
            width: 16px;
            height: 16px;
            margin: 4px 4px 0 0;
        }

        & img.right {
            width: 16px;
            height: 16px;
            margin: 4px 0 0 4px;
        }
    }

    button[class*="primary"]{
        &:hover {
            background-color:#e35600;
            color:white;
        }

        &:focus {
            background-color:#cc4d00;
            color:white;
        }

        &:disabled {
            background-color:#cccccc;
            color:#919191;
        }
    }

    button[class*="secondary"]{
        &:hover {
            background-color:rgba(#ff6000,0.2);
            color:#ff6000;
        }

        &:focus {
            background-color:#cc4d00;
            color:white
        }

        &:disabled {
            background-color:#cccccc;
            color:#919191;
        }
    }

    button[class*="ghost"]{
        &:hover {
            background-color:white;
            color:#ff6000;
            border:solid 2px #cccccc;
        }

        &:focus {
            background-color:white;
            color:#c25700;
            border:solid 2px #cccccc;
        }

        &:disabled {
            background-color:white;
            color:#919191;
            border:solid 2px #cccccc;
        }
    }

    button[class*="link"]{
        &:hover {
            background-color:white;
            color:#ff6000;
        }

        &:focus {
            background-color:white;
            color:#c25700;
        }

        &:disabled {
            background-color:white;
            color:#919191;
        }
    }

    button.primary-large,button.primary-default,button.primary-small,button.primary-tiny, button.secondary-large,button.secondary-default,button.secondary-small,button.secondary-tiny, button.ghost-large,button.ghost-default,button.ghost-small,button.ghost-tiny, button.link-large,button.link-default,button.link-small,button.link-tiny {
        display: flex;
        outline: none;
        cursor: pointer;
        border-radius: 8px;
        justify-content: center;

        &:disabled {
            cursor: not-allowed;
        }
    }
</style>