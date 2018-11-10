<template >
    <div>  
           
       
  <div class="row">
    <form class="col s12 m4 ">
      <div class="row">
        <div class="input-field col s12">

          <input id="icon_prefix" type="text" class="validate">
          <label for="icon_prefix">Nombre</label>
        </div>
        <div class="input-field col s12">
        
          <input id="icon_telephone" type="tel" class="validate">
          <label for="icon_telephone">task</label>
        </div>
        <div class="input-field col s12">
            <select>
            <option value="" disabled selected>Lista</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
            </select>
            <label>Materialize Select</label>
         </div>
      </div>
      <div class="row ">
         <div class="col s6 offset-m0 offset-s2"></div>
           <button class="btn waves-effect waves-light " type="submit" name="action">Crear
                <i class="material-icons right">add</i>
            </button>
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
          <tr>
            <td>Alvin</td>
            <td>task 1</td>
            <td>
                  <a class="btn-floating btn-small waves-effect waves-light red">
                        <i class="material-icons">border_color</i>
                    </a>
            </td>
            <td> 
                    <a class="btn-floating btn-small waves-effect waves-light red">
                        <i class="material-icons">delete</i>
                    </a>
            </td>
          </tr>
          <tr>
            <td>Alan</td>
            <td>task 2</td>
             <td>
                  <a class="btn-floating btn-small waves-effect waves-light red">
                        <i class="material-icons">border_color</i>
                    </a>
            </td>
            <td> 
                    <a class="btn-floating btn-small waves-effect waves-light red">
                        <i class="material-icons">delete</i>
                    </a>
            </td>
          
          </tr>
          <tr>
            <td>Jonathan</td>
            <td>task 3</td>
            <td>
                  <a class="btn-floating btn-small waves-effect waves-light red">
                        <i class="material-icons">border_color</i>
                    </a>
            </td>
            <td> 
                    <a class="btn-floating btn-small waves-effect waves-light red">
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
   

  export default {
    name: 'TaskList',

    data() {
      return {
        // Some values
      };
    },

    mounted() {
      M.AutoInit(); // That way, it is only initialized when the component is mounted
    }
  } 
</script>
