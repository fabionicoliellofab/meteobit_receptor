radio.onReceivedValue(function (name, value) {
    OLED.drawFilledCircle(84, 32, 10)
    if (name == "Presion") {
        OLED.writeString("Presion")
        OLED.writeNum(value)
        datalogger.log(datalogger.createCV("Presion", value))
    } else {
        if (name == "Humedad") {
            OLED.writeString("Humedad")
            OLED.writeNum(value)
            datalogger.log(datalogger.createCV("Humedad", value))
        } else {
            if (name == "Temp") {
                OLED.writeString("Temperatura")
                OLED.writeNum(value)
                datalogger.log(datalogger.createCV("Temp", value))
            } else {
                if (name == "velocidad") {
                    OLED.writeString("velocidad")
                    OLED.writeNum(value)
                    datalogger.log(datalogger.createCV("velocidad", value))
                }
            }
        }
    }
})
radio.setGroup(1)
radio.setTransmitPower(7)
OLED.init(128, 64)
OLED.clear()
datalogger.setColumnTitles(
"Presion",
"Humedad",
"Temp",
"velocidad"
)
