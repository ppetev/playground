function log(message) {
	logList = document.getElementById("LOG-ELEMENT");
	if (logList != null) {
		line = document.createElement("pre");
		line.innerHTML = message;
		logList.appendChild(line);
	} else {
		body = document.getElementsByTagName("body")[0];
		div = document.createElement("div");
		div.id = "LOG-CONTAINER";
		body.appendChild(div);
		logList = document.createElement("ol");
		logList.id = "LOG-ELEMENT";
		div.appendChild(logList);
		log(message);
	}
}
