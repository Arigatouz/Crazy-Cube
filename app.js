let vm = Vue.createApp({
  data() {
    return {
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      perspective: 100,
    };
  },
  computed: {
    boxTransform() {
      return {
        transform: `
        perspective(${this.perspective}px) 
        rotateX(${this.rotateX}deg) 
        rotateY(${this.rotateY}deg) 
        rotateZ(${this.rotateZ}deg)
        `,
      };
    },
  },
  watch: {
    // boxTransform(oldValue, newValue) {
    //   console.log(`boxTransform invoked`);
    // },
  },
  methods: {
    reset() {
      this.rotateX = 0;
      this.rotateY = 0;
      this.rotateZ = 0;
      this.perspective = 100;
      console.log("reset");
    },
    copy() {
      const el = document.createElement("textarea");
      const p = document.createElement("p");
      const header = document.getElementById("header");

      el.setAttribute("readonly", "");
      p.setAttribute("readonly", "");

      el.style.position = "absolute";
      el.style.left = "-9999px";
      el.value = `transform: ${this.boxTransform.transform}`;
      p.innerText = "Copied";
      p.classList.add("message");

      document.body.appendChild(el);
      header.appendChild(p);

      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);

      setTimeout(() => {
        header.removeChild(p);
      }, 3000);
    },
  },
}).mount("#app");
