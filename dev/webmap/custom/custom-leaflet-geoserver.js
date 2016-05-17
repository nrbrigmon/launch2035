var map, tableHeader, tableTitle, tableSelection, zIndexCount = 99950, layerCount = 0, layerIndex = {}, selectedLayers = [];
var globalhead, globalfoot;

    /* Setup Leaflet items */
    map = L.map('map', {
        center: [34.7013484,-86.95],
        zoom: 9,
        zoomControl: false,
        scrollWheelZoom: false,
        maxZoom: 18,
        inertia: true,
        inertiaDeceleration: 6000
    });

    // var hash = new L.Hash(map); //add hashes to html address to easy share locations
    var additional_attrib = 'Template by <span class="civic-text">Civic Analytics</span><br>';

    var basemap_0 = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: additional_attrib + '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    });
    var basemap_1 = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        attribution: additional_attrib + '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
    });
    var basemap_2 = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
        attribution: additional_attrib + '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
    });
    var basemap_3 = L.tileLayer('http://otile1.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.jpg', {
        attribution: additional_attrib + 'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a> &mdash; Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency'
    });
    var basemap_4 = L.tileLayer('http://a.tile.stamen.com/terrain/{z}/{x}/{y}.png', {
        attribution: additional_attrib + 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data: &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    });
    basemap_1.addTo(map);

    var baseMaps = {
        'Standard (OpenStreetMap)': basemap_0,
        'Positron (CartoDB)': basemap_1,
        'Dark Matter (CartoDB)': basemap_2,
        'Aerial (MapQuestOpen)': basemap_3,
        'Terrain (Stamen)': basemap_4
    };

    L.control.layers(baseMaps, {}, { collapsed: true }).addTo(map);

    //leaflet items to add to overlay map
    var layerSelector = L.control({ position: 'bottomright' });
    layerSelector.onAdd = function(map) {
        var div = L.DomUtil.create('div', 'info legend visible-layers');
        div.innerHTML = "<div><p class='legend-title'>Legend</p><div id='legend-layer-list' ></div></div>";
        return div;
    };
    layerSelector.addTo(map);
    L.control.zoom({ position: 'topright' }).addTo(map);

    var geocoderOptions = {
        bounds: false,
        position: 'topright',
        expanded: false,
        placeholder: 'Search',
        autocomplete: true
    };
    L.control.geocoder('search-eyrq6y4', geocoderOptions).addTo(map);

    $(".table-results-box").hide();
    //jQuery to set up Base Map Panel better:
    $(".leaflet-control-layers-base > label:first-child ").before("<h5 class='base-map-title'>Base Maps</h5>");

    /* Select2 activation code */
    $(".select-js-basic").select2();
    var $eventSelect = $(".select-js-basic");
    $eventSelect.on("select2:select", function(e) {
        $(".select2-selection__rendered").html('Select a data set'); // clear out values selected and add original placeholder
        //console.log(e);

    });

    $(".select-js-basic").select2('data', {
        allowClear: true
    }); // clear out values selected

    // /* Setup global functions */
    var addChosenLayer = function(value) {
        var newLayer = L.tileLayer.betterWms("http://ec2-52-7-5-52.compute-1.amazonaws.com:80/geoserver/alabama/wms", {
            layers: 'alabama:' + value + '',
            format: 'image/png',
            transparent: true,
            version: '1.1.0',
            attribution: "", //"layer by nate brigmon"
        });

        layerIndex[value] = newLayer;
        layerIndex[value].addTo(map);
        layerIndex[value].setZIndex(zIndexCount);
    }

    $('#add-layer-dropdown select').on('change', function() {
        var value = $(this).val();
        console.log(value);
//        if (value == )
        if (selectedLayers.indexOf(value) > 0){
            return;
        };
        layerCount++;
        zIndexCount = zIndexCount + 5;
        tableTitle = $("#add-layer-dropdown option:selected").text();
        selectedLayers.push(value);
        $('select option:contains("Choose")').prop('selected', true);
        $("option#tempDropdown").remove();
        $("#add-layer-dropdown").hide() //disable dropdown until everything has loaded...

        tableSelection = value;
        //add layer to map
        addChosenLayer(value);

        //update table section
        updateTabularData(value);
    });

    var tableHTML, tableDataKeys, tableDataObject = [];
    var loadingAnimation = '<div id="waiting"><div class="spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>'+
            '<h5 class="loading-text">Loading tabular data...</h5></div>';

    function updateTabularData(value) {
        $(".table-results-box").show();
        $(".table-results-box").prepend(loadingAnimation);
        tableHTML = "<table id='" + value + "' class='display' cellspacing='0' width='100%'><thead><tr id='header-row'></tr></thead><tfoot><tr id='footer-row'></tr></tfoot></table>";
        $(".table-results-box").prepend(tableHTML);

        var urlGetCSV = "http://ec2-52-7-5-52.compute-1.amazonaws.com:80/geoserver/wfs?SERVICE=wfs&VERSION=1.0.0&REQUEST=getfeature&TYPENAME=alabama:" + value + "&outputformat=csv";
        //possible workaround
        ///change output to json
        ///use python or jscript lib to convert json to csv output
        tableHeader = "<h3 class='tableTitles' name='" + tableSelection + "'> " + tableTitle + "<span style='float:right'>" +
            "<a target='_blank' href='"+urlGetCSV+"'>" +
            "<span class='glyphicon glyphicon-download-alt' id='downloadTableIcon'></span></a></span></h3>";
        $(tableHeader).insertBefore("#" + tableSelection);

        //load tabular data
        console.log('running sql...');
        tableDataKeys = [];
        var urlColumnNames = "http://ec2-52-7-5-52.compute-1.amazonaws.com:80/geoserver/wfs?SERVICE=wfs&VERSION=1.0.0&REQUEST=describefeaturetype&TYPENAME=alabama:" + value + "&outputformat=application/json";
        var tableResponseObject, tableDataRows = [],
            tableDataColumns = [],
            columnName;

        $("#downloadTableIcon").click(function(event) {
            var csvSelection = $(this).parent().parent().attr('name');

        });

        $.get(urlColumnNames, function(responseText) {
            tableResponseObject = responseText.featureTypes[0].properties;
            for (item in tableResponseObject) {
                tableDataKeys.push(tableResponseObject[item].name);
            }
        }).done(function() {
            //first add columns with new data
            tableDataKeys.map(function(elem) {
                if (elem == "the_geom" || elem == "the_geom_webmercator" || elem == "cartodb_id" || elem.indexOf("actual") > -1) {

                } else {
                    //console.log(elem);
                    tableDataColumns.push({ "mData": elem });
                    columnName = elem.toColumnFormat(); //function to replace "_" and CapitalCase
                    $("#" + tableSelection).hide();
                    $("#" + tableSelection + " #header-row").prepend("<th>" + columnName + "</th>");
                    $("#" + tableSelection + " #footer-row").prepend("<th>" + columnName + "</th>");
                }
            });
            //now populate table
            var urlTableData = "http://ec2-52-7-5-52.compute-1.amazonaws.com:80/geoserver/wfs?SERVICE=wfs&VERSION=1.0.0&REQUEST=getfeature&TYPENAME=alabama:" + value + "&outputformat=application/json&maxFeatures=1000&startIndex=1";

            $.get(urlTableData, function(responseText) {
                console.log('...got');
                console.log(responseText);
                for (item in responseText.features) {
                    //console.log(responseText.features[item].properties);
                    tableDataRows.push(responseText.features[item].properties)
                };

                tableDataColumns.reverse();
                $("#" + tableSelection).dataTable({
                    "processing": true,
                    "scroll-x": false,
                    // "sScrollY": "600",
                    // "sScrollX": "100%",
                    // "sScrollXInner": "400%",
                    // "bScrollCollapse": true,
                    // // "sScrollXInner": "110%",
                    "aaData": tableDataRows,
                    "aoColumns": tableDataColumns,
                    "fnInitComplete": function(oSettings, json) {
                        $("#add-layer-dropdown").show() //enable dropdown when everything has loaded...
                        $("#waiting").remove(); //remove animation and load table...
                        $("#" + tableSelection).show();
                        //update legend List
                        updateLegendList(value);
                    }
                });

            });

        });

    }

    var removeSelection, downloadSelection;
    var legendSymbolLibrary = {
        "MPO_TAZ_05162016_WGS1984": "<div class='polygon-group' name='MPO_TAZ_05162016_WGS1984'>" +
            " <div class='polygon polygon-MPOFull'></div>Regional TAZs" + "</div>",
        "Northern_AL_Watersheds_05162016": "<div class='polygon-group' name='Northern_AL_Watersheds_05162016'>"+
            "<div class='polygon polygon-watersheds'></div>Watersheds</div>",
        "Regional_Ecoregions_05162016": "<div class='polygon-group' name='Regional_Ecoregions_05162016'>"+
            "<div class='polygon polygon-ecoregions'></div>Ecoregions" + "</div>",
        "TriCountyCensusPlaces" : "<div class='polygon-group' name='TriCountyCensusPlaces'>"+
            "<div class='polygon polygon-cities'></div>Post Secondary Institutions</div>",
        "TAZ_Pop_Growth" : "<div class='polygon-group' name='TAZ_Pop_Growth'>" +
            "<div class='polygon polygon-popgrowthA'></div>Extreme Decline = Less than -5%<br>" +
            "<div class='polygon polygon-popgrowthB'></div>Slight Decline = -5% to 0%<br>" +
            "<div class='polygon polygon-popgrowthC'></div>Slight Growth = 0% to 5%<br>" +
            "<div class='polygon polygon-popgrowthD'></div>Extreme Growth = Greater than 5%<br>" + "</div>",
        "TAZ_Emp_Growth": "<div class='polygon-group' name='TAZ_Emp_Growth'>" +
            "<div class='polygon polygon-empgrowthA'></div>Low<br>" +
            "<div class='polygon polygon-empgrowthB'></div>Medium Low<br>" +
            "<div class='polygon polygon-empgrowthC'></div>Medium High<br>" +
            "<div class='polygon polygon-empgrowthD'></div>High<br>" + "</div>"
    };

    function updateLegendList(value) {
        $('#legendWrapper').css('height', 'auto');
        //because these layers are dynamic, all the key data will be tied to the DOM
        var urlGetKML = "http://ec2-52-7-5-52.compute-1.amazonaws.com:80/geoserver/wms/kml?layers=alabama:" + value + "&mode=download";

        var legendText = "<li id='legend_option' name='" + value + "'>" + tableTitle + "<span style='float:right'>" +
            "<a target='_blank' href='"+urlGetKML+"'>" +
            "<span class='glyphicon glyphicon-download-alt' id='downloadLayerIcon'></span></a>" +
            "<span class='glyphicon glyphicon-minus-sign' id='removeLayerIcon'></span></span></li>";

        //section for legend with icons/colors/etc
        $(".visible-layers").show();
        $(".visible-layers #legend-layer-list").prepend(legendSymbolLibrary[value]);

        if (layerCount == 1) {
            $("ul#legend").append(legendText);
        } else {
            $("ul#legend").prepend(legendText);
        }
        $("#removeLayerIcon").click(function(event) {
            removeSelection = $(this).parent().parent().attr('name');
            $("li#legend_option[name='" + removeSelection + "']").remove(); //remove the item from left panel
            $("div#legend-layer-list div[name='" + removeSelection + "']").remove(); //remove the item from right legend
            $("h3.tableTitles[name='" + removeSelection + "']").remove(); //remove the table header
            $("div#" + removeSelection + "_wrapper").remove(); //remove the table data
            //console.log(selectedLayers);

            var removeIndex = selectedLayers.indexOf(removeSelection)
            //console.log(removeSelection);
            selectedLayers.splice(removeIndex, 1);
            //console.log(selectedLayers);

            map.removeLayer(layerIndex[removeSelection]);
            layerCount--;
            if (layerCount == 0){
                $(".visible-layers").hide();
            }
            $("a.leaflet-popup-close-button")[0].click();
        });

    }

    String.prototype.toColumnFormat = function(search, replacement) {
        var target = this;
        return target.split("_").join(" ").toUpperCase();
    };

    var toTitleCase = function(fullStr) {
        return str.replace(/\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };


    // This function sets up mouseover/mouseleave events that affect the way the map moves when you enter the "legend" area
    $("ul#legend").sortable({
        update: function() {

            $('li').each(function(elem) {
                sortedTableID = [];
                sortedTableID.push($("li#legend_option"));
            });

            layerCount = $("li#legend_option").length;

            $('li#legend_option').each(function(elem) {
                var layerName = $(this).attr('name'); //changing the values of the list
                //console.log(zIndexCount);
                layerIndex[layerName].setZIndex(zIndexCount);
                zIndexCount = zIndexCount - 1;

            });
            layerCount = $("li#legend_option").length;
        }
    });

    L.TileLayer.BetterWMS = L.TileLayer.WMS.extend({

        onAdd: function(map) {
            // Triggered when the layer is added to a map.
            //   Register a click listener, then do all the upstream WMS things
            L.TileLayer.WMS.prototype.onAdd.call(this, map);
            map.on('click', this.getFeatureInfo, this);
        },

        onRemove: function(map) {
            // Triggered when the layer is removed from a map.
            //   Unregister a click listener, then do all the upstream WMS things
            L.TileLayer.WMS.prototype.onRemove.call(this, map);
            map.off('click', this.getFeatureInfo, this);
        },

        getFeatureInfo: function(evt) {
            // Make an AJAX request to the server and hope for the best
            var url = this.getFeatureInfoUrl(evt.latlng),
                showResults = L.Util.bind(this.showGetFeatureInfo, this);

            $.get(url, function(data, status, xhr) {
                var err = typeof data === 'string' ? null : data;
                showResults(err, evt.latlng, data);


            });
        },

        getFeatureInfoUrl: function(latlng) {
            // Construct a GetFeatureInfo request URL given a point
            var point = this._map.latLngToContainerPoint(latlng, this._map.getZoom()),
                size = this._map.getSize(),

                params = {
                    request: 'GetFeatureInfo',
                    service: 'WMS',
                    srs: 'EPSG:4326',
                    //styles: this.wmsParams.styles,
                    transparent: this.wmsParams.transparent,
                    version: this.wmsParams.version,
                    format: this.wmsParams.format,
                    bbox: this._map.getBounds().toBBoxString(),
                    height: size.y,
                    width: size.x,
                    layers: this.wmsParams.layers,
                    query_layers: this.wmsParams.layers,
                    info_format: 'text/html'
                };

            params[params.version === '1.3.0' ? 'i' : 'x'] = point.x;
            params[params.version === '1.3.0' ? 'j' : 'y'] = point.y;

            return this._url + L.Util.getParamString(params, this._url, true);
        },
        showGetFeatureInfo: function(err, latlng, content) {
            if (err) { console.log(err); return; } // do nothing if there's an error
            if (content.length < 250) { console.log('empty click'); return; } // do nothing if content is empty

            // Otherwise show the content in a popup, or something.
            L.popup({ maxWidth: 350 })
                .setLatLng(latlng)
                .setContent(content)
                .openOn(this._map);
            // $('table.featureInfo').stacktable();
        }
    });

    L.tileLayer.betterWms = function(url, options) {
        return new L.TileLayer.BetterWMS(url, options);
    };

    //add county outline to map at start of application
    L.tileLayer.betterWms("http://ec2-52-7-5-52.compute-1.amazonaws.com:80/geoserver/alabama/wms", {
        layers: 'alabama:TriCountyBoundaries',
        format: 'image/png',
        transparent: true,
        version: '1.1.0',
        attribution: "" // "layer by nate brigmon"
    }).addTo(map).setZIndex(999999);


    $(".leaflet-container").css("cursor","crosshair");

    $("#hideLegend").click(function(event) {
        $("#showLegend").show();
        $("#hideLegend").hide();
        $("div#legendWrapper #legendInner").fadeOut();
        $("div#legendWrapper h4").fadeOut();
        $("div#legendWrapper ul").fadeOut();
        $("div#legendWrapper #add-layer-dropdown").fadeOut();

        //adjust CSS
        $("div#legendWrapper").css("padding","13px");
        $("div#legendWrapper").css("width","auto");
        $("div#legendWrapper").css("min-width","0px");
        $("div#legendWrapper").css("background","none");
        $("div#legendWrapper").css("box-shadow","none");
    });

    $("#showLegend").click(function(event) {
        $("#hideLegend").show();
        $("#showLegend").hide();
        $("div#legendWrapper #legendInner").fadeIn();
        $("div#legendWrapper h4").fadeIn();
        $("div#legendWrapper ul").fadeIn();
        $("div#legendWrapper #add-layer-dropdown").fadeIn();

        //adjust CSS
        $("div#legendWrapper").css("padding","3rem");
        $("div#legendWrapper").css("width","35%");
        $("div#legendWrapper").css("min-width","313px");
        $("div#legendWrapper.info").css("background","rgba(0, 0, 0, 0.65)");
        $("div#legendWrapper").css("box-shadow","0 0 15px rgba(0,0,0,0.2)");

    });
    var cityLabels, streetsLabels;
    $("input#addCityLabels").change(function(){
    	var checked = $(this).prop("checked");
    	console.log("this is checked: ", checked);
    	if (checked == true){
    		cityLabels = L.tileLayer.betterWms("http://ec2-52-7-5-52.compute-1.amazonaws.com:80/geoserver/alabama/wms", {
	            layers: 'alabama:CityLabelsOnly',
	            format: 'image/png',
	            transparent: true,
	            version: '1.1.0',
	            attribution: "", //"layer by nate brigmon"
	        });
	        cityLabels.addTo(map);
	        cityLabels.setZIndex(9999999);
    	} else {
    		map.removeLayer(cityLabels);
    	}
    });
    $("input#addStreetLabels").change(function(){
    	var checked = $(this).prop("checked");
    	console.log("this is checked: ", checked);
    	if (checked == true){
    		streetsLabels = L.tileLayer.betterWms("http://ec2-52-7-5-52.compute-1.amazonaws.com:80/geoserver/alabama/wms", {
	            layers: 'alabama:	TriCountyRoads',
	            format: 'image/png',
	            transparent: true,
	            version: '1.1.0',
	            attribution: "", //"layer by nate brigmon"
	        });
	        streetsLabels.addTo(map);
	        streetsLabels.setZIndex(9999998);
    	} else {
    		map.removeLayer(streetsLabels);
    	}
    });
