# Name Styler for On-Together: Virtual Co-Working

A web-based tool for creating colourful, styled display names in [On-Together: Virtual Co-Working](https://gigapuff.co/). Generates [TextMeshPro Rich Text Tags](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextSupportedTags.html) that can be pasted into your `PlayerData.txt` file to customise how your name appears in-game (or let Name Styler edit your file for you!).

Hosted at [NameStyler.app](https://namestyler.app/)

## Features

- **Per-letter colours** — pick individual colours or apply gradients across selected letters
- **Per-letter bold & italic** — style each letter independently
- **Chat styling** — configure bold, italic, colon colour, and message colour for chat messages
- **Live preview** — see exactly how your name will look in the game's chat UI
- **Auto Applicator** — drag & drop your `PlayerData.txt` file to automatically apply changes and download the updated file
- **Name backfill** — loading a `PlayerData.txt` file imports your existing name, colours, and formatting

## Development

```bash
npm install
npm run dev
```

### Scripts

| Command            | Description                           |
| ------------------ | ------------------------------------- |
| `npm run dev`      | Start development server              |
| `npm run prettify` | Format all files with Prettier        |
| `npm run lint`     | ESLint + TypeScript + Prettier checks |
| `npm run test`     | Run unit tests (uvu)                  |
| `npm run build`    | Type-check and build for production   |

### Tech stack

- [Vite](https://vite.dev/) + [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- [uvu](https://github.com/lukeed/uvu) for unit tests
