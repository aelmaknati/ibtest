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
                publishCoverage adapters: [coberturaAdapter(path : 'coverage/cobertura-coverage.xml' , thresholds :[unstableThreshold : 80.0])]
               // junit 'test-results-cypress.xml'
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
