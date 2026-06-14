---
lang: "es"
routeSlug: "solarweb"
title: "SolarWeb: gestión remota de datos de radiación"
description: "Plataforma web desarrollada para visualizar, administrar y exportar datos de sensores de radiación de forma remota, resolviendo desafíos de almacenamiento y rendimiento en un entorno académico real."
image: "./solarweb-preview.png"
startDate: "2025-08-01"
endDate: "2025-12-18"
skills: ["Angular", "TypeScript", "FastAPI", "PostgreSQL", "InfluxDB", "MinIO", "Docker", "ZeroTier", "Linux"]
demoLink: "https://solarweb.lat"
---

## Resumen del proyecto

Este proyecto fue desarrollado para un **profesor de Ingeniería Mecánica** con el objetivo de resolver un problema real relacionado con el **acceso remoto y la gestión de datos de sensores de radiación**.

El sistema recopilaba datos de **radiación global, directa y difusa**, además de **mediciones de humedad e imágenes de alta frecuencia cada 5 segundos**. Inicialmente, toda la información se almacenaba de forma local en el computador personal del profesor y solo era posible acceder mediante interacción manual en el lugar.

El objetivo fue diseñar e implementar una **solución web** que permitiera **visualizar, explorar y exportar datos de forma remota**, abordando al mismo tiempo restricciones críticas de **almacenamiento y rendimiento**.

---

## Problema y desafíos

### Acceso a los datos
- Los datos de sensores e imágenes estaban almacenados localmente en un computador personal
- No existía acceso remoto ni visualización web
- La exportación de datos requería intervención manual

### Restricciones de almacenamiento
- La captura frecuente de imágenes saturaba rápidamente el disco
- El tamaño de las imágenes hacía inviable el almacenamiento a largo plazo sin optimización

### Problemas de rendimiento
- Renderizar grandes volúmenes de datos e imágenes de alta resolución provocaba tiempos de carga lentos
- La visualización web requería optimización para ser usable

### Limitaciones de infraestructura
- Por el volumen de datos, hospedar todo en un VPS o hosting compartido no era viable
- El sistema debía operar con **almacenamiento local** y aun así permitir acceso remoto

---

## Solución y arquitectura

Se diseñó una **arquitectura híbrida**:

- La **adquisición y almacenamiento de datos** se mantuvo en el equipo local del profesor
- La **aplicación web** fue desplegada en un **VPS basado en Linux**
- Se creó una red virtual segura con **ZeroTier** para conectar el VPS con la máquina local

Este enfoque permitió acceso remoto sin migrar grandes volúmenes de datos a servicios externos.

---

## Funcionalidades clave

### Visualización remota
- Dashboards web para radiación, humedad y series temporales
- Consultas optimizadas para grandes volúmenes de datos
- Carga granular de imágenes para mejorar rendimiento

### Exportación de datos
- Exportación de rangos seleccionados de datos de sensores
- Manejo eficiente de recuperación y descarga de información

### Optimización de rendimiento
- **Compresión de imágenes sin pérdida** para reducir uso de almacenamiento
- Granularidad de imágenes para mejorar tiempos de carga en la interfaz
- Consultas backend optimizadas para grandes volúmenes de datos

---

## Arquitectura técnica

### Frontend
- **Angular** con **TypeScript**
- HTML y SCSS
- Visualización de datos optimizada para datasets grandes

### Backend
- **FastAPI (Python)** para desarrollo de API
- **PostgreSQL** para datos estructurados
- **InfluxDB** para series temporales
- **MinIO** para almacenamiento de objetos e imágenes
- **Docker** para configuración y despliegue de servicios

### Redes y despliegue
- **VPS Linux** para despliegue web
- **ZeroTier** para conectividad segura entre VPS y máquina local
- Arquitectura híbrida local + remota

## Despliegue e infraestructura

Además del desarrollo, fui responsable del **despliegue y configuración de infraestructura** de la plataforma.

- Gestioné la **compra y configuración del dominio (solarweb.lat)**
- Seleccioné y configuré un **VPS basado en Linux** para producción
- Desplegué la aplicación web y servicios backend en el VPS
- Aseguré la conectividad entre el VPS y el servidor local mediante **ZeroTier**
- Configuré el sistema para operar de forma confiable en un entorno **híbrido local + nube**

---

## Resultado e impacto

La solución final entregó al profesor una plataforma **confiable y accesible de forma remota** para monitorear datos de radiación, visualizar tendencias históricas y exportar datasets de manera eficiente.

Este proyecto fortaleció mi experiencia en:
- Diseño de **arquitecturas reales de sistemas**
- Manejo de **grandes volúmenes de datos y cuellos de botella de rendimiento**
- Despliegue y conexión de servicios en **entornos distribuidos**
- Construcción de **aplicaciones full-stack orientadas a producción**
