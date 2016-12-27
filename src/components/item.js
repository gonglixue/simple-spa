/**
 * Created by chenjun on 2016/12/26.
 */
module.exports = {
	template: require('../templates/item.html'),
	props:["id","name"],
	ready:function(){
		console.log('item ready')
	}
}