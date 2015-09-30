/// <reference path="../all.references.ts" />

module Controllers {
    class SpassController {
        constructor() {
            console.log("SpassController");
        }
    }

    export class SpassControllerRegister {
        constructor($module: angular.IModule) {
            $module.controller($injections.Controllers.SpassController, SpassController);
        }
    }
}