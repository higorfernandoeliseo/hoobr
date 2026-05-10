# project Hoobr

## "Open-Source Projects Hub Brazil"

The project is a way to centralize libraries, tools, and open-source initiatives created by developers in Brazil, facilitating the discovery, support, and collaboration on national projects.

Each project card displays the project name, author, description, languages ​​used, category, and development status.

It functions as a hub, hence the name Hoobr. It uses a database backend with a JSON file where projects will be added by the community.

To upload a project to the platform, it's done by forking the project and cloning it locally to edit the JSON file, then uploading it back to GitHub and opening a pull request where it's analyzed. Finally, the database is merged with the changes, adding the project to the platform's homepage.

It has a very simple search system for searching both project name and description.

## Features

- Display of recently added projects on the homepage.
- Search for project names and descriptions.
- Display of languages ​​used in the project.
- Categories on the side of the projects.
- Display of whether the project is abandoned or not.

## Technologies used:
![HTML5 Logo](https://img.shields.io/badge/HTML-f06529?logo=html5&logoColor=white&labelColor=f06529)
![CSS](https://img.shields.io/badge/CSS-1293D8?logo=css&logoColor=fff)
![JavaScript Logo](https://shields.io/badge/JavaScript-F7DF1E?logo=JavaScript&logoColor=000&style=flat-square)

## Define development stage

To set the development status in the `projects.json` file in the `assets/db` folder, you can define an entry in the JSON object status below category:

0 = in development
1 = abandoned

example: 
```
[
    {
        "name": "feedress",
        "description": "Leitor leve de Feeds RSS feito somente com HTML, CSS e JavaScript com persistência localmente sem a dependência de algoritmos.",
        "desenvolvedor": "higorfernandoeliseo",
        "url": "https://github.com/higorfernandoeliseo/feedress",
        "languages": ["HTML", "CSS", "JavaScript"],
        "category": "Leitor RSS",
        "status": 0
    }
]
```


## Test-drive

To test, you can use the following address in your browser: [access the project](https://higorfernandoeliseo.github.io/hoobr/)

## Report errors:

If you want to report a problem or suggest a new feature, feel free to create an issue in this repository.
