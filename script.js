const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const sprites = World.build(Levels.getLevel(0));
const controller = new Controller();

setInterval(() => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (const sprite of sprites) {
    sprite.draw(context);
    if (sprite.isPlayer) {
      let player = sprite;

      for (const wall of sprites) {

        if (!wall.isPlayer) {  //walls do not have isplayer, so only 2 == cuz undefined, not exactly false
          checkCollision(player, wall)
        }
      }
    }
    sprite.update(canvas, controller);
  }
}, 30);

function checkCollision(player, wall) {

  const collidingX = player.x < (wall.x + wall.w) && (player.x + player.w) > wall.x
  const collidingY = player.y < (wall.y + wall.h) && (player.y + player.h) > wall.y

  if (collidingX && collidingY) {
    
  }
}