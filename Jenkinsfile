pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
              bat 'npm install'
            }
        }
        stage('Test') {
            steps {
               script {
                 bat 'npm test'
                 bat 'npm run cypress'
               }
            }
            post {
              always {
                junit 'test-results.xml'
                junit 'test-results-cypress.xml'
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
