// Incluye la biblioteca PulseSensorPlayground
#include <PulseSensorPlayground.h>

// Define las constantes y variables
const int PulseWire = 0;  // El cable PURPLE del PulseSensor está conectado al PIN ANALÓGICO 0
const int buzzer = 13;     // Define el pin al que está conectado el zumbador
int Threshold = 550;      // Determina qué señal "contar como latido" e ignorar el resto

// Crea una instancia del objeto PulseSensorPlayground llamado "pulseSensor"
PulseSensorPlayground pulseSensor;


void setup() {
  Serial.begin(115200);  // Inicializa la comunicación serial con el monitor serial a 115200 baudios

  // Configura el objeto pulseSensor asignándole nuestras variables
  pulseSensor.analogInput(PulseWire);
  pulseSensor.outputBeat(buzzer);
  pulseSensor.setThreshold(Threshold);
  pulseSensor.begin();  // Inicializa pulseSensor
}

void loop() {
  if (pulseSensor.sawStartOfBeat()) {                          // Comprueba constantemente si "ocurrió un latido"
    int myBPM = pulseSensor.getBeatsPerMinute();               // Llama a una función en nuestro objeto pulseSensor que devuelve el BPM como un "int".
                                                               // "myBPM" ahora contiene este valor BPM.
    Serial.println("♥  Se produjo un latido del corazón ! ");  // Si la prueba es "verdadera", imprime un mensaje "ocurrió un latido del corazón".
    Serial.print("BPM: ");                                     // Imprime la frase "BPM: "
    Serial.println(myBPM);                                     // Imprime el valor dentro de myBPM.
    pulseSensor.outputBeat();
    tone(buzzer, 932);
  }
  if(pulseSensor.isInsideBeat() == false){
    noTone(buzzer);
  }
  delay(20);
}
