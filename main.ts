namespace SpriteKind {
    export const FoodI = SpriteKind.create()
    export const Häntä = SpriteKind.create()
    export const Wall = SpriteKind.create()
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
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(Babana, effects.spray, 200)
    animation.runImageAnimation(
    Bomb,
    assets.animation`Explosion`,
    200,
    false
    )
    pause(5000)
    Bomb.setVelocity(0, 0)
    Bomb.setImage(assets.image`Sirpaleet`)
    pause(100)
    sprites.destroy(Bomb, effects.fire, 200)
    Babana.setPosition(randint(6, 150), randint(6, 114))
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
    sprites.destroy(Bomb, effects.fire, 200)
})
// Omena
sprites.onOverlap(SpriteKind.Häntä, SpriteKind.Projectile, function (sprite, otherSprite) {
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
    sprites.destroy(Bomb, effects.fire, 200)
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
    sprites.destroy(Bomb, effects.fire, 200)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    X = 0
    if (Y != 12) {
        Y += 12
    }
})
// kuolema
info.onLifeZero(function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    if (game.ask("Haluatko jatkaa, vaikka", "menetät 50 pistettä?")) {
        info.setLife(1)
        info.changeScoreBy(-50)
        Restart = 1
        PlayerPlayer.setPosition(6, 6)
        häntä.setPosition(6, 6)
    } else {
        music.stopAllSounds()
        music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.InBackground)
        game.gameOver(false)
    }
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
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.FoodI, function (sprite, otherSprite) {
    sprites.destroy(Apple, effects.spray, 200)
    animation.runImageAnimation(
    Bomb,
    assets.animation`Explosion`,
    200,
    false
    )
    pause(5000)
    Bomb.setVelocity(0, 0)
    Bomb.setImage(assets.image`Sirpaleet`)
    pause(100)
    sprites.destroy(Bomb, effects.fire, 200)
    Apple.setPosition(randint(6, 150), randint(6, 114))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let Seinä: Sprite = null
let lvl = 0
let hännänjatko: Sprite = null
let Bomb: Sprite = null
let Y = 0
let X = 0
let häntä: Sprite = null
let PlayerPlayer: Sprite = null
let Apple: Sprite = null
let Babana: Sprite = null
let Restart = 0
Restart = 0
info.setLife(1)
scene.setBackgroundImage(assets.image`Tausta_2`)
game.showLongText("Jos syöt banaanin saat 1 pisteen. Syömällä omenan saat 2 pistettä tai 5% mahdollisuudella menetät 2 pistettä. Jos osut pommiin menetät 5 pitettä, mutta jos se ei räjähdä saat 20 pistettä, ja jos törmäät siihen kuolet niinkuin myös seinään törmäämiseen.", DialogLayout.Full)
game.showLongText("Your high score" + info.highScore(), DialogLayout.Top)
info.setScore(0)
Babana = sprites.create(assets.image`Banana`, SpriteKind.Food)
Apple = sprites.create(assets.image`Omena`, SpriteKind.FoodI)
PlayerPlayer = sprites.create(assets.image`MadonPää`, SpriteKind.Player)
häntä = sprites.create(assets.image`Häntä`, SpriteKind.Häntä)
let PlayerY = 6
let PlayerX = 6
X = 0
Y = 0
Babana.setPosition(randint(6, 150), randint(6, 114))
Apple.setPosition(randint(6, 150), randint(6, 114))
forever(function () {
    pause(randint(500, 60000))
    Bomb = sprites.createProjectileFromSide(assets.image`Bombn`, 0, 20)
    Bomb.setPosition(randint(6, 150), Bomb.y)
})
// liikutetaan pelaajaa
forever(function () {
    pause(500)
    häntä.setPosition(PlayerX, PlayerY)
    PlayerX += X
    PlayerY += Y
    PlayerPlayer.setPosition(PlayerX, PlayerY)
    if (PlayerX < 6 || PlayerY < 6 || (PlayerX > 150 || PlayerY > 114)) {
        info.changeLifeBy(-1)
    }
    if (info.score() >= 2) {
        pause(Restart * 500)
        Restart = 0
        hännänjatko = sprites.create(assets.image`Häntä`, SpriteKind.Enemy)
        hännänjatko.setPosition(häntä.x, häntä.y)
        hännänjatko.lifespan = info.score() * 500
    }
})
// elämän menetys
forever(function () {
    pauseUntil(() => controller.left.isPressed() || controller.up.isPressed() || (controller.right.isPressed() || controller.down.isPressed()))
    if (X == 0 && Y == 0) {
        info.changeLifeBy(-1)
    }
})
forever(function () {
    if (info.score() <= 0) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.hearts, 500)
    }
})
forever(function () {
    if (info.score() <= 150 - lvl * 4 + 150 * lvl) {
        if (game.ask("Haluatko jatkaa seuraavaan tasoon?")) {
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            Restart = 1
            PlayerPlayer.setPosition(6, 6)
            häntä.setPosition(6, 6)
            lvl = 1
            if (1 <= lvl) {
                Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
                Seinä.setPosition(18, 18)
                Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
                Seinä.setPosition(138, 18)
                Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
                Seinä.setPosition(18, 102)
                Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
                Seinä.setPosition(138, 102)
            }
            if (2 <= lvl) {
                Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
                Seinä.setPosition(18, 30)
                Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
                Seinä.setPosition(138, 30)
                Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
                Seinä.setPosition(18, 90)
                Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
                Seinä.setPosition(138, 90)
            }
            if (3 <= lvl) {
                Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
                Seinä.setPosition(30, 18)
                Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
                Seinä.setPosition(124, 18)
                Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
                Seinä.setPosition(30, 102)
                Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
                Seinä.setPosition(124, 102)
            }
        } else {
            game.setGameOverEffect(true, effects.confetti)
            game.gameOver(true)
        }
    }
})
