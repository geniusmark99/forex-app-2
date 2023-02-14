AddEvent("expand-news-footer-content", "click", function () {
    if (ContainsClass(".news-content-content", "add-height")) {
        RemoveClass(".news-content-content", "add-height");
        RemoveClass(".news-expand-more", "rotate");
        RemoveClass(".news-content-header", "show");

    } else {
        AddClass(".news-content-content", "add-height");
        AddClass(".news-expand-more", "rotate");
        AddClass(".news-content-header", "show");
    }
});

// esc close
document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        event.preventDefault();
        RemoveClass(".news-content-content", "add-height");
        RemoveClass(".news-content-header", "show");
        RemoveClass(".news-expand-more", "rotate");
    }
});

// Render news lists 
const newLists = [
    {
        time: "02:22",
        premium: true,
        flagIcon: "france-flag",
        starRating: [true, false, false],
        countryTrade: "French HICP(Yoy)(Dec)",
        tradeValue: [{ no: "6.7%", color: "var(--red-500)" }, "7.2%", "7.1%"]
    },
    {
        time: "02:22",
        premium: true,
        flagIcon: "france-flag",
        starRating: [true, true, false],
        countryTrade: "French HICP(MoM)(Dec)",
        tradeValue: [{ no: "-0.1%", color: "var(--red-500)" }, "0.3%", "0.4%"]
    },

    {
        time: "02:22",
        flagIcon: "france-flag",
        starRating: [true, true, false],
        countryTrade: "Spanish Services PIM (Dec)",
        tradeValue: [{ no: "51%", color: "var(--green-500)" }, "50.8%", "50.11%"]
    },
    {
        time: "02:22",
        flagIcon: "france-flag",
        starRating: [true, true, false],
        countryTrade: "Retail Sales(YoY) (Nov)",
        tradeValue: [{ no: "-4.2%", color: "black" }, "", "3.9%"]
    },


];

const RenderNewList = newLists.map(function (news) {
    return `
    <li>
    <!-- new-list-top -->
    <div class="news-list news-list-top">
        <div class="news-list-time">${news.time}</div>
        <div class="news-list-flag">
        <div class="country-icons">
        <svg>
        <use href="./images/icons.svg#${news.flagIcon}-svg-icon"></use>
        </svg>
        </div>
        <div class="country-abbr-name">EUR</div>
        </div>

        <div class="news-list-star">
        <div class="news-star-rating  ${(news.starRating[0]) ? "" : "svg-opac-low"}">
        <svg>
        <use href="./images/icons.svg#star-rating-svg-icon"></use>
        </svg>
        </div>
        <div class="news-star-rating ${(news.starRating[1]) ? '' : 'svg-opac-low'}">
        <svg>
        <use href="./images/icons.svg#star-rating-svg-icon"></use>
        </svg>
        </div>
         <div class="news-star-rating  ${(news.starRating[2]) ? "" : "svg-opac-low"}">
        <svg>
        <use href="./images/icons.svg#star-rating-svg-icon"></use>
        </svg>
        </div>
        </div>
    </div>
    <!-- End of new-list-top -->

    <!-- new-list-center-->
    <div class="news-list news-list-center">
        <div class="country-trade-desc">${news.countryTrade}</div>
        <div class="trade-premium">
        ${news.premium ? "P" : ""} 
            
        </div>
    </div>
    <!--End Of new-list-center-->

    <!-- new-list-footer-->
    <div class="news-list news-list-footer">
        <div class="trade-values" style="--col:${news.tradeValue[0]['color']}">${news.tradeValue[0]['no']}</div>
        <div class="trade-values">${news.tradeValue[1]}</div>
        <div class="trade-values">${news.tradeValue[2]}</div>
    </div>
<!-- End of new-list-footer-->
</li>

    `;
}).join("");

GetId("new-ul-lists").innerHTML = RenderNewList;
