---
lang: "en"
routeSlug: "solarweb"
title: "SolarWeb: Remote Radiation Data Management"
description: "Web platform developed to remotely visualize, manage, and export radiation sensor data, solving storage and performance challenges in a real academic environment."
image: "./solarweb-preview.png"
startDate: "2025-08-01"
endDate: "2025-12-18"
skills: ["Angular", "TypeScript", "FastAPI", "PostgreSQL", "InfluxDB", "MinIO", "Docker", "ZeroTier", "Linux"]
demoLink: "https://solarweb.lat"
---

## Project Overview

This project was developed for a **Mechanical Engineering professor** to solve a real-world problem related to **remote access and management of radiation sensor data**.

The system collected **global, direct, and diffuse radiation data**, along with **humidity measurements and high-frequency images (every 5 seconds)**. Initially, all data was stored locally on the professor’s personal computer, and access was only possible through **manual, on-site interaction**.

The goal was to design and implement a **web-based solution** that allowed **remote visualization, exploration, and data export**, while addressing critical **storage and performance constraints**.

---

## Problem & Challenges

### Data Accessibility
- Sensor data and images were stored locally on a personal computer
- No remote access or visualization was available
- Data export required manual intervention

### Storage Constraints
- High-frequency image capture caused rapid disk saturation
- Large image sizes made long-term storage unsustainable

### Performance Issues
- Rendering large datasets and high-resolution images caused slow load times
- Web visualization was inefficient without optimization

### Infrastructure Limitations
- Due to the volume of data, hosting everything on a VPS or shared hosting was not viable
- The system needed to operate with **local storage** while still being remotely accessible

---

## Solution & Architecture

A **hybrid architecture** was designed:

- **Data storage and acquisition** remained on the professor’s local machine
- The **web application** was deployed on a **Linux-based VPS**
- A secure virtual network was created using **ZeroTier** to connect the VPS with the local machine

This approach allowed remote access without migrating large datasets to external hosting services.

---

## Key Features

### Remote Data Visualization
- Web dashboards for radiation, humidity, and time-series data
- Optimized data queries for large datasets
- Granular image loading to improve performance

### Data Export
- Ability to export selected ranges of sensor data
- Support for efficient data handling and retrieval

### Performance Optimization
- **Lossless image compression** to reduce storage usage
- Image granularity to improve loading times in the web interface
- Optimized backend queries for large volumes of data

---

## Technical Architecture

### Frontend
- **Angular** with **TypeScript**
- HTML & SCSS
- Data visualization optimized for large datasets

### Backend
- **FastAPI (Python)** for API development
- **PostgreSQL** for structured data
- **InfluxDB** for time-series sensor data
- **MinIO** for object storage (images)
- **Docker** for service configuration and deployment

### Networking & Deployment
- **Linux VPS** for web deployment
- **ZeroTier** for secure connectivity between VPS and local machine
- Hybrid local + remote architecture

## Deployment & Infrastructure Management

In addition to development, I was responsible for the **deployment and infrastructure setup** of the platform.

- Managed the **purchase and configuration of the domain (solarweb.lat)**
- Selected and configured a **Linux-based VPS** for production deployment
- Deployed the web application and backend services to the VPS
- Ensured secure connectivity between the VPS and the local data server using **ZeroTier**
- Configured the system to operate reliably in a **hybrid local + cloud environment**

---

## Outcome & Impact

The final solution provided the professor with a **reliable, remote-accessible platform** to monitor radiation data, visualize historical trends, and export datasets efficiently.

This project strengthened my experience in:
- Designing **real-world system architectures**
- Handling **large datasets and performance bottlenecks**
- Deploying and connecting services across **distributed environments**
- Building **production-oriented full-stack applications**
