# Mirador Static Viewer Project

This project implements a static image viewer using [Mirador](https://projectmirador.org/), an open-source web-based viewer for high-resolution images, specifically designed for the International Image Interoperability Framework (IIIF).

## Project Overview

The application consists of a simple `index.html` file that initializes the Mirador viewer. The viewer is configured to load a local JSON file (`manifest.json`) which defines the content (images) to be displayed.

## Getting Started

### Prerequisites

You need a way to serve static files. This project includes a helper script that uses Python 3, which is commonly pre-installed on macOS and Linux.

## How the JSON Works with Mirador

Mirador is a "Manifest-driven" viewer. This means it relies on a standardized JSON format called the **IIIF Presentation API** to know what to display.

The file `manifest.json` in this project is a **IIIF Manifest**. Here is how the key parts relate to what you see in the viewer:

- **Manifest (`type: "Manifest"`)**: The root object representing the entire object (e.g., a book, a painting, or a collection of photos).
  - **`label`**: The title of the object, which appears in the viewer's window title or sidebar.
  - **`items` (Canvases)**: This list represents the "pages" or individual views. Each item is a `Canvas`.
    - **Canvas (`type: "Canvas"`)**: An abstract space where the image is painted.
      - **`items` (AnnotationPage -> Annotation)**: These nested objects connect the actual image file to the Canvas.
        - **`body`**: This describes the image resource itself (e.g., `images/placeholder.png`). Changing the `id` here changes the image displayed.

**In summary:**
- **You edit `manifest.json`** to change the images, titles, or order of pages.
- **Mirador reads `manifest.json`** to dynamically build the UI and display your content.

## Git and GitHub Pages

### Using Git

Git is the version control system used to track changes in this project. Common commands you might use:


### GitHub Pages

GitHub Pages is a hosting service that allows you to publish this project directly from your GitHub repository for free.

**How to set it up:**

1. Go to your project's repository on **GitHub.com**.
2. Click on **Settings** (usually the rightmost tab).
3. In the left sidebar, click on **Pages**.
4. Under **Build and deployment** > **Branch**:
   - Select `main` (or `master`) as the branch.
   - Select `/ (root)` as the folder.
   - Click **Save**.

After a few minutes, GitHub will provide a URL (usually `https://<username>.github.io/<repository-name>/`) where your Mirador viewer is live on the internet!


### Running Locally

1. **Open your terminal** in the project directory.
2. **Run the start script:**
   ```bash
   ./run.sh
   ```
   This will start a local web server on port 8000.
3. **Open your browser** and navigate to:
   [http://localhost:8000](http://localhost:8000)

Alternatively, you can manually start the server:
```bash
python3 -m http.server 8000
```