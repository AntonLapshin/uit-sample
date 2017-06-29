uit.define("item", [], ctx => {
  ctx.on("test", () => {
    ctx.set({
      id: "todo_1",
      text: "Learn uit",
      completed: true
    });
  });
});
