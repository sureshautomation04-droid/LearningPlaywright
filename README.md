# LearningPlaywright

Playwright examples and exercises organized by chapters. Contains simple JavaScript examples used for learning Playwright and core JS concepts.

Getting started

- Install dependencies:

```bash
npm install
```

- Run tests (uses Playwright):

```bash
npx playwright test
```

Notes
 - TypeScript decorators are enabled in this project. If you edit files using decorators, ensure `experimentalDecorators` is set to `true` in `tsconfig.json`.
 - To type-check the project without emitting files, run:

```bash
npx tsc --noEmit
```

CI

This repository includes a GitHub Actions workflow at `.github/workflows/playwright.yml` that installs dependencies and runs `npm test` on push and pull requests.
