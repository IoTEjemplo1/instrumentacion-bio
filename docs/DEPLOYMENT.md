# Guía de Despliegue (Deployment)

Este documento detalla el proceso completo para tomar el código base del repositorio y desplegarlo en un entorno de producción público utilizando **GitHub Pages**, que es la opción ideal (y gratuita) para aplicaciones 100% estáticas (Frontend Vanilla sin backend).

## 1. Requisitos Previos

- Tener acceso al repositorio del proyecto en GitHub.
- Permisos de administrador o de mantenedor en el repositorio (para configurar los ajustes de GitHub Pages).

## 2. Preparación de la Rama Principal

Todo despliegue se realizará desde la rama principal (`main`). Para actualizar la aplicación en producción, simplemente debes:

1. Clonar el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Realizar las modificaciones en el código local y guardar los cambios.
3. Subir los cambios a GitHub:
   ```bash
   git add .
   git commit -m "Descripción clara de la actualización"
   git push origin main
   ```

## 3. Configuración de GitHub Pages

Si es la primera vez que vas a desplegar el proyecto, debes habilitar GitHub Pages:

1. Ve a la página del repositorio en [GitHub](https://github.com).
2. Haz clic en la pestaña **Settings** (Configuración) ubicada en la parte superior derecha.
3. En el menú lateral izquierdo, haz clic en **Pages**.
4. En la sección **Build and deployment**:
   - En **Source**, selecciona `Deploy from a branch`.
   - En **Branch**, selecciona `main` y en la carpeta elige `/ (root)`.
5. Haz clic en **Save**.

En unos pocos minutos (usualmente 1 a 3 minutos), GitHub procesará el despliegue estático y te mostrará un recuadro verde en la parte superior indicando:
> *Your site is live at https://[usuario-o-organizacion].github.io/[nombre-repositorio]/*

## 4. GitHub Actions (Opcional)

Por defecto, GitHub Pages usa su propio pipeline interno básico. Si deseas un control más avanzado para el futuro, puedes configurar GitHub Actions.
Para este proyecto estático, el método estándar de GitHub Pages detallado en el paso 3 es suficiente, ya que no se requiere compilar dependencias en un entorno Node (`npm run build`).

## 5. Actualizaciones Futuras

Una vez configurado GitHub Pages, cada vez que hagas un nuevo `git push` hacia la rama `main`, la aplicación web **se actualizará de manera automática**.

**Proceso de actualización rápida:**
```bash
git add .
git commit -m "Agregado nuevo material del tercer corte"
git push
```
*(Espera un par de minutos y recarga la página pública).*

## 6. Manejo de URLs Privadas

El repositorio puede (y es recomendable que) sea **Privado**, esto no impedirá que GitHub Pages muestre la aplicación al mundo como pública de forma gratuita. Esto protegerá el código fuente de ser visible o clonado por estudiantes, pero permitirá que puedan usar la aplicación.
