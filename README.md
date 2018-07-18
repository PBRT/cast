# Cast

Show some sweet stories avec 'eux'

## To install

You need to install first the database and then to install the front-end

### Database

Go there and install the one for you (mac/linux/windows).

!!! CAREFUL !!!
When you install, they'll give you a username and a password. Write them down, you'll need them for the next. Retrieve that shit is always a pain!
https://www.postgresql.org/docs/8.1/static/index.html

One it's installed locally, run the following in a new terminal
1- Create the database

```
createdb casto
```

2- Connect to the database

```
psql casto
```

3- Create a table (data model)

```
create table stories (title varchar(50) NOT NULL, description varchar(500) NOT NULL, timestamp bigint NOT NULL);
```

4- Check if it's fine by running this:

```
\d stories
```

You should see the detail of the table. Working? Cool!! Now let's add that to your env variable.
If you're on window, forget it
If you're on linux, let me know

For starting let's forgot about that, just go to /cast/server/postgres-driver.js and follow the instructions.

Did you do it? cool now let's carry on

### Front-end

Make sure you run the correct minimum node version (v8.6.0)
To check the node version, run `node --version`
To update the node version, install nvm https://github.com/creationix/nvm

First run the server

```
npm install
node server
```

Then open a new terminal (don't close this one), and run the client

```
npm run start
```

Then go to http://localhost:3001

Go to create a story (top right in the navigation bar), create one and make sure it's working. If not, contact this good old piero.

I put comments everywhere in the code to explain stuff
