AddEvent("show-password-btn", "click", function () {
    const PasswordAddress = GetId("password-address");
    const ShowAddressBtn = GetId("show-password-btn");
    const GetPasswordAttr = PasswordAddress.getAttribute("type");

    if ("password" === GetPasswordAttr) {
        InsertHtml("#show-password-btn", `
<svg>
<use href="./images/icons.svg#closed-eye-svg-icon"></use>
</svg>`);
        ShowAddressBtn.setAttribute("title", "Click to hide password");
        PasswordAddress.setAttribute("type", "text");
    }
    else {
        InsertHtml("#show-password-btn", ` <svg>
<use href="./images/icons.svg#eye-svg-icon"></use>
</svg>`);
        ShowAddressBtn.setAttribute("title", "Click to see password");
        PasswordAddress.setAttribute("type", "password");
    }
});