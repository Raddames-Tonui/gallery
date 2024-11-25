pipeline {
    agent any

    tools {
        nodejs "node" // Use the Node.js tool named "node" configured in Jenkins
    }

    environment {
        EMAIL_RECIPIENT = 'raddames.tonui1@student.moringaschool.com'
    }

    triggers {
        githubPush() // Trigger the pipeline on a GitHub push event
    }

    stages {
        stage("Clone Repository") {
            steps {
                git branch: "master", url: "https://github.com/Raddames-Tonui/gallery"
            }
        }

        stage("Install Dependencies") {
            steps {
                sh 'npm install'
            }
        }

        stage("Run Tests") {
            steps {
                sh 'npm test'
            }
        }
    }

    post {
        failure {
            mail to: "${EMAIL_RECIPIENT}",
                 subject: 'Test Failure Notification',
                 body: 'The tests have failed in the Jenkins pipeline for the "master" branch.'
        }
        always {
            echo 'Pipeline execution complete'
        }
    }
}
