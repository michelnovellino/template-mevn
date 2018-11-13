 <template>

    <div>  
          <nav>
                <div class="nav-wrapper">
                <a href="#" class="brand-logo">Logo</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li>
                    <router-link to="/">HOME</router-link>
                </li>
                    <li><router-link to="user">PANEL</router-link></li>
                    <li><a href="#">item 3</a></li>
                </ul>
                </div>
         </nav> 
             <transition name="fade">
      
     <router-view></router-view>
         </transition>
      
      </div>
 </template>
 