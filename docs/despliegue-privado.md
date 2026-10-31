# Alternativa: despliegue privado

**Estado:** aparcada a fecha de 31/10/2026. No hay nada cambiado: la app sigue en GitHub Pages y el repositorio sigue siendo público.

**Objetivo:** que solo pueda ver la app la cuenta de Google del usuario.

## Opción elegida: Cloud Run con IAP

IAP pide iniciar sesión y solo deja pasar a las cuentas autorizadas. `server.ts` ya sirve la web y `POST /api/consultation`, de modo que encaja casi sin cambios y la clave de Gemini puede quedarse en el servidor.

Se descarta Cloud Storage privado: `storage.cloud.google.com` está pensado para descargas autenticadas, no sirve `index.html` de forma automática y no se ha confirmado que cargue bien los módulos diferidos y el Web Worker.

## Pasos pendientes

1. Renovar las credenciales de `gcloud` en la cuenta personal, que estaban caducadas.
2. Elegir un proyecto personal con facturación activa, no uno de trabajo, porque es información de salud.
3. Crear el cliente OAuth en la consola, con marca externa. Este paso no se puede automatizar con la línea de comandos.
4. Empaquetar y desplegar en Cloud Run, y activar IAP solo para esa cuenta.
5. Comprobar que la cuenta entra y que otra queda bloqueada. La documentación contempla usuarios externos y proyectos sin organización, pero no menciona Gmail expresamente.
6. Solo después, hacer privado el repositorio y desactivar GitHub Pages y `.github/workflows/deploy-pages.yml`.

Lo ya publicado puede seguir en cachés o copias de terceros.

## Referencia

- [IAP en Cloud Run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run)
- [Endpoints de Cloud Storage](https://docs.cloud.google.com/storage/docs/request-endpoints)
