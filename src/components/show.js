/**
 * Created by chenjun on 2016/12/26.
 */
module.exports = {
    template: require('../templates/show.html'),
    data:function(){
        return {};
    },
    created:function(){
        var id = this.$route.params.id;
        if(id == 1){
            //this.data = {"id":id, "name":"hellow111", "age":24};
            this.id = id;
            this.name = "hello111";
            this.age = 21;
        }
        else{
            //this.data = { "id":id, "name":"hello222","age":28};
            this.id = id;
            this.name = "hello222";
            this.age = 28;
        }
    },
    ready:function(){
        console.log(this.data);
    }
}