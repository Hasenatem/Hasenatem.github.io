var markers_ger = [{
    "type": "Feature",
    "properties": {
        "name": "Sol <br/> Beschreibung",
    },
    "geometry": {
        "type": "Point",
        "coordinates": [1933, 1000]
    }
},
    {
    "type": "Feature",
    "properties": {
        "name": "Manette <br/> Beschreibung",
    },
    "geometry": {
        "type": "Point",
        "coordinates": [1737, 880]
    }
},
    {
        "type": "Feature",
        "properties": {
            "name": "<h3 style='text-align: center'>Planet 2</h3> <p>Beschreibung</p>",
        },
        "geometry": {
            "type": "Point",
            "coordinates": [1662, 1313]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "<h3 style='text-align: center'>Planet 3</h3> <p>Beschreibung</p>",
        },
        "geometry": {
            "type": "Point",
            "coordinates": [2613, 1112]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "<h3 style='text-align: center'>Grägel</h3> <p>Beschreibung</p>",
        },
        "geometry": {
            "type": "Point",
            "coordinates": [2442, 614]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "<h3 style='text-align: center'>Aesum</h3> <p>Beschreibung</p>",
        },
        "geometry": {
            "type": "Point",
            "coordinates": [2727, 614]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "<h3 style='text-align: center'>Cordia</h3> <p>Beschreibung</p>",
        },
        "geometry": {
            "type": "Point",
            "coordinates": [3005, 815]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "<h3 style='text-align: center'>Planet 7</h3> <p>Beschreibung</p>",
        },
        "geometry": {
            "type": "Point",
            "coordinates": [2745, 1520]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "<h3 style='text-align: center'>Planet 8</h3> <p>Beschreibung</p>",
        },
        "geometry": {
            "type": "Point",
            "coordinates": [1012, 1600]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "<h3 style='text-align: center'>Planet 9</h3> <p>Beschreibung</p>",
        },
        "geometry": {
            "type": "Point",
            "coordinates": [579, 1429]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "<h3 style='text-align: center'>Planet 10</h3> <p>Beschreibung</p>",
        },
        "geometry": {
            "type": "Point",
            "coordinates": [288, 1164]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "<h3 style='text-align: center'>Planet 11</h3> <p>Beschreibung</p>",
        },
        "geometry": {
            "type": "Point",
            "coordinates": [1612, 1952]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "<h3 style='text-align: center'>Planet 12</h3> <p>Beschreibung</p>",
        },
        "geometry": {
            "type": "Point",
            "coordinates": [224, 588]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Sirene </br> Der halbe Planet. Bekannt dafür, dass er wahrscheinlihc ein Ei ist.</p>",
        },
        "geometry": {
            "type": "Point",
            "coordinates": [680, 95]
        }
    }

];
var markers_en = [{
    "type": "Feature",
    "properties": {
        "name": "Place One",
        "parking": "parking"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [12.3, 45.2]
    }
},
    {
        "type": "Feature",
        "properties": {
            "name": "Place Two",
            "parking": "parking"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [150, 45.2]
        }
    }
];

window.onload = window_load;

function window_load() {

    let language = get_language_selected();
    if (typeof language == "string")
        change_page_map(language);
}

let map = L.map('mapid', {
    crs: L.CRS.Simple,
    minZoom: -2,
    attributionControl: false,
    maxZoom: 0
});
var bounds = [[0, 0], [2000, 4000]];
var image = L.imageOverlay('../resources/Aesummap.jpg', bounds).addTo(map);
map.fitBounds(bounds);

// let icon = new L.Icon({
//     iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png',
//     shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
//     iconSize: [25, 41],
//     iconAnchor: [12, 41],
//     popupAnchor: [1, -34],
//     shadowSize: [41, 41]
// });

let icon = L.divIcon({
    className: 'leaflet-mouse-marker',
    iconAnchor: [20, 20],
    iconSize: [50, 50]
});


function change_page_map(language) {
    // Change language
    change_page(language);
    // Adjust map

    if (language === 'en') {
        // Remove all layers
        map.eachLayer(function (layer) {
            map.removeLayer(layer);
        });
        // Add background again
        var image = L.imageOverlay('../resources/Aesummap.jpg', bounds).addTo(map);
        //    Override map things
        L.geoJSON(markers_en, {
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, {icon: icon});
            },
            onEachFeature: onEachFeature
        }).addTo(map);
    } else if (language === 'ger') {
        // Remove all layers
        map.eachLayer(function (layer) {
            map.removeLayer(layer);
        });
        // Add background again
        var image = L.imageOverlay('../resources/Aesummap.jpg', bounds).addTo(map);
        //    Override map things
        L.geoJSON(markers_ger, {
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, {icon: icon});
            },
            onEachFeature: onEachFeature
        }).addTo(map);
    } else { // Edge case of bad language selection
        console.log("This should not happen");
    }
}

function onEachFeature(feature, layer) {
    layer.bindTooltip(feature.properties.name, {minWidth: "auto"});
}