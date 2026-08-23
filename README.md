# Campus Virtual: Instrumentación Biomédica

## Descripción
Plataforma académica interactiva de Bioinstrumentación para Ingeniería Biomédica de la Pontificia Universidad Javeriana. Este proyecto permite explorar laboratorios virtuales de ECG, EMG, EEG, banco de señales y TinyML de manera didáctica mediante una interfaz web.

## Características
- Single Page Application (SPA) 100% estática construida con HTML, CSS y Vanilla JavaScript.
- No requiere servidor backend, puede ejecutarse completamente desde el navegador.
- Incluye simuladores virtuales (Generadores de señales y osciloscopios interactivos).
- Diseño responsivo adaptado mediante Bootstrap 5.

## Arquitectura
```text
Usuario
   ↓
Frontend (GitHub Pages / Vercel)
   ↓
(Todo el contenido es renderizado en el cliente mediante JS Modules)
```

## Tecnologías utilizadas
- **Frontend**: HTML5, CSS3, JavaScript (ES6 Modules)
- **UI Framework**: Bootstrap 5
- **Despliegue**: GitHub Pages (Arquitectura Estática)

## Requisitos
- Un navegador moderno con soporte para ES6 Modules.
- (Opcional) Un servidor web local simple para desarrollo (ej. `Live Server` en VSCode o `python -m http.server`).

## Instalación
Al ser una aplicación 100% estática, no hay dependencias de Node.js ni bases de datos para instalar.
1. Clona el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Ve al directorio del proyecto:
   ```bash
   cd InstrumentacionB
   ```

## Configuración y Variables de Entorno
Actualmente la aplicación no requiere conexión a APIs externas privativas ni backend, por ende no utiliza un archivo `.env` para su funcionamiento en producción.
Sin embargo, se incluye un archivo `.env.example` para futuras integraciones.

## Ejecución local
Existen varias alternativas para ejecutar el proyecto en modo desarrollo:

**Opción 1: VSCode (Recomendado)**
- Abre el proyecto en Visual Studio Code.
- Instala la extensión `Live Server`.
- Haz clic derecho sobre `index.html` y selecciona `Open with Live Server`.

**Opción 2: Python**
```bash
python -m http.server 8000
```
Luego navega a `http://localhost:8000` en tu navegador.

## Deployment
El proyecto está optimizado para ser desplegado en servicios estáticos como GitHub Pages.
Para más información, consulta la [Documentación de Despliegue](docs/DEPLOYMENT.md).

## Estructura del Proyecto
- `index.html`: Punto de entrada de la aplicación.
- `js/`: Lógica de la aplicación, módulos JS, componentes UI y datos.
- `css/`: Hojas de estilo personalizadas.
- `Primer Corte/`, `Segundo Corte/`, `Tercer Corte/`: Activos de los cursos, imágenes y documentos en PDF.
- `docs/`: Documentación del proyecto.

## Solución de problemas
- **CORS Errors al cargar localmente:** Asegúrate de estar ejecutando la aplicación a través de un servidor HTTP local y no abriendo directamente el archivo `index.html` en el navegador (el esquema `file://` bloquea los ES Modules).

## Autor / Proyecto
Departamento de Ingeniería Biomédica - Pontificia Universidad Javeriana.
Mantenedor / Desarrollador: Pedro Antonio.
