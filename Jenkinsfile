pipeline {
    agent any

    environment {
        DOCKER_HUB_USER = 'aakashpatel22'
        IMAGE_TAG = 'latest'
    }

    stages {
        stage('Checkout GitHub Repository') {
            steps {
                // Checkout the GitHub repository using the provided credentials
                checkout([$class: 'GitSCM', 
                          branches: [[name: '*/main']], 
                          userRemoteConfigs: [[url: 'https://github.com/your-username/bookify-v2.git', 
                                               credentialsId: 'AakashPatel22']]])
            }
        }

        stage('Login to Docker Hub') {
            steps {
                // Login to Docker Hub using stored credentials
                withCredentials([usernamePassword(credentialsId: 'DockerHubCred', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin'
                }
            }
        }

        stage('Build & Push Docker Images') {
            steps {
                script {
                    // List of services to build and push images
                    def services = ['movie-service', 'booking-service', 'user-service', 'showtime-service', 'frontend']
                    // Loop through each service and build & push Docker images
                    for (svc in services) {
                        dir(svc) {
                            sh """
                            echo "Building Docker image for ${svc}..."
                            docker build -t ${DOCKER_HUB_USER}/${svc}:${IMAGE_TAG} .
                            echo "Pushing image to Docker Hub..."
                            docker push ${DOCKER_HUB_USER}/${svc}:${IMAGE_TAG}
                            """
                        }
                    }
                }
            }
        }

        stage('Deploy to Kubernetes (via Ansible)') {
            steps {
                // Run the Ansible playbook for Kubernetes deployment
                dir('ansible') {
                    sh 'ansible-playbook -i inventory playbook.yml'
                }
            }
        }
    }
}
