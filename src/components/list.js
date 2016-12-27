/**
 * Created by chenjun on 2016/12/26.
 */
import item from "./item";

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
    // 定义item组件为子组件
    components:{
        "item":item
    },
    init:function(){
    	console.log('init:在实例开始初始化时同步调用。此时数据观测、事件和watcher都尚未初始化');
    },
    created:function(){
    	console.log('created..:在实例创建之后同步调用。此时实例已经结束解析选项，这意味着已建立：数据绑定，计算属性，方法，watcher/事件回调');
    },
    beforeCompile:function(){
    	console.log('beforeCompile..：在编译开始前调用');
    },
    compiled:function(){
    	console.log('compiled..');
    },

    ready:function(){
    	console.log('ready');
    },
    attached:function(){
    	console.log('attached..');
    },
    detached:function(){
    	console.log('detached..');
    },
    beforeDestroy:function(){
    	console.log('beforeDestroy');
    },
    destroyed:function(){
    	console.log('destroyed..');
    }
}