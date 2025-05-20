## README.md Completo

```markdown
# Aplicación Ionic con Autenticación

![Logo de la Aplicación](assets/images/logo.png)

Aplicación móvil desarrollada con Ionic 7 y Angular que implementa un sistema de autenticación con guardias de ruta.

## 🚀 Características principales

- Autenticación basada en token JWT simulado
- Navegación híbrida (Angular Router + Ionic NavController)
- Módulos lazy-loading para mejor performance
- Animaciones entre transiciones
- Protección de rutas con AuthGuard

## 🛠 Estructura del Proyecto

```
src/
├── app/
│   ├── auth/
│   │   ├── login/
│   │   ├── register/
│   │   └── auth.guard.ts
│   ├── tabs/
│   │   ├── home/
│   │   ├── profile/
│   │   └── settings/
│   └── shared/
│       ├── components/
│       └── services/
├── assets/
└── environments/
```

## 🔐 Sistema de Autenticación

### AuthGuard Implementation

El guardián de ruta verifica la presencia del token en `localStorage`:

```typescript
canActivate(): boolean {
  const token = localStorage.getItem('token');
  if (!token) {
    this.navCtrl.navigateRoot('/auth');
    return false;
  }
  return true;
}
```

### Flujo de autenticación

1. Usuario ingresa credenciales
2. Servicio simula login exitoso:
   ```typescript
   login() {
     localStorage.setItem('token', 'fake-jwt-token');
     this.navCtrl.navigateRoot('/tabs');
   }
   ```
3. Rutas protegidas verifican token

## 🧪 Testing

Pruebas unitarias implementadas:

```typescript
describe('AuthGuard', () => {
  let guard: AuthGuard;
  let routerSpy: jasmine.SpyObj<Router>;
  let navCtrlSpy: jasmine.SpyObj<NavController>;

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    navCtrlSpy = jasmine.createSpyObj('NavController', ['navigateRoot']);
    guard = new AuthGuard(routerSpy, navCtrlSpy);
  });

  it('should allow access when token exists', () => {
    localStorage.setItem('token', 'test-token');
    expect(guard.canActivate()).toBeTrue();
  });

  it('should redirect to auth when no token', () => {
    localStorage.removeItem('token');
    expect(guard.canActivate()).toBeFalse();
    expect(navCtrlSpy.navigateRoot).toHaveBeenCalledWith('/auth');
  });
});
```

## 🚦 Cómo Usar

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Ejecutar en desarrollo:
   ```bash
   ionic serve
   ```

3. Generar build de producción:
   ```bash
   ionic build --prod
   ```

4. Ejecutar pruebas:
   ```bash
   npm test
   ```

## 🤖 Tecnologías Utilizadas

- Ionic 7
- Angular 16+
- TypeScript 5+
- RxJS
- Jasmine/Karma (Testing)

## 📌 Decisiones Técnicas

1. **Navegación Híbrida**:
   - Combina `Angular Router` para lógica de navegación
   - Usa `NavController` para transiciones nativas

2. **Gestión de Estado**:
   - `localStorage` para simular autenticación
   - Patrón de servicios reactivos

3. **Performance**:
   - Módulos lazy-loading
   - Componentes standalone

4. **Seguridad**:
   - Guardias de ruta
   - Protección de rutas sensibles