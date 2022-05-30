
  function showQuestionsToAnswer(updateQuestions) {
      let code = document.getElementById('lookupQuestionList').value;
      if ((code != null) && (code != "")) { 
	  code = code.toUpperCase();
	  let introLabel = document.getElementById('introLabel');
	  introLabel.innerText = code;
	  let questionList = lookupQuestionsFromSeatingCode(code);
	  let lbl = document.getElementById('lblSeatingCode');
	  lbl.innerText = questionList;

	  refreshTableRowsBeingShown(code);
      } else {
	  let introLabel = document.getElementById('introLabel');
	  introLabel.innerText = "[Unknown]";
      }
  }

  function refreshTableRowsBeingShown(code) {
      var lookupObj = codeToQuestionMap.get(code)
      var qList = null;
      if (lookupObj != null) {
	  var qListTmp = codeToQuestionMap.get(code)
	  if (qListTmp != null) {
	      qList = qListTmp.questions;
	  }
      }
      for (let qnum = 1; qnum <= 30; qnum++) {
	  let probString = "prob" + qnum;
	  let probInfo = document.getElementById(probString);
	  if (probInfo == null) {
	      continue;
	  }
	  if (qList == null) {
	      probInfo.style = "display: table-row";
	  } else if (qList.includes(qnum)) {
	      probInfo.style = "display: table-row";	      
	  } else {
	      probInfo.style = "display: none";	      
	  }
      }
  }
  
  function initialShowQuestionsToAnswer() {
      let code = extractSeatingCodeFromCurrentPageUrl();
      if (code != null) {
	  code = code.toUpperCase();
	  let questionListBlock = document.getElementById('lookupQuestionList');
	  document.getElementById('lookupQuestionList').value = code;
	  showQuestionsToAnswer(true);
      }
  }

  function buttonShowQuestionsToAnswer() {
      showQuestionsToAnswer(true);
  }

  function lookupQuestionsFromSeatingCode(code) {
      if ((code.length > 0) && codeToQuestionMap.has(code)) {
          var qList = codeToQuestionMap.get(code).questions;
          return " " + formatQuestionList(qList);
      } else {
          return "Unknown code [" + code + "].  Please enter a valid code.";
      }
  }

  function questionMatchesForCode(code, qnum) {
      if ((code.length > 0) && codeToQuestionMap.has(code)) {
//	  alert("qnum is " + qnum);
//          var qList = codeToQuestionMap.get(code).questions;
//	  alert("Testing code is " + code + ", qlist is " + qList);	  
	  //	  return qList.includes(qnum);
	  return false;
      } else {
//	  alert("No match...");
	  return true;	  
      }
  }
  

  // Pretty-print the question list.
  function formatQuestionList(qlist) {
      var questionString = "Answer one of ";
      L = qlist.length;
      for (var i = 0; i < L-1; i++) {
          questionString = questionString + "#" + qlist[i] + ", ";
      }
      questionString = questionString + "or #" + qlist[L-1] + ".";
      return questionString;
  }

