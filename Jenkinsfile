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
