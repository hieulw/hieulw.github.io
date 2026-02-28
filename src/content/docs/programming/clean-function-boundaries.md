---
title: Clean function boundaries
description: Keep functions focused so changes stay predictable.
date: 2026-02-28
tags:
  - programming
  - architecture
---

## Context

When a function starts handling validation, transformation, and I/O at the same time, bugs become harder to isolate.

## Key learnings

- Keep each function responsible for one main decision.
- Split pure logic from side effects.
- Return clear values and avoid hidden mutations.

## Example

```ts
function calculateInvoiceTotal(items: Array<{ price: number; qty: number }>) {
  return items.reduce((sum, item) => sum + item.price * item.qty, 0);
}
```

## References

- https://martinfowler.com/bliki/FunctionLength.html
