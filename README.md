# rest_api_mysql

This is an example of REST API made with NodeJs working with MySQL.

**Before test the project**

 - Install [NodeJs](https://nodejs.org/en/)
 - Install a package manager ([Yarn](https://yarnpkg.com/en/) recommended)
 - Install [GIT](https://git-scm.com/) in case you want to clone
 - A working database (Test with help of [XAMPP](https://www.apachefriends.org/index.html))

**Test on your computer**

 1. Clone or download the repository
 2. `git clone https://github.com/AlejoMedina98/rest_api_mysql.git`
 3. Install de dependencies
 4. `cd rest_api_mysql && yarn install`
 5. You need to create the system_users table on a database (this is the table the project use for work in the example) You can find the .sql query for create it in `src/db_tables/system_users.sql`
 6. Set the `src/models/connection.js` file to point to your database
 7. Run the project using `node src/index.js` on the root

**Issues**

If you detect any issue, report please.