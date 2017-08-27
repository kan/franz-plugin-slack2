module.exports = (Franz, options) => {
    function getMessages() {
        var unread = $('.p-channel_sidebar__channel--unread').length;
        var reply  = $('.p-channel_sidebar__channel--im.p-channel_sidebar__channel--unread').length;

        Franz.setBadge(reply, unread);
    }

    Franz.loop(getMessages);
}
