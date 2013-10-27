function zeroPad(number, digits) {
    var s = "00000" + number;
    return s.substr(s.length - digits);
}

function timeString() {
	d = new Date();
	return d.getUTCHours() + 
		":" + zeroPad(d.getUTCMinutes(), 2) + 
		":" + zeroPad(d.getUTCSeconds(), 2) + 
		"." + zeroPad(d.getUTCMilliseconds(), 3);
}

function log(message) {
	logList = document.getElementById("LOG-ELEMENT");
	if (logList != null) {
		row = document.createElement("tr");
		tData = document.createElement("td");
		tText = document.createTextNode(timeString());
		tData.appendChild(tText);
		mData = document.createElement("td");
		mData.setAttribute("style", "width: 100%;");
		mText = document.createTextNode("" + message);
		mData.appendChild(mText);
		row.appendChild(tData);
		row.appendChild(mData);
		logList.appendChild(row);
	} else {
		body = document.getElementsByTagName("body")[0];
		div = document.createElement("div");
		div.id = "LOG-CONTAINER";
		logPar = document.createElement("table");
		logPar.id = "LOG-ELEMENT";
		div.appendChild(logPar);
		body.appendChild(div);
		log(message);
	}
}


