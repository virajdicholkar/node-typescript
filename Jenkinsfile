stage('npm-build') {
    agent {
        docker {
            image 'node:7.4'
        }
    }

    steps {
        echo "Branch is master..."

        withNPM(npmrcConfig:'my-custom-npmrc') {
            echo "Performing npm build..."
            sh 'npm install'
        }
    }
}