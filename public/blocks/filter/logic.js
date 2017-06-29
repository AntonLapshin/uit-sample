uit.define("filter", [], ctx => {
  ctx.on("test", () => {
    ctx.set({
      pressed: true,
      text: "All"
    });
  });
});
