// Pines del sensor
const int trigPin = 9;
const int echoPin = 10;

// Variables
long duration;
float distance;

void setup() {
  Serial.begin(9600);          // Comunicación serial
  pinMode(trigPin, OUTPUT);    // TRIG como salida
  pinMode(echoPin, INPUT);     // ECHO como entrada
  Serial.println("Sensor ultrasónico listo...");
}

void loop() {
  // Generar un pulso ultrasónico
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  // Medir la duración del eco
  duration = pulseIn(echoPin, HIGH);

  // Calcular distancia en cm
  distance = (duration * 0.0343) / 2;

  // Mostrar en monitor serial
  Serial.print("Distancia: ");
  Serial.print(distance);
  Serial.println(" cm");

  delay(500);  // Esperar medio segundo
}
