<template>
  <div class="c-qa-content__questions-list">
    <div v-for="(question, index) in questions" :key="question.id || index"
      class="c-qa-content__question-item">
      <div class="c-qa-content__question-content">
        <div class="c-qa-content__question-header">
          <div class="c-qa-content__question-icon-wrapper">
            <div class="c-qa-content__question-icon"></div>
          </div>
          <div class="c-qa-content__question-main">
            <h5 class="c-qa-content__question-title" :style="{ color: whiteColor }">
              {{ question.question }}
            </h5>
          </div>
        </div>

        <div class="c-qa-content__answer-content">
          <div class="c-qa-content__answer-icon-wrapper">
            <div class="c-qa-content__answer-icon"></div>
          </div>
          <div class="c-qa-content__answer-main">
            <p class="c-qa-content__question-answer" :style="{ color: whiteColor }">
              {{ question.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QaContent",
  props: {
    questions: {
      type: Array,
      default: () => [],
    },
    whiteColor: {
      type: String,
      default: "#FFFFFF",
    },
    grayTextColor: {
      type: String,
      default: "#ADADC0",
    },
    brandBlue: {
      type: String,
      default: "#3F76FC",
    },
  },
}
</script>

<style lang="scss" scoped>
.c-qa-content__questions-list {
  padding: 0;
}

.c-qa-content__question-item {
  margin-bottom: 24px;
  position: relative;
  padding: 16px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.05);
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }
}

.c-qa-content__question-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.c-qa-content__question-header {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.c-qa-content__question-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.c-qa-content__question-title {
  font-family: "PingFang SC", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin: 0;
  opacity: 0.9;
}

.c-qa-content__answer-content {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.c-qa-content__answer-main {
  flex: 1;
}

.c-qa-content__question-answer {
  font-family: "PingFang SC", sans-serif;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
  opacity: 0.8;
}

.c-qa-content__question-icon {
  display: inline-block;
  width: 18px;
  height: 18px;
  background: url("@/assets/imgs/ic-question.png") no-repeat center center;
  background-size: 100% 100%;
}

.c-qa-content__answer-icon {
  display: inline-block;
  width: 18px;
  height: 18px;
  background: url("@/assets/imgs/ic-answer.png") no-repeat center center;
  background-size: 100% 100%;
}
</style>