module.exports = {
   routes:[
       {path:'/', component:require('./components/index')},
       {path:'/list', component:require('./components/list')},
       {path:'/show/:id', name:"show", component:require('./components/show')},
       {path:'*',component:require('./components/notFound')}

   ]

}