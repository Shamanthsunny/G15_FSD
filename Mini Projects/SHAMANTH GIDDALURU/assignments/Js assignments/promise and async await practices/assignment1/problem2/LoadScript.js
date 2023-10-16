
    async function loadScript(scriptUrl) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = scriptUrl;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    async function onload() {
        const scriptUrl = 'Onload.js';

        try {
            await loadScript(scriptUrl);
            console.log(`Script loaded successfully: ${scriptUrl}`);

        } catch (error) {
            console.error(`Error loading script: ${scriptUrl}`, error);
        }
    }

    onload();

