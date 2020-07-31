
function addCurrency(country){
    var queryURL = "https://api.exchangeratesapi.io/latest"

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        var tableRow=$("<tr>");
          var countryCell=$("<td>").addClass("country");
          countryCell.text(country);
          tableRow.append(countryCell);
          var currencyCell=$("<td>").addClass("currency");
          currencyCell.text(response.rates[country]);
          tableRow.append(currencyCell);
          var dateCell=$("<td>").addClass("date");
          dateCell.text(response.date);
          tableRow.append(dateCell);
          $("tbody").append(tableRow);
          console.log(response)
    });

}
addCurrency("USD");
addCurrency("GBP");
addCurrency("HKD");
addCurrency("CNY");
addCurrency("JPY");