/// <reference path="../all.references.ts" />

module Controllers {
    class HomeController {
        constructor() {
            console.log("HOMECONTROLLER");
        }
    }

    export class HomeControllerRegister {
        constructor($module: angular.IModule) {
            $module.controller($injections.Controllers.HomeController, HomeController);
        }
    }
}