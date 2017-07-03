# cookiecutter-d3

A template to get started working on a D3 powered visualization project.
This is based around doing all of the work locally (i.e., no CDN calls).

Conventions:

1. The visualization code itself will be stored in `app.js`.
2. All of the included JS files are local, and linked without version numbers (RequireJS style).
3. The structure and JS library includes are as simple as possible (using script tags instead of RequireJS, not relying on any build tools).

To create a new project with this template, navigate to the directory that you want the project in and run:
```
cookiecutter https://github.com/andyreagan/cookiecutter-d3
```

If you don't have `cookiecutter` installed, get it via pip: `pip install cookiecutter`.
