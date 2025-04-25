namespace SpriteKind {
    export const FoodI = SpriteKind.create()
}
// näppäin komennot
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    X = 0
    if (Y != -12) {
        Y += -12
    }
})
// Omena
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.FoodI, function (sprite, otherSprite) {
    if (Math.percentChance(95)) {
        info.changeScoreBy(2)
    } else {
        info.changeScoreBy(-2)
    }
    Apple.setPosition(randint(6, 150), randint(6, 114))
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Y = 0
    if (X != -12) {
        X += -12
    }
})
// Omena
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (Math.percentChance(5)) {
        Bomb.setVelocity(0, 0)
        info.changeScoreBy(20)
    } else {
        Bomb.setVelocity(0, 0)
        info.changeScoreBy(-5)
        animation.runImageAnimation(
        Bomb,
        assets.animation`Explosion`,
        200,
        false
        )
        Bomb.setImage(assets.image`Sirpaleet`)
        pause(100)
    }
    sprites.destroy(Bomb, effects.rings, 200)
})
// banaani
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Babana.setPosition(randint(6, 150), randint(6, 114))
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Y = 0
    if (X != 12) {
        X += 12
    }
})
// Omena
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (Math.percentChance(5)) {
        Bomb.setVelocity(0, 0)
        info.changeScoreBy(20)
    } else {
        Bomb.setVelocity(0, 0)
        animation.runImageAnimation(
        Bomb,
        assets.animation`Explosion`,
        200,
        false
        )
        info.changeScoreBy(-5)
        info.changeLifeBy(-1)
    }
    sprites.destroy(Bomb, effects.rings, 200)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    X = 0
    if (Y != 12) {
        Y += 12
    }
})
// kuolema
info.onLifeZero(function () {
    music.stopAllSounds()
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.InBackground)
    game.gameOver(false)
})
// banaani
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Babana.setPosition(randint(6, 150), randint(6, 114))
})
// Omena
sprites.onOverlap(SpriteKind.Player, SpriteKind.FoodI, function (sprite, otherSprite) {
    if (Math.percentChance(95)) {
        info.changeScoreBy(2)
    } else {
        info.changeScoreBy(-2)
    }
    Apple.setPosition(randint(6, 150), randint(6, 114))
})
let hännänjatko: Sprite = null
let Bomb: Sprite = null
let Y = 0
let X = 0
let Apple: Sprite = null
let Babana: Sprite = null
game.showLongText("Jos syöt banaanin saat 1 pisteen. Syömällä omenan saat 2 pistettä tai 5% mahdollisuudella menetät 2 pistettä. Jos osut pommiin menetät 5 pitettä, mutta jos se ei räjähdä saat 20 pistettä, ja jos törmäät siihen kuolet niinkuin myös seinään törmäämiseen.", DialogLayout.Full)
game.showLongText("Your high score" + info.highScore(), DialogLayout.Center)
info.setLife(1)
scene.setBackgroundImage(assets.image`Tausta_1`)
info.setScore(0)
Babana = sprites.create(assets.image`Banana`, SpriteKind.Food)
Apple = sprites.create(assets.image`Omena`, SpriteKind.FoodI)
let PlayerPlayer = sprites.create(assets.image`MadonPää`, SpriteKind.Player)
let häntä = sprites.create(assets.image`Häntä`, SpriteKind.Player)
let PlayerY = 6
let PlayerX = 6
X = 0
Y = 0
Babana.setPosition(randint(6, 150), randint(6, 114))
Apple.setPosition(randint(6, 150), randint(6, 114))
forever(function () {
    pause(randint(500, 60000))
    Bomb = sprites.createProjectileFromSide(assets.image`Bombn`, 0, 50)
    Bomb.setPosition(randint(6, 150), Bomb.y)
})
forever(function () {
    for (let index = 0; index < info.score(); index++) {
        hännänjatko = sprites.create(assets.image`Häntä`, SpriteKind.Enemy)
        hännänjatko.setPosition(häntä.x, häntä.y)
        hännänjatko.lifespan = info.score() * 500
        pause(500)
    }
})
// liikutetaan pelaajaa
forever(function () {
    pause(499)
    häntä.setPosition(PlayerX, PlayerY)
    pause(1)
    PlayerX += X
    PlayerY += Y
    if (PlayerX < 6 || PlayerY < 6 || (PlayerX > 150 || PlayerY > 114)) {
        info.changeLifeBy(-1)
    }
})
forever(function () {
    PlayerPlayer.setPosition(PlayerX, PlayerY)
})
// elämän menetys
forever(function () {
    pauseUntil(() => controller.left.isPressed() || controller.up.isPressed() || (controller.right.isPressed() || controller.down.isPressed()))
    if (X == 0 && Y == 0) {
        info.changeLifeBy(-1)
    }
})
forever(function () {
    if (info.score() >= 149) {
        game.setGameOverEffect(true, effects.confetti)
        game.gameOver(true)
    }
})
