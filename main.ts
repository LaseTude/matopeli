namespace SpriteKind {
    export const FoodI = SpriteKind.create()
    export const Häntä = SpriteKind.create()
    export const Wall = SpriteKind.create()
    export const FoodII = SpriteKind.create()
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
        final_score += 2
    } else {
        info.changeScoreBy(-2)
        final_score += -2
    }
    Apple.setPosition(randint(6, 150), randint(6, 114))
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.FoodII, function (sprite, otherSprite) {
    sprites.destroy(Blueberry, effects.spray, 200)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
    animation.runImageAnimation(
    Bomb,
    assets.animation`Explosion`,
    200,
    false
    )
    Bomb.setVelocity(0, 0)
    Bomb.setImage(assets.image`Sirpaleet`)
    pause(100)
    sprites.destroy(Bomb, effects.fire, 200)
    pause(5000)
    Blueberry = sprites.create(assets.image`Blueberry`, SpriteKind.FoodII)
    Blueberry.setPosition(randint(6, 150), randint(6, 114))
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(Babana, effects.spray, 200)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
    animation.runImageAnimation(
    Bomb,
    assets.animation`Explosion`,
    200,
    false
    )
    Bomb.setVelocity(0, 0)
    Bomb.setImage(assets.image`Sirpaleet`)
    pause(100)
    sprites.destroy(Bomb, effects.fire, 200)
    pause(5000)
    Babana = sprites.create(assets.image`Banana`, SpriteKind.Food)
    Babana.setPosition(randint(6, 150), randint(6, 114))
})
// banaani
sprites.onOverlap(SpriteKind.Player, SpriteKind.FoodII, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    final_score += 1
    Blueberry.setPosition(randint(6, 150), randint(6, 114))
})
sprites.onOverlap(SpriteKind.Wall, SpriteKind.FoodII, function (sprite, otherSprite) {
    Blueberry = sprites.create(assets.image`Blueberry`, SpriteKind.FoodII)
    Blueberry.setPosition(randint(6, 150), randint(6, 114))
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
        final_score += 20
    } else {
        Bomb.setVelocity(0, 0)
        info.changeScoreBy(-5)
        final_score += -5
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
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
        final_score += 20
    } else {
        Bomb.setVelocity(0, 0)
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
        animation.runImageAnimation(
        Bomb,
        assets.animation`Explosion`,
        200,
        false
        )
        info.changeScoreBy(-5)
        final_score += -5
        info.changeLifeBy(-1)
    }
    sprites.destroy(Bomb, effects.fire, 200)
})
// banaani
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    final_score += 1
    Babana.setPosition(randint(6, 150), randint(6, 114))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Wall, function (sprite, otherSprite) {
    if (!(final_score >= 120)) {
        info.changeLifeBy(-1)
    }
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
        final_score += 20
    } else {
        Bomb.setVelocity(0, 0)
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
        animation.runImageAnimation(
        Bomb,
        assets.animation`Explosion`,
        200,
        false
        )
        info.changeScoreBy(-5)
        final_score += -5
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
    music.stopAllSounds()
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.InBackground)
    game.gameOver(false)
})
// banaani
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    final_score += 1
    Babana.setPosition(randint(6, 150), randint(6, 114))
})
// banaani
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.FoodII, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    final_score += 1
    Blueberry.setPosition(randint(6, 150), randint(6, 114))
})
// Omena
sprites.onOverlap(SpriteKind.Player, SpriteKind.FoodI, function (sprite, otherSprite) {
    if (Math.percentChance(95)) {
        info.changeScoreBy(2)
        final_score += 2
    } else {
        info.changeScoreBy(-2)
        final_score += -2
    }
    Apple.setPosition(randint(6, 150), randint(6, 114))
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.FoodI, function (sprite, otherSprite) {
    sprites.destroy(Apple, effects.spray, 200)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
    animation.runImageAnimation(
    Bomb,
    assets.animation`Explosion`,
    200,
    false
    )
    Bomb.setVelocity(0, 0)
    Bomb.setImage(assets.image`Sirpaleet`)
    pause(100)
    sprites.destroy(Bomb, effects.fire, 200)
    pause(5000)
    Apple = sprites.create(assets.image`Omena`, SpriteKind.FoodI)
    Apple.setPosition(randint(6, 150), randint(6, 114))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let Seinä: Sprite = null
let hännänjatko: Sprite = null
let Bomb: Sprite = null
let Blueberry: Sprite = null
let Y = 0
let X = 0
let Apple: Sprite = null
let Babana: Sprite = null
let final_score = 0
final_score = 0
let lvl = 1
info.setLife(1)
scene.setBackgroundImage(assets.image`Tausta_2`)
game.showLongText("Jos syöt banaanin saat 1 pisteen. Syömällä omenan saat 2 pistettä tai 5% mahdollisuudella menetät 2 pistettä. Jos osut pommiin menetät 5 pitettä, mutta jos se ei räjähdä saat 20 pistettä, ja jos törmäät siihen kuolet niinkuin myös seinään törmäämiseen.", DialogLayout.Full)
info.setScore(0)
Babana = sprites.create(assets.image`Banana`, SpriteKind.Food)
Apple = sprites.create(assets.image`Omena`, SpriteKind.FoodI)
let PlayerPlayer = sprites.create(assets.image`MadonPää`, SpriteKind.Player)
let häntä = sprites.create(assets.image`Häntä`, SpriteKind.Häntä)
let PlayerY = 6
let PlayerX = 6
X = 0
Y = 12
Babana.setPosition(randint(6, 150), randint(6, 114))
Apple.setPosition(randint(6, 150), randint(6, 114))
music.play(music.createSong(assets.song`Lyönnit`), music.PlaybackMode.LoopingInBackground)
forever(function () {
    pause(randint(500, 60000))
    Bomb = sprites.createProjectileFromSide(assets.image`Bombn`, 0, 20)
    Bomb.setPosition(randint(6, 150), Bomb.y)
    pause(5555)
})
// liikutetaan pelaajaa
forever(function () {
    pause(500)
    häntä.setPosition(PlayerX, PlayerY)
    PlayerX += X
    PlayerY += Y
    PlayerPlayer.setPosition(PlayerX, PlayerY)
    if (!(final_score >= 120)) {
        if (PlayerX < 6 || PlayerY < 6 || (PlayerX > 150 || PlayerY > 114)) {
            info.changeLifeBy(-1)
        }
    }
    if (final_score >= 2) {
        hännänjatko = sprites.create(assets.image`Häntä`, SpriteKind.Enemy)
        hännänjatko.setPosition(häntä.x, häntä.y)
        hännänjatko.lifespan = final_score * 500
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
    if (final_score >= 120 - (lvl - 1) * 3) {
        game.showLongText("Läpäisit tason" + lvl, DialogLayout.Bottom)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
        if (lvl != 13) {
            game.showLongText("Taso" + (lvl + 1), DialogLayout.Center)
        }
        PlayerX = 6
        PlayerY = 6
        X = 0
        Y = 12
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        sprites.destroyAllSpritesOfKind(SpriteKind.Wall)
        häntä.setPosition(6, 6)
        final_score += -1 * (120 - (lvl - 1) * 3)
        lvl += 1
        if (2 <= lvl) {
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(18, 18)
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(18, 30)
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(18, 42)
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(18, 54)
        }
        if (3 <= lvl) {
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(18, 66)
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(18, 78)
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(18, 90)
        }
        if (4 <= lvl) {
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(42, 30)
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(42, 42)
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(42, 54)
        }
        if (5 <= lvl) {
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(42, 66)
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(42, 78)
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(42, 90)
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(42, 102)
            sprites.destroyAllSpritesOfKind(SpriteKind.FoodI)
        }
        if (6 <= lvl) {
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(66, 18)
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(66, 30)
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(66, 42)
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(66, 54)
        }
        if (7 <= lvl) {
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(66, 66)
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(66, 78)
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(66, 90)
        }
        if (8 <= lvl) {
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(90, 30)
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(90, 42)
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(90, 54)
        }
        if (9 <= lvl) {
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(90, 66)
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(90, 78)
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(90, 90)
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(90, 102)
        }
        if (10 <= lvl) {
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(114, 18)
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(114, 30)
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(114, 42)
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(114, 54)
            sprites.destroyAllSpritesOfKind(SpriteKind.Food)
            Blueberry = sprites.create(assets.image`Blueberry`, SpriteKind.FoodII)
            animation.runImageAnimation(
            Blueberry,
            [img`
                . . f f f . . 
                . f e 8 8 f . 
                f e 9 e 8 8 f 
                f 8 e 8 8 8 f 
                f 8 8 8 8 8 f 
                . f 8 8 8 f . 
                . . f f f . . 
                `,img`
                . . . . . . . 
                . . e 8 8 . . 
                . e 9 e 8 8 . 
                . 8 e 8 8 8 . 
                . 8 8 8 8 8 . 
                . . 8 8 8 . . 
                . . . . . . . 
                `],
            200,
            true
            )
        }
        if (11 <= lvl) {
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(114, 66)
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(114, 78)
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(114, 90)
        }
        if (12 <= lvl) {
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(138, 30)
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(138, 42)
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(138, 54)
        }
        if (13 <= lvl) {
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(138, 66)
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(138, 78)
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(138, 90)
            Seinä = sprites.create(assets.image`Seinä`, SpriteKind.Wall)
            Seinä.setPosition(138, 102)
        }
        if (14 == lvl) {
            music.play(music.stringPlayable("C C D D E E F F ", 240), music.PlaybackMode.UntilDone)
            music.play(music.stringPlayable("G G A A B B C5 C5 ", 240), music.PlaybackMode.UntilDone)
            game.setGameOverEffect(true, effects.confetti)
            game.gameOver(true)
        }
    }
})
