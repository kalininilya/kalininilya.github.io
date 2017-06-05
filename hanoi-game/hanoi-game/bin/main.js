let game = new Game([[1, 2, 3], [], []]);
let el = document.querySelector(".container");
let view = new View(game, el);
game.solve(3, 0, 1, 2);
DragManager.onDragCancel = function(dragObject) {
  dragObject.avatar.rollback();
};

DragManager.onDragEnd = function(dragObject, dropElem) {
  dragObject.elem.style.display = "none";
  try {
    game.makeMove(dragObject.elem.parentId, dropElem.id);
    if (game.isFinished()) {
      confirm("Congratulations, you won!");
    }
    view.render();
  } catch (err) {
    console.error("Error: ", e.message);
    view.render();
  }
};
