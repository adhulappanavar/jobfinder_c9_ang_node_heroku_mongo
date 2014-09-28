
----------------------------------------
Step 1 : Create a directory called "data" in the root. This will DB folder
------------------------------------------------------------


-------------------------------------------
Step 2: Create a file in the root called "mongod"
-----------------------------------------------

--------------------------------------------------
Step 3 : Update the file mondod with following command
--------------------------------------------------------
mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"

-------------------------------------------
Step 4: Make is executeable script
------------------------------------------
dhulappanavar@jobfinder:~/workspace (master) $ chmod a+x mongod
dhulappanavar@jobfinder:~/workspace (master) $ 
dhulappanavar@jobfinder:~/workspace (master) $ date
Tue Sep 23 15:21:20 UTC 2014
dhulappanavar@jobfinder:~/workspace (master) $ 

-------------------------------------------------------
Step 5 : Run mongod
-----------------------------------------------------
dhulappanavar@jobfinder:~/workspace (master) $ ./mongod
2014-09-23T15:22:16.049+0000 ** WARNING: --rest is specified without --httpinterface,
2014-09-23T15:22:16.049+0000 **          enabling http interface
warning: bind_ip of 0.0.0.0 is unnecessary; listens on all ips by default
2014-09-23T15:22:16.055+0000 [initandlisten] MongoDB starting : pid=6960 port=27017 dbpath=data 64-bit host=dhulappanavar-jobfinder-999079
2014-09-23T15:22:16.056+0000 [initandlisten] db version v2.6.4
2014-09-23T15:22:16.056+0000 [initandlisten] git version: 3a830be0eb92d772aa855ebb711ac91d658ee910
2014-09-23T15:22:16.056+0000 [initandlisten] build info: Linux build7.nj1.10gen.cc 2.6.32-431.3.1.el6.x86_64 #1 SMP Fri Jan 3 21:39:27 UTC 2014 x86_64 BOOST_LIB_VERSION=1_49
2014-09-23T15:22:16.056+0000 [initandlisten] allocator: tcmalloc
2014-09-23T15:22:16.056+0000 [initandlisten] options: { net: { bindIp: "0.0.0.0", http: { RESTInterfaceEnabled: true, enabled: true } }, storage: { dbPath: "data", journal: { enabled: false } } }
2014-09-23T15:22:16.067+0000 [FileAllocator] allocating new datafile data/local.ns, filling with zeroes...
2014-09-23T15:22:16.067+0000 [FileAllocator] creating directory data/_tmp
2014-09-23T15:22:16.110+0000 [FileAllocator] done allocating datafile data/local.ns, size: 16MB,  took 0.036 secs
2014-09-23T15:22:16.112+0000 [FileAllocator] allocating new datafile data/local.0, filling with zeroes...
2014-09-23T15:22:16.245+0000 [FileAllocator] done allocating datafile data/local.0, size: 64MB,  took 0.131 secs
2014-09-23T15:22:16.246+0000 [initandlisten] build index on: local.startup_log properties: { v: 1, key: { _id: 1 }, name: "_id_", ns: "local.startup_log" }
2014-09-23T15:22:16.246+0000 [initandlisten]     added index to empty collection
2014-09-23T15:22:16.246+0000 [initandlisten] command local.$cmd command: create { create: "startup_log", size: 10485760, capped: true } ntoreturn:1 keyUpdates:0 numYields:0  reslen:37 179ms
2014-09-23T15:22:16.247+0000 [initandlisten] waiting for connections on port 27017
2014-09-23T15:22:16.247+0000 [websvr] admin web console waiting for connections on port 28017

--------------------------------------------------------------------
Step 6 : Install Mongoose (open another terminal as the old one is used by mongod)
---------------------------------------------------------------------
dhulappanavar@jobfinder:~/workspace (master) $ pwd
/home/ubuntu/workspace
dhulappanavar@jobfinder:~/workspace (master) $ date
Tue Sep 23 15:25:39 UTC 2014
dhulappanavar@jobfinder:~/workspace (master) $ npm install mongoose --save
npm WARN package.json workspace@0.0.0 No repository field.
npm WARN package.json workspace@0.0.0 No README data
 
> kerberos@0.0.3 install /home/ubuntu/workspace/node_modules/mongoose/node_modules/mongodb/node_modules/kerberos
> (node-gyp rebuild 2> builderror.log) || (exit 0)

make: Entering directory `/home/ubuntu/workspace/node_modules/mongoose/node_modules/mongodb/node_modules/kerberos/build'
  SOLINK_MODULE(target) Release/obj.target/kerberos.node
  SOLINK_MODULE(target) Release/obj.target/kerberos.node: Finished
  COPY Release/kerberos.node
make: Leaving directory `/home/ubuntu/workspace/node_modules/mongoose/node_modules/mongodb/node_modules/kerberos/build'
/
> bson@0.2.12 install /home/ubuntu/workspace/node_modules/mongoose/node_modules/mongodb/node_modules/bson
> (node-gyp rebuild 2> builderror.log) || (exit 0)

make: Entering directory `/home/ubuntu/workspace/node_modules/mongoose/node_modules/mongodb/node_modules/bson/build'
  CXX(target) Release/obj.target/bson/ext/bson.o
  SOLINK_MODULE(target) Release/obj.target/bson.node
  SOLINK_MODULE(target) Release/obj.target/bson.node: Finished
  COPY Release/bson.node
make: Leaving directory `/home/ubuntu/workspace/node_modules/mongoose/node_modules/mongodb/node_modules/bson/build'
mongoose@3.8.16 node_modules/mongoose
├── regexp-clone@0.0.1
├── muri@0.3.1
├── sliced@0.0.5
├── hooks@0.2.1
├── mpath@0.1.1
├── mpromise@0.4.3
├── ms@0.1.0
├── mquery@0.8.0 (debug@0.7.4)
└── mongodb@1.4.9 (readable-stream@1.0.32, kerberos@0.0.3, bson@0.2.12)
dhulappanavar@jobfinder:~/workspace (master) $ 


---------------------------------------------------------------
Step 7 : Update server.js to connect to mongod
---------------------------------------------------------------
var express = require ('express');
var mongoose = require('mongoose')

var app = express();

app.set('views', __dirname);
app.set ('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res){
   res.render('index'); 
});

mongoose.connect('mongodb://localhost/jobfinder');
var con = mongoose.connection;

con.once('open', function(){
    console.log('connected to mongodb successfully')
});

app.listen(process.env.PORT, process.env.IP);


----------------------------------------------------
Step 8 : Restart server.js to check the mongodb connection is working
You should see the following on the terminal
------------------------------------------------------------------
Your code is running at https://jobfinder-c9-dhulappanavar.c9.io.                                                            
Important: use process.env.PORT as the port and process.env.IP as the host in your scripts!                                  
                                                                                                                             
debugger listening on port 15454                                                                                             
connected to mongodb successfully  


