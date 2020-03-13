/*$(document).ready(function () {
    var connection = new signalR.HubConnectionBuilder().withUrl("hubs/gps").withAutomaticReconnect([0, 3000, 5000, 10000, 15000, 30000]).build();

    var isInitialized = false;
    var fromPlace = new google.maps.LatLng("42.034611666666663", "-91.649276666666665");
    var toPlace = new google.maps.LatLng("42.034611666666663", "-91.649276666666665");

    /* Google map implementation starts*/

    /*var myGPSStatus = [fromPlace, toPlace];

    //Create Options or set different Characteristics of Google Map  
    var mapOptions = {
        center: new google.maps.LatLng("42.034611666666663", "-91.649276666666665"),
        zoom: 15,
        minZoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var flightPath = new google.maps.Polyline({
        path: myGPSStatus,  // (Here we had passed TRIP from– To settings.) 
        strokeColor: "#0000FF", // (Color settings of Line under a map)
        strokeOpacity: 0.8, // (Transaprency settings of Line under a map)
        strokeWeight: 2 //(Thickness of Line under a map)
    });

    //Display the Google map in the div control with the defined Options  
    var map = new google.maps.Map(document.getElementById("gmap"), mapOptions);

    //Set Marker on the Map  
    flightPath.setMap(map);

    /* Google map implementation ends */

    /*connection.on("ReceiveMessage", function (location) {

        var locationXmlDoc = $.parseXML(location);

        var latitude = $(locationXmlDoc).find("Latitude");
        var latitudeDegree = $(latitude).find("Degree").text();
        var latitudeDirection = $(latitude).find("Direction").text();

        var longitude = $(locationXmlDoc).find("Longitude");
        var longitudeDegree = $(longitude).find("Degree").text();
        var longitudeDirection = $(longitude).find("Direction").text();

        var time = $(locationXmlDoc).find("Time").text();
        var date = $(locationXmlDoc).find("Date").text();
        var speedOverGround = $(locationXmlDoc).find("SpeedOverGround").text();
        var horizontalDilutionOfPrecision = $(locationXmlDoc).find("HorizontalDilutionOfPrecision").text();
        var verticalDilutionOfPrecision = $(locationXmlDoc).find("VerticalDilutionOfPrecision").text();
        var gNSSType = $(locationXmlDoc).find("GNSSType").text();
        var numberOfSatellites = $(locationXmlDoc).find("NumberOfSatellites").text();
        var trackDegreeTrue = $(locationXmlDoc).find("TrackDegreeTrue").text();

        var extensions = $(locationXmlDoc).find("Extensions");
        var extensionsSolutionValid = $(extensions).find("SolutionValid").text();
        var extensionsPDOP = $(extensions).find("PDOP").text();

        if (!isInitialized) {
            fromPlace = new google.maps.LatLng(latitudeDegree, longitudeDegree);
            myGPSStatus.push(fromPlace);
        }

        toPlace = new google.maps.LatLng(latitudeDegree, longitudeDegree);

        myGPSStatus.push(toPlace);

        flightPath = new google.maps.Polyline({
            path: myGPSStatus,  // (Here we had passed TRIP from– To settings.) 
            strokeColor: "#0000FF", // (Color settings of Line under a map)
            strokeOpacity: 0.8, // (Transaprency settings of Line under a map)
            strokeWeight: 2 //(Thickness of Line under a map)
        });
        flightPath.setMap(map);

        isInitialized = true;

        var tbody = $('#gps-location > tbody');
        var x = $.parseXML(location);

        var row = $('<tr><td>' + new Date($.now()) + '</td><td>' + location + '</td></tr>');

        tbody.prepend(row);
    });

    connection.start().then(function () {
        connection.invoke("SendMessage").catch(function (err) {
            return console.error(err.toString());
        });
    }).catch(function (err) {
        return console.error(err.toString());
    });
});*/