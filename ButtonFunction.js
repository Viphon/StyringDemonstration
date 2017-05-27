function chooseRainEvent(i){
	if (i==0){
		Plotly.purge(VplotGraphDiv);
		var update = {		
		'xaxis.autorange': true,
		};
		Plotly.relayout(RplotGraphDiv, update);
	}
	Plotly.purge(VplotGraphDiv);
	Plotly.purge(QplotGraphDiv);
	eval("Vplot" + i + "();")
	eval("Qplot" + i + "();")
	var update = {		
	'xaxis.range[0]': VplotGraphDiv.layout.xaxis.range[0],
	'xaxis.range[1]': VplotGraphDiv.layout.xaxis.range[1],
	'yaxis.autorange': true,
	};
	Plotly.relayout(RplotGraphDiv, update);
	}