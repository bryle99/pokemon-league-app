# pokemon-league-app
> Deployed application in heroku  
> https://poke-mon-league.herokuapp.com/

# How to run (with remote mysql db)
1. **npm install** in main folder
2. **npm install** in server folder
3. **npm install** in client folder
4. **npm run dev** in main folder

# How to run (with local mysql db)
## Create new mysql database in mysql server for application

> Mysql database server can be ran with xampp application  
> Installation: https://www.apachefriends.org/  
> Guide: https://hevodata.com/learn/xampp-mysql/  


1. **npm install** in main folder
2. **npm install** in server folder
3. **npm install** in client folder
4. Update database information in /server/config/config.json with newly created database
5. **npm run seq-sync** in server folder
6. **npm run dev** in main folder
