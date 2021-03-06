# Docker Demo

## Table of Contents
* [Docker CLI Commands](#docker-cli-commands)
  - [TLDR;](#tldr)
  - [Detailed List](#detailed-list)
* [Dockerfile](#dockerfile)
* [Docker Compose](#docker-compose)

## Docker CLI Commands
List of some basic command of docker cli.

### TLDR;
```bash
$ docker pull ubuntu

$ docker run -p 3306:3306 \
             -v $(pwd)/mysql-data:/var/lib/mysql \
             -e MYSQL_ROOT_PASSWORD=toor \
             -e MYSQL_DATABASE=SpringTEST \
             -e MYSQL_USER=test_user \
             -e MYSQL_PASSWORD=root \
             -d \
             --name mysql_for_spring \
             mysql

$ docker ps

$ docker exec -it ubuntu bash

$ docker inspect mysql_for_spring # get detailed information for the container

$ docker stop mysql_for_spring # you can use container id instead of container name (mysql_for_spring)
$ docker start mysql_for_spring
$ docker restart mysql_for_spring

$ docker rm mysql_for_spring # for containers
$ docker rmi mysql # for images

$ docker images # list images
$ docker container ls # list containers
```

* to get a new image from [Docker Hub](https://hub.docker.com/)
  ```bash
  docker pull ubuntu
  ```

---

### Detailed List

* to run an image
  ```bash
  docker run redis
  ```
  > if the image is not exist on your computer, docker pull it first and run after that.

    - if the image is run an attachable program, then the command block the terminal (attach mode). You can bypass this with `-d` parameter.
    ```bash
    docker run -d elasticsearch:5-alpine
    ```
    - if an image expose a port and you want to use that port, you need to expose it.
      ```bash
      docker run -p 8080:80 nginx
      ```
      > the previous command run an `nginx` image and `publish` (`-p` stands for), container's 80 port to host machine 8080 port.

    - you can set a container name with `docker run` command
      ```bash
      docker run -p 9042:9042 --name mycassandra cassandra
      ```
      > this command create a docker container and name it as `mycassandra`. at any point in time you can _**start**_, _**stop**_, _**restart**_ the container with name. If you omit `--name` parameter docker set a random 2-word name to a container.
    
    - you can bind volumes(mount a path from host to a container's path) with `docker run`
      ```bash
      docker run -v <PATH_TO_HOST_FOLDER>:<PATH_TO_CONTAINER_FOLDER> ubuntu
      ```
      > `<PATH_TO_HOST_FOLDER>` and `<PATH_TO_CONTAINER_FOLDER>` needs to be absolute path of the folder. You can use `$(pwd)` to get current working dir for `<PATH_TO_HOST_FOLDER>`, or `$HOME` get your user's home dir
    
    - you can pass an environment variable to image (actually container)
      ```bash
      docker -e VAR1=value1 ubuntu
      ```

> NOTE: when an image runs, you will get a container.

---

* to list all running container
  ```bash
  docker ps
  ```

---

* to run a `command` in a running container
  ```bash
  docker exec -it <CONTAINER_ID> <COMMAND>
  # <CONTAINER_ID> is the ID of container. you can obtain it `docker ps` command.
  # <COMMAND> is can be any command that is valid for the container.
  # !!! CAUTION: every linux distribution does not have `bash` installed. You can use `sh` instead.
  ```
    - `-i`: Keep STDIN open even if not attached
    - `-t`: Allocate a pseudo-TTY
    - TLDR; with `-it` parameters you can interact with container' TTY with enable coloring output.
    > you can use container's name instead of `<CONTAINER_ID>`

    > Its enough to pass first 3 char of <CONTAINER_ID> as argument.

* to run image and immediately execute command in the container
  ```bash
  docker run -it ubuntu sh # ubuntu: <IMAGE_NAME>, sh: <COMMAND>
  ```

---

* to stop/start/restart a container
  ```bash
  docker <ACTION> <CONTAINER_ID> # <ACTION> can be stop, start, restart
  ```
  > you can use container's name instead of `<CONTAINER_ID>`

---

* to remove container
  ```bash
  docker rm <CONTAINER_ID>
  ```
  > you can use container's name instead of `<CONTAINER_ID>`

* to remove image
  ```bash
  docker rmi <IMAGE_NAME>
  ```
  > you can use container's name instead of `<CONTAINER_ID>`

---

## Dockerfile
> Source code is available [here](https://github.com/molcay/DockerPresentationDemo).
* `Dockerfile` Sample 
  ```Dockerfile
  # extend image (base image)
  FROM python:3.6.6-alpine

  # Copy source file to container
  COPY sa /app

  # Change working directory in container
  WORKDIR /app

  # Install dependencies
  RUN pip3 install -r requirements.txt && \
    python3 -m textblob.download_corpora

  # Expose 5000 port (actually do nothing, this is for documentation purposes only)
  EXPOSE 5000

  # Sets the command and parameters that will be executed first when a container is run.
  ENTRYPOINT ["python3"]

  # Parameters for the ENTRYPOINT
  CMD ["sentiment_analysis.py"]
  ```

* Extended `Dockerfile` sample
  ```Dockerfile
  # Step 1: Build
  FROM maven:3-jdk-8-alpine as builder

  # Copy source file to container
  COPY ./ /app/build/

  # Change working directory in container
  WORKDIR /app/build/

  # Package application
  RUN mvn install

  # Step 2: Publish
  FROM openjdk:8-jre-alpine

  # Environment Variable that defines the endpoint of sentiment-analysis python api.
  ENV SA_LOGIC_API_URL http://localhost:5000

  # Copy packaged application from builder step to /app/ folder
  COPY --from=builder /app/build/target/sentiment-analysis-web-0.0.1-SNAPSHOT.jar /app/

  # Change working directory in container
  WORKDIR /app/

  # Expose 8080 port (actually do nothing, this is for documentation purposes only)
  EXPOSE 8080

  CMD ["java", "-jar", "sentiment-analysis-web-0.0.1-SNAPSHOT.jar", "--sa.logic.api.url=${SA_LOGIC_API_URL}"]
  ```

* build `image` from a `Dockerfile`
  ``` 
  docker build -f <DOCKERFILE_PATH> -t <IMAGE_NAME:TAG> <CONTEXT>
  # docker build -f sa-webapp/Dockerfile -t linovi/sa-webapp sa-webapp
  ```
  
---

## Docker Compose
> Source code is available [here](https://github.com/molcay/DockerPresentationDemo/tree/compose).

!!! TODO
