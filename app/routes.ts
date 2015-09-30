/// <reference path='min.references.ts'/>

module Routes {

    interface IStateProvider extends angular.ui.IStateProvider {
        state(config: any): IStateProvider;
        state(name: string, config: any): IStateProvider;
    }

    class UIRoutesConfig {
        static $inject = [
            $injections.UIRouter.$StateProvider,
            $injections.UIRouter.$UrlRouterProvider
        ];

        constructor($stateProvider: IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {


            $stateProvider.state("menu", {
                url: "/menu",
                abstract: true,
                templateUrl: "app/views/menu.html",
                controller: $injections.Controllers.MenuController
            })
            .state($injections.Routes.HomeState, {
                    url:"/home",
                    views: {
                        'menuContent': {
                            templateUrl: 'app/views/home.html',
                            controller: $injections.Controllers.HomeController
                        }
                    }
                }).state($injections.Routes.SpassState, {
                    url:"/home",
                    views: {
                        'menuContent': {
                            templateUrl: 'app/views/spass.html',
                            controller: $injections.Controllers.SpassController
                        }
                    }
                });

            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/menu/home');
        }
    }


    export class UIRoutesRegister {
        constructor($module: angular.IModule) {
            $module.config(UIRoutesConfig);
        }
    }
}