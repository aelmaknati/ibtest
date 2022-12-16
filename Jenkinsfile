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
                 bat 'START node app.js'
                 bat 'npm run cypress'
               }
            }
            post {
              always {
                junit 'test-results.xml'
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
