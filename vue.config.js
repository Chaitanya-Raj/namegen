module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/namegen/" : "/",
  pwa: {
    name: "Name Generator",
    themeColor: "#2d3142",
  },
};
