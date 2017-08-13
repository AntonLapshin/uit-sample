uit.define(
  "filter",
  `
  <a class="waves-effect waves-light light-blue darken-2 btn filter" 
      data-bind="class: data.pressed: disabled, text: data.text, click: onClick">
  </a>`,
  ctx => {
    ctx.onClick = () => {
      ctx.fire("click", ctx);
    };    
  }
);

uit.test("filter", ctx => {
  ctx.set(
    observable({
      pressed: true,
      text: "All"
    })
  );
});
