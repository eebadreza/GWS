// 'use strict';

async function fetchData() {
    const response = await fetch('https://www.jsonkeeper.com/b/C8L8');
    const data = await response.json();
    console.log(data);
    return data;
}

window.onload = async () => {
    // let someData = fetchData();
    const corner1 = L.latLng(84, -180);
    const corner2 = L.latLng(-78, 200);
    const bounds = L.latLngBounds(corner1, corner2);

    var map = L.map('map', {
        center: [6, 8],
        zoom: 3,
        minZoom: 3,
        maxBounds: bounds,
        // zoomControl: false,
    });

    L.tileLayer(
        'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
        {
            attribution:
                '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
        }
    ).addTo(map);

    let data = {
        type: 'FeatureCollection',
        numberUser: '2',
        lastActivity: '28.02.2023',
        avgWater: '60',
        name: 'data',
        features: [
            {
                type: 'Feature',
                properties: {
                    _id: '63fdaec43528b005c361f3fb',
                    Time: '28.02.2023 07:35:32',
                    WaterLevel: 90,
                    Depth: 10,
                    WellHeight: 100,
                    Rotation: 0,
                    ChargeStatus: 50,
                },
                geometry: {
                    type: 'Point',
                    coordinates: [72.87103, 19.045986],
                },
            },
            {
                type: 'Feature',
                properties: {
                    _id: '63fdd05c338e89ebace45874',
                    Time: '28.02.2023 00:35:32',
                    WaterLevel: 30,
                    Depth: 10,
                    WellHeight: 100,
                    Rotation: 0,
                    ChargeStatus: 50,
                },
                geometry: {
                    type: 'Point',
                    coordinates: [12.87103, 19.045986],
                },
            },
            {
                type: 'Feature',
                properties: {
                    _id: '63fdd05c3wefe89ebace45874',
                    Time: '28.02.2023 00:35:32',
                    WaterLevel: 40,
                    Depth: 12,
                    WellHeight: 140,
                    Rotation: 0,
                    ChargeStatus: 50,
                },
                geometry: {
                    type: 'Point',
                    coordinates: [29.0154, -29.1549],
                },
            },
        ],
    };

    //console.log(dta);
    // const d = await fetchData();

    L.geoJSON(data, {
        onEachFeature: onEachFeature,
    }).addTo(map);

    function onEachFeature(feature, layer) {
        layer.on('click', function (e) {
            openNav1();
            $('.id').html(feature.properties._id);
            $('.lat').html(feature.geometry.coordinates[0]);
            $('.lon').html(feature.geometry.coordinates[1]);
            $('.depth').html(feature.properties.Depth);
            $('.waterLevel').html(feature.properties.WaterLevel);
            $('.wellHeight').html(feature.properties.WellHeight);
            $('.rotations').html(feature.properties.Rotation);
            $('.chargeStatus').html(feature.properties.ChargeStatus);
            $('.time').html(feature.properties.Time);
        });
    }

    // add().then(function (info) {
    //   console.log(info);
    // });

    // async () => console.log(await add());

    $('.numberUser').html(data.numberUser);
    $('.lastActivity').html(data.lastActivity);
    $('.avgWater').html(data.avgWater);
};
