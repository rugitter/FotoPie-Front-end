pipeline {
    agent any

    stages {
        stage('Git checkout') {
            steps{
                echo 'Git Checkout'
                // Get source code from a GitHub repository
                git branch: 'DO-03-Charles', url: 'https://github.com/Go-Husky-FotoPie/FotoPie-Front-end.git'
            }
        }
        
        stage('Build') {
            steps{
                echo 'Build'
                // Do your build task
                // sh 'pwd'
                // sh 'ls -la'
                // dir("./apis/userprofile/") {
                //     sh 'npm install'
                // }
                // sh 'pwd'    // the current working directory will be the same
            }
        }
        
        stage('Test') {
            steps{
                echo 'Test'
                // Run unit tests, integration tests, and/or e2e tests
                // dir("./apis/userprofile/") {
                //     sh 'npm run test'
                // }
            }
        }
        
        stage('npm coverage') {
            steps{
                echo 'npm coverage'
                // dir("./apis/userprofile/") {
                //     sh 'npm run cover'
                // }
            }
        }
        
        stage('Publish') {
            steps{
                echo 'Publish'
                // sh 'ls -la ./apis/userprofile/'
            }
        }
    }

    post {
        failure {
            echo 'Processing failed'
        }
        success {
            echo 'Processing succeeded'
        }
    }
}