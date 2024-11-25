pipeline {
    agent any

    tools {
        nodejs "node" // Use the Node.js tool named "node" configured in Jenkins
    }

    environment {
        EMAIL_RECIPIENT = 'raddames.tonui1@student.moringaschool.com'
        RENDER_URL = 'https://your-render-service-url' 
        APP_PORT = '3000' 
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
                sh 'npm install'
            }
        }

        stage("Run Tests") {
            steps {
                sh 'npm test'
            }
        }

        stage("Build and Test Locally") {
            steps {
                echo 'Starting application to verify it builds and runs correctly...'
                sh 'node server.js &'
                sleep time: 10, unit: 'SECONDS'
                sh "curl -f http://localhost:${APP_PORT} || exit 1"
                sh 'pkill -f node'
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
            // Notify Slack on successful deployment
            slackSend(
                channel: "${SLACK_CHANNEL}",
                message: "Build #${env.BUILD_NUMBER} deployed successfully! View it at: ${RENDER_URL}"
            )
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
