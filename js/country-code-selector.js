$(document).ready(function(){
    $.fn.countryCodeSelector = function(){
        var domSelected, content;
        domSelected = this;
        var output = "";
        var countryName =[], countryCode =[], countryDialCode =[];
        var items = [];
        $.getJSON("country-code.json", function(data){
            $.each(data, function( key, data ) {
                //countryName = countryName.push(countryObj.name);
                //console.log(countryObj);
                //console.log(countryObj.dial_code);
                //console.log(countryObj.code);
                //content +="<li>"+ countryObj.code + " " + countryObj.dial_code +"</li>";
                //output += key;
                //items.push( "<li id='" + key + "'>" + key + "</li>" );
                //console.log("<li>"+countryObj.code + " " + countryObj.dial_code+"</li>");
                countryName.push(data.name);
                countryCode.push(data.dial_code);
                countryDialCode.push(data.code);
            });


            console.log(countryName);
            console.log(countryCode);
            console.log(countryDialCode);



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