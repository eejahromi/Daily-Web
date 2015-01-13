
	$.getJSON('data.json',function(data){
			var output = '<ul class="result">';
			$.each(data,function(key,value){
				output += '<li>';
				output += value.team;
				output +='</li>';
			});
			output += '</ul>';
			$('#list').html(output);

	});



