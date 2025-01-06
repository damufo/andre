controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (pou.vy == 0) {
        pou.vy = 150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.melt)
})
let pou: Sprite = null
scene.setBackgroundColor(9)
pou = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . e e . . . . . . . 
    . . . . . . e e e e . . . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . e e e e e e e e . . . . 
    . . . e e 9 9 e e 9 9 e e . . . 
    . . e e e 9 9 e e 9 9 e e e . . 
    . e e e e e e e e e e e e e e . 
    e e e e e f f f f f f e e e e e 
    e e e e e f f 8 8 f f e e e e e 
    . 2 2 2 . . . . . . . . 2 2 2 . 
    . 2 2 2 . . . . . . . . 2 2 2 . 
    `, SpriteKind.Player)
controller.moveSprite(pou, 100, 100)
tiles.setCurrentTilemap(tilemap`level2`)
pou.ay += 350
scene.cameraFollowSprite(pou)
