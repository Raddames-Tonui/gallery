pipeline {
    agent any

    tools {
        nodejs "node" 
    }

    environment {
        EMAIL_RECIPIENT = 'raddames.tonui1@student.moringaschool.com'
    }

    triggers {
        githubPush() 
    }

    stages {
        stage("Clone Repository") {
            steps {
                git branch: "master", url: "https://github.com/Raddames-Tonui/gallery"
            }
        }

        stage("Install Dependencies") {
            steps {
                sh 'npm installing'
            }
        }

        stage("Run Tests") {
            steps {
                sh 'npm test'
            }
        }

        stage("Deploy to Render") {
            steps {
                echo 'Deploying application to Render...'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            mail to: "${EMAIL_RECIPIENT}",
                 subject: 'Pipeline Failure Notification',
                 body: 'The pipeline failed at some stage. Please check Jenkins logs for details.'
        }
        always {
            echo 'Pipeline execution complete'
        }
    }
}
