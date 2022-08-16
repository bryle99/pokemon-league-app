# pokemon-league-app

# How to run (with remote mysql db)
1. **npm install** in server folder
2. **npm install** in client folder
3. **npm run dev** in application folder

# How to run (with local mysql db)
## Create new mysql database in mysql server for application

Mysql database server can be ran with xampp application
----
https://www.apachefriends.org/
----
https://hevodata.com/learn/xampp-mysql/


1. **npm install** in server folder
2. **npm install** in client folder
3. Update database information in /server/config/config.json with newly created database
4. **npm run seq-sync** in server folder
5. **npm run dev** in application folder
