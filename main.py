@namespace
class SpriteKind:
    FoodI = SpriteKind.create()
    Häntä = SpriteKind.create()
    Wall = SpriteKind.create()
    FoodII = SpriteKind.create()
# näppäin komennot

def on_up_pressed():
    global X, Y
    X = 0
    if Y != -12:
        Y += -12
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

# Omena

def on_on_overlap(sprite, otherSprite):
    global final_score
    if Math.percent_chance(95):
        info.change_score_by(2)
        final_score += 2
    else:
        info.change_score_by(-2)
        final_score += -2
    Apple.set_position(randint(6, 150), randint(6, 114))
sprites.on_overlap(SpriteKind.enemy, SpriteKind.FoodI, on_on_overlap)

def on_on_overlap2(sprite2, otherSprite2):
    global Blueberry
    sprites.destroy(Blueberry, effects.spray, 200)
    music.play(music.melody_playable(music.big_crash),
        music.PlaybackMode.UNTIL_DONE)
    animation.run_image_animation(Bomb,
        assets.animation("""
            Explosion
            """),
        200,
        False)
    Bomb.set_velocity(0, 0)
    Bomb.set_image(assets.image("""
        Sirpaleet
        """))
    pause(100)
    sprites.destroy(Bomb, effects.fire, 200)
    pause(5000)
    Blueberry = sprites.create(assets.image("""
        Blueberry
        """), SpriteKind.FoodII)
    Blueberry.set_position(randint(6, 150), randint(6, 114))
sprites.on_overlap(SpriteKind.projectile, SpriteKind.FoodII, on_on_overlap2)

def on_on_overlap3(sprite3, otherSprite3):
    global Babana
    sprites.destroy(Babana, effects.spray, 200)
    music.play(music.melody_playable(music.big_crash),
        music.PlaybackMode.UNTIL_DONE)
    animation.run_image_animation(Bomb,
        assets.animation("""
            Explosion
            """),
        200,
        False)
    Bomb.set_velocity(0, 0)
    Bomb.set_image(assets.image("""
        Sirpaleet
        """))
    pause(100)
    sprites.destroy(Bomb, effects.fire, 200)
    pause(5000)
    Babana = sprites.create(assets.image("""
        Banana
        """), SpriteKind.food)
    Babana.set_position(randint(6, 150), randint(6, 114))
sprites.on_overlap(SpriteKind.projectile, SpriteKind.food, on_on_overlap3)

# banaani

def on_on_overlap4(sprite4, otherSprite4):
    global final_score
    info.change_score_by(1)
    final_score += 1
    Blueberry.set_position(randint(6, 150), randint(6, 114))
sprites.on_overlap(SpriteKind.player, SpriteKind.FoodII, on_on_overlap4)

def on_on_overlap5(sprite5, otherSprite5):
    global Blueberry
    Blueberry = sprites.create(assets.image("""
        Blueberry
        """), SpriteKind.FoodII)
    Blueberry.set_position(randint(6, 150), randint(6, 114))
sprites.on_overlap(SpriteKind.Wall, SpriteKind.FoodII, on_on_overlap5)

def on_left_pressed():
    global Y, X
    Y = 0
    if X != -12:
        X += -12
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

# Omena

def on_on_overlap6(sprite6, otherSprite6):
    global final_score
    if Math.percent_chance(5):
        Bomb.set_velocity(0, 0)
        info.change_score_by(20)
        final_score += 20
    else:
        Bomb.set_velocity(0, 0)
        info.change_score_by(-5)
        final_score += -5
        music.play(music.melody_playable(music.big_crash),
            music.PlaybackMode.UNTIL_DONE)
        animation.run_image_animation(Bomb,
            assets.animation("""
                Explosion
                """),
            200,
            False)
        Bomb.set_image(assets.image("""
            Sirpaleet
            """))
        pause(100)
    sprites.destroy(Bomb, effects.fire, 200)
sprites.on_overlap(SpriteKind.enemy, SpriteKind.projectile, on_on_overlap6)

# Omena

def on_on_overlap7(sprite7, otherSprite7):
    global final_score
    if Math.percent_chance(5):
        Bomb.set_velocity(0, 0)
        info.change_score_by(20)
        final_score += 20
    else:
        Bomb.set_velocity(0, 0)
        music.play(music.melody_playable(music.big_crash),
            music.PlaybackMode.UNTIL_DONE)
        animation.run_image_animation(Bomb,
            assets.animation("""
                Explosion
                """),
            200,
            False)
        info.change_score_by(-5)
        final_score += -5
        info.change_life_by(-1)
    sprites.destroy(Bomb, effects.fire, 200)
sprites.on_overlap(SpriteKind.Häntä, SpriteKind.projectile, on_on_overlap7)

# banaani

def on_on_overlap8(sprite8, otherSprite8):
    global final_score
    info.change_score_by(1)
    final_score += 1
    Babana.set_position(randint(6, 150), randint(6, 114))
