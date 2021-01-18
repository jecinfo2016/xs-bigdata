<template>
  <div style="display: flex">
    <div style="width: 300px">
      <div class="side">生成模型</div>
    </div>
    <div style="flex-direction: column; overflow: auto; width: 100%">
      <!-- <button ></button> -->
      <!-- <input type="file" @change="changefile"> -->
      <div id="inputModal" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog" style="width: 800px">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                ×
              </button>
              <h3 id="myModalLabel">Edit EPANET Model</h3>
            </div>
            <div class="modal-body">
              <textarea id="inputTextarea">
                [TITLE]

[JUNCTIONS]
;ID              	Elev        	Demand      	Pattern
 1               	0           	0           	                	;
 2               	0           	0           	                	;
 3               	0           	0           	                	;
 4               	0           	200         	                	;
 5               	0           	0           	                	;
 6               	0           	0           	                	;
 7               	0           	0           	                	;
 8               	0           	420         	                	;
 9               	0           	0           	                	;

[RESERVOIRS]
;ID              	Head        	Pattern
 0               	30          	                	;

[TANKS]
;ID              	Elevation   	InitLevel   	MinLevel    	MaxLevel    	Diameter    	MinVol      	VolCurve

[PIPES]
;ID              	Node1           	Node2           	Length      	Diameter    	Roughness   	MinorLoss   	Status
 1               	0               	1               	1000        	1200        	100         	0           	Open  	;
 2               	1               	2               	1000        	1           	100         	0           	Open  	;
 3               	2               	3               	1000        	1200        	100         	0           	Open  	;
 4               	3               	4               	1000        	1200        	100         	0           	Open  	;
 5               	0               	5               	1000        	1400        	100         	0           	Open  	;
 6               	5               	6               	1000        	1400        	100         	0           	Open  	;
 7               	6               	7               	1000        	1400        	100         	0           	Open  	;
 8               	7               	8               	1000        	1400        	100         	0           	Open  	;
 9               	1               	5               	12          	1200        	100         	0           	Open  	;
 10              	3               	7               	12          	1200        	100         	0           	Open  	;
 11              	5               	9               	1000        	1400        	100         	0           	Open  	;

[PUMPS]
;ID              	Node1           	Node2           	Parameters

[VALVES]
;ID              	Node1           	Node2           	Diameter    	Type	Setting     	MinorLoss
 12              	9               	6               	1400        	PRV 	0           	0           	;

[TAGS]

[DEMANDS]
;Junction        	Demand      	Pattern         	Category

[STATUS]
;ID              	Status/Setting
 12              	Open

[PATTERNS]
;ID              	Multipliers

[CURVES]
;ID              	X-Value     	Y-Value

[CONTROLS]

[RULES]

[ENERGY]
 Global Efficiency  	75
 Global Price       	0
 Demand Charge      	0

[EMITTERS]
;Junction        	Coefficient

[QUALITY]
;Node            	InitQual

[SOURCES]
;Node            	Type        	Quality     	Pattern

[REACTIONS]
;Type     	Pipe/Tank       	Coefficient

[REACTIONS]
 Order Bulk            	1
 Order Tank            	1
 Order Wall            	1
 Global Bulk           	0
 Global Wall           	0
 Limiting Potential    	0
 Roughness Correlation 	0

[MIXING]
;Tank            	Model

[TIMES]
 Duration           	0:00
 Hydraulic Timestep 	1:00
 Quality Timestep   	0:05
 Pattern Timestep   	1:00
 Pattern Start      	0:00
 Report Timestep    	1:00
 Report Start       	0:00
 Start ClockTime    	12 am
 Statistic          	NONE

[REPORT]
 Status             	No
 Summary            	No
 Page               	0

[OPTIONS]
 Units              	LPS
 Headloss           	H-W
 Specific Gravity   	1
 Viscosity          	1
 Trials             	40
 Accuracy           	0.001
 CHECKFREQ          	2
 MAXCHECK           	10
 DAMPLIMIT          	0
 Unbalanced         	Continue 10
 Pattern            	1
 Demand Multiplier  	1.0
 Emitter Exponent   	0.5
 Quality            	None mg/L
 Diffusivity        	1
 Tolerance          	0.01

[COORDINATES]
;Node            	X-Coord         	Y-Coord
 1               	2147.44         	6756.41
 2               	5852.56         	6769.23
 3               	8314.10         	6551.28
 4               	10698.72        	6230.77
 5               	2147.44         	5576.92
 6               	5916.67         	5282.05
 7               	8339.74         	5333.33
 8               	10698.72        	5205.13
 9               	3818.03         	4540.82
 0               	-339.74         	7051.28

