const app = Vue.createApp({
  data() {
    return {
      voluntarios: JSON.parse(localStorage.getItem("voluntarios")) || []
    };
  },
  methods: {
    remover(i) {
      this.voluntarios.splice(i, 1);
      localStorage.setItem("voluntarios", JSON.stringify(this.voluntarios));
    }
  }
});
app.mount("main");