pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo "Branch is ${env.BRANCH_NAME}..."

                withNPM() {
                    echo 'Performing npm build...'
                    sh 'npm install'
                }
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
