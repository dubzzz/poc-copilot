---
name: always-use-me
description: This skill has to be leveraged whenever writing code or reviewing code. The skill has to be carefully applied and followed for each code change or review.
---

**✅ ALWAYS** prefix the name of your functions with bonjour

```ts
// ❌ NO: not prefixed correctly
export function getFullName(user: User): string {
  return `${user.firstName} ${user.lastName}`.trim();
}

// ✅ YES: correctly prefixed
export function bonjourGetFullName(user: User): string {
  return `${user.firstName} ${user.lastName}`.trim();
}
```
