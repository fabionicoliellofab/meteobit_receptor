radio.onReceivedValue(function (name, value) {
    if (name == "Presion") {
        OLED.writeStringNewLine("Presion")
        OLED.writeNumNewLine(value)
        datalogger.log(datalogger.createCV("Presion", value))
    } else {
        if (name == "Humedad") {
            OLED.writeStringNewLine("Humedad")
            OLED.writeNumNewLine(value)
            datalogger.log(datalogger.createCV("Humedad", value))
        } else {
            if (name == "Temp") {
                OLED.writeStringNewLine("Temperatura")
                OLED.writeNumNewLine(value)
                datalogger.log(datalogger.createCV("Temp", value))
            } else {
                if (name == "velocidad") {
                    OLED.writeStringNewLine("velocidad")
                    OLED.writeNumNewLine(value)
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
