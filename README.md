# Filecoin Storage Gateway


# Dev environment setup

Prerequisites.

### Nginx Web Server.
* Listen on port 8081. 
* Reverse proxy to NPM run on port 3000, 
* Reverse proxy Singularity API paths at port 7001

Eg nginx.conf:
```
    server {
        listen       8081;
        server_name  localhost;
	autoindex on;
        #charset koi8-r;
        #access_log  logs/host.access.log  main;

        location / {
                proxy_pass http://localhost:3000;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
        }

        location /preparations {
                proxy_pass http://localhost:7001;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
        }
```

start services.

```
make start
```

Browse to main HTTP gateway port.

On MacOS, once NPM starts, your browser should auto-open to localhost:3000 by default. 
However, in order to have API calls work (and avoid cross-origin resource sharing CORS browser errors) browse to the Nginx reverse proxy instead as the main HTTP gateway: [http://localhost:8081](http://localhost:8081)

Nginx is the front end gateway (port 8081) hosting backends: 
* Node ReactJS UX (port 3000), 
* Singularity preparations API,
* ... etc APIs, Boost APIs. 

### Test

Generate test data and prepare into cars.
```
test/scripts/case1.sh
```

> Work-in-progress...

