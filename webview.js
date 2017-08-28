module.exports = (Franz, options) => {
    $(window).on('blur', function(e) {
        $('button.p-channel_sidebar__link--all-threads').trigger('click');
    });

    function getMessages() {
        var unread = $('.p-channel_sidebar__channel--unread').length;
        var reply  = $('.p-channel_sidebar__badge').length;

        Franz.setBadge(reply, unread);
    }

    Franz.loop(getMessages);
}
