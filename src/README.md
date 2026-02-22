# La Casa Backend – Clean Architecture

Estructura del proyecto siguiendo **Clean Architecture** y **patrón Repository**.

## Capas

```
src/
├── domain/           # Núcleo: entidades y contratos (puertos)
├── application/      # Casos de uso y puertos de inyección
├── infrastructure/   # Implementaciones (repositorios, BD, APIs externas)
├── presentation/     # Controllers, DTOs, entrada/salida HTTP
├── modules/         # Módulos NestJS que ensamblan las capas
├── app.module.ts
└── main.ts
```

### Domain
- **Entidades**: Objetos de negocio (`BaseEntity`, entidades concretas).
- **Repositories (interfaces)**: Contratos del patrón Repository (`IBaseRepository<T>`, `IExampleRepository`). La capa de dominio **no** conoce infraestructura.

### Application (Use Cases)
- **Ports**: Tokens para inyección de dependencias (`EXAMPLE_REPOSITORY`).
- **Use cases**: Orquestan el flujo y dependen de los repositorios por interfaz.

### Infrastructure
- **Persistence / Repositories**: Implementaciones de los contratos del dominio (por ejemplo `ExampleRepository` in-memory). Aquí irán TypeORM, Prisma, etc.

### Presentation
- **Controllers**: Reciben HTTP y delegan en use cases.
- **DTOs**: Objetos de entrada/salida de la API.

### Modules
Cada feature tiene un módulo NestJS que:
1. Registra el **controller** (presentation).
2. Registra los **use cases** (application).
3. Provee la implementación del **repositorio** bajo el token del puerto (infrastructure).

## Cómo añadir un nuevo agregado

1. **Domain**: Crear entidad en `domain/entities` y interfaz en `domain/repositories`.
2. **Application**: Añadir token en `application/ports/tokens.ts` y use cases en `application/use-cases/<agregado>`.
3. **Infrastructure**: Implementar el repositorio en `infrastructure/persistence/repositories`.
4. **Presentation**: Crear DTOs y controller.
5. **Modules**: Crear `<Agregado>Module` que una controllers, use cases y `{ provide: TOKEN, useClass: RepoImpl }`.

## Ejemplo de flujo

```
GET /examples
  → ExampleController.list()
  → ListExamplesUseCase.execute()
  → IExampleRepository.findAll()  [inyectado: ExampleRepository]
  → ExampleResponseDto[]
```
