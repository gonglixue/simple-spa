module.exports = {
   routes:[
       {
           path:'/',
           component:require('./components/index'),
           children:[

               { path:'/tab1', component:require('./components/tab1') },
               { path:'/tab2', component:require('./components/tab2') }
           ]
       },
       {path:'/list', component:require('./components/list')},
       {path:'/show/:id', name:"show", component:require('./components/show')},
       {path:'*',component:require('./components/notFound')}

   ]

}