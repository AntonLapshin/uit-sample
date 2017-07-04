uit.define("filter", [], ctx => {
  ctx.on("test", () => {
    ctx.set(
      proxy({
        pressed: true,
        text: "All"
      })
    );
  });
});
