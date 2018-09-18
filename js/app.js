(function () {
    var sendPostMessage = function () {
        var message = document.getElementById("txt-message").value;
        var iframe = document.getElementsByTagName("iframe")[0].contentWindow;

        iframe.postMessage(message, "*");
    };

    var receiveMessage = function (event) {
        var divReceive = document.getElementById("div-received-messages");
        var p = "<p>" + event.data + "</p>";
        divReceive.appendElement(p);
    };

    var btn = document.getElementById("btn-send");
    btn.addEventListener("click", sendPostMessage);

    window.addEventListener("message", receiveMessage, false);
})();