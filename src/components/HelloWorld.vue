<template>
  <h1>{{ title }}{{name}}</h1>
</template>

<script lang='ts'>
import './style.scss';
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: ['title', 'name'],
  data(props) {
    console.log('props', this);

    return {
      count: 0,
      inputVaue: '',
      // title: props.title,
    };
  },
  mounted() {
    // console.log('hello world', this);
    // setInterval(() => {
    //   this.count++;
    // }, 1000);
  },
  computed: {
    // 计算属性
    logInput(): string {
      console.log('1', this.inputVaue);
      return this.inputVaue;
    },
  },
  watch: {
    //监听器
    count(newCount, oldCount) {
      console.log(newCount, oldCount);
      // if(newCount>5){
      //   this.count = 5
      //   alert('大于5了')
      // }
    },
  },
});
</script>