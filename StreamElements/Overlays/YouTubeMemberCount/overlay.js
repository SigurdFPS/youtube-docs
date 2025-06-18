// Javascript (JS) tab Copy and Paste

let currentCount = 0;

function updateDisplay(count) {
    document.getElementById("memberCount").textContent = count;
}

window.addEventListener('onWidgetLoad', function(obj) {
    const data = obj.detail.session;
    const memberCount = data?.["sponsor-total"]?.["count"] ?? 0;
    currentCount = memberCount;
    updateDisplay(memberCount);
});

window.addEventListener('onEventReceived', function(obj) {
    const listener = obj.detail.listener;
    const event = obj.detail.event;

    if (listener === "youtube-sponsor") {
        currentCount++;
        updateDisplay(currentCount);
    }

    if (listener === "youtube-sponsor-total") {
        const newTotal = event?.["count"];
        if (typeof newTotal === "number") {
            currentCount = newTotal;
            updateDisplay(currentCount);
        }
    }
});
