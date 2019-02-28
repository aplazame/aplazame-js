/* global requirejs */

requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'scripts',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    /* eslint-disable */
    paths: {
      aplazame: '$if{ dev }../dist/aplazame{:}https://$if{release}{:}cdn-dev.{/}aplazame.com/aplazame{/}'
      // aplazame: '$if{ dev }/dist/aplazame.js{:}https://cdn.aplazame.com/aplazame.js{/}#sandbox=true&public_key=12093289b594f50d3971e4719eedd5c314ceb6ba'
    }
    /* eslint-enable */
});

requirejs(['demo-article-require']);
