module.exports = {
    apps: [
        {
            name: "baovethean",
            cwd: process.cwd(),
            script: "npm",
            args: "start",
            interpreter: "none",
            exec_mode: "fork",
            instances: 1,
            autorestart: true,
            max_memory_restart: "1G",
            env: {
                NODE_ENV: "production",
                HOSTNAME: "127.0.0.1",
                PORT: "3000",
            },
        },
    ],
};
