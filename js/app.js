(function () {
    var sendPostMessage = function () {
        var message = document.getElementById("txt-message").value;
        var iframe = document.getElementsByTagName("iframe")[0].contentWindow;

        iframe.postMessage(message, "*");
    };

    var receiveMessage = function (event) {
        if (event.origin !== "https://brulima.github.io") return;
        var divReceive = document.getElementById("div-received-messages");
        var conteudoNovo = document.createTextNode(event.data); 
        var p = document.createElement("p");
        p.appendChild(conteudoNovo);
        divReceive.appendChild(p);
    };

    var btn = document.getElementById("btn-send");
    btn.addEventListener("click", sendPostMessage);

    window.addEventListener("message", receiveMessage, false);
})();