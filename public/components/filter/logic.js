uit.define("filter", [], ctx => {
  ctx.on("test", () => {
    ctx.set(
      observable({
        pressed: true,
        text: "All"
      })
    );
  });
});
