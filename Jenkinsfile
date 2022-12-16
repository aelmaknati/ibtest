pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
               script {
                 bat 'mocha tests/lifecycle.test.js tests/unit/**/*.test.js --reporter mocha-junit-reporter'
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
