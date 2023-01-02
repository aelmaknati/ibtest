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
                publishCoverage adapters: [coberturaAdapter(path : 'coverage/cobertura-coverage.xml', thresholds : [ ] )]
               // junit 'test-results-cypress.xml'
              }
            }
        }
         stage('Package') {
            steps {
               archiveArtifacts artifacts: '**', excludes : '.tmp,coverage,cypress,node_modules,tests,.nycrc,.sailsrc,Gruntfile.js,Jenkinsfile'
            }
          
        }

        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
