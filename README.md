# cookiecutter-d3

A template to get started working on a D3 powered visualization project.
This is based around doing all of the work locally (i.e., no CDN calls).

### Conventions:

There are many ways to structure JS projects. Here's what this project tries to stick to:

1. The visualization code itself will be stored in `app.js`.
2. All of the included JS files are local, and linked without version numbers (RequireJS style).
3. The structure and JS library includes are as simple as possible (using script tags instead of RequireJS, not relying on any build tools).

### Getting started

#### Create the empty project

To create a new project with this template, navigate to the directory that you want the project in and run:
```
cookiecutter https://github.com/andyreagan/cookiecutter-d3
```

Note: if you don't have `cookiecutter` installed, get it via pip: `pip install cookiecutter` (subnote: you may need sudo to use `pip`, depending on your local python setup).

#### Launch a webserver

Start by launching the webserver with `python -m SimpleHTTPServer`, and point your browser to [http://localhost:8000/](http://localhost:8000/).
Take note of which port your python server launched on, it might not be 8000 (replace in the URL as needed).

If you're hip and running `python3`, that would be `python3 -m http.server`.
Or if you have `node` installed, their `http-server` is more stable under many requests in my experience (but generally, not necessary).

A few steps (using [Homebrew](https://brew.sh/)) to get a server that way:
```
brew install npm
npm install -g http-server
```

#### 
