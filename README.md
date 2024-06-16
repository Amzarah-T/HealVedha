# HealVedha
Ayurvedic Web Portal

Embrace the Ancient Wisdom of Ayurweda for a healthier, balanced life.


Creating migrations
1. npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
2. npx sequelize-cli db:migrate
3. npx sequelize-cli db:migrate:undo
4. npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js
5. npx sequelize-cli seed:generate --name demo-user
6. npx sequelize-cli db:seed:all