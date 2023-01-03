pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
              sh 'npm install'
            }
        }
       
        stage('Test') {
            steps {
               script {
                 sh 'npm test || exit 0'
                 //   sh 'npm run cypress'
               }
            }
            
            post {
              always {
                junit 'test-results.xml'
                publishCoverage adapters: [coberturaAdapter(path : 'coverage/cobertura-coverage.xml',   thresholds :  [
                  [thresholdTarget: 'Conditional', unhealthyThreshold: 0, unstableThreshold: 0],
                  [thresholdTarget: 'Line', unhealthyThreshold: 87, unstableThreshold: 87],// Lineas de codigo por proyecto
                  [thresholdTarget: 'Function', unhealthyThreshold: 80, unstableThreshold: 80]] )]
               // junit 'test-results-cypress.xml'
              }
            }
        }
         stage('Package') {
            steps {
               archiveArtifacts artifacts: '**', excludes : '.tmp,coverage,cypress,node_modules,tests,.nycrc,.sailsrc,Gruntfile.js,Jenkinsfile'
            }
          
        }
        stage('Publish') {
            steps {
               script {
                   sh 'npm publish'
               }
            }
         }

        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
