<template>
  <div>
    <!-- 摘要部分 -->
    <div class="c-outline-content__section-header">
      <h4 class="c-outline-content__section-title" :style="{ color: whiteColor }">
        摘要
      </h4>
      <div class="c-outline-content__section-action-wrapper" @click="$emit('mind-map-click')">
        <span class="c-outline-content__section-action" :style="{ color: whiteColor }">
          思维导图
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none"
          version="1.1" width="16" height="16" viewBox="0 0 16 16">
          <defs>
            <clipPath id="master_svg0_2_5823">
              <rect x="0" y="0" width="16" height="16" rx="0" />
            </clipPath>
          </defs>
          <g clip-path="url(#master_svg0_2_5823)">
            <g>
              <path
                d="M9.579083492279054,8L5.9562094922790525,11.62288L6.710457492279053,12.37712L10.710453492279052,8.37712Q10.747603492279053,8.33998,10.776783492279053,8.296299999999999Q10.805963492279052,8.25263,10.826073492279054,8.2041Q10.846173492279053,8.15557,10.856413492279053,8.10405Q10.866663492279052,8.05253,10.866663492279052,8Q10.866663492279052,7.94747,10.856413492279053,7.89595Q10.846173492279053,7.84443,10.826073492279054,7.7959Q10.805963492279052,7.74737,10.776783492279053,7.7036999999999995Q10.747603492279053,7.660019999999999,10.710453492279052,7.62288L6.710457492279053,3.6228759999999998L5.9562094922790525,4.377124L9.579083492279054,8Z"
                fill-rule="evenodd" fill="#FFFFFF" fill-opacity="1" />
            </g>
          </g>
        </svg>
      </div>
    </div>

    <!-- 摘要内容 -->
    <div v-if="introduction" class="c-outline-content__summary-section" :style="{ backgroundColor: summaryBg }">
      <p class="c-outline-content__summary-text" :style="{ color: whiteColor }"
        v-html="formatIntroduction(introduction)"></p>
      <button v-if="introduction.length > 150" class="c-outline-content__expand-btn"
        :style="{ color: brandBlue }" @click="toggleIntroductionExpanded">
        {{ isIntroductionExpanded ? "收起" : "展开" }}
      </button>
    </div>

    <!-- 分段总结标题 -->
    <h4 class="c-outline-content__section-header" :style="{ color: whiteColor }">
      分段总结
    </h4>

    <!-- 分段总结内容 -->
    <div class="c-outline-content__segments-section" :style="{ backgroundColor: summaryBg }">
      <div v-for="(segment, index) in outlineData" :key="segment.id" class="c-outline-content__segment-item">
        <div class="c-outline-content__segment-header">
          <h5 class="c-outline-content__segment-title" :style="{ color: whiteColor }">
            {{ segment.title }}
            <span class="c-outline-content__segment-time" :style="{ color: brandBlue }"
              @click="handleTimeClick(segment.startTime)">
              {{ segment.startTime }}
            </span>
          </h5>
        </div>
        <p class="c-outline-content__segment-summary" :style="{ color: whiteColor }"
          v-html="formatSummary(segment.summary)"></p>

        <!-- 分割线 -->
        <div v-if="index < outlineData.length - 1" class="c-outline-content__segment-divider"
          :style="{ backgroundColor: whiteColor }"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OutlineContent",
  props: {
    introduction: {
      type: String,
      default: "",
    },
    outlineData: {
      type: Array,
      default: () => [],
    },
    videoTitle: {
      type: String,
      default: "",
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
    summaryBg: {
      type: String,
      default: "rgba(255, 255, 255, 0.1)",
    },
  },
  data() {
    return {
      isIntroductionExpanded: false,
    }
  },
  methods: {
    handleTimeClick(time) {
      this.$emit("time-click", time)
    },

    formatIntroduction(text) {
      if (!text) return ""

      if (typeof text !== "string") {
        console.warn("formatIntroduction: text参数不是字符串类型", text)
        text = String(text)
      }

      if (!this.isIntroductionExpanded && text.length > 50) {
        return text.substring(0, 50) + "..."
      }

      return text.replace(/\n/g, "<br>")
    },

    formatSummary(text) {
      if (!text) return ""
      if (typeof text !== "string") {
        console.warn("formatSummary: text参数不是字符串类型", text)
        return String(text)
      }
      return text.replace(/\n/g, "<br>")
    },

    toggleIntroductionExpanded() {
      this.isIntroductionExpanded = !this.isIntroductionExpanded
    },
  },
}
</script>

<style lang="scss" scoped>
.c-outline-content__summary-section,
.c-outline-content__segments-section {
  border-radius: 4px;
  padding: 12px;
  margin-bottom: 30px;
}

.c-outline-content__section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.c-outline-content__section-title {
  font-family: "PingFang SC", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
}

.c-outline-content__section-action {
  font-family: "PingFang SC", sans-serif;
  font-size: 14px;
  line-height: 22px;
  cursor: pointer;
}

.c-outline-content__section-action-wrapper {
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
}

.c-outline-content__summary-text {
  display: inline;
  font-family: "PingFang SC", sans-serif;
  font-size: 14px;
  line-height: 22px;
  margin: 0 0 12px 0;
  opacity: 0.8;
}

.c-outline-content__expand-btn {
  margin-left: 4px;
  display: inline;
  background: none;
  border: none;
  font-family: "PingFang SC", sans-serif;
  font-size: 14px;
  line-height: 22px;
  cursor: pointer;
  padding: 0;
}

.c-outline-content__segment-item {
  margin-bottom: 20px;
  position: relative;
}

.c-outline-content__segment-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.c-outline-content__segment-title {
  font-family: "PingFang SC", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  margin: 0;
  opacity: 0.8;
}

.c-outline-content__segment-time {
  font-family: "PingFang SC", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-decoration: underline;
  cursor: pointer;
  opacity: 0.8;
}

.c-outline-content__segment-summary {
  font-family: "PingFang SC", sans-serif;
  font-size: 14px;
  line-height: 22px;
  margin: 0;
  opacity: 0.8;
}

.c-outline-content__segment-divider {
  width: 260px;
  height: 1px;
  margin: 20px 0;
  opacity: 0.1;
}
</style>