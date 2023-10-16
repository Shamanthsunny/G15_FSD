function loadScript(scriptUrl) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = scriptUrl;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

const scriptUrl = 'onload.js';

loadScript(scriptUrl)
    .then(() => {
        console.log(`Script loaded successfully: ${scriptUrl}`);
        // Your code to execute after the script is loaded
    })
    .catch((error) => {
        console.error(`Error loading script: ${scriptUrl}`, error);
    });