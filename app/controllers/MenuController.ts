/// <reference path="../all.references.ts" />

module Controllers {
    class MenuController {
        constructor() {
            console.log("MenuController");
        }
    }

    export class MenuControllerRegister {
        constructor($module: angular.IModule) {
            $module.controller($injections.Controllers.MenuController, MenuController);
        }
    }
}