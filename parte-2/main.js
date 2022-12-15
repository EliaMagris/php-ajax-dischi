var app = new Vue({
  el: '#app',
  data: {
    arrayCards: [],
  },

  mounted() {
    axios.get('../parte-2/api/index.php').then((res) => {
      this.arrayCards = res.data;

      console.log(res);
    });
  },
  beforeUpdate() {},
  methods: {},
});
