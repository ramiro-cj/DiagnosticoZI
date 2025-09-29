var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_EsriLightGray_1 = new ol.layer.Tile({
            'title': 'Esri Light Gray',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_municipal_jalisco_2 = new ol.format.GeoJSON();
var features_municipal_jalisco_2 = format_municipal_jalisco_2.readFeatures(json_municipal_jalisco_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_municipal_jalisco_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_municipal_jalisco_2.addFeatures(features_municipal_jalisco_2);
var lyr_municipal_jalisco_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_municipal_jalisco_2, 
                style: style_municipal_jalisco_2,
                popuplayertitle: 'municipal_jalisco',
                interactive: false,
                title: '<img src="styles/legend/municipal_jalisco_2.png" /> municipal_jalisco'
            });
var format_PoblacinSinDerechohabiencia_3 = new ol.format.GeoJSON();
var features_PoblacinSinDerechohabiencia_3 = format_PoblacinSinDerechohabiencia_3.readFeatures(json_PoblacinSinDerechohabiencia_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoblacinSinDerechohabiencia_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoblacinSinDerechohabiencia_3.addFeatures(features_PoblacinSinDerechohabiencia_3);
var lyr_PoblacinSinDerechohabiencia_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoblacinSinDerechohabiencia_3, 
                style: style_PoblacinSinDerechohabiencia_3,
                popuplayertitle: 'Población Sin Derechohabiencia',
                interactive: true,
    title: 'Población Sin Derechohabiencia<br />\
    <img src="styles/legend/PoblacinSinDerechohabiencia_3_0.png" /> 22 - 1262<br />\
    <img src="styles/legend/PoblacinSinDerechohabiencia_3_1.png" /> 1262 - 2683<br />\
    <img src="styles/legend/PoblacinSinDerechohabiencia_3_2.png" /> 2683 - 4602<br />\
    <img src="styles/legend/PoblacinSinDerechohabiencia_3_3.png" /> 4602 - 7134<br />\
    <img src="styles/legend/PoblacinSinDerechohabiencia_3_4.png" /> 7134 - 10001<br />' });
var format_PoblacinGDL_4 = new ol.format.GeoJSON();
var features_PoblacinGDL_4 = format_PoblacinGDL_4.readFeatures(json_PoblacinGDL_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoblacinGDL_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoblacinGDL_4.addFeatures(features_PoblacinGDL_4);
var lyr_PoblacinGDL_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoblacinGDL_4, 
                style: style_PoblacinGDL_4,
                popuplayertitle: 'Población GDL',
                interactive: true,
    title: 'Población GDL<br />\
    <img src="styles/legend/PoblacinGDL_4_0.png" /> 59 - 3322<br />\
    <img src="styles/legend/PoblacinGDL_4_1.png" /> 3322 - 7061<br />\
    <img src="styles/legend/PoblacinGDL_4_2.png" /> 7061 - 12110<br />\
    <img src="styles/legend/PoblacinGDL_4_3.png" /> 12110 - 18774<br />\
    <img src="styles/legend/PoblacinGDL_4_4.png" /> 18774 - 26318<br />' });
var format_GradodeMarginacin_5 = new ol.format.GeoJSON();
var features_GradodeMarginacin_5 = format_GradodeMarginacin_5.readFeatures(json_GradodeMarginacin_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GradodeMarginacin_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GradodeMarginacin_5.addFeatures(features_GradodeMarginacin_5);
var lyr_GradodeMarginacin_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GradodeMarginacin_5, 
                style: style_GradodeMarginacin_5,
                popuplayertitle: 'Grado de Marginación',
                interactive: true,
    title: 'Grado de Marginación<br />\
    <img src="styles/legend/GradodeMarginacin_5_0.png" /> Muy alto<br />\
    <img src="styles/legend/GradodeMarginacin_5_1.png" /> Alto<br />\
    <img src="styles/legend/GradodeMarginacin_5_2.png" /> Medio<br />\
    <img src="styles/legend/GradodeMarginacin_5_3.png" /> Bajo<br />\
    <img src="styles/legend/GradodeMarginacin_5_4.png" /> Muy bajo<br />' });
var format_Zonasisocrnasdetraslado_6 = new ol.format.GeoJSON();
var features_Zonasisocrnasdetraslado_6 = format_Zonasisocrnasdetraslado_6.readFeatures(json_Zonasisocrnasdetraslado_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonasisocrnasdetraslado_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonasisocrnasdetraslado_6.addFeatures(features_Zonasisocrnasdetraslado_6);
var lyr_Zonasisocrnasdetraslado_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonasisocrnasdetraslado_6, 
                style: style_Zonasisocrnasdetraslado_6,
                popuplayertitle: 'Zonas isocrónas de traslado',
                interactive: false,
    title: 'Zonas isocrónas de traslado<br />\
    <img src="styles/legend/Zonasisocrnasdetraslado_6_0.png" /> 10 min<br />\
    <img src="styles/legend/Zonasisocrnasdetraslado_6_1.png" /> 30 min<br />\
    <img src="styles/legend/Zonasisocrnasdetraslado_6_2.png" /> 60 min<br />' });
