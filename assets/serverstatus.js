---
---
{% include serverstatus.js %}
.then(data => {
    if (data.online == true) {
        {% if site.siteNav %}
        document.getElementById("serverInd").classList.add("text-green-600");
        document.getElementById("serverPlaynow").innerHTML = `<span class="inline-block bg-yellow-500 rounded-full px-3 py-1 text-sm font-thin uppercase text-gray-900 mr-2 shadow-lg">现在游玩：${data.players.online} 在线</span>`;
        {% else %}
        document.getElementById("serverStatus").innerHTML = `<p class="font-bold select-none"><span class="text-green-600">&#11044;</span>&emsp;服务器在线！&ensp;&middot;&ensp;${data.players.online} 位玩家正在游玩中</p>`;
        document.getElementById("serverStatusM").innerHTML = `<p class="font-bold select-none"><span class="text-green-600">&#11044;</span>&emsp;在线，${data.players.online} 位玩家游玩中</p>`;
        {% endif %}
    }
    else {
        {% if site.siteNav %}
        document.getElementById("serverInd").classList.add("text-red-600");
        {% else %}
        document.getElementById("serverStatus").innerHTML = `<p class="font-bold select-none"><span class="text-red-600">&#11044;</span>&emsp;抱歉，服务器离线中...</p>`;
        document.getElementById("serverStatusM").innerHTML = `<p class="font-bold select-none"><span class="text-red-600">&#11044;</span>&emsp;离线</p>`;
        {% endif %}
    }
});