<template>
    <div class="paragraph-container">
        <span class="paragraph-title" v-html="paragraphTitle"/>
        <span class="paragraph" v-html="paragraphText"></span>
    </div>
</template>

<script>
    export default {
        name: "Paragraph",
        props:{
            paragraphTitle:{type:String},
            paragraphText:{type: String}

        }
    }
</script>

<style scoped lang="scss">
.paragraph-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: max-content;

    & .paragraph-title {
        font-size: 16px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: -0.32px;
        color: #646464;
        margin: 0 0 8px 0;
    }

    & .paragraph {
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: -0.28px;
        color: #646464;
    }
}
</style>