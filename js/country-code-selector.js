$(document).ready(function(){
    $.fn.countryCodeSelector = function(){
        var domSelected, content;
        domSelected = this;
        var output = "";
        var countryName =[], countryCode =[], countryDialCode =[], CountryList;
        var items = [];
        $.getJSON("country-code.json", function(data){
            $.each(data, function( key, data ) {
                //countryName.push(data.name);
                countryCode.push(data.dial_code);
                countryDialCode.push(data.code);
            });



            //console.log(countryName);
            //console.log(countryCode);
            //console.log(countryDialCode);

            var i;
            for(i=0; i<countryDialCode.length;i++){
                CountryList +="<li>"+ countryDialCode[i]+"</li>";
                console.log(i);
            }

            console.log(CountryList);
            console.log(countryDialCode.length);
            //console.log(CountryList);
            //console.log($(CountryList).wrap("<ul></ul>"));
        });




        //$.getJSON( "country-code.json", function( data ) {
        //    var items = [];
        //    $.each( data, function( key, val ) {
        //        items.push( "<li id='" + key + "'>" + val.dial_code + "</li>" );
        //    });
        //
        //    $( "<ul/>", {
        //        "class": "my-new-list",
        //        html: items.join( "" )
        //    }).appendTo( "body" );
        //    console.log(items);
        //});



    }
});