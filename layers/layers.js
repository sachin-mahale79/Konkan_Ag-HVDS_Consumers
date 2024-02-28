var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_1 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_MSEDCLJalgaonCircleConsumer220823_2_2 = new ol.format.GeoJSON();
var features_MSEDCLJalgaonCircleConsumer220823_2_2 = format_MSEDCLJalgaonCircleConsumer220823_2_2.readFeatures(json_MSEDCLJalgaonCircleConsumer220823_2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSEDCLJalgaonCircleConsumer220823_2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSEDCLJalgaonCircleConsumer220823_2_2.addFeatures(features_MSEDCLJalgaonCircleConsumer220823_2_2);
var lyr_MSEDCLJalgaonCircleConsumer220823_2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MSEDCLJalgaonCircleConsumer220823_2_2, 
                style: style_MSEDCLJalgaonCircleConsumer220823_2_2,
                popuplayertitle: "MSEDCL Jalgaon Circle Consumer 220823_2",
                interactive: true,
    title: 'MSEDCL Jalgaon Circle Consumer 220823_2<br />\
    <img src="styles/legend/MSEDCLJalgaonCircleConsumer220823_2_2_0.png" /> BHUSAWAL UCR DIVISION<br />\
    <img src="styles/legend/MSEDCLJalgaonCircleConsumer220823_2_2_1.png" /> CHALISGAON DIVISION<br />\
    <img src="styles/legend/MSEDCLJalgaonCircleConsumer220823_2_2_2.png" /> DHARANGAON DIVISION<br />\
    <img src="styles/legend/MSEDCLJalgaonCircleConsumer220823_2_2_3.png" /> JALGAON URBAN DIVISION<br />\
    <img src="styles/legend/MSEDCLJalgaonCircleConsumer220823_2_2_4.png" /> MUKTAINAGAR DIVISION<br />\
    <img src="styles/legend/MSEDCLJalgaonCircleConsumer220823_2_2_5.png" /> PACHORA DIVISION<br />\
    <img src="styles/legend/MSEDCLJalgaonCircleConsumer220823_2_2_6.png" /> SAVADA DIVISION<br />\
    <img src="styles/legend/MSEDCLJalgaonCircleConsumer220823_2_2_7.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleRoad_1.setVisible(true);lyr_MSEDCLJalgaonCircleConsumer220823_2_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleRoad_1,lyr_MSEDCLJalgaonCircleConsumer220823_2_2];
lyr_MSEDCLJalgaonCircleConsumer220823_2_2.set('fieldAliases', {'Sr No': 'Sr No', 'REGION': 'REGION', 'ZONE': 'ZONE', 'CIRCLE': 'CIRCLE', 'DIVISION': 'DIVISION', 'SUB_DIVISION': 'SUB_DIVISION', 'SECTION_NAME': 'SECTION_NAME', 'CONSUMER NO': 'CONSUMER NO', 'CONSUMER NAME': 'CONSUMER NAME', 'ADDRESS': 'ADDRESS', 'SANC LOAD': 'SANC LOAD', 'METER NO': 'METER NO', 'MOBILE': 'MOBILE', 'DTC': 'DTC', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr_MSEDCLJalgaonCircleConsumer220823_2_2.set('fieldImages', {'Sr No': 'Range', 'REGION': 'TextEdit', 'ZONE': 'TextEdit', 'CIRCLE': 'TextEdit', 'DIVISION': 'TextEdit', 'SUB_DIVISION': 'TextEdit', 'SECTION_NAME': 'TextEdit', 'CONSUMER NO': 'TextEdit', 'CONSUMER NAME': 'TextEdit', 'ADDRESS': 'TextEdit', 'SANC LOAD': 'TextEdit', 'METER NO': 'Range', 'MOBILE': 'TextEdit', 'DTC': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', });
lyr_MSEDCLJalgaonCircleConsumer220823_2_2.set('fieldLabels', {'Sr No': 'no label', 'REGION': 'inline label - visible with data', 'ZONE': 'inline label - visible with data', 'CIRCLE': 'inline label - visible with data', 'DIVISION': 'inline label - visible with data', 'SUB_DIVISION': 'inline label - visible with data', 'SECTION_NAME': 'inline label - visible with data', 'CONSUMER NO': 'header label - always visible', 'CONSUMER NAME': 'header label - always visible', 'ADDRESS': 'inline label - visible with data', 'SANC LOAD': 'inline label - visible with data', 'METER NO': 'inline label - visible with data', 'MOBILE': 'inline label - visible with data', 'DTC': 'no label', 'LATITUDE': 'inline label - visible with data', 'LONGITUDE': 'inline label - visible with data', });
lyr_MSEDCLJalgaonCircleConsumer220823_2_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});