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
               script {
                 archiveArtifacts artifacts: '*',
                 //   sh 'npm run cypress'
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
