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

