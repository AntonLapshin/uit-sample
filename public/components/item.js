uit.define(
  "item",
  `
  <div class="item" data-bind="class: data.completed: completed">
    <input type="checkbox" data-bind="attr: data.id: id, attr: data.completed: checked, click: clickHandler" />
    <label data-bind="text: data.text, attr: data.id: for"></label>
  </div>`,
  `
  .item {
    padding: 1em;
    cursor: pointer;
  }
  .item:hover {
    background-color: #f3f3f3;
  }
  .item.completed > label {
    text-decoration: line-through;
  }`,
  ctx => {
    ctx.clickHandler = () => {
      ctx.data.completed = !ctx.data.completed;
      uit.event.fire("item.click");
    };
  }
);

uit.test("item", ctx => {
  ctx.set(
    observable({
      id: "todo_1",
      text: "Learn uit",
      completed: false
    })
  );
});
