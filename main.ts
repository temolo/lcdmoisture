lcd1602.setAddress(
lcd1602.I2C_ADDR.addr1
)
lcd1602.putString(
"HumTer",
3,
0
)
lcd1602.set_LCD_Show(lcd1602.visibled.visible)
lcd1602.set_backlight(lcd1602.on_off.on)
basic.forever(function () {
    lcd1602.putNumber(
    pins.analogReadPin(AnalogPin.P0),
    7,
    1
    )
    basic.pause(1000)
})
