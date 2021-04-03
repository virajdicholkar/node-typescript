pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                npm install && npm run build:prod
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}