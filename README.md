# Alibaba REST Countries API

## About Project

This project is a mini project that you can find some information about counteries.

- Find counteries by search their name
- Searching using the keywords `Grmany`, `Grmny` or `Grmn` also work
- Filter counteries by region
- Sort counteries by thair `Name` and `Population`
- Click countery to view more detailed information
- Border counteries mentioned in countery detail page and by clicking on them, you link to details of those counteries 

<br />

## Packages


> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) with [Typescript Template](https://create-react-app.dev/docs/adding-typescript/).

packages that used in the project

- Using [react-router-dom](https://www.npmjs.com/package/react-router-dom) to create router
- Using [bootstrap](https://www.npmjs.com/package/bootstrap) to style the project
- Using [font awesome](https://fontawesome.com) for add icon

<br />

## Dockerized
> There are four files:
>- [***"Dockerfile.dev"***](Dockerfile.dev) for *development envirenment* 
>- [***"Dockerfile"***](Dockerfile) for *production envirenment*.
>- [***".dockerignore"***](.dockerignore) to exclude unnecessary files
>- [***"nginx.conf"***](nginx.conf) config file for [**Nginx**](https://www.nginx.com) to serve our static files


<br>

### Create Image
- Create Docker Image on **Development** Envirenment
```sh
$ docker build -f <docker-file=Dockerfile.dev> -t <image-tag> .
```
- Create Docker Image on **Production** Envirenment
```sh
$ docker build -f <docker-file=Dockerfile> -t <image-tag> .
```
> ***`-f`***: The dockerfile path\
***`-t`***: The tag and name of the image\
***`.`***: Context for the build process 

<br />

### Create Contaienr
- Create Container from Image
```sh
$ docker run -it --rm -p [<host-port>:<container-port>] --name <container-name> <image-tag>
```
> ***`-it`***: Create an interactive container\
***`--rm`***: Automatically remove the container when it exits\
***`-p`***: Map host port to container port\
***`--name`***: The container name

<br />

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open http://localhost:3000 to view it in the browser.
