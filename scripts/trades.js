AddEvent("open-trade-menu", "click", function () {
    if (!ContainsClass(".trades-ul", "show")) {
        AddClass(".trades-ul", "show");
        InsertHtml("#open-trade-menu", `<svg>
<use href="./images/icons.svg#close-icon-svg"></use></svg>`);
    } else {
        RemoveClass(".trades-ul", "show");
        InsertHtml("#open-trade-menu", `<svg><use href="./images/icons.svg#list-svg-icon"></use></svg>`);
    }
}); 
