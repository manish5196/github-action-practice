// Simple Node.js script run by .github/workflows/03-node-script.yaml.
// It shows that a workflow step can run a script file from the repo
// (after actions/checkout) instead of inline code in `run:`.
// It uses only built-in Node APIs, so no npm packages are required.

// Entry point. Anything written with console.log goes to stdout and
// shows up in the "Execute Node.js script" step log in the Actions UI.
function main() {
    console.log("Hello from Node.js!");
    console.log("Executed using GitHub Actions");
}

// Run main() when the file is executed (`node scripts/hello.js`).
// If it throws, Node exits with a non-zero code and the workflow step fails.
main();
