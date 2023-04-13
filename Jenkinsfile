pipeline {
  agent any


    stage('Build Docker image') {
      steps {
        withCredentials([string(credentialsId: 'BACKEND_API', variable: 'BACKEND_API'), string(credentialsId: 'Get_Synonyms_API_Prefix', variable: 'Get_Synonyms_API_Prefix')]) {
          sh 'docker build \
          --build-arg BACKEND_API=$BACKEND_API \
          --build-arg Get_Synonyms_API_Prefix=$Get_Synonyms_API_Prefix \
          -t fotopie-prod:latest 123436089261.dkr.ecr.ap-southeast-2.amazonaws.com/fotopie-frontend-uat:latest .'
        }
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
