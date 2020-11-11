let level = 0
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
    level = randint(0, 255)
    basic.showNumber(level)
    if (input.lightLevel() < 50) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else if (false) {
    	
    } else {
    	
    }
})
