new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "images/l3.jpg",
          img2: "images/l2.jpg",
          img3: "images/l1.jpg",
          title: "LOVE",
          isOpen: false,
        },
        {
          img1: "images/p1.jpg",
          img2: "images/p2.jpg",  
          img3: "images/p3.jpg",
          title: "PHOTOGRAPHS",
          isOpen: false,
        },
        {
          img1: "images/s1.jpg",
          img2: "images/s2.jpg",
          img3: "images/s3.jpg",
          title: "SPIDER",
          isOpen: false,
        },
        {
          img1: "images/c1.jpg",
          img2: "images/c2.jpg",
          img3: "images/c3.jpg",
          title: "KITTIES",
          isOpen: false,
        },
        {
          img1: "images/u1.jpg",
          img2: "images/u2.jpg",
          img3: "images/u3.jpg",
          title: "US",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});
