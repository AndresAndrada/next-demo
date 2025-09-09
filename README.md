
# Tienda de Productos - Next.js

Este proyecto es una aplicación web de comercio electrónico desarrollada con **Next.js** que permite a los usuarios explorar una lista de productos, buscar productos, marcar productos como favoritos y ver un carrito de compras. Incluye un modal de bienvenida que se muestra solo en la primera visita del usuario, y soporta modo claro/oscuro y diseño responsivo.

## Características

-   **Lista de Productos**
-   **Búsqueda de Productos**
-   **Favoritos**
-   **Modal de Bienvenida**
-   **Modo Claro/Oscuro**
-   **Diseño Responsivo**
-   **Accesibilidad**

## Tecnologías Utilizadas

-   **Next.js**
-   **TypeScript**
-   **Zustand** `localStorage`.
-   **React Icons**
-   **CSS Modules**

## Estructura del Proyecto

```
Prueba tecnica/next-demo/
├── src/
│   ├── lib/
│   │   ├── articles.json        # Datos mockeados de productos
│   │   └── types.ts             # Definiciones de tipos (Product)
│   ├── store/
│   │   ├── useUiStore.ts        # Store para favoritos, tema y estado de visita
│   │   └── useProductStore.ts   # Store para productos
│   ├── module/
│   │   ├── components/
│   │   │   ├── products/
│   │   │   │   ├── productCard/
│   │   │   │   │   ├── ProductCard.tsx
│   │   │   │   │   └── ProductCard.module.css
│   │   │   │   ├── productList/
│   │   │   │   │   ├── ProductList.tsx
│   │   │   │   │   └── ProductList.module.css
│   │   │   │   ├── productNotFound/
│   │   │   │   │   └── ProductNotFound.tsx
│   │   │   │   └── hooks/
│   │   │   │       └── getProducts.ts
│   │   │   └── input/
│   │   │       └── searchBar/
│   │   │           └── SearchInpunt.tsx
│   │   └── ui/
│   │       └── welcomeComponente/
│   │           ├── WelcomeComponente.tsx
│   │           └── WelcomeComponente.module.css
├── package.json
└── README.md

```

## Requisitos Previos

-   **Node.js**: Versión 18.x o superior.
-   **PNPM** o **NPM**: Gestor de paquetes (puedes usar `npm` o `yarn` si lo prefieres).
-   **Git**: Para clonar el repositorio.

## Instalación

1.  Clona el repositorio:
    
    ```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    cd tu-repositorio
    
    ```
    
2.  Instala las dependencias:
    
    ```bash
    pnpm install
    ```
    o
    ```bash
    pnpm install
    ```
    
3.  Inicia el servidor de desarrollo:
    
    ```bash
    pnpm run dev
    ```
    
    Esto ejecuta la aplicación con Webpack en `http://localhost:3000`. 

## Scripts Disponibles

En el archivo `package.json`:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  }
}

```

-   `pnpm run dev`: Inicia el servidor de desarrollo con Webpack.
-   `pnpm build`: Compila la aplicación para producción.
-   `pnpm start`: Inicia la aplicación en modo producción.
-   `pnpm lint`: Ejecuta ESLint para verificar el código.

## Descripción de algunos detalles UX

### Modo Claro/Oscuro

1.  Cambia entre modo claro y oscuro usando el botón en el navbar (🌙/☀️).
2.  Verifica:
    -   **Modo Claro**: Fondo blanco (`#fff`), texto gris (`#666`), botones azules (`#0070f3`).
    -   **Modo Oscuro**: Fondo oscuro (`#333`), texto gris claro (`#ccc`), botones azul claro (`#4da8ff`).
3.  El botón de favorito debe mostrar `#ff4d4f` en hover en ambos modos.

### Responsividad

1.  Usa DevTools (modo responsive) para probar:
    -   **Móvil (<600px)**: Tarjetas y modal más pequeños, botones accesibles.
    -   **Tableta (≥600px)**: Tarjetas más grandes, modal con padding intermedio.
    -   **Escritorio (≥992px, ≥1200px)**: Cuadrícula centrada, modal completo.

## Contacto

Para preguntas o sugerencias, contacta a [LinkeIn](https://www.linkedin.com/in/andres-alfredo-andrada/) en [email](andresandrada1994@gmail.com) o abre un issue en el repositorio.
