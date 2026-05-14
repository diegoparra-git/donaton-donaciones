# Donatón - Microservicio de Donaciones

## Descripción del Proyecto
Este repositorio contiene el **Microservicio de Donaciones**, un componente del backend desarrollado para la Evaluación Parcial N°2 de la asignatura Desarrollo Fullstack III. Este servicio tiene la responsabilidad exclusiva de gestionar, registrar y procesar las donaciones (tanto monetarias como de insumos) que ingresan a la fundación Donatón.

##  Arquitectura y Patrones de Diseño

El diseño de este microservicio implementa estándares de la industria para asegurar su mantenibilidad y escalabilidad, cumpliendo con los requerimientos de la evaluación:

* **Arquitectura de Microservicios:** Este servicio opera de manera completamente autónoma. Tiene su propio ciclo de vida, su propio servidor de Express y su propia base de datos, lo que garantiza que un fallo en otro módulo no afectará la recepción de donaciones.
* **Patrón Repositorio (Repository Pattern):** Se implementó una capa de abstracción (`repositories/donacionesRepository.js`) entre los Controladores y el ORM (Sequelize). **¿Cómo resuelve problemas esto?** Permite que la lógica de negocio se mantenga limpia y facilita la inyección de dependencias para realizar pruebas unitarias sin tocar la base de datos real.
* **Adaptación de Arquetipos:** Cumpliendo con el requerimiento de estructurar el proyecto, este servicio adapta la filosofía de los arquetipos Maven (separación de responsabilidades, gestión centralizada de dependencias) al entorno moderno de **Node.js y NPM**.

##  Stack Tecnológico
* **Runtime:** Node.js
* **Framework:** Express.js
* **Base de Datos:** PostgreSQL (Neon Serverless Postgres)
* **ORM:** Sequelize
* **Seguridad:** Helmet, CORS
* **Testing:** Jest, Supertest

## Rutas del Microservicio (API Interna)
| Método | Ruta | Descripción |
| :--- | :--- | :--- |
| **GET** | `/` | Obtiene el listado histórico de todas las donaciones. |
| **POST** | `/` | Registra un nuevo aporte (monetario o insumo) en la BD. |

##  Instalación y Uso

1. **Clonar el repositorio:**
   Este componente se versiona de manera independiente siguiendo la estrategia de Branching exigida.
   ```bash
   git clone https://github.com/diegoparra-git/donaton-donaciones.git
   cd donaton-donaciones
   
## **Configuración de entorno**

2. **Crear un archivo .env**
  Se utiliza un archivo .env para poder manejar variables del entorno como puerto, rutas de microservicios o secreto de JWT.
    ```bash
    PORT = 3001
    DB_URL = Url de conexión de la BD

## **Instalar dependencias y correr la API**

3. **Gestor de dependencias de Node.js**
   Para que todo funcione se necesita instalar el gestor de dependencias de Node.js npm y arrancar la api para que empiece a recibir peticiones.
    ```bash
    npm install
    npm run dev

## Repositorios relacionados
- [Frontend de Donaton](https://github.com/diegoparra-git/Proyecto-Donaton-Front)
- [Api Gateway de Donaton](https://github.com/DamagedGhost/donaton-api)
- [Microservicio de Logistica](https://github.com/StevenQR21/donaton-logistica)
- [Microservicio de Terreno](https://github.com/DamagedGhost/donaton-terreno)
