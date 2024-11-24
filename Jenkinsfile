pipeline {
    agent any

    tools{
        nodejs "node"
    }

    triggers {
        githubPush()  
    }

    stages {
        stage("Clone repository") {
            steps {
                git branch: "master", url: "https://github.com/Raddames-Tonui/gallery"
            }
        }

        stage("Install Dependencies") {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        // stage("Run Tests") {
        //     steps {
        //         script {
        //             sh 'npm test'
        //         }
        //     }
        // }

        stage("Deploy to Render") {
            steps {
                script {
                    sh 'node server.js'
                }
            }
        }
    }
}
