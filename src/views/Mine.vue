<template>
  <div>mine{{ count }}</div>
  <div @click="gohome">click</div>
  <div @click="clickHome" data-attr='a'>click home</div>
</template>

<script>
import { useRouter, useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const gohome = (params) => {
        console.log(1);
        router.push({
            path:'/',
            query:params
        })
    };
    return {
        gohome
    };
  },
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
      inputVaue: "",
    };
  },

  mounted() {
    
  },
  methods: {
     clickHome(){
        let params = {
            a:'1',
            b:2121
        }
        this.gohome(params)
      }
  },
  computed: {},
  watch: {},
};
</script>