var format_15kmZonadeinfluenciaCESSA_7 = new ol.format.GeoJSON();
var features_15kmZonadeinfluenciaCESSA_7 = format_15kmZonadeinfluenciaCESSA_7.readFeatures(json_15kmZonadeinfluenciaCESSA_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15kmZonadeinfluenciaCESSA_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15kmZonadeinfluenciaCESSA_7.addFeatures(features_15kmZonadeinfluenciaCESSA_7);
var lyr_15kmZonadeinfluenciaCESSA_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15kmZonadeinfluenciaCESSA_7, 
                style: style_15kmZonadeinfluenciaCESSA_7,
                popuplayertitle: '15 km Zona de influencia CESSA ',
                interactive: false,
                title: '<img src="styles/legend/15kmZonadeinfluenciaCESSA_7.png" /> 15 km Zona de influencia CESSA '
            });
var format_5kmZonadeinfluenciaCSalud_8 = new ol.format.GeoJSON();
var features_5kmZonadeinfluenciaCSalud_8 = format_5kmZonadeinfluenciaCSalud_8.readFeatures(json_5kmZonadeinfluenciaCSalud_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5kmZonadeinfluenciaCSalud_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5kmZonadeinfluenciaCSalud_8.addFeatures(features_5kmZonadeinfluenciaCSalud_8);
var lyr_5kmZonadeinfluenciaCSalud_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_5kmZonadeinfluenciaCSalud_8, 
                style: style_5kmZonadeinfluenciaCSalud_8,
                popuplayertitle: '5 km Zona de influencia CSalud',
                interactive: false,
                title: '<img src="styles/legend/5kmZonadeinfluenciaCSalud_8.png" /> 5 km Zona de influencia CSalud'
            });
var format_Unidadesdesalud_9 = new ol.format.GeoJSON();
var features_Unidadesdesalud_9 = format_Unidadesdesalud_9.readFeatures(json_Unidadesdesalud_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Unidadesdesalud_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Unidadesdesalud_9.addFeatures(features_Unidadesdesalud_9);
var lyr_Unidadesdesalud_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Unidadesdesalud_9, 
                style: style_Unidadesdesalud_9,
                popuplayertitle: 'Unidades de salud',
                interactive: true,
                title: '<img src="styles/legend/Unidadesdesalud_9.png" /> Unidades de salud'
            });
var format_Centro_CUCS__10 = new ol.format.GeoJSON();
var features_Centro_CUCS__10 = format_Centro_CUCS__10.readFeatures(json_Centro_CUCS__10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centro_CUCS__10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centro_CUCS__10.addFeatures(features_Centro_CUCS__10);
var lyr_Centro_CUCS__10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Centro_CUCS__10, 
                style: style_Centro_CUCS__10,
                popuplayertitle: 'Centro_CUCS_',
                interactive: true,
                title: '<img src="styles/legend/Centro_CUCS__10.png" /> Centro_CUCS_'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_EsriLightGray_1.setVisible(true);lyr_municipal_jalisco_2.setVisible(true);lyr_PoblacinSinDerechohabiencia_3.setVisible(true);lyr_PoblacinGDL_4.setVisible(true);lyr_GradodeMarginacin_5.setVisible(true);lyr_Zonasisocrnasdetraslado_6.setVisible(true);lyr_15kmZonadeinfluenciaCESSA_7.setVisible(true);lyr_5kmZonadeinfluenciaCSalud_8.setVisible(true);lyr_Unidadesdesalud_9.setVisible(true);lyr_Centro_CUCS__10.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_EsriLightGray_1,lyr_municipal_jalisco_2,lyr_PoblacinSinDerechohabiencia_3,lyr_PoblacinGDL_4,lyr_GradodeMarginacin_5,lyr_Zonasisocrnasdetraslado_6,lyr_15kmZonadeinfluenciaCESSA_7,lyr_5kmZonadeinfluenciaCSalud_8,lyr_Unidadesdesalud_9,lyr_Centro_CUCS__10];
