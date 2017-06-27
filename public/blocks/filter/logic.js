uit.define("filter", [], ctx => {
  ctx.on("test", () => {
    ctx.set({
      disabled: false,
      text: "All"
    });
  });
});
