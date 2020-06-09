<template>
    <div class="steps-container">
        <span class="step-main-title" v-text="stepTitle"/>
        <div v-for="items in stepItem" class="step">
            <div class="step-number-container">
                <div class="step-number" v-text="items.sort"/>
                <span class="step-line"/>
            </div>
            <div class="step-content">
                <span class="step-title" v-html="items.title"/>
                <span class="step-text" v-html="items.description"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Steps",
        props:{
            stepItem:{type:Object},
            stepTitle:{type:String},
        }
    }
</script>

<style scoped lang="scss">
.steps-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: max-content;

    & .step-main-title {
        width: 100%;
        height: max-content;
        font-size: 16px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: -0.32px;
        color: #646464;
        margin: 0 0 16px 0;
    }

    & .step {
        display: flex;
        width: 100%;
        height: max-content;

        &:last-child {
            & .step-content {
                padding: 0;
            }

            & .step-line {
                display: none;
            }
        }

      & .step-number-container {
          display: flex;
          flex-direction: column;
          width: 36px;
          height: initial;

          & .step-number {
              display: flex;
              justify-content: center;
              align-items: center;
              text-align: center;
              width: 36px;
              height: 36px;
              border-radius: 50%;
              font-size: 14px;
              font-weight: bold;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.5;
              letter-spacing: -0.32px;
              color: #ffffff;
              background-color: #6c84fa;
          }

          & .step-line {
              margin: 8px 0 8px 0;
              width: 18px;
              min-height: calc(100% - 52px);
              border-right: 1px dashed #dbdbdb;
          }
      }

        & .step-content {
            display: flex;
            flex-direction: column;
            padding: 0 0 38px 0;
            margin: 0 0 0 16px;

            & .step-title {
                font-size: 16px;
                font-weight: 600;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.5;
                letter-spacing: -0.32px;
                color: #646464;
            }

            & .step-text {
                font-size: 14px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.5;
                letter-spacing: -0.28px;
                color: #646464;
                margin: 8px 0 0 0;
            }
        }
    }
}
</style>