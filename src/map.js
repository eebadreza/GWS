window.addEventListener('load', async () => {
    try {
        const corner1 = L.latLng(84, -180);
        const corner2 = L.latLng(-78, 200);
        const bounds = L.latLngBounds(corner1, corner2);

        var grayIcon = await new L.Icon({
            iconUrl: '../img/marker-icon-2x-grey.png',
            shadowUrl: '../img/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41],
        });

        const map = L.map('map', {
            center: [6, 8],
            zoom: 3,
            minZoom: 3,
            maxBounds: bounds,
        });

        L.tileLayer(
            'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
            {
                attribution:
                    '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
            }
        ).addTo(map);

        const data = {
            type: 'FeatureCollection',
            lastActivity: '12-10-2022',
            avgWater: '60',
            name: 'data',
            numberUser: '3',
            features: [
                {
                    type: 'Feature',
                    properties: {
                        device_id: '63fdaec43528b005c361f3fb',
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
                        device_id: '63fdd05c338e89ebace45874',
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
                        device_id: '63fdd05c3wefe89ebace45874',
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

        L.geoJSON(data, {
            onEachFeature: onEachFeature,
            pointToLayer: function (point, latlng) {
                return L.marker(latlng, { icon: grayIcon });
            },
        }).addTo(map);

        function onEachFeature(feature, layer) {
            layer.on('click', function () {
                openNavData();
                document.querySelector('.id').textContent =
                    feature.properties.device_id;
                document.querySelector('.lat').textContent =
                    feature.geometry.coordinates[0];
                document.querySelector('.lon').textContent =
                    feature.geometry.coordinates[1];
                document.querySelector('.depth').textContent =
                    feature.properties.Depth;
                document.querySelector('.waterLevel').textContent =
                    feature.properties.WaterLevel;
                document.querySelector('.wellHeight').textContent =
                    feature.properties.WellHeight;
                document.querySelector('.rotations').textContent =
                    feature.properties.Rotation;
                document.querySelector('.chargeStatus').textContent =
                    feature.properties.ChargeStatus;
                document.querySelector('.time').textContent =
                    feature.properties.Time;
            });
        }

        document.querySelector('.numberUser').textContent = data.numberUser;
        document.querySelector('.lastActivity').textContent = data.lastActivity;
        document.querySelector('.avgWater').textContent = data.avgWater;
    } catch (error) {
        console.log(error);
    }
});
