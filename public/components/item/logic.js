uit.define("item", [], ctx => {
  ctx.clickHandler = () => {
    ctx.data.completed(!ctx.data.completed());
  };

  ctx.on("test", () => {
    ctx.set(
      proxy({
        id: "todo_1",
        text: "Learn uit",
        completed: true
      })
    );
  });
});
