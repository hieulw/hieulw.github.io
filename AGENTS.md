# Content Rules

- Keep docs article titles short and concise.
- In docs pages with frontmatter `title`, do not use `#` headings in body content; start sections at `###`.
- Avoid `##` headings in docs body content; use `###` and deeper levels going forward.
- Do not use ordered numbering in section headers (e.g., avoid `## 1. Setup`); use plain, descriptive header text.
- Do not repeat folder/category names in article titles when context is already clear from the path (e.g., content under `forge/` should not include `Forge` in the title).
- Use `Aside` components sparingly, only when a point truly needs callout emphasis.
- Prefer titled code blocks for file-path snippets and examples.
- Use file paths as code block titles whenever possible (e.g., `title="cmd/users/config.go"`) instead of generic labels.
- Use `FileTree` components only for explicit tree diagrams in this format:

```text
.
├── cmd
│   └── <service>
│       ├── config.go
│       ├── config_test.go
│       ├── main.go
│       └── run.go
├── config
│   └── <service>.yaml
└── README.md
```
