module.exports = {
    'shared-libs-prod': {
        entry: './<%= globalConfig.srcdir %>/scripts/shared-libs.js',
        compile: './<%= globalConfig.resourcesdir %>/assets/js/shared-libs.js',
        options: {
            expose: {
                files: [
                    {
                        cwd: '<%= globalConfig.app %>/bower_components/',
                        src:
                            [
                                'angular/angular.min.js',
                                'angular-animate/angular-animate.min.js',
                                'angular-bootstrap/ui-bootstrap.min.js',
                                'angular-bootstrap/ui-bootstrap-tpls.min.js',
                                'angular-cookies/angular-cookies.min.js',
                                'angular-loading-bar/build/loading-bar.min.js',
                                'angular-resource/angular-resource.min.js',
                                'angular-route/angular-route.min.js',
                                'angular-sanitize/angular-sanitize.min.js',
                                'angular-ui-router/release/angular-ui-router.min.js',
                                'angular-ui-router.stateHelper/statehelper.min.js',
                                'bootstrap-sass-official/assets/javascripts/bootstrap.min.js',
                                'es5-shim/es5-shim.min.js',
                                'jquery/jquery.min.js',
                                'jquery-ui/ui/minified/jquery-ui.min.js',
                                'json3/lib/json3.min.js'
                            ]
                    }
                ]
            }
        }
    },
    'shared-libs-dev': {
        entry: './<%= globalConfig.srcdir %>/scripts/shared-libs.js',
        compile: './<%= globalConfig.resourcesdir %>/assets/js/shared-libs.js',
        options: {
            expose: {
                files: [
                    {
                        cwd: '<%= globalConfig.app %>/bower_components/',
                        src:
                            [
                                'angular/angular.js',
                                'angular-animate/angular-animate.js',
                                'angular-bootstrap/ui-bootstrap.js',
                                'angular-bootstrap/ui-bootstrap-tpls.js',
                                'angular-cookies/angular-cookies.js',
                                'angular-loading-bar/build/loading-bar.js',
                                'angular-resource/angular-resource.js',
                                'angular-route/angular-route.js',
                                'angular-sanitize/angular-sanitize.js',
                                'angular-ui-router/release/angular-ui-router.js',
                                'angular-ui-router.stateHelper/statehelper.js',
                                'bootstrap-sass-official/assets/javascripts/bootstrap.js',
                                'es5-shim/es5-shim.js',
                                'jquery/jquery.js',
                                'jquery-ui/ui/jquery-ui.js',
                                'json3/lib/json3.js'
                            ]
                    }
                ]
            }
        }
    },
    'app-prod': {
        entry: './<%= globalConfig.srcdir %>/app.js',
        compile: './<%= globalConfig.resourcesdir %>/assets/js/app.js',
        debug: false,
        options: {
            expose: {
                'app-templates':'./<%= globalConfig.tmpdir %>/app-templates.js'
            }
        }
    },
    'app-dev': {
        entry: './<%= globalConfig.srcdir %>/app.js',
        compile: './<%= globalConfig.resourcesdir %>/assets/js/app.js',
        debug: true,
        options: {
            expose: {
                'app-templates':'./<%= globalConfig.tmpdir %>/app-templates.js'
            }
        }
    },
    'app-config': {
        entry: './<%= globalConfig.srcdir %>/scripts/config.js',
        compile: './<%= globalConfig.resourcesdir %>/assets/js/config.js'
    }
};
