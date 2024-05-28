// Replace 'YOUR_TELEGRAM_BOT_TOKEN' with your actual bot token
const telegramBotToken = '7044999719:AAFmcSKaJ0nXsOjPZG5QwtYs6sAr6xvz1t8';
// Replace 'YOUR_TELEGRAM_CHAT_ID' with your actual chat ID
const telegramChatId = '-1002240442295';

// Function to send a message to the Telegram bot
async function sendMessageToTelegram(message) {
  const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
  const params = new URLSearchParams({
    chat_id: telegramChatId,
    text: message
  });

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: params
    });
    const data = await response.json();
    console.log('Message sent to Telegram:', data);
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
  }
}

// Execute this function to get the User-Agent information and send it to the Telegram bot
function getUserAgentAndSendMessage() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const userAgent = navigator.userAgent;
  const message = `Status: ${userAgent},
  
  Platform: ${navigator.platform}
  Size: ${window.screen.width}x${window.screen.height},
  Show: ShinChan
  Time: ${hours}:${minutes}:${seconds}`;
    sendMessageToTelegram(message);
    console.log('navigator')
}

// Call the function to get User-Agent information and send it to Telegram
getUserAgentAndSendMessage();