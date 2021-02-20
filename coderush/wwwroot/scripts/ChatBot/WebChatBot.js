(async function () {
    // In this demo, we are using Direct Line token from MockBot.
    // Your client code must provide either a secret or a token to talk to your bot.
    // Tokens are more secure. To learn about the differences between secrets and tokens
    // and to understand the risks associated with using secrets, visit https://docs.microsoft.com/en-us/azure/bot-service/rest-api/bot-framework-rest-direct-line-3-0-authentication?view=azure-bot-service-4.0

    const res = await fetch('https://webchat-mockbot.azurewebsites.net/directline/token', { method: 'POST' });
    const { token } = await res.json();

    const styleOptions = {
        botAvatarImage:
            'https://docs.microsoft.com/en-us/azure/bot-service/v4sdk/media/logo_bot.svg?view=azure-bot-service-4.0',
        botAvatarInitials: 'BF',
        userAvatarImage: 'https://github.com/compulim.png?size=64',
        userAvatarInitials: 'WC'
    };

    window.WebChat.renderWebChat(
        {
            directLine: window.WebChat.createDirectLine({ token }),
            styleOptions
        },
        document.getElementById('webchat')
    );

    document.querySelector('#webchat > *').focus();
})().catch(err => console.error(err));