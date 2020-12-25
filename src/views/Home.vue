<template>
  <div>Home{{ count }}</div>
  <hello-world title="lallalalal" name='12' >
  </hello-world>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import HelloWorld from '../components/HelloWorld.vue';
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
  },

  computed: {},
  watch: {},
});
</script>