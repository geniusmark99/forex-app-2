AddEvent("mob-ham-btn", "click", function () {
    const button = GetId("mob-ham-btn");
    const isOpened = button.getAttribute('aria-expanded');
    if (isOpened === 'false') {
        button.setAttribute('aria-expanded', 'true');
        AddClass("#sidebar", "show");
        AddClass("body", "overflow-hidden");
    } else {
        button.setAttribute('aria-expanded', 'false');
        RemoveClass("#sidebar", "show");
        RemoveClass("body", "overflow-hidden");
    }
});

//********** Event for Esc Key close Sidebar
document.addEventListener('keydown', function (event) {
    const button = GetId("mob-ham-btn");
    const isOpened = button.getAttribute('aria-expanded');
    if (event.key === "Escape") {
        event.preventDefault();
        button.setAttribute('aria-expanded', 'false');
        RemoveClass("#sidebar", "show");
        RemoveClass("body", "overflow-hidden");
    }
});

