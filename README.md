# Teaching-HEIGVD-RES-2016-Labo-HTTPInfra

## Objectives

The first objective of this lab is to get familiar with software tools that will allow us to build a **complete web infrastructure**. By that, we mean that we will build an environment that will allow us to serve **static and dynamic content** to web browsers. To do that, we will see that the **apache httpd server** can act both as a **HTTP server** and as a **reverse proxy**. We will also see that **express.js** is a JavaScript framework that makes it very easy to write dynamic web apps.

The second objective is to implement a simple, yet complete, **dynamic web application**. We will create **HTML**, **CSS** and **JavaScript** assets that will be served to the browsers and presented to the users. The JavaScript code executed in the browser will issue asynchronous HTTP requests to our web infrastructure (**AJAX requests**) and fetch content generated dynamically.

The third objective is to practice our usage of Docker. All the components of the web infrastructure will be packaged in custom Docker images (we will create at least 3 different images).

## General instructions

* The lab has to be done individually. You will learn very important skills and tools, which you will need to next year's courses. You cannot afford to skip this content if you want to survive next year.
* It is your responsibility to schedule the demo sessions (plan ahead and show your results ASAP).
* Be careful with the deadlines (2 steps are due on June 8th).
* Read carefully all the acceptance criteria.
* When you do your demo, be prepared to that you can go through the procedure quickly (there are 54 solutions to evaluate!)


## Step 1: Static HTTP server with apache httpd

### Webcasts

