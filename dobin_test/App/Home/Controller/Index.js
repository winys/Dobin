module.exports = {
	index : function () {
		this.echo(this.ip());
		this.end();
	},
	next : function () {
		this.http.echo("<h1>QAQ</h1>猪");
		this.http.end();
	}
}