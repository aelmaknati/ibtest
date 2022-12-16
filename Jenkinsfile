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
                 bat 'node app.js'
                 bat 'npm run cypress'
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
