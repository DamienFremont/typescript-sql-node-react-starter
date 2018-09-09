typescript-sql-node-react
=========================

This technical stack is not the state-of-the-art, but a stable one (no need to wory for 1-2 years). It's usefull for long-term support apps, like Business or IT Intranet webapps.

![alt text](README-tech-stack.png)

![alt text](README-tech-architecture.png)

# Stack

* typescript
* material
* react
* passport
* express
* swagger
* sequelize

# Usage

Get
```
git clone 
cd my-app
```

Execute DEV

```
npm install -g create-react-app
npm install
npm run dev
```

Execute PROD
* linux & mac: `export NODE_ENV=production`
* windows: `set NODE_ENV=production`
* win powershell: `$env:NODE_ENV = "production"`
```
npm install
npm run heroku-postbuild
npm start
```

Use it
* Go to [http://localhost:3000](http://localhost:3000)
* Login with 'user', 'superuser' or 'admin' (login=password).

# Details

You'll find other posts about this starter here:

* packaging
  * versions
    * fixed
  * dev-build
  * prod-build
  * envs
    * properties
  * dataset
    * sql
    * message
  * rendering
    * client-side
    * server-side
    * isomorphic

* app
  * multilingual-i18n
  * structure
    * package
    * component
    * layers
  * layout
    * breadcrumb
    * navbar
    * help

* form
  * edit-toolbar
  * form-exemple
  * form-validation
  * date-picker 

* datatable  
  * table
  * table-modal     
  * table-sort
  * table-filtering
  * table-pagination
  * table-export     
  * table-expand-row

* authent
  * Tocken
  * OAuth2

* security
  * role-rights
  * page
  * routes

* workflow
  * front
  * back

* COMING SOON:

* file
  * download
  * upload
    * browse
    * drop
    * preview

* tools
  * VSC
    * settings
    * shortcuts
    * plugins
      * TS Hero
      * TODO
      * Debugger
  * Chromium
    * REST Client

* model
  * domain
    * join
  * references
    * code-name
    * label
  * entities
    * id
    * modified-by-at
    * created-by-at
    * deleted-by-at
  * uuid
  * history
    * version
    * history
    * event

* API
  * private-public
  * version
  * multilingual-i18n
  * authent
  * security

* templating
  * Mail


* tests
  * unit
  * integration
  * user-interface

* cucumber
  * Editor NON-DEV
  * build
  * refactor

* charts
  * line
  * bar

# References

* create react https://github.com/Microsoft/TypeScript-React-Starter
* https://esausilva.com/2017/11/14/how-to-use-create-react-app-with-a-node-express-backend-api/