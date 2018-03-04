$('.carousel').carousel({
	interval: 4000
});

function get_content(adress) {
	$.ajax({
		url: adress,
		success: function (data) {
			$('.centerblock').html(data);
		},
		error: function () {
			alert('Ошибка! Страница недоступна');
		}
	});
}