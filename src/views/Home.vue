<template>
  <div>Home{{ count }}</div>
  <hello-world title="hello world" name='home' >
  </hello-world>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import HelloWorld from '/com/HelloWorld.vue';
export default defineComponent({
  name: 'home',
  components: {
    HelloWorld,
  },
  props: {
    msg: String,
  },
  setup(props) {
    onMounted(() => {
      console.log('onMounted', { ...props });
    });
    console.log('setup');
  },
  data() {
    return {
      count: 0,
      inputVaue: '',
    };
  },
  mounted() {
    console.log('mounted');
    fetch('/api/wyu/comment/music?id=186016&limit=1').then(response=>response.json()).then((res)=>{
      console.log('res',res);
      
    })  
  },

  computed: {},
  watch: {},
});
</script>