---
title: Stable Node.js service startup checklist
description: A short checklist for safer service starts in production.
date: 2026-02-28
tags:
  - devops
  - nodejs
  - operations
---

## Context

New services often fail during startup because of missing env vars, bad migrations, or unavailable dependencies.

## Key learnings

- Fail fast when required environment variables are missing.
- Run database migrations before accepting traffic.
- Add health endpoints and readiness checks.
- Use structured logs for startup events.

## Example

```bash
node ./scripts/validate-env.mjs && npm run migrate && npm run start
```

## References

- https://12factor.net/config
