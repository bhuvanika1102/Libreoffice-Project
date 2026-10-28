# NovaWriter — LibreOffice Writer Clone

A modern desktop word processor built from scratch, inspired by LibreOffice Writer. NovaWriter aims to provide a rich document editing experience with a customizable interface and extensible architecture.

## Tech Stack

- **React** — User interface
- **Electron** — Cross-platform desktop application
- **TypeScript** — Type-safe development
- **Node.js** — JavaScript runtime and tooling
- **ProseMirror** — Document editing engine
- **pnpm & Turborepo** — Package management and monorepo tooling

## Current Features

- Desktop application layout
- Menu bar, ribbon, toolbar, and status bar structure
- A4-style document workspace
- Structured document model with paragraphs and text runs
- Editable document content using ProseMirror
- Text formatting: **bold**, *italic*, and underline
- Keyboard shortcuts for formatting, undo, and redo

## Development Progress — Phase by Phase

NovaWriter is being developed incrementally, with each phase focusing on a specific part of the word processor.

### Phase 1 — Project Foundation

**Goal:** Establish the desktop application structure and its core user interface.

- [x] Set up the React, Electron, and TypeScript project.
- [x] Configure the pnpm workspace and Turborepo monorepo structure.
- [x] Initialize the Electron desktop application.
- [x] Create the main application layout.
- [x] Implement the initial Menu Bar, Ribbon, Toolbar, Workspace, and Status Bar components.
- [x] Establish the shared package structure for commands and the document model.
- [ ] Complete File menu actions and basic application navigation.
- [ ] Establish the Settings framework.

**Status:** Core project structure and initial UI layout established. Remaining foundation tasks will be completed as development progresses.

### Phase 2 — Basic Document Editor

**Goal:** Build the initial document editing experience using ProseMirror directly.

- [x] Define the initial document model using documents, paragraphs, and text runs.
- [x] Create document rendering components for paragraphs and formatted text.
- [x] Build an A4-style document workspace.
- [x] Integrate ProseMirror as the editing engine.
- [x] Load the initial document model into the editor.
- [x] Support bold, italic, and underline formatting.
- [x] Add keyboard shortcuts for text formatting.
- [x] Configure undo and redo functionality through ProseMirror history.
- [ ] Synchronize editor changes with the application document model.
- [ ] Implement Create, Open, and Save Document operations.
- [ ] Verify and enhance cursor movement and text selection.
- [ ] Implement Copy, Cut, and Paste.
- [ ] Implement Find and Replace.

**Status:** Initial editable document and basic formatting are implemented. Document persistence and additional editing features are pending.

### Phase 3 — Editing Commands and Toolbar Integration

**Goal:** Connect the editor to NovaWriter's application controls.

- [ ] Create a centralized editor command system.
- [ ] Connect toolbar buttons to editor commands.
- [ ] Integrate formatting controls into the Ribbon.
- [ ] Add paragraph alignment and indentation.
- [ ] Add font family and font size controls.
- [ ] Add text color and highlighting.
- [ ] Reflect the active formatting state in the UI.

### Phase 4 — Document Management and File Operations

**Goal:** Enable users to manage documents reliably.

- [ ] Create new documents.
- [ ] Open existing documents.
- [ ] Save and Save As operations.
- [ ] Track unsaved changes.
- [ ] Warn users before closing documents with unsaved changes.
- [ ] Add recent documents support.
- [ ] Define a document file format and serialization strategy.

### Phase 5 — Advanced Document Layout

**Goal:** Move from a basic editable page to a word-processing layout.

- [ ] Implement multi-page document flow.
- [ ] Handle text overflow and page breaks.
- [ ] Add page margins and page size settings.
- [ ] Support headers and footers.
- [ ] Add page numbering.
- [ ] Improve document rendering for long documents.

### Phase 6 — Advanced Editing Features

**Goal:** Expand the editor toward a full word-processing experience.

- [ ] Find and Replace enhancements.
- [ ] Lists, bullets, and numbering.
- [ ] Tables and table editing.
- [ ] Hyperlinks.
- [ ] Images and other embedded content.
- [ ] Keyboard shortcut customization.
- [ ] Improve accessibility and editing behavior.

### Phase 7 — Export, Printing, and Compatibility

**Goal:** Support document output and interoperability.

- [ ] Export documents to PDF.
- [ ] Add print preview and printing.
- [ ] Explore DOCX import and export.
- [ ] Preserve formatting during import and export.
- [ ] Validate document layout across supported platforms.

### Phase 8 — Settings, Testing, and Release

**Goal:** Prepare NovaWriter for reliable everyday use.

- [ ] Implement application settings.
- [ ] Add theme and appearance options.
- [ ] Improve error handling and recovery.
- [ ] Add unit and integration tests.
- [ ] Optimize performance for large documents.
- [ ] Package the application for supported operating systems.
- [ ] Prepare release documentation.

## Project Structure

```text
NovaWriter/
├── apps/
│   └── desktop/          # Electron desktop application
├── packages/
│   ├── commands/         # Shared editor commands
│   └── document-model/   # Document data structures
├── package.json
├── pnpm-workspace.yaml
└── turbo.json
```

## Getting Started

### Prerequisites

- Node.js
- pnpm

### Installation

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/bhuvanika1102/Libreoffice-Project/
cd NovaWriter
```

Install dependencies:

```bash
pnpm install
```

### Run the Application

```bash
pnpm dev
```

## Development Approach

Each phase will be implemented and tested incrementally. Completed items will be marked as done only after the corresponding functionality has been implemented and verified. The roadmap may evolve as the architecture and requirements develop.

## Project Goal

NovaWriter is a learning-focused project for exploring software architecture, rich-text editing, and desktop application development. The long-term goal is to build a customizable word processor with a modular architecture that can support advanced document-editing features.

## License

This project is currently under development. Add a license before distributing it publicly.
