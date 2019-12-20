<template>
  <div class="home">
    <el-slider
      v-model="fontSize"
      style="width:100px"
      :min="8"
      :max="24"
      :step="1"
    >
    </el-slider>
    <div style="height:313px">
      <vue-scroll :ops="ops">
        <div class="line-numbers">
          <div
            v-for="int in rowNumber"
            :key="'line'+int"
            class="line-number"
            :style="{width:3*fontSize + 'px',fontSize:fontSize + 'px',height:(2*fontSize - 4) + 'px',lineHeight: (2*fontSize - 4) + 'px'}"
          >{{int}}</div>
        </div>
        <div
          ref="content"
          class="content"
          :style="{paddingLeft:4*fontSize+ 'px',fontSize:fontSize+ 'px',lineHeight:(2*fontSize-4)+ 'px'}"
          v-html="html"
          v-highlight
        >
        </div>
      </vue-scroll>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  mounted() {
    console.log(this.$refs.content.offsetHeight);
    this.rowNumber = this.$refs.content.offsetHeight / (2 * this.fontSize - 4);
  },
  data() {
    return {
      rowNumber: 0,
      fontSize: 16,
      html:
        '<pre><code>//大路口附近的风景离开家啊；的法律框架啊的法律框架了；打飞机啦；放拉风； 离开家地方；框架离开<br>&nbsp; &nbsp; &nbsp; public IList&lt;string&gt; LetterCombinations(string digits)<br />&nbsp; &nbsp; &nbsp; &nbsp; {<br />&nbsp; &nbsp; &nbsp;&nbsp; List&lt;string&gt; ans = new List&lt;string&gt;();<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dictionary&lt;string,string&gt; phone =new Dictionary&lt;string,string&gt;{<br />&nbsp; &nbsp; &               {"2","abc"},<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {"3","def"},<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {"4","ghi"},<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {"5","jkl"},<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {"6","mno"},<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {"7","pqrs"},<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {"8","tuv"},<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {"9","wxyz"},<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; };<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; int i =0;<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; while(i &amp;lt; digits.Length){<br /><br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</code></pre>',
      ops: {
        mode: "slide",
        sizeStrategy: "percent",
        detectResize: true,
        scrollPanel: {
          initialScrollY: false,
          initialScrollX: "100%",
          scrollingX: true,
          scrollingY: true,
          speed: 300,
          easing: undefined,
          verticalNativeBarPos: "right"
        },
        rail: {
          background: "#01a99a",
          opacity: 50,
          size: "6px",
          specifyBorderRadius: false,
          gutterOfEnds: null,
          gutterOfSide: "2px",
          keepShow: false
          //   border:"1px solid blue"
        },
        bar: {
          showDelay: 500,
          onlyShowBarOnScroll: true,
          keepShow: true,
          background: "rgb(3, 185, 118)",
          opacity: 1,
          hoverStyle: false,
          specifyBorderRadius: false,
          minSize: false,
          size: "6px",
          disable: false
        }
      }
    };
  },
  computed: {},
  components: {
    HelloWorld
  }
};
</script>
<style lang="scss" scoped >
/deep/.hljs {
  padding: 0;
}
.line-numbers {
  position: absolute;
  .line-number {
    width: 100%;
    height: 22px;
    line-height: 22px;
    font-size: 16px;
    text-align: right;
  }
}
.content {
  position: absolute;
  left:0;
  width: 100%;
  text-align: left;
  line-height: 22px;
  font-size: 16px;
}
</style>