sprites.on_overlap(SpriteKind.enemy, SpriteKind.food, on_on_overlap8)

def on_on_overlap9(sprite9, otherSprite9):
    if not (final_score >= 120):
        info.change_life_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.Wall, on_on_overlap9)

def on_b_repeated():
    global final_score
    if controller.A.is_pressed():
        final_score += 1
controller.B.on_event(ControllerButtonEvent.REPEATED, on_b_repeated)

def on_right_pressed():
    global Y, X
    Y = 0
    if X != 12:
        X += 12
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

# Omena

def on_on_overlap10(sprite10, otherSprite10):
    global final_score
    if Math.percent_chance(5):
        Bomb.set_velocity(0, 0)
        info.change_score_by(20)
        final_score += 20
    else:
        Bomb.set_velocity(0, 0)
        music.play(music.melody_playable(music.big_crash),
            music.PlaybackMode.UNTIL_DONE)
        animation.run_image_animation(Bomb,
            assets.animation("""
                Explosion
                """),
            200,
            False)
        info.change_score_by(-5)
        final_score += -5
        info.change_life_by(-1)
    sprites.destroy(Bomb, effects.fire, 200)
sprites.on_overlap(SpriteKind.player, SpriteKind.projectile, on_on_overlap10)

def on_down_pressed():
    global X, Y
    X = 0
    if Y != 12:
        Y += 12
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

# kuolema

def on_life_zero():
    sprites.destroy_all_sprites_of_kind(SpriteKind.enemy)
    music.stop_all_sounds()
    music.play(music.melody_playable(music.wawawawaa),
        music.PlaybackMode.IN_BACKGROUND)
    game.game_over(False)
info.on_life_zero(on_life_zero)

# banaani

def on_on_overlap11(sprite11, otherSprite11):
    global final_score
    info.change_score_by(1)
    final_score += 1
    Babana.set_position(randint(6, 150), randint(6, 114))
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap11)

# banaani

def on_on_overlap12(sprite12, otherSprite12):
    global final_score
    info.change_score_by(1)
    final_score += 1
    Blueberry.set_position(randint(6, 150), randint(6, 114))
sprites.on_overlap(SpriteKind.enemy, SpriteKind.FoodII, on_on_overlap12)

# Omena

def on_on_overlap13(sprite13, otherSprite13):
    global final_score
    if Math.percent_chance(95):
        info.change_score_by(2)
        final_score += 2
    else:
        info.change_score_by(-2)
        final_score += -2
    Apple.set_position(randint(6, 150), randint(6, 114))
sprites.on_overlap(SpriteKind.player, SpriteKind.FoodI, on_on_overlap13)

def on_on_overlap14(sprite14, otherSprite14):
    global Apple
    sprites.destroy(Apple, effects.spray, 200)
    music.play(music.melody_playable(music.big_crash),
        music.PlaybackMode.UNTIL_DONE)
    animation.run_image_animation(Bomb,
        assets.animation("""
            Explosion
            """),
        200,
        False)
    Bomb.set_velocity(0, 0)
    Bomb.set_image(assets.image("""
        Sirpaleet
        """))
    pause(100)
    sprites.destroy(Bomb, effects.fire, 200)
    pause(5000)
    Apple = sprites.create(assets.image("""
        Omena
        """), SpriteKind.FoodI)
    Apple.set_position(randint(6, 150), randint(6, 114))
sprites.on_overlap(SpriteKind.projectile, SpriteKind.FoodI, on_on_overlap14)

def on_on_overlap15(sprite15, otherSprite15):
    info.change_life_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap15)

Seinä: Sprite = None
hännänjatko: Sprite = None
Bomb: Sprite = None
Blueberry: Sprite = None
Y = 0
X = 0
Apple: Sprite = None
Babana: Sprite = None
final_score = 0
final_score = 0
lvl = 1
info.set_life(1)
scene.set_background_image(assets.image("""
    Tausta_2
    """))
game.show_long_text("Jos syöt banaanin saat 1 pisteen. Syömällä omenan saat 2 pistettä tai 5% mahdollisuudella menetät 2 pistettä. Jos osut pommiin menetät 5 pitettä, mutta jos se ei räjähdä saat 20 pistettä, ja jos törmäät siihen kuolet niinkuin myös seinään törmäämiseen.",
    DialogLayout.FULL)
info.set_score(0)
Babana = sprites.create(assets.image("""
    Banana
    """), SpriteKind.food)
Apple = sprites.create(assets.image("""
    Omena
    """), SpriteKind.FoodI)
PlayerPlayer = sprites.create(assets.image("""
    MadonPää
    """), SpriteKind.player)
häntä = sprites.create(assets.image("""
    Häntä
    """), SpriteKind.Häntä)
