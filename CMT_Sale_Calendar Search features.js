// ==UserScript==
// @name         CMT_Sale_Calendar Search features
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       @mauparas
// @match        https://w.amazon.com/bin/view/CMT_Sale_Calendar
// @match        https://w.amazon.com/bin/view/CMT_Sale_Calendar/
// @match        https://w.amazon.com/bin/preview/CMT_Sale_Calendar/WebHome
// @match        https://w.amazon.com/bin/viewrev/CMT_Sale_Calendar/WebHome
// @icon         https://www.google.com/s2/favicons?sz=64&domain=amazon.com
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var searchbtn = document.createElement("button")
    searchbtn.id = 'searchBtnCalendar'
    searchbtn.innerHTML = "Search Sale"
    document.getElementById("searchButtonSpace").append(searchbtn)
    var btnCount = 0
    var previousCalendarTableTrId=""
    $(document).ready(function(){
        $("#searchBtnCalendar").click(function(){
            var selectedYear = $("#selectYear").val();
            var selectedMonth = $("#selectMonth").val();
            var selectedMKPL = $("#MKPL").val();
            var calendarTableTrId = `${selectedYear}${selectedMonth}${selectedMKPL}`
            calendarTableTrId = calendarTableTrId.trim()

            if(btnCount >= 1){
                $("#" + previousCalendarTableTrId).css("display", "none");
                previousCalendarTableTrId = calendarTableTrId
            }else{
                previousCalendarTableTrId = calendarTableTrId
            }
            $("#calendarTable").css("display", "blocK");
            $("#" + calendarTableTrId).css("display", "block");
            $("#saleHeading").html(selectedMonth.concat(",",selectedYear," | ",selectedMKPL," Sale"))
            btnCount++
        });

         $("#closesGuideOfTampermonkeyDiv").click(function(){
        $("#guideOfTampermonkeyDiv").css("display", "none");
         });
   });

})();