lyr_municipal_jalisco_2.set('fieldAliases', {'fid': 'fid', 'CVEGEO': 'CVEGEO', 'NOM_ENT': 'NOM_ENT', 'NOMGEO': 'NOMGEO', 'POB1': 'POB1', 'POB2': 'POB2', 'POB2_R': 'POB2_R', 'POB4': 'POB4', 'POB4_R': 'POB4_R', 'POB5': 'POB5', 'POB5_R': 'POB5_R', 'POB6': 'POB6', 'POB6_R': 'POB6_R', 'POB7': 'POB7', 'POB7_R': 'POB7_R', 'POB8': 'POB8', 'POB8_R': 'POB8_R', 'POB9': 'POB9', 'POB9_R': 'POB9_R', 'POB10': 'POB10', 'POB10_R': 'POB10_R', 'POB11': 'POB11', 'POB11_R': 'POB11_R', 'POB12': 'POB12', 'POB12_R': 'POB12_R', 'POB13': 'POB13', 'POB13_R': 'POB13_R', 'POB14': 'POB14', 'POB14_R': 'POB14_R', 'POB15': 'POB15', 'POB15_R': 'POB15_R', 'POB17': 'POB17', 'POB17_R': 'POB17_R', 'POB18': 'POB18', 'POB18_R': 'POB18_R', 'POB19': 'POB19', 'POB19_R': 'POB19_R', 'POB20': 'POB20', 'POB20_R': 'POB20_R', 'POB21': 'POB21', 'POB21_R': 'POB21_R', 'POB22': 'POB22', 'POB22_R': 'POB22_R', 'POB23': 'POB23', 'POB23_R': 'POB23_R', 'POB24': 'POB24', 'POB24_R': 'POB24_R', 'POB25': 'POB25', 'POB25_R': 'POB25_R', 'POB42': 'POB42', 'POB42_R': 'POB42_R', 'POB43': 'POB43', 'POB43_R': 'POB43_R', 'POB45': 'POB45', 'POB45_R': 'POB45_R', 'POB46': 'POB46', 'POB46_R': 'POB46_R', 'POB47': 'POB47', 'POB47_R': 'POB47_R', 'POB48': 'POB48', 'POB48_R': 'POB48_R', 'POB49': 'POB49', 'POB49_R': 'POB49_R', 'POB50': 'POB50', 'POB50_R': 'POB50_R', 'POB51': 'POB51', 'POB51_R': 'POB51_R', 'POB52': 'POB52', 'POB52_R': 'POB52_R', 'POB53': 'POB53', 'POB53_R': 'POB53_R', 'POB54': 'POB54', 'POB54_R': 'POB54_R', 'POB55': 'POB55', 'POB55_R': 'POB55_R', 'POB56': 'POB56', 'POB56_R': 'POB56_R', 'POB57': 'POB57', 'POB57_R': 'POB57_R', 'POB59': 'POB59', 'POB59_R': 'POB59_R', 'POB60': 'POB60', 'POB60_R': 'POB60_R', 'POB61': 'POB61', 'POB61_R': 'POB61_R', 'POB62': 'POB62', 'POB62_R': 'POB62_R', 'POB63': 'POB63', 'POB63_R': 'POB63_R', 'POB64': 'POB64', 'POB64_R': 'POB64_R', 'POB65': 'POB65', 'POB65_R': 'POB65_R', 'POB66': 'POB66', 'POB66_R': 'POB66_R', 'POB67': 'POB67', 'POB67_R': 'POB67_R', 'POB84': 'POB84', 'POB84_R': 'POB84_R', 'POB85': 'POB85', 'POB85_R': 'POB85_R', 'POB87': 'POB87', 'POB87_R': 'POB87_R', 'POB88': 'POB88', 'POB88_R': 'POB88_R', 'POB89': 'POB89', 'POB89_R': 'POB89_R', 'POB90': 'POB90', 'POB90_R': 'POB90_R', 'POB91': 'POB91', 'POB91_R': 'POB91_R', 'POB92': 'POB92', 'POB92_R': 'POB92_R', 'POB93': 'POB93', 'POB93_R': 'POB93_R', 'POB94': 'POB94', 'POB94_R': 'POB94_R', 'POB95': 'POB95', 'POB95_R': 'POB95_R', 'POB96': 'POB96', 'POB96_R': 'POB96_R', 'POB97': 'POB97', 'POB97_R': 'POB97_R', 'POB98': 'POB98', 'POB98_R': 'POB98_R', 'POB100': 'POB100', 'POB100_R': 'POB100_R', 'POB101': 'POB101', 'POB101_R': 'POB101_R', 'POB102': 'POB102', 'POB102_R': 'POB102_R', 'POB103': 'POB103', 'POB103_R': 'POB103_R', 'POB104': 'POB104', 'POB104_R': 'POB104_R', 'POB105': 'POB105', 'POB105_R': 'POB105_R', 'POB106': 'POB106', 'POB106_R': 'POB106_R', 'POB107': 'POB107', 'POB107_R': 'POB107_R', 'POB108': 'POB108', 'POB108_R': 'POB108_R', 'POB125_R': 'POB125_R', 'POB126_R': 'POB126_R', 'POB127_R': 'POB127_R', 'POB128_R': 'POB128_R', 'POB129_R': 'POB129_R', 'POB130_R': 'POB130_R', 'POB131_R': 'POB131_R', 'POB132_R': 'POB132_R', 'POB133_R': 'POB133_R', 'POB134_R': 'POB134_R', 'POB3': 'POB3', 'POB3_R': 'POB3_R', 'POB16': 'POB16', 'POB16_R': 'POB16_R', 'POB26': 'POB26', 'POB26_R': 'POB26_R', 'POB27': 'POB27', 'POB27_R': 'POB27_R', 'POB28': 'POB28', 'POB28_R': 'POB28_R', 'POB29': 'POB29', 'POB29_R': 'POB29_R', 'POB30': 'POB30', 'POB30_R': 'POB30_R', 'POB31': 'POB31', 'POB31_R': 'POB31_R', 'POB32': 'POB32', 'POB32_R': 'POB32_R', 'POB33': 'POB33', 'POB33_R': 'POB33_R', 'POB34': 'POB34', 'POB34_R': 'POB34_R', 'POB35': 'POB35', 'POB35_R': 'POB35_R', 'POB36': 'POB36', 'POB36_R': 'POB36_R', 'POB37': 'POB37', 'POB37_R': 'POB37_R', 'POB38': 'POB38', 'POB38_R': 'POB38_R', 'POB39': 'POB39', 'POB39_R': 'POB39_R', 'POB40': 'POB40', 'POB40_R': 'POB40_R', 'POB41': 'POB41', 'POB41_R': 'POB41_R', 'POB44': 'POB44', 'POB44_R': 'POB44_R', 'POB58': 'POB58', 'POB58_R': 'POB58_R', 'POB68': 'POB68', 'POB68_R': 'POB68_R', 'POB69': 'POB69', 'POB69_R': 'POB69_R', 'POB70': 'POB70', 'POB70_R': 'POB70_R', 'POB71': 'POB71', 'POB71_R': 'POB71_R', 'POB72': 'POB72', 'POB72_R': 'POB72_R', 'POB73': 'POB73', 'POB73_R': 'POB73_R', 'POB74': 'POB74', 'POB74_R': 'POB74_R', 'POB75': 'POB75', 'POB75_R': 'POB75_R', 'POB76': 'POB76', 'POB76_R': 'POB76_R', 'POB77': 'POB77', 'POB77_R': 'POB77_R', 'POB78': 'POB78', 'POB78_R': 'POB78_R', 'POB79': 'POB79', 'POB79_R': 'POB79_R', 'POB80': 'POB80', 'POB80_R': 'POB80_R', 'POB81': 'POB81', 'POB81_R': 'POB81_R', 'POB82': 'POB82', 'POB82_R': 'POB82_R', 'POB83': 'POB83', 'POB83_R': 'POB83_R', 'POB86': 'POB86', 'POB86_R': 'POB86_R', 'POB99': 'POB99', 'POB99_R': 'POB99_R', 'POB109': 'POB109', 'POB109_R': 'POB109_R', 'POB110': 'POB110', 'POB110_R': 'POB110_R', 'POB111': 'POB111', 'POB111_R': 'POB111_R', 'POB112': 'POB112', 'POB112_R': 'POB112_R', 'POB113': 'POB113', 'POB113_R': 'POB113_R', 'POB114': 'POB114', 'POB114_R': 'POB114_R', 'POB115': 'POB115', 'POB115_R': 'POB115_R', 'POB116': 'POB116', 'POB116_R': 'POB116_R', 'POB117': 'POB117', 'POB117_R': 'POB117_R', 'POB118': 'POB118', 'POB118_R': 'POB118_R', 'POB119': 'POB119', 'POB119_R': 'POB119_R', 'POB120': 'POB120', 'POB120_R': 'POB120_R', 'POB121': 'POB121', 'POB121_R': 'POB121_R', 'POB122': 'POB122', 'POB122_R': 'POB122_R', 'POB123': 'POB123', 'POB123_R': 'POB123_R', 'POB124': 'POB124', 'POB124_R': 'POB124_R', 'OID': 'OID', });
lyr_PoblacinSinDerechohabiencia_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'CVE_COL': 'CVE_COL', 'ID_COL': 'ID_COL', 'COLONIA': 'COLONIA', 'CP': 'CP', 'CVE_ENT': 'CVE_ENT', 'NOM_ENT': 'NOM_ENT', 'MUN': 'MUN', 'CVE_MUN': 'CVE_MUN', 'NOM_MUN': 'NOM_MUN', 'POBTOT': 'POBTOT', 'PobSDRC': 'PobSDRC', });
lyr_PoblacinGDL_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'CVE_COL': 'CVE_COL', 'ID_COL': 'ID_COL', 'COLONIA': 'COLONIA', 'CP': 'CP', 'NOM_SUN': 'NOM_SUN', 'POBTOT': 'POBTOT', 'IM_2020': 'IM_2020', 'GM_2020': 'GM_2020', 'IMN_2020': 'IMN_2020', 'CLASIF': 'CLASIF', });
lyr_GradodeMarginacin_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'CVE_COL': 'CVE_COL', 'ID_COL': 'ID_COL', 'COLONIA': 'COLONIA', 'CP': 'CP', 'NOM_SUN': 'NOM_SUN', 'POBTOT': 'POBTOT', 'IM_2020': 'IM_2020', 'GM_2020': 'GM_2020', 'IMN_2020': 'IMN_2020', 'CLASIF': 'CLASIF', });
lyr_Zonasisocrnasdetraslado_6.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_15kmZonadeinfluenciaCESSA_7.set('fieldAliases', {'fid': 'fid', 'Nombre': 'Nombre', });
lyr_5kmZonadeinfluenciaCSalud_8.set('fieldAliases', {'fid': 'fid', 'Nombre': 'Nombre', });
lyr_Unidadesdesalud_9.set('fieldAliases', {'Nombre_Unidad': 'Nombre_Unidad', 'Nivel_atencion': 'Nivel_atencion', 'Total_camas': 'Total_camas', 'Total_consultorios': 'Total_consultorios', 'CLUE': 'CLUE', 'Institucion': 'Institucion', 'CON_gral': 'CON_gral', 'CON_otras': 'CON_otras', 'CAMAS_hosp': 'CAMAS_hosp', 'CAMAS_otrasNC': 'CAMAS_otrasNC', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', });
lyr_Centro_CUCS__10.set('fieldAliases', {'fid': 'fid', 'Nombre': 'Nombre', });
lyr_municipal_jalisco_2.set('fieldImages', {'fid': 'TextEdit', 'CVEGEO': 'TextEdit', 'NOM_ENT': 'TextEdit', 'NOMGEO': 'TextEdit', 'POB1': 'TextEdit', 'POB2': 'TextEdit', 'POB2_R': 'TextEdit', 'POB4': 'TextEdit', 'POB4_R': 'TextEdit', 'POB5': 'TextEdit', 'POB5_R': 'TextEdit', 'POB6': 'TextEdit', 'POB6_R': 'TextEdit', 'POB7': 'TextEdit', 'POB7_R': 'TextEdit', 'POB8': 'TextEdit', 'POB8_R': 'TextEdit', 'POB9': 'TextEdit', 'POB9_R': 'TextEdit', 'POB10': 'TextEdit', 'POB10_R': 'TextEdit', 'POB11': 'TextEdit', 'POB11_R': 'TextEdit', 'POB12': 'TextEdit', 'POB12_R': 'TextEdit', 'POB13': 'TextEdit', 'POB13_R': 'TextEdit', 'POB14': 'TextEdit', 'POB14_R': 'TextEdit', 'POB15': 'TextEdit', 'POB15_R': 'TextEdit', 'POB17': 'TextEdit', 'POB17_R': 'TextEdit', 'POB18': 'TextEdit', 'POB18_R': 'TextEdit', 'POB19': 'TextEdit', 'POB19_R': 'TextEdit', 'POB20': 'TextEdit', 'POB20_R': 'TextEdit', 'POB21': 'TextEdit', 'POB21_R': 'TextEdit', 'POB22': 'TextEdit', 'POB22_R': 'TextEdit', 'POB23': 'TextEdit', 'POB23_R': 'TextEdit', 'POB24': 'TextEdit', 'POB24_R': 'TextEdit', 'POB25': 'TextEdit', 'POB25_R': 'TextEdit', 'POB42': 'TextEdit', 'POB42_R': 'TextEdit', 'POB43': 'TextEdit', 'POB43_R': 'TextEdit', 'POB45': 'TextEdit', 'POB45_R': 'TextEdit', 'POB46': 'TextEdit', 'POB46_R': 'TextEdit', 'POB47': 'TextEdit', 'POB47_R': 'TextEdit', 'POB48': 'TextEdit', 'POB48_R': 'TextEdit', 'POB49': 'TextEdit', 'POB49_R': 'TextEdit', 'POB50': 'TextEdit', 'POB50_R': 'TextEdit', 'POB51': 'TextEdit', 'POB51_R': 'TextEdit', 'POB52': 'TextEdit', 'POB52_R': 'TextEdit', 'POB53': 'TextEdit', 'POB53_R': 'TextEdit', 'POB54': 'TextEdit', 'POB54_R': 'TextEdit', 'POB55': 'TextEdit', 'POB55_R': 'TextEdit', 'POB56': 'TextEdit', 'POB56_R': 'TextEdit', 'POB57': 'TextEdit', 'POB57_R': 'TextEdit', 'POB59': 'TextEdit', 'POB59_R': 'TextEdit', 'POB60': 'TextEdit', 'POB60_R': 'TextEdit', 'POB61': 'TextEdit', 'POB61_R': 'TextEdit', 'POB62': 'TextEdit', 'POB62_R': 'TextEdit', 'POB63': 'TextEdit', 'POB63_R': 'TextEdit', 'POB64': 'TextEdit', 'POB64_R': 'TextEdit', 'POB65': 'TextEdit', 'POB65_R': 'TextEdit', 'POB66': 'TextEdit', 'POB66_R': 'TextEdit', 'POB67': 'TextEdit', 'POB67_R': 'TextEdit', 'POB84': 'TextEdit', 'POB84_R': 'TextEdit', 'POB85': 'TextEdit', 'POB85_R': 'TextEdit', 'POB87': 'TextEdit', 'POB87_R': 'TextEdit', 'POB88': 'TextEdit', 'POB88_R': 'TextEdit', 'POB89': 'TextEdit', 'POB89_R': 'TextEdit', 'POB90': 'TextEdit', 'POB90_R': 'TextEdit', 'POB91': 'TextEdit', 'POB91_R': 'TextEdit', 'POB92': 'TextEdit', 'POB92_R': 'TextEdit', 'POB93': 'TextEdit', 'POB93_R': 'TextEdit', 'POB94': 'TextEdit', 'POB94_R': 'TextEdit', 'POB95': 'TextEdit', 'POB95_R': 'TextEdit', 'POB96': 'TextEdit', 'POB96_R': 'TextEdit', 'POB97': 'TextEdit', 'POB97_R': 'TextEdit', 'POB98': 'TextEdit', 'POB98_R': 'TextEdit', 'POB100': 'TextEdit', 'POB100_R': 'TextEdit', 'POB101': 'TextEdit', 'POB101_R': 'TextEdit', 'POB102': 'TextEdit', 'POB102_R': 'TextEdit', 'POB103': 'TextEdit', 'POB103_R': 'TextEdit', 'POB104': 'TextEdit', 'POB104_R': 'TextEdit', 'POB105': 'TextEdit', 'POB105_R': 'TextEdit', 'POB106': 'TextEdit', 'POB106_R': 'TextEdit', 'POB107': 'TextEdit', 'POB107_R': 'TextEdit', 'POB108': 'TextEdit', 'POB108_R': 'TextEdit', 'POB125_R': 'TextEdit', 'POB126_R': 'TextEdit', 'POB127_R': 'TextEdit', 'POB128_R': 'TextEdit', 'POB129_R': 'TextEdit', 'POB130_R': 'TextEdit', 'POB131_R': 'TextEdit', 'POB132_R': 'TextEdit', 'POB133_R': 'TextEdit', 'POB134_R': 'TextEdit', 'POB3': 'TextEdit', 'POB3_R': 'TextEdit', 'POB16': 'TextEdit', 'POB16_R': 'TextEdit', 'POB26': 'TextEdit', 'POB26_R': 'TextEdit', 'POB27': 'TextEdit', 'POB27_R': 'TextEdit', 'POB28': 'TextEdit', 'POB28_R': 'TextEdit', 'POB29': 'TextEdit', 'POB29_R': 'TextEdit', 'POB30': 'TextEdit', 'POB30_R': 'TextEdit', 'POB31': 'TextEdit', 'POB31_R': 'TextEdit', 'POB32': 'TextEdit', 'POB32_R': 'TextEdit', 'POB33': 'TextEdit', 'POB33_R': 'TextEdit', 'POB34': 'TextEdit', 'POB34_R': 'TextEdit', 'POB35': 'TextEdit', 'POB35_R': 'TextEdit', 'POB36': 'TextEdit', 'POB36_R': 'TextEdit', 'POB37': 'TextEdit', 'POB37_R': 'TextEdit', 'POB38': 'TextEdit', 'POB38_R': 'TextEdit', 'POB39': 'TextEdit', 'POB39_R': 'TextEdit', 'POB40': 'TextEdit', 'POB40_R': 'TextEdit', 'POB41': 'TextEdit', 'POB41_R': 'TextEdit', 'POB44': 'TextEdit', 'POB44_R': 'TextEdit', 'POB58': 'TextEdit', 'POB58_R': 'TextEdit', 'POB68': 'TextEdit', 'POB68_R': 'TextEdit', 'POB69': 'TextEdit', 'POB69_R': 'TextEdit', 'POB70': 'TextEdit', 'POB70_R': 'TextEdit', 'POB71': 'TextEdit', 'POB71_R': 'TextEdit', 'POB72': 'TextEdit', 'POB72_R': 'TextEdit', 'POB73': 'TextEdit', 'POB73_R': 'TextEdit', 'POB74': 'TextEdit', 'POB74_R': 'TextEdit', 'POB75': 'TextEdit', 'POB75_R': 'TextEdit', 'POB76': 'TextEdit', 'POB76_R': 'TextEdit', 'POB77': 'TextEdit', 'POB77_R': 'TextEdit', 'POB78': 'TextEdit', 'POB78_R': 'TextEdit', 'POB79': 'TextEdit', 'POB79_R': 'TextEdit', 'POB80': 'TextEdit', 'POB80_R': 'TextEdit', 'POB81': 'TextEdit', 'POB81_R': 'TextEdit', 'POB82': 'TextEdit', 'POB82_R': 'TextEdit', 'POB83': 'TextEdit', 'POB83_R': 'TextEdit', 'POB86': 'TextEdit', 'POB86_R': 'TextEdit', 'POB99': 'TextEdit', 'POB99_R': 'TextEdit', 'POB109': 'TextEdit', 'POB109_R': 'TextEdit', 'POB110': 'TextEdit', 'POB110_R': 'TextEdit', 'POB111': 'TextEdit', 'POB111_R': 'TextEdit', 'POB112': 'TextEdit', 'POB112_R': 'TextEdit', 'POB113': 'TextEdit', 'POB113_R': 'TextEdit', 'POB114': 'TextEdit', 'POB114_R': 'TextEdit', 'POB115': 'TextEdit', 'POB115_R': 'TextEdit', 'POB116': 'TextEdit', 'POB116_R': 'TextEdit', 'POB117': 'TextEdit', 'POB117_R': 'TextEdit', 'POB118': 'TextEdit', 'POB118_R': 'TextEdit', 'POB119': 'TextEdit', 'POB119_R': 'TextEdit', 'POB120': 'TextEdit', 'POB120_R': 'TextEdit', 'POB121': 'TextEdit', 'POB121_R': 'TextEdit', 'POB122': 'TextEdit', 'POB122_R': 'TextEdit', 'POB123': 'TextEdit', 'POB123_R': 'TextEdit', 'POB124': 'TextEdit', 'POB124_R': 'TextEdit', 'OID': 'Range', });
lyr_PoblacinSinDerechohabiencia_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'CVE_COL': 'TextEdit', 'ID_COL': 'Range', 'COLONIA': 'TextEdit', 'CP': 'TextEdit', 'CVE_ENT': 'TextEdit', 'NOM_ENT': 'TextEdit', 'MUN': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'POBTOT': 'TextEdit', 'PobSDRC': 'Range', });
lyr_PoblacinGDL_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'CVE_COL': 'TextEdit', 'ID_COL': 'Range', 'COLONIA': 'TextEdit', 'CP': 'TextEdit', 'NOM_SUN': 'TextEdit', 'POBTOT': 'TextEdit', 'IM_2020': 'TextEdit', 'GM_2020': 'TextEdit', 'IMN_2020': 'TextEdit', 'CLASIF': 'TextEdit', });
lyr_GradodeMarginacin_5.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'CVE_COL': 'TextEdit', 'ID_COL': 'Range', 'COLONIA': 'TextEdit', 'CP': 'TextEdit', 'NOM_SUN': 'TextEdit', 'POBTOT': 'TextEdit', 'IM_2020': 'TextEdit', 'GM_2020': 'TextEdit', 'IMN_2020': 'TextEdit', 'CLASIF': 'TextEdit', });
lyr_Zonasisocrnasdetraslado_6.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'Range', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_15kmZonadeinfluenciaCESSA_7.set('fieldImages', {'fid': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_5kmZonadeinfluenciaCSalud_8.set('fieldImages', {'fid': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Unidadesdesalud_9.set('fieldImages', {'Nombre_Unidad': 'TextEdit', 'Nivel_atencion': 'TextEdit', 'Total_camas': 'Range', 'Total_consultorios': 'Range', 'CLUE': 'TextEdit', 'Institucion': 'TextEdit', 'CON_gral': 'Range', 'CON_otras': 'Range', 'CAMAS_hosp': 'Range', 'CAMAS_otrasNC': 'Range', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', });
lyr_Centro_CUCS__10.set('fieldImages', {'fid': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_municipal_jalisco_2.set('fieldLabels', {'fid': 'no label', 'CVEGEO': 'no label', 'NOM_ENT': 'no label', 'NOMGEO': 'no label', 'POB1': 'no label', 'POB2': 'no label', 'POB2_R': 'no label', 'POB4': 'no label', 'POB4_R': 'no label', 'POB5': 'no label', 'POB5_R': 'no label', 'POB6': 'no label', 'POB6_R': 'no label', 'POB7': 'no label', 'POB7_R': 'no label', 'POB8': 'no label', 'POB8_R': 'no label', 'POB9': 'no label', 'POB9_R': 'no label', 'POB10': 'no label', 'POB10_R': 'no label', 'POB11': 'no label', 'POB11_R': 'no label', 'POB12': 'no label', 'POB12_R': 'no label', 'POB13': 'no label', 'POB13_R': 'no label', 'POB14': 'no label', 'POB14_R': 'no label', 'POB15': 'no label', 'POB15_R': 'no label', 'POB17': 'no label', 'POB17_R': 'no label', 'POB18': 'no label', 'POB18_R': 'no label', 'POB19': 'no label', 'POB19_R': 'no label', 'POB20': 'no label', 'POB20_R': 'no label', 'POB21': 'no label', 'POB21_R': 'no label', 'POB22': 'no label', 'POB22_R': 'no label', 'POB23': 'no label', 'POB23_R': 'no label', 'POB24': 'no label', 'POB24_R': 'no label', 'POB25': 'no label', 'POB25_R': 'no label', 'POB42': 'no label', 'POB42_R': 'no label', 'POB43': 'no label', 'POB43_R': 'no label', 'POB45': 'no label', 'POB45_R': 'no label', 'POB46': 'no label', 'POB46_R': 'no label', 'POB47': 'no label', 'POB47_R': 'no label', 'POB48': 'no label', 'POB48_R': 'no label', 'POB49': 'no label', 'POB49_R': 'no label', 'POB50': 'no label', 'POB50_R': 'no label', 'POB51': 'no label', 'POB51_R': 'no label', 'POB52': 'no label', 'POB52_R': 'no label', 'POB53': 'no label', 'POB53_R': 'no label', 'POB54': 'no label', 'POB54_R': 'no label', 'POB55': 'no label', 'POB55_R': 'no label', 'POB56': 'no label', 'POB56_R': 'no label', 'POB57': 'no label', 'POB57_R': 'no label', 'POB59': 'no label', 'POB59_R': 'no label', 'POB60': 'no label', 'POB60_R': 'no label', 'POB61': 'no label', 'POB61_R': 'no label', 'POB62': 'no label', 'POB62_R': 'no label', 'POB63': 'no label', 'POB63_R': 'no label', 'POB64': 'no label', 'POB64_R': 'no label', 'POB65': 'no label', 'POB65_R': 'no label', 'POB66': 'no label', 'POB66_R': 'no label', 'POB67': 'no label', 'POB67_R': 'no label', 'POB84': 'no label', 'POB84_R': 'no label', 'POB85': 'no label', 'POB85_R': 'no label', 'POB87': 'no label', 'POB87_R': 'no label', 'POB88': 'no label', 'POB88_R': 'no label', 'POB89': 'no label', 'POB89_R': 'no label', 'POB90': 'no label', 'POB90_R': 'no label', 'POB91': 'no label', 'POB91_R': 'no label', 'POB92': 'no label', 'POB92_R': 'no label', 'POB93': 'no label', 'POB93_R': 'no label', 'POB94': 'no label', 'POB94_R': 'no label', 'POB95': 'no label', 'POB95_R': 'no label', 'POB96': 'no label', 'POB96_R': 'no label', 'POB97': 'no label', 'POB97_R': 'no label', 'POB98': 'no label', 'POB98_R': 'no label', 'POB100': 'no label', 'POB100_R': 'no label', 'POB101': 'no label', 'POB101_R': 'no label', 'POB102': 'no label', 'POB102_R': 'no label', 'POB103': 'no label', 'POB103_R': 'no label', 'POB104': 'no label', 'POB104_R': 'no label', 'POB105': 'no label', 'POB105_R': 'no label', 'POB106': 'no label', 'POB106_R': 'no label', 'POB107': 'no label', 'POB107_R': 'no label', 'POB108': 'no label', 'POB108_R': 'no label', 'POB125_R': 'no label', 'POB126_R': 'no label', 'POB127_R': 'no label', 'POB128_R': 'no label', 'POB129_R': 'no label', 'POB130_R': 'no label', 'POB131_R': 'no label', 'POB132_R': 'no label', 'POB133_R': 'no label', 'POB134_R': 'no label', 'POB3': 'no label', 'POB3_R': 'no label', 'POB16': 'no label', 'POB16_R': 'no label', 'POB26': 'no label', 'POB26_R': 'no label', 'POB27': 'no label', 'POB27_R': 'no label', 'POB28': 'no label', 'POB28_R': 'no label', 'POB29': 'no label', 'POB29_R': 'no label', 'POB30': 'no label', 'POB30_R': 'no label', 'POB31': 'no label', 'POB31_R': 'no label', 'POB32': 'no label', 'POB32_R': 'no label', 'POB33': 'no label', 'POB33_R': 'no label', 'POB34': 'no label', 'POB34_R': 'no label', 'POB35': 'no label', 'POB35_R': 'no label', 'POB36': 'no label', 'POB36_R': 'no label', 'POB37': 'no label', 'POB37_R': 'no label', 'POB38': 'no label', 'POB38_R': 'no label', 'POB39': 'no label', 'POB39_R': 'no label', 'POB40': 'no label', 'POB40_R': 'no label', 'POB41': 'no label', 'POB41_R': 'no label', 'POB44': 'no label', 'POB44_R': 'no label', 'POB58': 'no label', 'POB58_R': 'no label', 'POB68': 'no label', 'POB68_R': 'no label', 'POB69': 'no label', 'POB69_R': 'no label', 'POB70': 'no label', 'POB70_R': 'no label', 'POB71': 'no label', 'POB71_R': 'no label', 'POB72': 'no label', 'POB72_R': 'no label', 'POB73': 'no label', 'POB73_R': 'no label', 'POB74': 'no label', 'POB74_R': 'no label', 'POB75': 'no label', 'POB75_R': 'no label', 'POB76': 'no label', 'POB76_R': 'no label', 'POB77': 'no label', 'POB77_R': 'no label', 'POB78': 'no label', 'POB78_R': 'no label', 'POB79': 'no label', 'POB79_R': 'no label', 'POB80': 'no label', 'POB80_R': 'no label', 'POB81': 'no label', 'POB81_R': 'no label', 'POB82': 'no label', 'POB82_R': 'no label', 'POB83': 'no label', 'POB83_R': 'no label', 'POB86': 'no label', 'POB86_R': 'no label', 'POB99': 'no label', 'POB99_R': 'no label', 'POB109': 'no label', 'POB109_R': 'no label', 'POB110': 'no label', 'POB110_R': 'no label', 'POB111': 'no label', 'POB111_R': 'no label', 'POB112': 'no label', 'POB112_R': 'no label', 'POB113': 'no label', 'POB113_R': 'no label', 'POB114': 'no label', 'POB114_R': 'no label', 'POB115': 'no label', 'POB115_R': 'no label', 'POB116': 'no label', 'POB116_R': 'no label', 'POB117': 'no label', 'POB117_R': 'no label', 'POB118': 'no label', 'POB118_R': 'no label', 'POB119': 'no label', 'POB119_R': 'no label', 'POB120': 'no label', 'POB120_R': 'no label', 'POB121': 'no label', 'POB121_R': 'no label', 'POB122': 'no label', 'POB122_R': 'no label', 'POB123': 'no label', 'POB123_R': 'no label', 'POB124': 'no label', 'POB124_R': 'no label', 'OID': 'no label', });
lyr_PoblacinSinDerechohabiencia_3.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'CVE_COL': 'hidden field', 'ID_COL': 'hidden field', 'COLONIA': 'inline label - always visible', 'CP': 'hidden field', 'CVE_ENT': 'hidden field', 'NOM_ENT': 'hidden field', 'MUN': 'hidden field', 'CVE_MUN': 'hidden field', 'NOM_MUN': 'hidden field', 'POBTOT': 'hidden field', 'PobSDRC': 'inline label - always visible', });
lyr_PoblacinGDL_4.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'CVE_COL': 'hidden field', 'ID_COL': 'hidden field', 'COLONIA': 'inline label - always visible', 'CP': 'hidden field', 'NOM_SUN': 'hidden field', 'POBTOT': 'inline label - always visible', 'IM_2020': 'hidden field', 'GM_2020': 'hidden field', 'IMN_2020': 'hidden field', 'CLASIF': 'hidden field', });
lyr_GradodeMarginacin_5.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'CVE_COL': 'hidden field', 'ID_COL': 'hidden field', 'COLONIA': 'inline label - always visible', 'CP': 'hidden field', 'NOM_SUN': 'hidden field', 'POBTOT': 'hidden field', 'IM_2020': 'inline label - always visible', 'GM_2020': 'inline label - always visible', 'IMN_2020': 'hidden field', 'CLASIF': 'inline label - always visible', });
lyr_Zonasisocrnasdetraslado_6.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_15kmZonadeinfluenciaCESSA_7.set('fieldLabels', {'fid': 'no label', 'Nombre': 'no label', });
lyr_5kmZonadeinfluenciaCSalud_8.set('fieldLabels', {'fid': 'no label', 'Nombre': 'no label', });
lyr_Unidadesdesalud_9.set('fieldLabels', {'Nombre_Unidad': 'inline label - always visible', 'Nivel_atencion': 'inline label - always visible', 'Total_camas': 'inline label - always visible', 'Total_consultorios': 'inline label - always visible', 'CLUE': 'hidden field', 'Institucion': 'inline label - always visible', 'CON_gral': 'inline label - always visible', 'CON_otras': 'inline label - always visible', 'CAMAS_hosp': 'hidden field', 'CAMAS_otrasNC': 'hidden field', 'LATITUD': 'hidden field', 'LONGITUD': 'hidden field', });
lyr_Centro_CUCS__10.set('fieldLabels', {'fid': 'hidden field', 'Nombre': 'inline label - always visible', });
lyr_Centro_CUCS__10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});