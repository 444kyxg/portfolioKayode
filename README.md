# Portfólio Angular

Portfólio moderno em Angular 18+ usando Standalone Components.

## 1. Instalar dependências

```bash
npm install
```

## 2. Rodar em desenvolvimento

```bash
npm start
```

Acesse:

```text
http://localhost:4200
```

## 3. Personalizar

Edite somente:

```text
src/app/data/portfolio.data.ts
```

Nesse arquivo estão nome, cargo, bio, foto, links, habilidades, qualidades, experiências e projetos.

## 4. Gerar build

```bash
npm run build
```

O resultado será criado em:

```text
dist/portfolio-angular/
```

## Estrutura

```text
portfolio-angular/
├── angular.json
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── README.md
└── src/
    ├── index.html
    ├── main.ts
    ├── styles.css
    └── app/
        ├── app.component.ts
        ├── app.component.html
        ├── app.component.css
        ├── app.config.ts
        ├── app.routes.ts
        └── data/
            └── portfolio.data.ts
```
