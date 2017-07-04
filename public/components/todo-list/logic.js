let uid = 0;

const appendItem = (ctx, item) => {
  ctx.data.items.push(item);
  uit.append(ctx.items, "item").then(instance => {
    instance.set(item);
  });
};

uit.define("todo-list", ["item", "filter"], ctx => {
  ctx.clickHandler = function() {
    const item = {
      id: `todo_${uid++}`,
      text: ctx.input.value,
      completed: false
    };
    appendItem(ctx, item);
    ctx.input.value = "";
  };

  ctx.on("set", data => {
    data.items.forEach(item => appendItem(ctx, item));
    ctx.children.filter.all.set(data.filters[0]);
    ctx.children.filter.done.set(data.filters[1]);
    ctx.children.filter.active.set(data.filters[2]);
  });

  ctx.on("test", () => {
    ctx.set({
      items: [
        {
          id: "todo_1",
          text: "Learn uit",
          completed: true
        },
        {
          id: "todo_2",
          text: "Forget uit",
          completed: false
        }
      ],
      filters: [
        {
          pressed: true,
          text: "All"
        },
        {
          pressed: false,
          text: "Done"
        },
        {
          pressed: false,
          text: "Active"
        }
      ]
    });
  });
});
