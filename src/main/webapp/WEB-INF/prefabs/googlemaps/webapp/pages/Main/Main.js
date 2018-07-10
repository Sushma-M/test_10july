/*
 * This function will be invoked when any of this prefab's property is changed
 * @key: property name
 * @newVal: new value of the property
 * @oldVal: old value of the property
 */
Prefab.onPropertyChange = function(key, newVal, oldVal) {
    switch (key) {
        case "maptype":
            // mapTypeOperations(newVal, oldVal);
            break;
        default:
            break;
    }

};

/*
 * This function will be triggered post initialization of the prefab.
 */
Prefab.onReady = function() {
    let mapApiUrl = 'https://maps.googleapis.com/maps/api/js?v=3&libraries=places,visualization,drawing,geometry';

    if (!(typeof google !== "undefined" && google !== null ? google.maps : void 0)) {
        jQuery.getScript(mapApiUrl, initMap);
    } else {
        initmap();
    }


};

function initMap(data, textStatus, jqxhr) {
    let map = new google.maps.Map(Prefab.Widgets.mapContainer.getNativeElement(), {
        center: {
            lat: 17.4198912,
            lng: 78.166612
        },
        zoom: 9
    });
    // let marker = new google.maps.Marker({
    //     position: {
    //         lat: 17.4215495,
    //         lng: 78.4495466
    //     },
    //     map: map
    // });
}