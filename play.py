from time import sleep
from pygame import mixer

mixer.init()
mixer.music.load('/var/www/html/ringer/sound.wav')
mixer.music.play()
sleep(1.5)
