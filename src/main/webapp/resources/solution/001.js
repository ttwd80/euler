$(function() {
	$("#form").submit(function(event) {
		var a = parseInt($("#a").val());
		var b = parseInt($("#b").val());
		var c = parseInt($("#c").val());
		var answer = solve(a, b, c);
		$("#answer").val(answer);
		event.preventDefault();
	});
	function solve(a, b, c) {
		var sum = 0;
		var i;
		for (i = 1; i < c; i++) {
			if (i % a == 0 || i % b == 0) {
				sum = sum + i;
			}
		}
		return sum;
	}
});