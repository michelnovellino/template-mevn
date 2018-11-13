<template >
    <div>  
           
       
  <div class="row">
    <form @submit.prevent="addTask" class="col s12 m4 ">
      <div class="row">
        <div class="input-field col s12">

          <input id="icon_prefix" type="text" v-model="task.name" class="validate">
          <label for="icon_prefix">Nombre</label>
        </div>
        <div class="input-field col s12">
        
          <input id="icon_telephone" type="tel" v-model="task.title" class="validate">
          <label for="icon_telephone">task</label>
        </div>
      
      </div>
      <div class="row ">
         <div class="col s6 offset-m0 offset-s2"></div>
          <template v-if="edit === false">
             <button class="btn waves-effect waves-light " type="submit" name="action">Crear
                <i class="material-icons right">add</i>
            </button>
          </template>
           <template v-else>
             <button class="btn waves-effect waves-light " type="submit" name="action">Actualizar
                <i class="material-icons right">add</i>
            </button>
          </template>

      </div>
    </form>

    <div class="col s12 m8">
<table>
        <thead>
          <tr>
              <th>Name</th>
              <th>Taks</th>
             <th>Editar</th>
             <th>Eliminar</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="value in taskList">
            <td>{{value.name}}</td>
            <td>{{value.title}}</td>
            <td>
                  <a @click="getTask(value._id)"  class="btn-floating btn-small waves-effect waves-light red">
                        <i  class="material-icons">border_color</i>
                    </a>
            </td>
            <td> 
                    <a  @click="deleteTask(value._id)" class="btn-floating btn-small waves-effect waves-light red">
                        <i class="material-icons">delete</i>
                    </a>
            </td>
          </tr>
       
       
        </tbody>
      </table>
    </div>

  </div>
  
     </div>
</template>

<script>

   import axios from 'axios';

  export default {
    name: 'TaskList',

    data() {
      return {
        taskList:[],
        edit:false,
        task:{
          title:'',
          name:''
        }
      };
    },
    methods:{
      addTask()
      {
        axios({
              method: 'post',
              url: '/api/task',
              data: {
                name:this.task.name,
                title:this.task.title
              }
            }) 
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              })

    
      },
      deleteTask(id){
        axios({
                  method:'delete',
                  url:'/api/task/'+id,
                
                })
                  .then(response => {
                    console.log(response)
                  })
                  .catch(error =>{
                    console.log(error)
                  })
      },
      getTask(id){
        this.edit = true
        console.log(this.edit)
      
              axios({
                  method:'get',
                  url:'/api/task/'+id,
                
                })
                  .then(response => {
                      this.task = {
                        title : response.data.title,
                        name: response.data.name
                      }
                    console.log(response)
                  })
                  .catch(error =>{
                    console.log(error)
                  })
      },

       /*   axios({
          method:'put',
          url:'/api/task'+id,
         
        })
          .then(response => {
            console.log(response)
          })
          .catch(error =>{
            console.log(error)
          })*/
       
    },
    created(){
        
       axios({
              method: 'get',
              url: '/api/task',
            }) 
              .then(response => {
                
               this.taskList = response.data
               console.log(this.taskList)
                console.log(response);
              })
              .catch(error => {
                console.log(error);
              })

    },

    mounted() {
      M.AutoInit(); // That way, it is only initialized when the component is mounted
    }
  } 
</script>
