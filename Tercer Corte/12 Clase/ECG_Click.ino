// @file ECG_Click.ino
// @description Adquisición y muestreo analógico de biopotenciales cardíacos con tarjeta ECG Click
// @hardware Arduino Uno / Nano / ESP32 + MikroElektronika ECG Click (MikroBUS)

const int analogInPin = A0;  // Pin analógico conectado a la salida analógica de ECG Click
int sensorValue = 0;        // Variable para almacenar la lectura ADC del sensor

void setup() {
  // Inicialización del puerto serie a 9600 baudios (compatible con Serial Plotter de Arduino IDE)
  Serial.begin(9600);
}

void loop() {
  // Lectura del biopotencial cardíaco acondicionado (rango 0 a 1023 en ADC de 10 bits)
  sensorValue = analogRead(analogInPin);
  
  // Envío del valor al monitor/plotter serial
  Serial.println(sensorValue);
  
  // Período de muestreo (~30 ms para aprox. 33 Hz de tasa de refresco)
  delay(30);
}
