let uid = 0;

const appendItem = (ctx, item) => {
  uit.append(ctx.items, "item", "byIndex").then(instance => {
    instance.set(item);
  });
};

uit.define(
  "todo-list",
  ["todo-list/view.html", "todo-list/style.css", "item.js", "filter.js"],
  ctx => {
    ctx.addHandler = () => {
      const item = observable({
        id: `todo_${uid++}`,
        text: ctx.input.value,
        completed: false
      });
      ctx.data.items.push(item);
      appendItem(ctx, item);
      ctx.input.value = "";
    };

    const doFilter = filter => {
      ctx.children.item.forEach(item => {
        item[filter.data.filter(item) ? "show" : "hide"]();
      });
    };

    const onFilter = filter => {
      console.log(filter);
      for (let name in ctx.children.filter) {
        const f = ctx.children.filter[name];
        if (f !== filter) {
          f.data.pressed = false;
        }
      }
      filter.data.pressed = true;
      ctx.activeFilter = filter;
      doFilter(filter);
    };

    ctx.on("load", () => {
      for (let name in ctx.children.filter) {
        ctx.children.filter[name].on("click", onFilter);
      }
      uit.event.on("item.click", () => {
        doFilter(ctx.activeFilter);
      });
    });

    ctx.on("set", data => {
      ctx.items.innerHTML = "";
      data.items.forEach(item => appendItem(ctx, item));
      ctx.children.filter.all.set(data.filters[0]);
      ctx.children.filter.done.set(data.filters[1]);
      ctx.children.filter.active.set(data.filters[2]);
      ctx.activeFilter = ctx.children.filter.all;
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
        text: "All",
        filter: item => true
      }),
      observable({
        pressed: false,
        text: "Done",
        filter: item => item.data.completed
      }),
      observable({
        pressed: false,
        text: "Active",
        filter: item => !item.data.completed
      })
    ]
  });
});
