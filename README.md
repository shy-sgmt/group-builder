# Group Builder

Group Builder is a browser-based tool for creating balanced or intentionally clustered groups from member attributes.

It is designed for schools, companies, interdisciplinary academic events, public-sector workshops, sports teams, and general project teams.

## Features

- Import members from CSV / Excel
- Flexible attribute schema
- Adjustable group count
- Custom group names
- Manual group deletion
- Drag-and-drop member movement
- Lock/fix members before rebuilding
- Search and highlight members
- Group summaries
- Optional pair rules
- Undo
- Save As / Open Project
- CSV export
- Print view
- Multiple themes
- Adjustable card size, gap, and group layout
- English / Japanese UI
- Advanced Optimization controls

## Balance slider

Each attribute has a slider from `-20` to `+20`.

| Value | Meaning |
|---|---|
| `-20` | Cluster similar members together |
| `0` | Ignore this attribute |
| `+20` | Distribute this attribute as evenly as possible |

Examples:

- Age at `-20`: members of similar ages tend to be grouped together.
- Age at `+20`: average age tends to be balanced across groups.
- Department at `-20`: members from the same department tend to stay together.
- Department at `+20`: departments are distributed across groups.

More details: [Balance algorithm](docs/BALANCE.md)

## Group Settings

Open **General** to configure:

- Number of groups
- Allowed size difference
- Group names

Groups have internal IDs for stable state management, but the UI shows only the names entered by the user.

## Advanced Optimization

**Advanced Optimization is always visible in General and does not require an enable checkbox.**

It controls the base multipliers used by the optimizer:

- Numeric · Balance — default `30`
- Category · Balance — default `500`
- Numeric / Ordinal · Cluster — default `30`
- Category / Boolean · Cluster — default `500`

Most users should leave these values at their defaults.

## Language

Open **General → Language** and choose:

- English
- 日本語

English is the default UI language.

## Templates

Templates are available in both languages:

- [`templates/en/`](templates/en/) — English
- [`templates/ja/`](templates/ja/) — Japanese

The app's **Template** button also follows the selected UI language.

## Documentation

- [Usage](docs/USAGE.md)
- [Settings](docs/SETTINGS.md)
- [Balance algorithm](docs/BALANCE.md)
- [Templates](docs/TEMPLATES.md)
- [Project file format](docs/PROJECT_FORMAT.md)
- [Version history](docs/CHANGELOG.md)
- [日本語README](docs/README_JA.md)

## Run locally

Open `index.html` in a modern browser.

Recommended browsers:

- Chrome
- Edge
- Safari
- Firefox

## Repository structure

```text
group-builder/
├─ index.html
├─ app.js
├─ styles.css
├─ README.md
├─ .gitignore
├─ docs/
└─ templates/
```

## License

No license is included yet. Add a license such as MIT if you plan to publish the repository publicly.

## v22.1

- Fixed language switching initialization
- `app.js` now loads after the full DOM
- Re-rendered controls are translated again after every render
- Removed legacy Advanced Optimization enable/disable state
- Advanced Optimization remains permanently visible in General Settings

## v22.3

- Fixed the actual cause of Language switching failure
- Restored missing `Export CSV` and `Print View` controls that were causing a JavaScript runtime error
- Added a guarded fallback so missing optional buttons cannot stop app initialization
- Added `General Settings → Clear Local Data`
- Language selector now also has a direct `setLanguage()` fallback

## v22.6

- Renamed `Save` to `Save & Load`
- Moved `Clear Local Data` into General Settings
