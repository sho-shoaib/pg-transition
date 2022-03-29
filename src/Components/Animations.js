export const model = {
  hide: {
    opacity: 0,
  },
  shown: {
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChildren: 0.1,
    },
  },
};

export const modelPage = {
  start: {
    height: 342,
    width: 300,
    y: "-60%",
    borderRadius: 20,
  },
  animate: {
    height: "75%",
    width: "100%",
    y: 0,
    borderRadius: 0,
    transition: {
      type: "easeIn",
      delay: 0.2,
      duration: 0.5,
    },
  },
};
