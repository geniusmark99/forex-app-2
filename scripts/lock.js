const msg = "still on development";
window.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    alert("context menu is locked," + msg);
});

document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.shiftKey && e.code === 'KeyI') {
        e.preventDefault();
        alert("dev tool is locked, " + msg);
    }

    if (e.ctrlKey && 'KeyS' === e.code) {
        e.preventDefault();
        alert("Can't save page now, " + msg);
    }
});

