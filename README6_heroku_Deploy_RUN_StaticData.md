------------------------------------------
Step 1: Check Heroku Version 
---------------------------------------------
dhulappanavar@jobfinder:~/workspace $ heroku --version
heroku-toolbelt/3.9.7 (x86_64-linux) ruby/2.1.1
dhulappanavar@jobfinder:~/workspace $ 


--------------------------------------------
Step 2: Initialise Git for our Project directory
---------------------------------------------
dhulappanavar@jobfinder:~/workspace $ pwd
/home/ubuntu/workspace
dhulappanavar@jobfinder:~/workspace $ git --version
git version 1.9.1
dhulappanavar@jobfinder:~/workspace $ git init
Initialized empty Git repository in /home/ubuntu/workspace/.git/
dhulappanavar@jobfinder:~/workspace (master) $ 

---------------------------------------------
Step 3 : Create a .gitignore file to exclude files from Git
------------------------------------------------------------
Add gollowing ignore directories to .gitignore
.c9
data
node_modules

--------------------------------------------------
Step 4 : Add files to Git and Commit (local)
-------------------------------------------------
dhulappanavar@jobfinder:~/workspace (master) $ git add -A
dhulappanavar@jobfinder:~/workspace (master) $ git commit -m "First Commit"
[master (root-commit) 4f31bcc] First Commit
 213 files changed, 62318 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 README1_BaseSetup_NodeNPMExpressJadeBowerJqueryAngular.md
 create mode 100644 README2_RunNode_serverjs_jade.md
 create mode 100644 README3_InstallBootstrap.md
 create mode 100644 README4_BasicAngular_appjs.md
 ......
 create mode 100644 public/bower_components/jquery/src/var/support.js
 create mode 100644 public/bower_components/jquery/src/var/toString.js
 create mode 100644 public/bower_components/jquery/src/wrap.js
 create mode 100644 server.js
dhulappanavar@jobfinder:~/workspace (master) $ 
dhulappanavar@jobfinder:~/workspace (master) $ date
Tue Sep 23 14:20:11 UTC 2014
dhulappanavar@jobfinder:~/workspace (master) $ 

-------------------------------------------
Step 5 : Login to Heroku, Password is anilgetsetgo
-------------------------------------------
dhulappanavar@jobfinder:~/workspace (master) $ heroku login
Enter your Heroku credentials.
Email: dhulappanavar@yahoo.com
Password (typing will be hidden): 
Authentication successful.

-------------------------------------------
Step 6 : Create Heroku App
--------------------------------------------
dhulappanavar@jobfinder:~/workspace (master) $ heroku create
Creating sleepy-temple-1789... done, stack is cedar
http://sleepy-temple-1789.herokuapp.com/ | git@heroku.com:sleepy-temple-1789.git
Git remote heroku added
dhulappanavar@jobfinder:~/workspace (master) $ date
Tue Sep 23 14:29:55 UTC 2014
dhulappanavar@jobfinder:~/workspace (master) $ 
dhulappanavar@jobfinder:~/workspace (master) $ git remote -v
heroku  git@heroku.com:sleepy-temple-1789.git (fetch)
heroku  git@heroku.com:sleepy-temple-1789.git (push)
dhulappanavar@jobfinder:~/workspace (master) $ 

---------------------------------------------------
Step 7 : Push to Heroku - PERMISSION ISSUES
---------------------------------------------------
dhulappanavar@jobfinder:~/workspace (master) $ git push heroku master
The authenticity of host 'heroku.com (50.19.85.156)' can't be established.
RSA key fingerprint is 8b:48:5e:67:0e:c9:16:47:32:f2:87:0c:1f:c8:60:ad.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added 'heroku.com,50.19.85.156' (RSA) to the list of known hosts.
Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
dhulappanavar@jobfinder:~/workspace (master) $


---------------------------------------------------
Step 8 : FIX PERMISSION ISSUE
Reference : http://stackoverflow.com/questions/16281214/not-able-to-push-a-rails-app-to-heroku-using-git-bash
---------------------------------------------------
dhulappanavar@jobfinder:~/workspace (master) $ heroku keys:add ~/.ssh/id_rsa.pub
Uploading SSH public key /home/ubuntu/.ssh/id_rsa.pub... done

