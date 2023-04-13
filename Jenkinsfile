pipeline {
  agent any

  stages{
    stage ('Code vaunerbility check') {
      steps {
        echo 'Checking code vaunerbilities'
        snykSecurity(
          snykInstallation: 'snyk@latest',
          snykTokenId: 'snyk-api-token',
          failOnIssues: 'false',
          failOnError: 'false',
          severity: 'high'
        )
      }
    }
    stage ('Install dependencies'){
      steps {
        sh 'npm ci'
      }
    }
    stage ('Code Quality Check') {
      steps {
        echo 'Code Quality Check'
        sh 'yes "Strict (recommended)" | npm run lint'
      }
    }
     
    stage('Build Docker image') {
      environment {
        BACKEND_API = credentials('BACKEND_API')
        Get_Synonyms_API_Prefix = credentials('Get_Synonyms_API_Prefix')       
      }
      steps {
         sh 'docker build \
          --build-arg BACKEND_API=$BACKEND_API \
          --build-arg Get_Synonyms_API_Prefix=$Get_Synonyms_API_Prefix \
          -t 123436089261.dkr.ecr.ap-southeast-2.amazonaws.com/fotopie-frontend-uat:latest .'  
      }
    }

    stage('Push Docker image to ECR') {
      environment {
        AWS_ACCESS_KEY_ID = credentials('aws_access_key_id')
        AWS_SECRET_ACCESS_KEY = credentials('aws_secret_access_key')
        AWS_DEFAULT_REGION = 'ap-southeast-2'
      }
      steps {
        sh 'aws ecr get-login-password --region ap-southeast-2 | docker login --username AWS --password-stdin 123436089261.dkr.ecr.ap-southeast-2.amazonaws.com'
        sh 'docker push 123436089261.dkr.ecr.ap-southeast-2.amazonaws.com/fotopie-frontend-uat:latest'
      }
    }
  }
}
