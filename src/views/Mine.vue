<template>
  <div>mine{{ count }}</div>
  <!-- <div @click="gohome">click</div> -->
  <div @click="clickHome" data-attr='a'>click home</div>
  <hello-world title="hello world" name='mine' />
</template>

<script>
import { useRouter, useRoute } from 'vue-router';
import HelloWorld from '/com/HelloWorld.vue';
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const gohome = (e, params) => {
      router.push({
        path: '/',
        query: params,
      });
    };
    return {
      gohome,
    };
  },
  components: {
    HelloWorld,
  },
  name: 'mine',
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
      inputVaue: '',
    };
  },

  mounted() {},
  methods: {
    clickHome() {
      let params = {
        a: '1',
        b: 2121,
      };
      this.gohome('', params);
    },
  },
  computed: {},
  watch: {},
};
</script>