pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo "Branch is ${env.BRANCH_NAME}..."
                git 'https://github.com/virajdicholkar/node-typescript.git'
                bat 'npm install'
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
