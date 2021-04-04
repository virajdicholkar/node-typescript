pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo "Branch is ${env.BRANCH_NAME}..."
                git 'https://github.com/virajdicholkar/node-typescript.git'
                bat 'cd client && npm install && cd ..'
                bat 'npm install && npm run build:prod'
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
