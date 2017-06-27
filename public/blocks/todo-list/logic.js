uit.define("todo-list", ["item", "filter"], ctx => {
  ctx.clickHandler = function() {
    const item = {
      text: ctx.input.value,
      completed: false
    };
    ctx.data.items.push(item);
    uit.append(ctx.items, "item").then(instances => {
      instances[0].set(item);
    });
  };

  ctx.on("test", () => {
    ctx.set({
      items: [
        {
          text: "Learn uit",
          completed: true
        },
        {
          text: "Forget uit",
          completed: false
        }
      ],
      filters: [
        {
          disabled: true,
          text: "All"
        },
        {
          disabled: false,
          text: "Done"
        },
        {
          disabled: false,
          text: "Active"
        }
      ]
    });
  });
});
