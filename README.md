# WEB-MPC

Implementation of a web-based data collection and aggregation infrastructure that utilizes secure multi-party computation techniques to allow individual contributors to submit their data without revealing it to the other participants.

![Technical Architecture](https://i.imgur.com/AEkpa1g.png)

## Requirements

* Node.js
* MongoDB
* [JIFF](https://github.com/BU-Spark/jiff/) (Bundled as a Git submodule)

## Directory
- [WEB-MPC](#web-mpc)
  - [Requirements](#requirements)
  - [Directory](#directory)
- [Quick Start Instructions](#quick-start-instructions)
- [Deployment Instructions](#deployment-instructions)
  - [Enabling SSL](#enabling-ssl)
  - [Local Machine Instructions](#local-machine-instructions)
- [Deployments](#deployments)
    - [Specifying a Deployment](#specifying-a-deployment)
- [Usage](#usage)
    - [Generate session key](#generate-session-key)
    - [Manage session](#manage-session)
    - [Fill out data](#fill-out-data)
    - [Retrieve the result](#retrieve-the-result)
- [Testing](#testing)
- [Website & Software Flowchart](#website--software-flowchart)
  - [Create a session](#create-a-session)
  - [Add cohorts & participants](#add-cohorts--participants)
  - [Change session status](#change-session-status)
  - [Stop session & unmask and display aggregate data](#stop-session--unmask-and-display-aggregate-data)
  - [Submit data as a participant](#submit-data-as-a-participant)
- [License](#license)

# Quick Start Instructions

These instructions are for demonstration and development purposes only. For a full, secure deployment, follow one of the two full instructions below.

* Install and start MongoDB
* Clone WEB-MPC
```
git clone https://github.com/BU-Spark/web-mpc.git
cd web-mpc/
```
* Clone the JIFF submodule
```
git submodule init
git submodule update
```
* Install WEB-MPC dependencies
```
npm install
```
* Install JIFF dependencies
```
cd jiff/
npm install
cd ../
```
Note that installing WEB-MPC dependencies will break JIFF's dependencies. Hence, JIFF dependencies **must** be installed at least once after each install of WEB-MPC dependencies.
* Select the WEB-MPC deployment. See the [Deployments](#Deployments) section
* Start the WEB-MPC server
```
npm start
```
* Navigate to the website at `https://localhost:8080`

# Deployment Instructions
These instructions are written for an GCP Compute Engine instance running Ubuntu 18.04 LTS. It should also allow SSH on port 22 and TCP on port 8080.

* SSH onto the Compute Engine instance
* First, install the Node.js version manager and activate it
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
```
* Next, install the latest version of Node.js. This also installs the Node package manager (npm). 
```
nvm install node
```
* Install MongoDB:
https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/
* Clone the WEB-MPC repository
```
git clone https://github.com/BU-Spark/web-mpc.git
cd web-mpc/
```
* Set up the JIFF submodule:
```
git submodule init
git submodule update
```
* Install WEB-MPC dependencies
```
npm install
```
* Install JIFF dependencies
```
cd jiff/
npm install
cd ../
```
Note that installing WEB-MPC dependencies will break JIFF's dependencies. Hence, JIFF dependencies **must** be installed at least once after each install of WEB-MPC dependencies.
* Install the `forever` global dependency to ensure the server runs continuously
```
npm install -g forever
```
* Install authbind:
```
sudo apt-get install -y authbind
```
* Next, set up the database file and start the MongoDB server:
```
sudo mkdir -p /data/db
sudo mongod &
```
* Select the WEB-MPC deployment. See the [Deployments](#Deployments) section
* Start the WEB-MPC server
```
cd server/
authbind --deep forever start -o log.txt -e error.txt index.js
```
* Navigate to the domain or to the Compute Engine instance's public IP address to view the page

## Enabling SSL
The application does not work over HTTP traffic. In order to enable HTTPS:

* Add an DNS A record to the VM's external IP
* SSH into Compute Engine
* Install Nginx
```
sudo apt update
sudo apt install nginx
```
* Configure Nginx to serve node app
```
sudo su -
cd ..
cd /etc/nginx/sites-available
touch myserver.config
```
* Open the configuration file
```
sudo vim /etc/nginx/sites-available/myserver.config
```
* Paste in the following configuration
```
#The Nginx server instance
server{
    listen 80;
    server_name your.domain;
    location / {
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $host;
        proxy_pass http://127.0.0.1:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```
* Enable the configuration file
```
sudo ln -s /etc/nginx/sites-available/myserver.config /etc/nginx/sites-enabled/
```
* Obtain the SSL/TLS certificate
```
apt-get update
sudo apt-get install certbot
apt-get install python3-certbot-nginx
sudo certbot --nginx -d myserver.com -d
```
* Restart Nginx and allow access through firewall
```
sudo systemctl restart nginx
sudo ufw allow 'Nginx Full'
```
* Restart the app server
```
authbind --deep forever start -o log.txt -e error.txt index.js
```

## Local Machine Instructions
These instructions describe steps to deploy WEB-MPC on a local machine.

* Install and start MongoDB
* Clone WEB-MPC
```
git clone https://github.com/BU-Spark/web-mpc.git
cd web-mpc/
```
* Clone the JIFF submodule
```
git submodule init
git submodule update
```
* Install WEB-MPC dependencies
```
npm install
```
* Install JIFF dependencies
```
cd jiff/
npm install
cd ../
```
Note that installing WEB-MPC dependencies will break JIFF's dependencies. Hence, JIFF dependencies **must** be installed at least once after each install of WEB-MPC dependencies.
* Install the `forever` global dependency to ensure the server runs continuously
```
sudo npm install -g forever
```
* Create the database file:
```
mkdir -p /data/db
```
* Start the MongoDB server
```
mongod
```
* Set environment variables for a production deployment
```
export NODE_ENV=production
```
* Select the WEB-MPC deployment. See the [Deployments](#Deployments) section
* Start the WEB-MPC server
```
forever start server/index.js
```
* Open up the browser and navigate to "localhost:8080"

# Deployments

WEB-MPC supports multiple deployments. A deployment refers to one particular data collection campaign. Each deployment may have different data formats, domain names, and HTTPS certificate settings.

The `server/config/` directory contains configuration files for each deployment specifying their respective HTTPS parameters and data templates.

Data templates are `.json` files that define the structure of the input data. The templates are also used to render the HTML UI. Paths to the each data template is defined in its respective `server/config` configuration file and are typically located in `client/app/data/`.

### Specifying a Deployment

The deployment is set to Pacesetters by default. To change it, set a deployment environment variable.
```bash
export WEBMPC_DEPLOYMENT=<deployment_name>
```
If the deployment template file at `server/config/<deployment_name>.json` does not exist or is invalid, the server will fail to start.

# Usage

The instructions below demonstrate how to operate the WEB-MPC application. All steps below are performed on the WEB-MPC web application in the browser.

### Generate session key

* Navigate to `localhost:8080/create`
* Click on **Generate Session** and save the two given files, one contains the session key and password which are needed for managing the session. The other contains a secret key needed to unmask the results.

### Manage session

* Navigate to `localhost:8080/manage`
* Input your session key and password
* Generate participation links
* Start the session

### Fill out data

* All participants will open a unique participation link, and proceed to fill out the information. Once completed, click **Submit**.

### Retrieve the result

* Stop the session in `localhost:8080/manage`
* Click the **unmask** link
* Paste the session key and password in its designated fields
* Click **Browse** and upload the private key file that was downloaded when generating the session key
* Click **Unmask Data** and view the result

# Testing

WEB-MPC has end-to-end tests verifying each deployment. To run the full test suite on Linux or Mac OS, run the following command:
```
npm run test
```
The test automatically spawns the appropriate server and runs the end-to-end tests for each deployment, shutting down the previous server in between tests.

Node.js is not able to kill the previous server on Windows. Hence, each test suite must be run separately.

To run a specific test suite, run the specific suite with `mocha`:
```
mocha test/selenium/<deployment_name>.js
```
or run the test with a filter:
```
npm run test -- --grep <test_suite_name>
```

For example, to run the BWWC tests, run one of the following:
```
mocha test/selenium/bwwc.js
npm run test -- --grep BWWC
```

# Website & Software Flowchart

## Create a session
To create a session, enter the <b>CREATE page</b> at `<url address>/create` (for example, if the website is run locally then it'll be at `localhost:8080/create`). The image below demonstrates the software flow from creating a session:

![create a session flow](https://i.imgur.com/6GKOPQe.png)
## Add cohorts & participants
After creating a session, the host will be redirected to the <b>MANAGE</b> page (`/manage?session=<session-id>`). Then the host can add cohorts and participants as shown in the flow below:

![Imgur](https://i.imgur.com/eCbfPQh.png)
## Change session status
Inside the session page, you can pause your session and resume it; however, if you stop the session, you won't be able to resume it.

![change-session](https://i.imgur.com/lOaJnf8.png)

## Stop session & unmask and display aggregate data
Host can stop the session and unmask the aggregate data, which requires the session id and password plus the private key that was automatically downloaded when the host started the session.

![stop-session](https://i.imgur.com/t8GliHO.png)
## Submit data as a participant
Retrieve the url from the host session to submit data as a participant. Keep in mind that all data shared through jiff have to be numerical (type `number` in javascript) since jiff only does mathematical computation.

![submit-data](https://i.imgur.com/vpfU3sk.png)
# License
WEB-MPC is freely distributable under the terms of the [MIT license](https://github.com/BU-Spark/web-mpc/blob/master/LICENSE). This release supports Handsontable's "[Nested headers](https://docs.handsontable.com/pro/1.17.0/demo-nested-headers.html)", a Pro feature. A [valid license](https://handsontable.com/pricing) must be obtained when using this feature.
