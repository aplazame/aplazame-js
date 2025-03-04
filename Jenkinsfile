library "aplazame-shared-library"

pipeline {
  agent {
    kubernetes {
      yamlFile "/php.yaml"
    }
  }
  environment {
    FOLDER = "dist"
    foldersCache = '"vendor/"'
  }
  options {
    disableConcurrentBuilds()
    ansiColor('xterm')
  }
  stages {
    stage('Test Sonarqube') {
      when {
        not {
          tag "*"
        }
        beforeAgent true
      }
      agent {
        kubernetes {
          yamlFile "/jenkins-sonar.yaml"
        }
      }
      environment {
        SONAR_TEST = credentials('SONAR_TEST')
        CODE_SOURCE_DEFAULT = "src"
      }
      steps {
        scmSkip()
        container('sonar') {
        sonarScan(SONAR_TEST,CODE_SOURCE_DEFAULT)
        }
      }
    }
    //stage("Get cache") {
    //  steps {
    //    script {
    //      HASH = sh(script: 'md5sum composer.json | awk \'{print \$1}\'', returnStdout: true).trim()
    //      CACHE_KEY = 'v1-dependencies-' + HASH
//
    //      container('php') {
    //        loadCache(CACHE_KEY)
    //      }
    //    }
    //  }
    //}
    //stage("Composer Install") {
    //  steps {  
    //      container('php') {
    //        sh """
    //          composer install -n --prefer-dist
    //        """
    //      }
    //  }
    //}
    //stage("Upload Cache") {
    //  steps {  
    //    container('php') {
    //      saveCache(CACHE_KEY,["${foldersCache}"])
    //    }
    //  }
    //}
    //stage("CS Style") {
    //  steps {  
    //    container('php') {
    //      sh """
    //        make style
    //      """
    //    }
    //  }
    //}
  }
}