* [Labo HTTP (1): Serveur apache httpd "dockerisé" servant du contenu statique](https://www.youtube.com/watch?v=XFO4OmcfI3U)

### Acceptance criteria

* You have a GitHub repo with everything needed to build the Docker image.
* You do a demo, where you build the image, run a container and access content from a browser.
* You have used a nice looking web template, different from the one shown in the webcast.
* You are able to explain what you do in the Dockerfile.
* You are able to show where the apache config files are located (in a running container).
* You must have done the demo on May 25th at the latest.

### Command
* docker build -t res/apache_php .
* docker run -d -p 1234:80 res/apache_php
* 192.168.42.42:1234
* docker exec -it nameContain /bin/bash
* cd /etc/apache2


## Step 2: Dynamic HTTP server with express.js

### Webcasts

* [Labo HTTP (2a): Application node "dockerisée"](https://www.youtube.com/watch?v=fSIrZ0Mmpis)
* [Labo HTTP (2b): Application express "dockerisée"](https://www.youtube.com/watch?v=o4qHbf_vMu0)

### Acceptance criteria

* You have a GitHub repo with everything needed to build the Docker image.
* You do a demo, where you build the image, run a container and access content from a browser.
* You generate dynamic, random content and return a JSON payload to the client.
* You cannot return the same content as the webcast (you cannot return a list of people).
* You don't have to use express.js; if you want, you can use another JavaScript web framework or event another language.
* You must have done the demo on June 1st at the latest.

### Command
* Quand on démarre une nouvelle application node.js on fait npm init
* name step2
* version 0.1.0
* enter.. enter..etc -> crlation de package.json
* Dans le répertoire de package : npm install --save chance // le module npm s'appelle chance
* Il crée node_modules et met la dépendance dans package
* On crée le fichier js définis dans dockerfile
* chance.name() génère des noms aléatoire
* docker build -t res/step2 . //. dossier courant comme contexte
* docker run res/step2  //Quand un container lance un script et qu'il est fini alors container s'arrete
* docker ps -a voir les anciens container
* docker run -it res/step2 /bin/bash
* node -v
* dans /opt/app on voit les fichiers de src
* //////////////Fin video 1
* npm install --save express pour le framework du serveur http
* npm install --no-bin-links express --save
* modifier le fichier js pour créer le serveur
* node labo2.js //Demarre le serveur sur 3000
* telnet localhost 3000
* GET / HTTP/1.0
* GET /r2d2 HTTP/1.0
* docker inspect nom_container //recup l'adresse ip

*docker run -p 1234:3000 res/step2
* docker run -d -p 1234:80 res/apache_php
* 192.168.42.42:1234


## Step 3: Reverse proxy with apache (static configuration)

### Webcasts

* [Labo HTTP (3a): reverse proxy apache httpd dans Docker](https://www.youtube.com/watch?v=WHFlWdcvZtk)
* [Labo HTTP (3b): reverse proxy apache httpd dans Docker](https://www.youtube.com/watch?v=fkPwHyQUiVs)
* [Labo HTTP (3c): reverse proxy apache httpd dans Docker](https://www.youtube.com/watch?v=UmiYS_ObJxY)


### Acceptance criteria

* You have a GitHub repo with everything needed to build the Docker image for the container.
* You do a demo, where you start from an "empty" Docker environment (no container running) and where you start 3 containers: static server, dynamic server and reverse proxy; in the demo, you prove that the routing is done correctly by the reverse proxy.
* You can explain and prove that the static and dynamic servers cannot be reached directly (reverse proxy is a single entry point in the infra). 
* You are able to explain why the static configuration is fragile and needs to be improved.
* You must have done the demo on June 8th at the latest.


## Step 4: AJAX requests with JQuery

### Webcasts

* [Labo HTTP (4): AJAX avec JQuery](https://www.youtube.com/watch?v=fgpNEbgdm5k)

### Acceptance criteria

* You have a GitHub repo with everything needed to build the various images.
* You do a complete, end-to-end demonstration: the web page is dynamically updated every few seconds (with the data coming from the dynamic backend).
* You are able to prove that AJAX requests are sent by the browser and you can show the content of th responses.
* You are able to explain why your demo would not work without a reverse proxy (because of a security restriction).
* You must have done the demo on June 8th at the latest.

## Step 5: Dynamic reverse proxy configuration

### Webcasts

* [Labo HTTP (5a): configuration dynamique du reverse proxy](https://www.youtube.com/watch?v=iGl3Y27AewU)
* [Labo HTTP (5b): configuration dynamique du reverse proxy](https://www.youtube.com/watch?v=lVWLdB3y-4I)
* [Labo HTTP (5c): configuration dynamique du reverse proxy](https://www.youtube.com/watch?v=MQj-FzD-0mE)
* [Labo HTTP (5d): configuration dynamique du reverse proxy](https://www.youtube.com/watch?v=B_JpYtxoO_E)
* [Labo HTTP (5e): configuration dynamique du reverse proxy](https://www.youtube.com/watch?v=dz6GLoGou9k)

### Acceptance criteria

* You have a GitHub repo with everything needed to build the various images.
* You have found a way to replace the static configuration of the reverse proxy (hard-coded IP adresses) with a dynamic configuration.
* You may use the approach presented in the webcast (environment variables and PHP script executed when the reverse proxy container is started), or you may use another approach. The requirement is that you should not have to rebuild the reverse proxy Docker image when the IP addresses of the servers change.
* You are able to do an end-to-end demo with a well-prepared scenario. Make sure that you can demonstrate that everything works fine when the IP addresses change!
* You are able to explain how you have implemented the solution and walk us through the configuration and the code.
* You must have done the demo on June 15th at the latest.

## Optional steps

### Load balancing: multiple server nodes

* You extend the reverse proxy configuration to support load balancing. 
* You show that you can have multiple static server nodes and multiple dynamic server nodes. 
* You prove that the load balancer can distribute HTTP requests between these nodes.

### Load balancing: round-robin vs sticky sessions

* You do a setup to demonstrate the notion of sticky session.
* You prove that your load balancer can distribute HTTP requests in a round-robin fashion to the dynamic server nodes (because there is no state).
* You prove that your load balancer can handle sticky sessions when forwarding HTTP requests to the static server nodes.

### Dynamic cluster management

* You develop a solution, where the server nodes (static and dynamic) can appear or disappear at any time.
* You show that the load balancer is dynamically updated to reflect the state of the cluster.
* You describe your approach (are you implementing a discovery protocol based on UDP multicast? are you using a tool such as serf?)

### Management UI

* You develop a web app (e.g. with express.js) that administrators can use to monitor and update your web infrastructure.
* You find a way to control your Docker environment (list containers, start/stop containers, etc.) from the web app. For instance, you use the Dockerode npm module (or another Docker client library, in any of the supported languages).