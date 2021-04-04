pipeline {
    agent any
    tools { nodejs 'nodejs' }
    stages {
        stage('Build') {
            steps {
                echo "Branch is ${env.BRANCH_NAME}..."

                withNPM(npmrcConfig:'my-custom-npmrc') {
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