const codeToQuestionMap = new Map([
      ["ALL", { "questions" : Array.from({length: 27}, (_, i) => i + 1) }],
      ["BBY", { "questions" : [2,  5,  7]}],
      ["BGB", { "questions" : [10,  14,  19]}],
      ["BHG", { "questions" : [2,  5,  9]}],
      ["BJF", { "questions" : [4,  10,  13]}],
      ["CML", { "questions" : [2,  8,  13]}],
      ["CTM", { "questions" : [1,  3,  9]}],
      ["CVS", { "questions" : [4,  10,  18]}],
      ["CWM", { "questions" : [4,  11,  14]}],
      ["DCL", { "questions" : [1,  4,  12]}],
      ["DGN", { "questions" : [6,  12,  16]}],
      ["DGW", { "questions" : [5,  7,  14]}],
      ["DSN", { "questions" : [2,  5,  7]}],
      ["FNG", { "questions" : [4,  5,  11]}],
      ["GDC", { "questions" : [4,  5,  7]}],
      ["GNV", { "questions" : [12,  15,  24]}],
      ["HBZ", { "questions" : [5,  9,  17]}],
      ["HPB", { "questions" : [6,  9,  13]}],
      ["HVC", { "questions" : [1,  3,  9]}],
      ["JBH", { "questions" : [3,  6,  12]}],
      ["JDP", { "questions" : [7,  10,  16]}],
      ["JDW", { "questions" : [4,  5,  11]}],
      ["JNR", { "questions" : [3,  4,  10]}],
      ["LCB", { "questions" : [1,  3,  10]}],
      ["LHN", { "questions" : [18,  23,  26]}],
      ["LNL", { "questions" : [4,  9,  13]}],
      ["LPV", { "questions" : [13,  17,  20]}],
      ["MFG", { "questions" : [2,  5,  7]}],
      ["MMJ", { "questions" : [1,  2,  4]}],
      ["MPM", { "questions" : [1,  7,  15]}],
      ["MQD", { "questions" : [2,  5,  10]}],
      ["NHW", { "questions" : [6,  9,  13]}],
      ["NLJ", { "questions" : [5,  9,  10]}],
      ["NRB", { "questions" : [1,  4,  12]}],
      ["PSL", { "questions" : [4,  5,  11]}],
      ["QNV", { "questions" : [2,  6,  8]}],
      ["QVW", { "questions" : [1,  3,  9]}],
      ["RLH", { "questions" : [1,  6,  12]}],
      ["RQP", { "questions" : [1,  3,  9]}],
      ["RRQ", { "questions" : [1,  3,  9]}],
      ["SJH", { "questions" : [2,  6,  8]}],
      ["SVJ", { "questions" : [7,  16,  19]}],
      ["TFM", { "questions" : [2,  6,  8]}],
      ["TMY", { "questions" : [1,  3,  9]}],
      ["TYC", { "questions" : [1,  3,  9]}],
      ["VFV", { "questions" : [1,  3,  10]}],
      ["VWJ", { "questions" : [4,  11,  15]}],
      ["WJB", { "questions" : [4,  5,  11]}],
      ["WLB", { "questions" : [1,  4,  12]}],
      ["WRL", { "questions" : [3,  5,  12]}],
      ["YJN", { "questions" : [6,  9,  17]}],
      ["YMP", { "questions" : [4,  9,  14]}],
      ["YNS", { "questions" : [4,  12,  16]}],
      ["YVV", { "questions" : [4,  10,  14]}],
      ["ZDZ", { "questions" : [1,  3,  9]}],
      ["ZHD", { "questions" : [2,  4,  7]}],
      ["ZMR", { "questions" : [1,  3,  9]}],
      ["ZWS", { "questions" : [1,  3,  9]}],
  ])

  
  function extractSeatingCodeFromCurrentPageUrl() {
      let currentUrl =  document.getElementById("CurrentPage").innerHTML = window.location.href;
      return extractSeatingCodeFromUrl(currentUrl);
  }

  function extractSeatingCodeFromUrl(url) {
      var event = getAllUrlParams(url);
      if (typeof event === "undefined") {
	  return null;
      }

      if ("seatingcode" in event) {
	  return event["seatingcode"];
      } else {
	  return null;
      }
  }

  function getAllUrlParams(url) {
      // get query string from url (optional) or window
      var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

      // we'll store the parameters here
      var obj = {};

      // if query string exists
      if (queryString) {

	  // stuff after # is not part of query string, so get rid of it
	  queryString = queryString.split('#')[0];

	  // split our query string into its component parts
	  var arr = queryString.split('&');

	  for (var i = 0; i < arr.length; i++) {
	      // separate the keys and the values
	      var a = arr[i].split('=');

	      // set parameter name and value (use 'true' if empty)
	      var paramName = a[0];
	      var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

	      // (optional) keep case consistent
	      paramName = paramName.toLowerCase();
	      if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

	      // if the paramName ends with square brackets, e.g. colors[] or colors[2]
	      if (paramName.match(/\[(\d+)?\]$/)) {

		  // create key if it doesn't exist
		  var key = paramName.replace(/\[(\d+)?\]/, '');
		  if (!obj[key]) obj[key] = [];

		  // if it's an indexed array e.g. colors[2]
		  if (paramName.match(/\[\d+\]$/)) {
		      // get the index value and add the entry at the appropriate position
		      var index = /\[(\d+)\]/.exec(paramName)[1];
		      obj[key][index] = paramValue;
		  } else {
		      // otherwise add the value to the end of the array
		      obj[key].push(paramValue);
		  }
	      } else {
		  // we're dealing with a string
		  if (!obj[paramName]) {
		      // if it doesn't exist, create property
		      obj[paramName] = paramValue;
		  } else if (obj[paramName] && typeof obj[paramName] === 'string'){
		      // if property does exist and it's a string, convert it to an array
		      obj[paramName] = [obj[paramName]];
		      obj[paramName].push(paramValue);
		  } else {
		      // otherwise add the property
		      obj[paramName].push(paramValue);
		  }
	      }
	  }
      }

      return obj;
  }


      function AddDropDownList() {

	  var selectElement = document.getElementById("seating-codes");

	  codeToQuestionMap.forEach(function(value, code, map) {
	      var optionName = "OPTION";
	      
	      var option = document.createElement(optionName);

	      var codeString = code;

	      option.innerHTML = codeString;

	      option.value = codeString;
	      //Add the Option element to DropDownList.
	      selectElement.options.add(option);
	  });

	  //Reference the container DIV.
	  var dvContainer = document.getElementById("dvContainer")

	  //Add the DropDownList to DIV.
	  var div = document.createElement("DIV");
	  div.appendChild(selectElement);

	  //Create a submit button.
	  var btnSubmit = document.createElement("INPUT");
	  btnSubmit.value = "Submit";
	  btnSubmit.type = "button";
	  btnSubmit.onclick = function () {
	      var selectElem = document.getElementById("seating-codes");
	      if (selectElem != null) {
		  var selectedCode = selectElem.value;
		  codeChosenLbl.innerText = selectedCode;
		  var nextURL = "index.html?seatingCode=" + selectedCode;
		  setTimeout(function(){
		      window.location.href=nextURL;		      
		  }, 200);
	      } else {
		  codeChodenLbl.innerText = "Unknown code.  Try again!";
	      }
	  };

	  //Add the Remove Buttton to DIV.
	  div.appendChild(btnSubmit);

	  //Add the DIV to the container DIV.
	  dvContainer.appendChild(div);
      };

