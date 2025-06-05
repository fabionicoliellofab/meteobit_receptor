radio.onReceivedValue(function (name, value) {
    if (name == "presion") {
        OLED.writeStringNewLine("presion")
        OLED.writeNumNewLine(value)
        datalogger.log(datalogger.createCV("presion", value))
    } else {
        if (name == "humedad") {
            OLED.writeStringNewLine("humedad")
            OLED.writeNumNewLine(value)
            datalogger.log(datalogger.createCV("humedad", value))
        } else {
            if (name == "temperatura") {
                OLED.writeStringNewLine("temperatura")
                OLED.writeNumNewLine(value)
                datalogger.log(datalogger.createCV("temperatura", value))
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
OLED.init(128, 64)
OLED.clear()
datalogger.setColumnTitles(
"presion",
"humedad",
"temperatura",
"velocidad"
)