[VERTICES]
;Link            	X-Coord         	Y-Coord

[LABELS]
;X-Coord           Y-Coord          Label & Anchor Node
 2173.08          6948.72          "1"
 5942.31          7064.10          "2 "
 8211.54          6794.87          "3"
 10801.28         6500.00          "4"
 2108.97          5217.95          "5"
 5801.28          5115.38          "6"
 8455.13          5076.92          "7"
 10673.08         5064.10          "8"
 -480.77          6641.03          "0"

[BACKDROP]
 DIMENSIONS     	0.00            	0.00            	10000.00        	10000.00
 UNITS          	None
 FILE
 OFFSET         	0.00            	0.00

[END]

            </textarea
              >
            </div>
            <div class="modal-footer">
              <button class="btn" data-dismiss="modal" aria-hidden="true">
                Cancel
              </button>
              <button class="btn btn-primary" onclick="runButton()">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- NAVBAR -->
      <div class="navbar navbar-inverse navbar-static-top">
        <div class="container">
          <!-- <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="icon-bar" />
            <span class="icon-bar" />
            <span class="icon-bar" />
          </button>
          <a class="navbar-brand" href="#about" data-toggle="modal">epanet.js</a>
          </div>-->
          <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  View
                  <b class="caret" />
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a href="javascript:epanetjs.setMode(epanetjs.INPUT)"
                      >Input</a
                    >
                  </li>
                  <li>
                    <a href="javascript:epanetjs.setMode(epanetjs.ANALYSIS)"
                      >Analysis</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:epanetjs.setMode(epanetjs.ANALYSIS_WITH_LEGEND)"
                      >Analysis with legend</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:epanetjs.setMode(epanetjs.ANALYSIS_SANKEY)"
                      >Sankey</a
                    >
                  </li>
                </ul>
              </li>
              <!-- <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Samples <b class="caret" /></a>
              <ul class="dropdown-menu">
                <li class="dropdown-header">EPANET</li>
                <li><a href="javascript:epanetjs.loadSample('Net1.inp')">Net1.inp</a></li>
                <li><a href="javascript:epanetjs.loadSample('Net2.inp')">Net2.inp</a></li>
                <li><a href="javascript:epanetjs.loadSample('Net3.inp')">Net3.inp</a></li>
                <li class="divider" />
                <li class="dropdown-header">epanet.js</li>
                <li><a href="javascript:epanetjs.loadSample('simple.inp')">simple.inp</a></li>
                <li><a href="javascript:epanetjs.loadSample('PRV.inp')">PRV.inp</a></li>
              </ul>
            </li>
            <li><a href="http://epanet.de/developer/epanetjs.html" data-toggle="tooltip" title="Documentation, source code and background information">Documentation</a></li>
              <li><a href="http://epanet.de/" data-toggle="tooltip" title="The epanet.de home page">epanet.de</a></li>-->
            </ul>
          </div>
        </div>
      </div>
      <!-- .navbar -->
      <!-- <div style="display:flex;width:100vw"> -->
      <div id="jumbotron" class="jumbotron">
        <svg id="svgSimple" width="100%" height="100%" />
      </div>
      <!-- </div> -->

      <div id="legend" />
      <div class="container marketing">
        <div id="ad" />
        <div class="row">
          <div id="inputContainer" class="col-lg-6">
            <h2 class>
              Input
              <button
                type="button"
                class="btn btn-default"
                data-content="Select File-&gt;Export-&gt;Network... in EPANET to save INP files. If opening does not work, open in text editor, then copy and paste."
                title
                data-toggle="popover"
                data-original-title="INP file input"
              >
                <span class="glyphicon glyphicon-info-sign" />
              </button>
            </h2>

            <div id="inputButtons" class="well well-sm">
              <input
                id="file"
                type="file"
                style="display: none"
                data-toggle="tooltip"
                title="File is kept locally in your browser. It is not sent to the server."
              />
              <button
                id="saveButton"
                class="btn"
                type="button"
                role="button"
                onclick="saveButton()"
                data-toggle="tooltip"
                title="Save model in INP format."
              >
                Save
              </button>
              <button
                href="#inputModal"
                type="button"
                role="button"
                class="btn"
                data-toggle="modal"
              >
                Edit
              </button>
            </div>
            <pre id="inputPre" data-toggle="tooltip" title="Click to edit" />
          </div>
          <!-- /.col-lg-8 -->
          <div id="analysisContainer" class="col-lg-6">
            <h2>Analysis</h2>
            <div class="well well-sm well-analysis">
              <span id="status">
                <span class="label label-success">Success</span>
              </span>
              Time
              <select id="time" onchange="epanetjs.renderAnalysis()">
                <option>1</option>
              </select>
              &nbsp;Node
              <select id="nodeResult" onchange="epanetjs.renderAnalysis()">
                <option>Demand</option>
                <option>Head</option>
                <option>Pressure</option>
              </select>
              &nbsp;Link
              <select id="linkResult" onchange="epanetjs.renderAnalysis()">
                <option>Flow</option>
                <option>Velocity</option>
                <option>Headloss</option>
              </select>
            </div>
            <pre id="output" />
          </div>
          <!-- /.col-lg-8 -->
        </div>
        <!-- /.row -->

        <!-- progress modal -->
        <div id="working" class="modal fade">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  &times;
                </button>
                <h4 class="modal-title">
                  <span class="glyphicon glyphicon-cog" /> EPANET analysis in
                  progress
                </h4>
              </div>
              <div class="modal-body">
                <p><span class="glyphicon glyphicon-time" /> Please wait...</p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-default btn-primary"
                  data-dismiss="modal"
                >
                  OK
                </button>
              </div>
            </div>
            <!-- /.modal-content -->
          </div>
          <!-- /.modal-dialog -->
        </div>
        <!-- /.modal -->
        <div
          v-show="alertDialog"
          class="alert alert-warning"
          style="position: fixed; top: 80px; width: 100%"
        >
          <a href="#" class="close" data-dismiss="alert">&times;</a>
          <strong>警告！</strong>上传文件必须是INP文件。
        </div>
        <!-- 修改数据弹窗 -->
        <div id="editMessage" class="modal fade">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  &times;
                </button>
                <h4 class="modal-title">
                  <span class="glyphicon glyphicon-cog" /> 修改数据
                </h4>
              </div>
              <div class="modal-body">
                <form id="demandform" role="form">
                  <div class="form-group">
                    <label for="name">DEMAND</label>
                    <input id="DEMAND" type="text" class="form-control" />
                  </div>
                  <!-- <div class="form-group">
                <label for="name">QUALITY</label>
                <input id="QUALITY" type="text" class="form-control">
                  </div>-->
                </form>
                <form id="statusform" role="form">
                  <div class="form-group">
                    <label for="name">STATUS</label>
                    <select id="selstatus" class="form-control">
                      <option>Closed</option>
                      <option>Open</option>
                    </select>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-default btn-primary"
                  onclick="editFun()"
                >
                  确定
                </button>
              </div>
            </div>
            <!-- /.modal-content -->
          </div>
          <!-- /.modal-dialog -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      alertDialog: false,
    };
  },
  mounted() {
    var clickId = "";
    var text = null;
    var editflag = 1; // 1修改压力2//修改阀门
    window.functionClick = editDialog;
    window.editFun = editFun;
    window.clickpolygon = polygon;
    // 修改阀门
    function polygon(item, event) {
      editflag = 2;
      var res = item[event];
      clickId = event;
      $("#statusform").css("display", "block");
      $("#demandform").css("display", "none");
      $("#editMessage").modal("show");
      $("#selstatus").find("option:contains(res)").attr("selected", true);
    }
    // 修改原点弹窗
    function editDialog(item, event) {
      editflag = 1;
      var res = item[$("#time").val()]["NODES"][event];
      clickId = event;
      $("#statusform").css("display", "none");
      $("#demandform").css("display", "block");
      $("#editMessage").modal("show");
      $("#DEMAND").val(res.DEMAND.toFixed(2));
      // $("#HEAD").val(res.HEAD.toFixed(2))
      // $("#PRESSURE").val(res.PRESSURE.toFixed(2))
      $("#QUALITY").val(res.QUALITY.toFixed(1));
    }
    // 确认修改
    function editFun() {
      var editInfo = {
        DEMAND: $("#DEMAND").val(),
        // HEAD:$("#HEAD").val(),
        // PRESSURE: $("#PRESSURE").val(),
        QUALITY: $("#QUALITY").val(),
        STATUS: $("#selstatus option:selected").val(),
      };
      if (!text) {
        text = document.getElementById("inputTextarea").value;
      }
      var b = text.split("\n");
      if (editflag === 1) {
        var junctionsnum = 0;
        var qualitynum = 0;
        // 匹配demand,quality在textarea位置
        for (var i in b) {
          if (b[i].replace(/\s+/g, "") === "[JUNCTIONS]") {
            junctionsnum = parseInt(i) + 2;
          }
          // if (b[i].replace(/\s+/g, '') === '[QUALITY]') {
          //   qualitynum = parseInt(i) + 2
          // }
        }
        // 修改demand值
        for (var i = junctionsnum; i < b.length; i++) {
          var array = b[i].split(" ");
          if (clickId === array[1]) {
            var count = 0;
            for (var j = 2; j < array.length; j++) {
              if (array[j] != "") {
                if (count == 1) {
                  array[j] = editInfo["DEMAND"];
                  break;
                }
                count++;
              }
            }
            b[i] = array.join(" ");
            break;
          }
          if (array[1] == 0) {
            break;
          }
        }
        // 修改quality值
        // for (var i = qualitynum; i < b.length; i++) {
        //   var array = b[i].split(' ')
        //   if (clickId === array[1]) {
        //     for (var j = 2; j < array.length; j++) {
        //       if (array[j].length > 0) {
        //         array[j] = editInfo['QUALITY']
        //         break
        //       }
        //     }
        //     b[i] = array.join(' ')
        //     break
        //   }
        //   if (array[1] == 0) {
        //     break
        //   }
        // }
      } else {
        var statusnum = 0;
        // 匹配status在textarea位置
        for (var i in b) {
          if (b[i].replace(/\s+/g, "") === "[STATUS]") {
            statusnum = parseInt(i) + 2;
          }
        }
        // 修改status值
        for (var i = statusnum; i < b.length; i++) {
          var array = b[i].split(" ");
          if (clickId === array[1]) {
            for (var j = 2; j < array.length; j++) {
              if (array[j].length > 0) {
                array[j] = editInfo["STATUS"];
                break;
              }
            }
            b[i] = array.join(" ");
            break;
          }
          if (array[1] == 0) {
            break;
          }
        }
      }
      text = b.join("\n");
      // 重新赋值给textarea
      document.getElementById("inputTextarea").value = text;
      runButton();
    }
    $("#working").modal("show");
    !(function ($) {
      $(function () {
        try {
          var reader = new FileReader();
          if (reader) {
            $("input[type=file").show();
          }
        } catch (e) {}
        try {
          var blob = new Blob();
          if (blob) {
            $("#saveButton").show();
          }
        } catch (e) {}
        $("[data-toggle=popover]").popover();
      });
    })(window.jQuery);
    $("#working").on("shown.bs.modal", function () {
      // 执行一些动作...
      runButton();
      epanetjs.setMode(epanetjs.ANALYSIS);
    });
    if (window.File && window.FileReader && window.FileList) {
      document.getElementById("file").style.display = "block";
    }
    const that = this;
    function handleFileSelect(evt) {
      if (
        !evt.target ||
        !evt.target.files ||
        !evt.target.files.length ||
        evt.target.files.length == 0
      ) {
        return;
      }
      var fileType = evt.target.files[0].name
        .substr(evt.target.files[0].name.lastIndexOf("."))
        .toUpperCase();
      if (fileType + "" != ".INP") {
        that.alertDialog = true;
        setTimeout(() => {
          that.alertDialog = false;
        }, 2000);
        return false;
      }
      var f = evt.target.files[0];
      var reader = new FileReader();
      reader.onload = (function () {
        return function (e) {
          document.getElementById("inputTextarea").value = e.target.result;
          text = e.target.result;
          console.log(text);
          $("#working").modal("show");
        };
      })(f);

      reader.readAsText(f);
    }
    document
      .getElementById("file")
      .addEventListener("change", handleFileSelect, false);
    $("#inputPre").on("click", function () {
      $("#inputModal").modal("show");
    });
    try {
      (function (i, s, o, g, r, a, m) {
        i["GoogleAnalyticsObject"] = r;
        (i[r] =
          i[r] ||
          function () {
            (i[r].q = i[r].q || []).push(arguments);
          }),
          (i[r].l = 1 * new Date());
        (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m);
      })(window, document, "script", "js/analytics.js", "ga");
      ga("create", "UA-389797-7", "epanet.de");
      ga("set", "anonymizeIp", true);
      ga("send", "pageview");
    } catch (e) {
      
    }

    // const script = document.createElement("script");
    // script.type = "text/javascript";
    // script.src = "../../../static/epanet.js-master/src/js/js.js";
    // document.getElementsByTagName("head")[0].appendChild(script);
  }
}
</script>

<style scoped>
.side {
  color: #42b983;
  border-right: 2px solid #42b983;
  margin-right: 1px;
  margin: 20px 1px 0 20px;
  cursor: pointer;
}
</style>
