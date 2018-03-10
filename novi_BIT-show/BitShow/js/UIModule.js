const UIModule = (() => {

    var searchField = $('#search');
    var printField = $('#content');
    var searchResultList = $('#search-result');
    var selectedElement = $();
    let seasonList = $("#season-list");

    //show allShow list in page

    function printAllShows(arr) {
        arr.forEach(function (el) {
            let printDiv = `<div>
        <img src="${el.image.medium}">
        <p>${el.name}</p></div>`;
            printField.append(printDiv);
        });
    }

    function printSearchResults(arr) {
        searchResultList.empty();
        arr.forEach(function (el) {
            let printDiv = `<li value="${el.show.id}">${el.show.name}</li>`;
            searchResultList.append(printDiv);
        });
    }

    function printSeasons(seasonsData) {
        seasonsData.forEach((el) => {
            let seasonLi = `<li>${el.premiereDate}-${el.endDate}</li>`;
            $('#season-list').append(seasonLi);
        })
    }

    function printCast(castData){
        castData.forEach((el) => {
            let castLi = `<li>${el.}` // do ovde stigoh
        })
    }

    return {
        printAllShows,
        printSearchResults,
        printSeasons
    }
})();