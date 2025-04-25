def on_up_pressed():
    global X, Y
    X = 0
    if Y != -12:
        Y += -12
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_left_pressed():
    global Y, X
    Y = 0
    if X != -12:
        X += -12
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_right_pressed():
    global Y, X
    Y = 0
    if X != 12:
        X += 12
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_down_pressed():
    global X, Y
    X = 0
    if Y != 12:
        Y += 12
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_on_overlap(sprite, otherSprite):
    info.change_score_by(2)
    Apple.set_position(randint(6, 150), randint(6, 114))
sprites.on_overlap(SpriteKind.player, SpriteKind.player, on_on_overlap)

def on_life_zero():
    music.stop_all_sounds()
    music.play(music.melody_playable(music.wawawawaa),
        music.PlaybackMode.IN_BACKGROUND)
    game.game_over(False)
info.on_life_zero(on_life_zero)

def on_on_overlap2(sprite2, otherSprite2):
    info.change_score_by(1)
    Babana.set_position(randint(6, 150), randint(6, 114))
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap2)

Y = 0
X = 0
Apple: Sprite = None
Babana: Sprite = None
info.set_life(1)
scene.set_background_image(assets.image("""
    Tausta_1
    """))
info.set_score(0)
Babana = sprites.create(assets.image("""
    Banana
    """), SpriteKind.food)
Apple = sprites.create(assets.image("""
    Omena
    """), SpriteKind.player)
PlayerPlayer = sprites.create(assets.image("""
    MadonPää
    """), SpriteKind.player)
häntä = sprites.create(img("""
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . a 3 3 3 3 3 3 3 3 a . . .
        . . a 3 3 3 3 3 3 3 3 1 3 a . .
        . . 3 3 3 3 3 3 3 3 3 3 1 3 . .
        . . 3 3 3 3 3 3 3 3 3 3 3 3 . .
        . . 3 3 3 3 3 3 3 3 3 3 3 3 . .
        . . 3 3 3 3 3 3 3 3 3 3 3 3 . .
        . . 3 3 3 3 3 3 3 3 3 3 3 3 . .
        . . 3 3 3 3 3 3 3 3 3 3 3 3 . .
        . . 3 b 3 3 3 3 3 3 3 3 3 3 . .
        . . 3 b b 3 3 3 3 3 3 3 3 3 . .
        . . a 3 b b 3 3 3 3 3 3 3 a . .
        . . . a 3 3 3 3 3 3 3 3 a . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        """),
    SpriteKind.projectile)
PlayerY = 6
PlayerX = 6
X = 0
Y = 0
Babana.set_position(randint(6, 150), randint(6, 114))
Apple.set_position(randint(6, 150), randint(6, 114))

def on_forever():
    global PlayerX, PlayerY
    pause(499)
    häntä.set_position(PlayerX, PlayerY)
    pause(1)
    PlayerX += X
    PlayerY += Y
    if PlayerX < 6 or PlayerY < 6 or (PlayerX > 150 or PlayerY > 114):
        info.change_life_by(-1)
forever(on_forever)

def on_forever2():
    PlayerPlayer.set_position(PlayerX, PlayerY)
forever(on_forever2)

def on_forever3():
    
    def on_pause_until():
        pass
    pause_until(on_pause_until)
    
    if X == 0 and Y == 0:
        info.change_life_by(-1)
forever(on_forever3)
