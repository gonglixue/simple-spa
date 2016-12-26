module.exports = {
   routes:[
       {path:'/', component:require('./components/index')},
       {path:'/list', component:require('./components/list')},
       {path:'*',component:require('./components/notFound')}

   ]

}