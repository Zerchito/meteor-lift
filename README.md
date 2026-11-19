# meteor-lift

> Analyze a Meteor/Blaze codebase and generate a step-by-step migration plan to NestJS + React.

**Status:** early development. Week 1 — building the base analyzer.

## Why

Many production apps still run on Meteor and Blaze. Migrating them is risky because
publications, methods, templates and collections are tightly coupled. meteor-lift
maps those dependencies and proposes a migration order you can actually follow.

## Packages

| Package | Description |
| --- | --- |
| [`@meteor-lift/analyzer`](packages/analyzer) | Static analyzer for Meteor/Blaze codebases |

## Development

Requires Node.js 22+ and pnpm 9.

```bash
pnpm install
pnpm test
pnpm typecheck
pnpm build
```

## License

MIT
