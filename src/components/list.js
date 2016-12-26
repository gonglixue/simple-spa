/**
 * Created by chenjun on 2016/12/26.
 */
module.exports={
    template:require('../templates/list.html'),
    data:function(){
        return {
            items:[
                {id:1, name:"hello1"},
                {id:2, name:"hello2"}
            ]
        }
    },
    ready:function(){}
}