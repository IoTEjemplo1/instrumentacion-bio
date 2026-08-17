#include "HX711.h"

// Pines de conexión
#define DOUT  3
#define CLK   2

HX711 balanza;

float factor_calibracion = -7050.0; // valor aproximado, ajustar en calibración

void setup() {
  Serial.begin(9600);
  Serial.println("Lectura de celda de carga con HX711");

  balanza.begin(DOUT, CLK);
  balanza.set_scale(factor_calibracion);  // aplica factor inicial
  balanza.tare(); // pone la balanza a cero

  Serial.println("Balanza lista para medir...");
}

void loop() {
  Serial.print("Peso: ");
  Serial.print(balanza.get_units(10), 2); // promedio de 10 lecturas
  Serial.println(" g");

  delay(500);
}
