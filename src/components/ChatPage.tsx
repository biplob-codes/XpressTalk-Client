const ChatPage = () => {
  return (
    <div>
      <h1>Chat Page</h1>
      <p>AccessToken: {localStorage.getItem("xpressTalkAccessToken")}</p>
    </div>
  );
};

export default ChatPage;
