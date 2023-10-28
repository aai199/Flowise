module.exports = {
    apps: [
        {
            name: 'flowaai',
            script: './bin/run',
            args: 'start',
            port: 3000,
            detached: true,
            max_restarts: 5,
            min_uptime: 5000,
            watch_delay: 5000,
            autorestart: false,
            restart_delay: 1000,
            exp_backoff_restart_delay: 100
        }
    ]
}
