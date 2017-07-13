uit.define("item", [], ctx => {
  ctx.clickHandler = () => {
    ctx.data.completed = !ctx.data.completed;
  };

  ctx.on("test", () => {
    ctx.set(
      observable({
        id: "todo_1",
        text: "Learn uit",
        completed: false
      })
    );
  });
});