PlayerY = 6
PlayerX = 6
X = 0
Y = 12
Babana.set_position(randint(6, 150), randint(6, 114))
Apple.set_position(randint(6, 150), randint(6, 114))
music.play(music.create_song(assets.song("""
        Lyönnit
        """)),
    music.PlaybackMode.LOOPING_IN_BACKGROUND)

def on_forever():
    global Bomb
    pause(randint(500, 60000))
    if info.life() != 0:
        Bomb = sprites.create_projectile_from_side(assets.image("""
            Bombn
            """), 0, 20)
        Bomb.set_position(randint(6, 150), Bomb.y)
        pause(5555)
forever(on_forever)

# liikutetaan pelaajaa

def on_forever2():
    global PlayerX, PlayerY, hännänjatko
    pause(500)
    häntä.set_position(PlayerX, PlayerY)
    PlayerX += X
    PlayerY += Y
    PlayerPlayer.set_position(PlayerX, PlayerY)
    if not (final_score >= 120):
        if PlayerX < 6 or PlayerY < 6 or (PlayerX > 150 or PlayerY > 114):
            info.change_life_by(-1)
    if final_score >= 2:
        hännänjatko = sprites.create(assets.image("""
            Häntä
            """), SpriteKind.enemy)
        hännänjatko.set_position(häntä.x, häntä.y)
        hännänjatko.lifespan = final_score * 500
forever(on_forever2)

# elämän menetys

def on_forever3():
    
    def on_pause_until():
        pass
    pause_until(on_pause_until)
    
    if X == 0 and Y == 0:
        info.change_life_by(-1)
forever(on_forever3)

def on_forever4():
    global PlayerX, PlayerY, X, Y, final_score, lvl, Seinä, Blueberry
    if final_score >= 120 - (lvl - 1) * 3:
        game.show_long_text("Läpäisit tason" + str(lvl), DialogLayout.BOTTOM)
        music.play(music.melody_playable(music.ba_ding),
            music.PlaybackMode.UNTIL_DONE)
        if lvl != 13:
            game.show_long_text("Taso" + str((lvl + 1)), DialogLayout.CENTER)
        PlayerX = 6
        PlayerY = 6
        X = 0
        Y = 12
        sprites.destroy_all_sprites_of_kind(SpriteKind.enemy)
        sprites.destroy_all_sprites_of_kind(SpriteKind.Wall)
        häntä.set_position(6, 6)
        final_score += -1 * (120 - (lvl - 1) * 3)
        lvl += 1
        if 2 <= lvl:
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(18, 18)
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(18, 30)
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(18, 42)
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(18, 54)
        if 3 <= lvl:
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(18, 66)
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(18, 78)
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(18, 90)
        if 4 <= lvl:
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(42, 30)
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(42, 42)
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(42, 54)
        if 5 <= lvl:
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(42, 66)
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(42, 78)
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(42, 90)
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(42, 102)
            sprites.destroy_all_sprites_of_kind(SpriteKind.FoodI)
        if 6 <= lvl:
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(66, 18)
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(66, 30)
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(66, 42)
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(66, 54)
        if 7 <= lvl:
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(66, 66)
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(66, 78)
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(66, 90)
        if 8 <= lvl:
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(90, 30)
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(90, 42)
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(90, 54)
        if 9 <= lvl:
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(90, 66)
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(90, 78)
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(90, 90)
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(90, 102)
        if 10 <= lvl:
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(114, 18)
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(114, 30)
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(114, 42)
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(114, 54)
            sprites.destroy_all_sprites_of_kind(SpriteKind.food)
            Blueberry = sprites.create(assets.image("""
                Blueberry
                """), SpriteKind.FoodII)
            animation.run_image_animation(Blueberry,
                [img("""
                        . . f f f . .
                        . f e 8 8 f .
                        f e 9 e 8 8 f
                        f 8 e 8 8 8 f
                        f 8 8 8 8 8 f
                        . f 8 8 8 f .
                        . . f f f . .
                        """),
                    img("""
                        . . . . . . .
                        . . e 8 8 . .
                        . e 9 e 8 8 .
                        . 8 e 8 8 8 .
                        . 8 8 8 8 8 .
                        . . 8 8 8 . .
                        . . . . . . .
                        """)],
                200,
                True)
        if 11 <= lvl:
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(114, 66)
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(114, 78)
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(114, 90)
        if 12 <= lvl:
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(138, 30)
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(138, 42)
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(138, 54)
        if 13 <= lvl:
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(138, 66)
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(138, 78)
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(138, 90)
            Seinä = sprites.create(assets.image("""
                Seinä
                """), SpriteKind.Wall)
            Seinä.set_position(138, 102)
        if 14 == lvl:
            music.play(music.string_playable("C C D D E E F F ", 240),
                music.PlaybackMode.UNTIL_DONE)
            music.play(music.string_playable("G G A A B B C5 C5 ", 240),
                music.PlaybackMode.UNTIL_DONE)
            game.set_game_over_effect(True, effects.confetti)
            game.game_over(True)
forever(on_forever4)
