module.exports = {
	init : function () {
	},
	testFn : function () {
		//var a = yield [1,2];
		//console.log($.mysql);
		this.end();
	},
	testGenFn : function *() {
		//var b = yield ["testGenFn is called","too"];
		var a = yield $.mysql_add("insert into test value('',7)");
		this.echo(a);
		this.echo("\n");

		a =  yield $.mysql_getAll("select * from test");
		this.echo(a);
		this.echo("\n");

		a = yield $.mysql_getOne("select * from test");
		this.echo(a);
		this.echo("\n");

		a = yield $.mysql_update("update test set num = 7 where id=1");
		this.echo(a);
		this.echo("\n");

		this.echo(this.ip());
		this.end();
	},
	testRedis : function *() {
		var a = yield $.redis("test","LaLaLa");
		console.log(a);
		this.echo(a);
		this.echo(yield $.redis("test"));
		a = yield $.redis({
			test1:"ssss",
			test2:"tttt"
		});
		this.echo(a);
		this.echo(yield $.redis("test2"));
		this.end();
	},
	testSession : function *() {
		this.echo(yield this.session("var"));
		this.end();
	}
}