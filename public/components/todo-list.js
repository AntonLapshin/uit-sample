let uid = 0;

const appendItem = (ctx, item) => {
  uit.append(ctx.items, "item").then(instance => {
    instance.set(item);
  });
};

uit.define(
  "todo-list",
  ["todo-list/view.html", "todo-list/style.css", "item.js", "filter.js"],
  ctx => {
    ctx.clickHandler = () => {
      const item = observable({
        id: `todo_${uid++}`,
        text: ctx.input.value,
        completed: false
      });
      ctx.data.items.push(item);
      appendItem(ctx, item);
      ctx.input.value = "";
    };

    ctx.on("set", data => {
      ctx.items.innerHTML = "";
      data.items.forEach(item => appendItem(ctx, item));
      ctx.children.filter.all.set(data.filters[0]);
      ctx.children.filter.done.set(data.filters[1]);
      ctx.children.filter.active.set(data.filters[2]);
    });
  }
);

uit.test("todo-list", ctx => {
  ctx.set({
    items: [
      observable({
        id: "todo_1",
        text: "Learn uit",
        completed: true
      }),
      observable({
        id: "todo_2",
        text: "Forget uit",
        completed: false
      })
    ],
    filters: [
      observable({
        pressed: true,
        text: "All"
      }),
      observable({
        pressed: false,
        text: "Done"
      }),
      observable({
        pressed: false,
        text: "Active"
      })
    ]
  });
});
