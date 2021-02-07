webpackJsonp([18],{"4JQ8":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o("x5Vx"),s=o("6Vxk"),r={name:"PlanReportList",data:function(){return{filters:{executionUser:""},planName:"",planReports:[],size:10,skip:0,sortBy:"createAt",order:"descending",pageNum:1,totalNum:0,listLoading:!1,statusChangeLoading:!1,selects:[],cleanDate:null,cleanDateOptions:[{value:null,label:"未选择"},{value:30,label:"30天之前"},{value:7,label:"7天之前"},{value:0,label:"全部删除"}]}},methods:{queryPlanReports:function(t){this.listLoading=!0;var e=this;""!==e.filters.executionUser.trim()&&(t.executionUser=e.filters.executionUser.trim());Object(a.e)(this.$route.params.plan_id,t,{}).then(function(t){var o=t.status,a=t.data;e.listLoading=!1,"ok"===o?(e.totalNum=a.totalNum,e.planReports=a.rows):e.$message.error({message:a,center:!0})}).catch(function(t){e.$message.error({message:"报告列表获取失败，请稍后刷新重试哦~",center:!0}),e.listLoading=!1})},getWebhookReports:function(){var t={size:this.size,skip:this.skip,sortBy:this.sortBy,order:this.order,planId:this.$route.params.plan_id,executionMode:"webHook"};this.queryPlanReports(t)},getManualReports:function(){var t={size:this.size,skip:this.skip,sortBy:this.sortBy,order:this.order,planId:this.$route.params.plan_id,executionMode:"planManual"};this.queryPlanReports(t)},getReports:function(){var t={size:this.size,skip:this.skip,sortBy:this.sortBy,order:this.order,planId:this.$route.params.plan_id};this.queryPlanReports(t)},selectsChange:function(t){this.selects=t},handleSizeChange:function(t){this.size=t;var e={size:this.size,skip:this.skip,sortBy:this.sortBy,order:this.order,planId:this.$route.params.plan_id};this.queryPlanReports(e)},handleCurrentChange:function(t){this.skip=(t-1)*this.size;var e={size:this.size,skip:this.skip,sortBy:this.sortBy,order:this.order,planId:this.$route.params.plan_id};this.queryPlanReports(e)},reportRowStyle:function(t){var e=t.row;t.rowIndex;return e.totalCount>e.passCount?"background-color: #ddd;":""},ReportTableRow:function(t){t.row,t.rowIndex;return"reportTableRow"},sortChange:function(t){this.sortBy=t.prop,this.order=t.order;var e={size:this.size,skip:this.skip,sortBy:this.sortBy,order:this.order,projectId:this.$route.params.project_id};this.queryPlanReports(e)},getPassRate:function(t,e,o){return t=parseFloat(t),e=parseFloat(e),isNaN(t)||isNaN(e)?"-":o?e<=0?"0%":Math.round(t/e*1e4)/100+"%":e<=0?0:Math.round(t/e*1e4)/100},cleanPlanReports:function(){var t=this;this.$confirm("确认删除报告吗?","提示",{type:"warning"}).then(function(e){if(null!=t.cleanDate){var o=t;o.listLoading=!0;var s={cleanDate:o.cleanDate,planId:o.$route.params.plan_id,operator:o.$store.getters.email};Object(a.a)(t.$route.params.plan_id,s,{}).then(function(e){o.listLoading=!1;var a=e.status,s=e.data;"ok"===a?(o.$message.info({message:"~~删除计划报告成功~~",center:!0}),t.getReports()):(o.$message.error({message:s,center:!0}),t.getReports())}).catch(function(e){o.listLoading=!1,o.$message.error({message:"删除计划报告失败，请稍后刷新重试哦~",center:!0}),t.getReports()})}else t.$message.error({message:"请选择删除日期",center:!0})})}},mounted:function(){var t=this;Object(s.c)(this.$route.params.plan_id).then(function(e){"ok"===e.status&&(t.planName=e.data.name)})},created:function(){this.getReports()}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("strong",{staticClass:"title"},[t._v(t._s(t.$route.meta.title)+" "),t.planName?a("span",[t._v(" - Plan: "+t._s(t.planName))]):t._e()]),t._v(" "),a("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[a("el-form",{attrs:{inline:!0},nativeOn:{submit:function(t){t.preventDefault()}}},[a("router-link",{staticStyle:{"text-decoration":"none",color:"aliceblue"},attrs:{to:""}},[a("el-button",{staticClass:"return-list",on:{click:function(e){return t.$router.back(-1)}}},[a("i",{staticClass:"el-icon-d-arrow-left",staticStyle:{"margin-right":"5px"}}),t._v("返回\n        ")])],1),t._v(" "),a("el-form-item",{staticStyle:{"margin-left":"35px"}},[a("el-button",{attrs:{type:"primary"},on:{click:t.getManualReports}},[a("i",{staticClass:"fa fa-hand-pointer-o"}),t._v(" 手动执行报告")])],1),t._v(" "),a("el-form-item",{staticStyle:{"margin-left":"35px"}},[a("el-button",{attrs:{type:"primary"},on:{click:t.getWebhookReports}},[a("i",{staticClass:"fa fa-link"}),t._v(" Webhook执行报告")])],1),t._v(" "),t.$store.getters.roles.includes("admin")?a("el-form-item",{staticStyle:{float:"right","margin-right":"40px"}},[a("el-select",{staticStyle:{"margin-right":"20px"},attrs:{placeholder:"删除日期"},model:{value:t.cleanDate,callback:function(e){t.cleanDate=e},expression:"cleanDate"}},t._l(t.cleanDateOptions,function(t,e){return a("el-option",{key:e+"",attrs:{label:t.label,value:t.value}})}),1),t._v(" "),a("el-form-item",[a("el-button",{staticClass:"el-icon-delete",attrs:{type:"danger"},on:{click:t.cleanPlanReports}},[t._v(" 删除报告")])],1)],1):t._e()],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.planReports,"row-style":t.reportRowStyle,"row-class-name":t.ReportTableRow,"highlight-current-row":""},on:{"sort-change":t.sortChange,"selection-change":t.selectsChange}},[a("el-table-column",{attrs:{type:"selection","min-width":"3%"}}),t._v(" "),a("el-table-column",{attrs:{prop:"_id",label:"报告编号","min-width":"10%",sortable:"custom","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"testEnvName",label:"测试环境","min-width":"8%","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"testStartTime",label:"开始时间","min-width":"12%",sortable:"custom","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"spendTimeInSec",label:"用时(秒)","min-width":"10%",sortable:"custom","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"executionUser",label:"执行人","min-width":"8%",sortable:"custom","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"executionRemark",label:"备注","min-width":"8%",sortable:"custom","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"totalCount",label:"总数","min-width":"8%","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"passCount",label:"通过数","min-width":"8%","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"failCount",label:"失败数","min-width":"8%","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"errorCount",label:"错误数","min-width":"8%","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"passRate",label:"通过率","min-width":"10%","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t.getPassRate(e.row.passCount,e.row.totalCount,!0))+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"测试结果","min-width":"10%"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("img",{directives:[{name:"show",rawName:"v-show",value:e.row.totalCount==e.row.passCount,expression:"scope.row.totalCount==scope.row.passCount"}],attrs:{src:o("7shL")}}),t._v(" "),a("img",{directives:[{name:"show",rawName:"v-show",value:e.row.totalCount>e.row.passCount,expression:"scope.row.totalCount>scope.row.passCount"}],attrs:{src:o("IT+J")}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作","min-width":"20%"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{staticStyle:{"text-decoration":"none",color:"#000000"},attrs:{to:{name:"PlanReportDetail",params:{plan_id:t.$route.params.plan_id,plan_report_id:e.row._id}}}},[a("el-button",{attrs:{type:"primary",size:"small"}},[t._v("查看详情")])],1)]}}])})],1),t._v(" "),a("el-col",{staticClass:"toolbar",attrs:{span:24}},[a("el-pagination",{staticStyle:{float:"right"},attrs:{"page-sizes":[10,20,40],"page-size":t.size,layout:"total, sizes, prev, pager, next, jumper",total:t.totalNum},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},staticRenderFns:[]};var n=o("VU/8")(r,l,!1,function(t){o("bklB")},"data-v-71f1481f",null);e.default=n.exports},bklB:function(t,e){}});
//# sourceMappingURL=18.567c3e9084a15c7b0248.js.map