ls
     ,-----.,--.                  ,--. ,---.   ,--.,------.  ,------.
    '  .--./|  | ,---. ,--.,--. ,-|  || o   \  |  ||  .-.  \ |  .---'
    |  |    |  || .-. ||  ||  |' .-. |`..'  |  |  ||  |  \  :|  `--, 
    '  '--'\|  |' '-' ''  ''  '\ `-' | .'  /   |  ||  '--'  /|  `---.
     `-----'`--' `---'  `----'  `---'  `--'    `--'`-------' `------'
    ----------------------------------------------------------------- 


Hi there! Welcome to Cloud9 IDE!

To get you started, create some files, play with the terminal,
or visit http://docs.c9.io for our documentation.
If you want, you can also go watch some training videos at
http://www.youtube.com/user/c9ide.

Happy coding!
The Cloud9 IDE team
********************************************************
********************************************************
********************************************************
Refer to Pluralsight video 
Continuous Integration and Deployment for AngularJS and Node.js by Authored by: Alexander Zanfir
URL : http://pluralsight.com/training/Courses/TableOfContents/continuous-integration-deployment-angularjs-nodejs
Section : "" 
****************************************************

Commands exuted on blank project

----------------------------------------------------
----  Command 1 Check the files --------------------
---------------------------------------------------
dhulappanavar@jobfinder:~/workspace $ ls
README.md


-------------------------------------------------------
----  Command 2 Check node version --------------------
-------------------------------------------------------
dhulappanavar@jobfinder:~/workspace $ node --version
v0.10.30

-----------------------------------------------------------------
----  Command 3  Intialise npm --------     --------------------
-----------------------------------------------------------------
dhulappanavar@jobfinder:~/workspace $ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sane defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (workspace) 
version: (0.0.0) 
description: Job Finder App
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: Anil Dhulappanavar
license: (ISC) 
About to write to /home/ubuntu/workspace/package.json:

{
  "name": "workspace",
  "version": "0.0.0",
  "description": "Job Finder App",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Anil Dhulappanavar",
  "license": "ISC"
}


Is this ok? (yes) yes

-----------------------------------------------------------------
----  Command 4  Install express using npm     --------------------
-----------------------------------------------------------------
dhulappanavar@jobfinder:~/workspace $ npm install --save express
npm WARN package.json workspace@0.0.0 No repository field.
express@4.9.4 node_modules/express
├── utils-merge@1.0.0
├── merge-descriptors@0.0.2
├── fresh@0.2.4
├── cookie@0.1.2
├── escape-html@1.0.1
├── range-parser@1.0.2
├── cookie-signature@1.0.5
├── finalhandler@0.2.0
├── vary@1.0.0
├── media-typer@0.3.0
├── serve-static@1.6.2
├── methods@1.1.0
├── parseurl@1.3.0
├── path-to-regexp@0.1.3
├── depd@0.4.5
├── qs@2.2.4
├── debug@2.0.0 (ms@0.6.2)
├── on-finished@2.1.0 (ee-first@1.0.5)
├── proxy-addr@1.0.2 (ipaddr.js@0.1.3)
├── etag@1.3.1 (crc@3.0.0)
├── send@0.9.2 (destroy@1.0.3, ms@0.6.2, mime@1.2.11)
├── type-is@1.5.1 (mime-types@2.0.1)
└── accepts@1.1.0 (negotiator@0.4.7, mime-types@2.0.1)


-----------------------------------------------------------------
----  Command 5  Install jade using npm     --------------------
-----------------------------------------------------------------
dhulappanavar@jobfinder:~/workspace $ npm install --save jade
npm WARN package.json workspace@0.0.0 No repository field.
jade@1.7.0 node_modules/jade
├── character-parser@1.2.0
├── commander@2.1.0
├── void-elements@1.0.0
├── mkdirp@0.5.0 (minimist@0.0.8)
├── monocle@1.1.51 (readdirp@0.2.5)
├── transformers@2.1.0 (promise@2.0.0, css@1.0.8, uglify-js@2.2.5)
├── with@3.0.1 (uglify-js@2.4.15)
└── constantinople@2.0.1 (uglify-js@2.4.15)


-----------------------------------------------------------------
----  Command 6  Install bower using npm     --------------------
-----------------------------------------------------------------
dhulappanavar@jobfinder:~/workspace $ npm install --save-dev bower
npm WARN package.json workspace@0.0.0 No repository field.
npm WARN prefer global bower@1.3.11 should be installed with -g
bower@1.3.11 node_modules/bower
├── is-root@1.0.0
├── junk@1.0.0
├── stringify-object@1.0.0
├── abbrev@1.0.5
├── which@1.0.5
├── chmodr@0.1.0
├── osenv@0.1.0
├── opn@1.0.0
├── archy@0.0.2
├── graceful-fs@3.0.2
├── rimraf@2.2.8
├── lru-cache@2.5.0
├── bower-logger@0.2.2
├── bower-endpoint-parser@0.2.2
├── lockfile@1.0.0
├── nopt@3.0.1
├── retry@0.6.1
├── tmp@0.0.23
├── q@1.0.1
├── request-progress@0.3.1 (throttleit@0.0.2)
├── semver@2.3.2
├── fstream@1.0.2 (inherits@2.0.1)
├── shell-quote@1.4.2 (array-filter@0.0.1, array-map@0.0.0, array-reduce@0.0.0, jsonify@0.0.0)
├── mkdirp@0.5.0 (minimist@0.0.8)
├── p-throttler@0.1.0 (q@0.9.7)
├── chalk@0.5.1 (escape-string-regexp@1.0.2, ansi-styles@1.1.0, supports-color@0.2.0, has-ansi@0.1.0, strip-ansi@0.3.0)
├── bower-json@0.4.0 (intersect@0.0.3, deep-extend@0.2.11, graceful-fs@2.0.3)
├── promptly@0.2.0 (read@1.0.5)
├── fstream-ignore@1.0.1 (inherits@2.0.1, minimatch@1.0.0)
├── tar-fs@0.5.0 (mkdirp@0.3.5, pump@0.3.5, tar-stream@0.4.5)
├── decompress-zip@0.0.8 (nopt@2.2.1, mkpath@0.1.0, touch@0.0.2, readable-stream@1.1.13, binary@0.3.0)
├── request@2.42.0 (caseless@0.6.0, json-stringify-safe@5.0.0, aws-sign2@0.5.0, forever-agent@0.5.2, stringstream@0.0.4, oauth-sign@0.4.0, tunnel-agent@0.4.0, node-uuid@1.4.1, qs@1.2.2, mime-types@1.0.2, form-data@0.1.4, bl@0.9.3, tough-cookie@0.12.1, http-signature@0.10.0, hawk@1.1.1)
├── glob@4.0.6 (inherits@2.0.1, once@1.3.1, minimatch@1.0.0)
├── bower-registry-client@0.2.1 (graceful-fs@2.0.3, request-replay@0.2.0, lru-cache@2.3.1, async@0.2.10, mkdirp@0.3.5, request@2.27.0)
├── cardinal@0.4.4 (ansicolors@0.2.1, redeyed@0.4.4)
├── mout@0.10.0
├── bower-config@0.5.2 (osenv@0.0.3, graceful-fs@2.0.3, optimist@0.6.1, mout@0.9.1)
├── update-notifier@0.2.1 (string-length@1.0.0, semver-diff@1.0.0, latest-version@1.0.0, configstore@0.3.1)
├── inquirer@0.7.2 (figures@1.3.3, mute-stream@0.0.4, through@2.3.6, readline2@0.1.0, lodash@2.4.1, cli-color@0.3.2, rx@2.3.9)
├── handlebars@2.0.0 (optimist@0.3.7, uglify-js@2.3.6)
└── insight@0.4.3 (object-assign@1.0.0, async@0.9.0, os-name@1.0.0, lodash.debounce@2.4.1, tough-cookie@0.12.1, configstore@0.3.1, inquirer@0.6.0)



-----------------------------------------------------------------
----  Command 7  Intialize bower json file  --------------------
-----------------------------------------------------------------
dhulappanavar@jobfinder:~/workspace $ bower init
[?] May bower anonymously report usage statistics to improve the tool over time? Yes
? name: workspace
? version: 0.0.0
? description: Job Finder
? main file: 
? what types of modules does this package expose?: 
? keywords: 
? authors: dhulappanavar <dhulappanavar@yahoo.com>
? license: MIT
? homepage: 
? set currently installed components as dependencies?: Yes
? add commonly ignored files to ignore list?: Yes
? would you like to mark this package as private which prevents it from being accidentally published to the registry?: No

{
  name: 'workspace',
  version: '0.0.0',
  authors: [
    'dhulappanavar <dhulappanavar@yahoo.com>'
  ],
  description: 'Job Finder',
  license: 'MIT',
  ignore: [
    '**/.*',
    'node_modules',
    'bower_components',
    'test',
    'tests'
  ]
}

? Looks good?: Yes


-----------------------------------------------------------------
----  Command 8  Install jquery using Bower --------------------
-----------------------------------------------------------------
dhulappanavar@jobfinder:~/workspace $ bower install jquery --save
bower jquery#*              not-cached git://github.com/jquery/jquery.git#*
bower jquery#*                 resolve git://github.com/jquery/jquery.git#*
bower jquery#*                download https://github.com/jquery/jquery/archive/2.1.1.tar.gz
bower jquery#*                 extract archive.tar.gz
bower jquery#*                resolved git://github.com/jquery/jquery.git#2.1.1
bower jquery#~2.1.1            install jquery#2.1.1

jquery#2.1.1 bower_components/jquery


-----------------------------------------------------------------
----  Command 9  Install Angular using Bower --------------------
-----------------------------------------------------------------
dhulappanavar@jobfinder:~/workspace $ bower install angular  --save
bower angular#*             not-cached git://github.com/angular/bower-angular.git#*
bower angular#*                resolve git://github.com/angular/bower-angular.git#*
bower angular#*               download https://github.com/angular/bower-angular/archive/v1.2.25.tar.gz
bower angular#*                extract archive.tar.gz
bower angular#*           invalid-meta angular is missing "ignore" entry in bower.json
bower angular#*               resolved git://github.com/angular/bower-angular.git#1.2.25
bower angular#~1.2.25          install angular#1.2.25

angular#1.2.25 bower_components/angular

dhulappanavar@jobfinder:~/workspace $

