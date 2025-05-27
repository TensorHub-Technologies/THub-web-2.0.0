import { FullPageChat } from "thub-embed-react";

export const AgentBot = () => {
  return (
    <FullPageChat
      chatflowid="3c7f6af7-ca21-4018-8a80-77e8bb26c788"
      apiHost="http://localhost:3000"
      theme={{
        button: {
          backgroundColor: "#E22A90",
          right: 20,
          bottom: 100,
          size: 48, // small | medium | large | number
          dragAndDrop: true,
          iconColor: "white",
          // customIconSrc: "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg",
          autoWindowOpen: {
            autoOpen: true, //parameter to control automatic window opening
            openDelay: 2, // Optional parameter for delay time in seconds
            autoOpenOnMobile: false, //parameter to control automatic window opening in mobile
          },
        },
        // tooltip: {
        //     showTooltip: true,
        //     tooltipMessage: 'Hi There 👋!',
        //     tooltipBackgroundColor: 'black',
        //     tooltipTextColor: 'white',
        //     tooltipFontSize: 16,
        // },
        chatWindow: {
          showTitle: true,
          title: "Agent Bot",
          titleAvatarSrc: "",
          showAgentMessages: true,
          welcomeMessage: "Hello! This is custom welcome message",
          errorMessage: "This is a custom error message",
          backgroundColor: "#ffffff",
          backgroundImage: "enter image path or link", // If set, this will overlap the background color of the chat window.
          height: 530,
          width: 550,
          fontSize: 18,
          //starterPrompts: ['What is a bot?', 'Who are you?'], // It overrides the starter prompts set by the chat flow passed
          starterPromptFontSize: 15,
          clearChatOnReload: false, // If set to true, the chat will be cleared when the page reloads.
          botMessage: {
            backgroundColor: "#f7f8ff",
            textColor: "#303235",
            showAvatar: true,
            avatarSrc: "svg/thub_icon.svg",
          },
          userMessage: {
            backgroundColor: "#3B81F6",
            textColor: "#ffffff",
            showAvatar: true,
            avatarSrc: "svg/profile.svg",
          },
          textInput: {
            placeholder: "Type your question",
            backgroundColor: "#ffffff",
            textColor: "#303235",
            sendButtonColor: "#E22A90",
            maxChars: 50,
            maxCharsWarningMessage:
              "You exceeded the characters limit. Please input less than 50 characters.",
            autoFocus: true, // If not used, autofocus is disabled on mobile and enabled on desktop. true enables it on both, false disables it on both.
            sendMessageSound: true,
            // sendSoundLocation: "send_message.mp3", // If this is not used, the default sound effect will be played if sendSoundMessage is true.
            receiveMessageSound: true,
            // receiveSoundLocation: "receive_message.mp3", // If this is not used, the default sound effect will be played if receiveSoundMessage is true.
          },
          feedback: {
            color: "#303235",
          },
          footer: {
            textColor: "#303235",
            text: "Powered by",
            company: "THub",
            companyLink: "https://thub.tech/",
          },
        },
      }}
    />
  );
};
