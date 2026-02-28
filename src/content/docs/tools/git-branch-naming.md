---
title: Git branch naming convention
description: A simple pattern for readable and searchable branch names.
date: 2026-02-28
tags:
  - tools
  - git
---

## Context

Branch names are easier to scan in pull requests when the intent is explicit.

## Key learnings

- Use a prefix to show intent: `feat`, `fix`, `chore`, `docs`.
- Keep names lowercase and hyphen-separated.
- Include issue IDs when available.

## Example

```text
feat/NAND-1421-user-session-timeout
fix/NAND-1574-login-rate-limit
docs/update-deployment-runbook
```

## References

- https://git-scm.com/docs/git-branch
