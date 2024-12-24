pipeline {
    agent any

    tools {
        nodejs "node" 
    }

    environment {
        EMAIL_RECIPIENT = 'raddames.tonui1@student.moringaschool.com'
        RENDER_DEPLOY_HOOK = 'https://api.render.com/deploy/srv-ct1p9qt6l47c73bhmn2g?key=QwAZutc-BIo'
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

        stage("Deploy to Render") {
            steps {
                echo 'Deploying application to Render...'
                sh "curl -X POST ${RENDER_DEPLOY_HOOK}"
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!!'
        }
        failure {
            mail to: "${EMAIL_RECIPIENT}",
                 subject: 'Pipeline Failure Notification',
                 body: 'The pipeline failed at some stage. Please check Jenkins logs for details.'
        }
        always {
            echo 'Pipeline execution complete!!'
        }
    }
}
