#!/usr/bin/env node

const chokidar = require('chokidar');
const path = require('path');

// Get watch paths from command line arguments
const watchPaths = JSON.parse(process.argv[2] || '[]');
const pollInterval = parseInt(process.argv[3] || '1000');

if (watchPaths.length === 0) {
    console.error('No paths to watch provided');
    process.exit(1);
}

console.log('Starting file watcher...');
console.log('Watching paths:', watchPaths);

// Initialize watcher
const watcher = chokidar.watch(watchPaths, {
    ignored: [
        '**/node_modules/**',
        '**/.git/**',
        '**/vendor/**',
        '**/storage/logs/**',
        '**/bootstrap/cache/**',
        '**/.DS_Store',
        '**/Thumbs.db'
    ],
    persistent: true,
    usePolling: process.env.CHOKIDAR_USEPOLLING === 'true',
    interval: pollInterval,
    ignoreInitial: true,
    followSymlinks: false,
    depth: 10
});

// Handle file changes
watcher
    .on('change', (filePath) => {
        if (filePath.endsWith('.blade.php') || filePath.endsWith('.js') || filePath.endsWith('.css') || filePath.endsWith('.scss') || filePath.endsWith('.sass')) {
            console.log(`File changed: ${path.relative(process.cwd(), filePath)}`);
        }
    })
    .on('add', (filePath) => {
        if (filePath.endsWith('.blade.php') || filePath.endsWith('.js') || filePath.endsWith('.css') || filePath.endsWith('.scss') || filePath.endsWith('.sass')) {
            console.log(`File added: ${path.relative(process.cwd(), filePath)}`);
        }
    })
    .on('unlink', (filePath) => {
        if (filePath.endsWith('.blade.php') || filePath.endsWith('.js') || filePath.endsWith('.css') || filePath.endsWith('.scss') || filePath.endsWith('.sass')) {
            console.log(`File removed: ${path.relative(process.cwd(), filePath)}`);
        }
    })
    .on('error', (error) => {
        console.error('Watcher error:', error);
    })
    .on('ready', () => {
        console.log('File watcher ready and watching for changes...');
    });

// Handle process termination
process.on('SIGINT', () => {
    console.log('Stopping file watcher...');
    watcher.close().then(() => {
        process.exit(0);
    });
});

process.on('SIGTERM', () => {
    console.log('Stopping file watcher...');
    watcher.close().then(() => {
        process.exit(0);
    });
});