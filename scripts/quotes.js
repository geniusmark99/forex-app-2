const QuotesData = [
    { id: 0, type: "one" },
    { id: 1, type: "two" },
    { id: 2, type: "three" },
    { id: 3, type: "one" },
    { id: 4, type: "two" },
];

const RenderQuotesList = QuotesData.map(function (quotes) {
    return `
<!-- Start ${quotes.id}-->
<div class="quote-inner-extra-sub ${quotes.type}">
    <div>
        <h2>EURUSD</h2>
        <span>Euro/US Dollar</span>
    </div>
    <h3 style="--h3-col:var(--color-inner)">SELL&nbsp;&nbsp;1.0346</h3>
    <ul class="quote-inner-percent">
      <li>TP 1.7017</li>
      <li>TP 1.7017</li>
      <li>TP 1.7017</li>
      <li>TP 1.7017</li>
    </ul>
</div>
<!-- End ${quotes.id}-->
`;
}).join("");

GetId("quotes-data").innerHTML = RenderQuotesList;
GetId("quotes-data-2").innerHTML = RenderQuotesList;