----------------------------------------------------
Step 9 : Now Push Again to Heroku --- It WORKS !!!!
----------------------------------------------------

dhulappanavar@jobfinder:~/workspace (master) $ git push heroku master
Warning: Permanently added the RSA host key for IP address '50.19.85.154' to the list of known hosts.
Initializing repository, done.
Counting objects: 245, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (232/232), done.
Writing objects: 100% (245/245), 923.41 KiB | 354.00 KiB/s, done.
Total 245 (delta 7), reused 0 (delta 0)

-----> Node.js app detected

       PRO TIP: Specify a node version in package.json
       See https://devcenter.heroku.com/articles/nodejs-support

-----> Defaulting to latest stable node: 0.10.32
-----> Downloading and installing node
-----> Exporting config vars to environment
-----> Installing dependencies
       npm WARN package.json workspace@0.0.0 No repository field.
       npm WARN package.json workspace@0.0.0 No README data
       express@4.9.4 node_modules/express
       ___ utils-merge@1.0.0
       ___ merge-descriptors@0.0.2
       ___ cookie@0.1.2
       ___ fresh@0.2.4
       ___ range-parser@1.0.2
       ___ cookie-signature@1.0.5
       ___ media-typer@0.3.0
       ___ methods@1.1.0
       ___ finalhandler@0.2.0
       ___ parseurl@1.3.0
       ___ vary@1.0.0
       ___ serve-static@1.6.2
       ___ escape-html@1.0.1
       ___ path-to-regexp@0.1.3
       ___ depd@0.4.5
       ___ qs@2.2.4
       ___ on-finished@2.1.0 (ee-first@1.0.5)
       ___ debug@2.0.0 (ms@0.6.2)
       ___ proxy-addr@1.0.3 (forwarded@0.1.0, ipaddr.js@0.1.3)
       ___ etag@1.3.1 (crc@3.0.0)
       ___ send@0.9.2 (destroy@1.0.3, ms@0.6.2, mime@1.2.11)
       ___ accepts@1.1.0 (negotiator@0.4.7, mime-types@2.0.1)
       ___ type-is@1.5.1 (mime-types@2.0.1)
       
       jade@1.7.0 node_modules/jade
       ___ character-parser@1.2.0
       ___ commander@2.1.0
       ___ void-elements@1.0.0
       ___ mkdirp@0.5.0 (minimist@0.0.8)
       ___ transformers@2.1.0 (promise@2.0.0, css@1.0.8, uglify-js@2.2.5)
       ___ constantinople@2.0.1 (uglify-js@2.4.15)
       ___ monocle@1.1.51 (readdirp@0.2.5)
       ___ with@3.0.1 (uglify-js@2.4.15)
-----> Caching node_modules directory for future builds
-----> Cleaning up node-gyp and npm artifacts
-----> No Procfile found; Adding npm start to new Procfile
-----> Building runtime environment
-----> Discovering process types
       Procfile declares types -> web

-----> Compressing... done, 7.4MB
-----> Launching... done, v3
       http://sleepy-temple-1789.herokuapp.com/ deployed to Heroku

To git@heroku.com:sleepy-temple-1789.git
 * [new branch]      master -> master
dhulappanavar@jobfinder:~/workspace (master) $ 


-----------------------------------------------------
Step 10 : Herooku setup web process =1
------------------------------------------------------
dhulappanavar@jobfinder:~/workspace (master) $ heroku ps:scale web=1
Scaling dynos... done, now running web at 1:1X.
dhulappanavar@jobfinder:~/workspace (master) $ date
Tue Sep 23 14:55:43 UTC 2014
dhulappanavar@jobfinder:~/workspace (master) $ 

-----------------------------------------------------------
Step 11 : View App on Heroku 
URL :  http://sleepy-temple-1789.herokuapp.com/ 
on you local Google chrome browser (not on c9.io browser)
-----------------------------------------------------
And it WORKS !!!!!!!!!!!!!!

