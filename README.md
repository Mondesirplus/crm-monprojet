# CrmMonprojet

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


tp page update client
1. créer un component pour la page update client
2. créer une route pour update client sur client routing
3. créer un container (component) update-client qu'on affiche dans la page
4. utiliser form-client sur update-client.html en lui passant un input qui aura pour valeur un item (correspondant au bon id)
5. sur tous les components qui constituent la page update client, on peut injecter
ActivatedRoute et récupérer le paramètre id de l'url pour appeler this.client$ = this.clientsService.getClient(monid)
6. dans html
<ng-container *ngIf="client$ | async; as client">
<app-form-client [clt]="client"></app-form-client>
</ng-container>