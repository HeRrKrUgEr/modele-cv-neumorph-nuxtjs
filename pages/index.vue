<template>
  <div>
    <!-- Page Container -->
    <div class="container mx-auto p-6">
      <!-- The Grid -->
      <div class="grid grid-cols-3 gap-4">
        <!-- Left Column -->
        <div class="col-span-1 bg-white shadow-stripe p-4 rounded-md">
          <div class="overflow-hidden">
            <div class="relative p-1/3 mb-6 bg-gray-100 rounded-md overflow-hidden  clipped">
              <img
                class="absolute top-0 left-0 w-full h-full object-cover"
                src="img/vincent.jpg"
              />
             
              <div class="text-2xl font-semibold  text-right absolute right-0 bottom-0 ">
                <h2 class="mr-3">Vincent <span class="text-cv-500">Chanliau</span></h2>
              </div>
            </div>

            <div>             
              <p class="mb-2 text-xl ml-1">
                <fa
                  :icon="['fal', 'briefcase']"
                  class="fa-fw  mr-3 text-cv-500 "
                ></fa
                ><span class="text-sm font-semibold">Développeur Full-Stack</span>
              </p>
              <p class="mb-2 text-xl ml-1">
                <fa :icon="['fal', 'home']" class="fa-fw  mr-3 text-cv-500"></fa
                ><span class="leading-tight"><span class="text-sm">Nancy / Strasbourg</span></span>
              </p>
              <p class="mb-2 text-xl ml-1">
                <fa
                  :icon="['fal', 'envelope']"
                  class="fa-fw  mr-3 text-cv-500 "
                ></fa
                ><a href="mailto:vchanliau@gmail.com" class="leading-tight"><span class="text-sm">vchanliau@gmail.com</span></a>
              </p>
              <p class="mb-3 text-xl ml-1">
                 <fa
                  :icon="['fal', 'phone-rotary']"
                  class="fa-fw  mr-3 text-cv-500 "
                ></fa
                ></i
                ><a href="tel:+33611826310"><span class="text-sm">06.11.82.63.10</span></a>
              </p>

              <a class="button-download mb-3 mx-4" href="cv-vincentchanliau-2021.pdf">
                <div class="button-download__content">
                  <i class="far fa-file-pdf"></i>
                  <p class="button-download__text">Télécharger mon CV</p>
                </div>
              </a>

              <hr/>

              <p class="text-xl text-cv-500 uppercase tracking-wide font-medium mt-10 mx-1">
                <fa
                  :icon="['fal', 'cog']"
                  class="fa-fw mr-3"
                ></fa
                ><span class="text-lg">Compétences techniques</span>
              </p>


              <p class="mt-4 text-base mb-1 font-light">.NET / .NET Core <span class="text-xs italic">(ASP.NET, C#, WebServices...)</span></p>
              <div class="text-gray-200 rounded-xl mx-1 mb-2">
                <div
                  class="rounded-xl   bg-cv-500 w-full text-white text-center text-xs"
                >100%</div>
              </div>

              <p class="mt-4 text-base mb-1 font-light">Javascript <span class="text-xs italic">(NodeJS, VueJS, React, PWA...)</span></p>
              <div class="text-gray-200 rounded-xl mx-1 mb-2">
                <div
                  class="rounded-xl   bg-cv-500 w-full text-white text-center text-xs"
                >90%</div>
              </div>

             

              <p class="mt-4 text-base mb-1 font-light">Bases de Données <span class="text-xs italic">(SQLServer, MySql, MongoDB, Firebase...)</span></p>
              <div class="text-gray-200 rounded-xl mx-1 mb-2">
                <div
                  class="rounded-xl   bg-cv-500 w-full text-white text-center text-xs"
                >100%</div>
              </div>   

               <p class="mt-4 text-base mb-1 font-light">HTML - CSS</p>
              <div class="text-gray-200 rounded-xl mx-1 mb-2">
                <div
                  class="rounded-xl bg-cv-500 w-full text-white text-center text-xs"
                >100%</div>
              </div>
            

              <p class="mt-4 text-base mb-1 font-light">PHP</p>
              <div class="text-gray-200 rounded-xl mx-1 mb-2">
                <div
                  class="rounded-xl   bg-cv-500 w-9/10 text-white text-center text-xs"
                >90%</div>
              </div>              

               <p class="mt-4 text-base mb-1 font-light">Python</p>
              <div class="text-gray-200 rounded-xl mx-1 mb-2">
                <div
                  class="rounded-xl   bg-cv-500 w-8/10 text-white text-center text-xs"
                >80%</div>
              </div>

              <p class="mt-4 text-base mb-1 font-light">WebDesign (Créativité artistique)</p>
              <div class="text-gray-200 rounded-xl mx-1 mb-2">
                <div
                  class="rounded-xl   bg-cv-500 w-7/10 text-white text-center text-xs"
                >70%</div>
              </div>

              

              <p class="text-xl text-cv-500 uppercase tracking-wide font-medium mt-12 mx-1">
                <fa
                  :icon="['fal', 'globe']"
                  class="fa-fw mr-3"
                ></fa
                ><span class="text-lg">Langues parlées</span>
              </p>
              <p class="mt-3 text-base mb-1 font-light">Français</p>
              <div class="text-gray-200 rounded-xl mx-1 mb-2">
                <div
                  class="rounded-xl   bg-cv-500 w-full text-white text-center text-xs"
                >100%</div>
              </div>
               <p class="mt-3 text-base mb-1 font-light">Anglais</p>
              <div class="text-gray-200 rounded-xl mx-1 mb-2">
                <div
                  class="rounded-xl   bg-cv-500 w-full text-white text-center text-xs"
                >100%</div>
              </div>
              <p class="mt-3 text-base mb-1 font-light">Indonésien</p>
              <div class="text-gray-200 rounded-xl mx-1 mb-2">
                <div
                  class="rounded-xl   bg-cv-500 w-7/10 text-white text-center text-xs"
                >70%</div>
              </div>
              <p class="mt-3 text-base mb-1 font-light">Espagnol</p>
              <div class="text-gray-200 rounded-xl mx-1 mb-2">
                <div
                  class="rounded-xl   bg-cv-500 w-1/2 text-white text-center text-xs"
                >50%</div>
              </div>
              <p class="text-lg text-cv-500 uppercase tracking-wide font-medium mt-10 mx-1 mb-4">
                <fa
                  :icon="['fal', 'golfball']"
                  class="fa-fw mr-3"
                ></fa
                ><span class="text-base">Hobbies</span>
              </p>
              <p class="inline-block mx-3 pl-3 pr-4 py-1 bg-cv-500 text-white rounded-xl text-center">
                 <fa
                  :icon="['fal', 'golfclub']"
                  class="fa-fw  mr-2 text-white "
                ></fa
                ><span class="text-sm font-medium">Golf</span>
              </p>
              <p class="inline-block mx-3 pl-3 pr-4 py-1 bg-cv-500 text-white rounded-xl text-center">
                 <fa
                  :icon="['fal', 'piano']"
                  class="fa-fw  mr-2 text-white "
                ></fa
                ><span class="text-sm font-medium">Piano</span>
              </p>
            </div>
          </div>
          <br />

          <!-- End Left Column -->
        </div>

        <!-- Right Column -->
        <div class="col-span-2 bg-white shadow-stripe p-4 rounded-md">
          <div class="">
             <p class="text-3xl bg-cv-500 uppercase tracking-wide font-medium pl-3 pt-3 text-white pb-5 title">
                <fa
                  :icon="['fal', 'briefcase']"
                  class="fa-fw mr-3"
                ></fa
                ><span class="text-2xl">Expérience professionnelle</span>
              </p>
            <div class="mx-3 mt-10">
              <h5 class="text-base">
                <span class="text-cv-500 font-semibold text-xl">Directeur technique</span> / <a href="https://www.unmondeautrement.com" target="_blank">Un Monde Autrement</a> / Bali, Indonésie
              </h5>
              <h6 class="text-gray-500 font-light mb-2 ml-4">
                <fa
                  :icon="['fal', 'calendar']"
                  class="fa-fw  mr-2"
                ></fa
                ><span>Avril 2009 - Septembre 2020</span>
              </h6>
              <p class="font-light text-justify">
                Responsable du développement informatique pour les 8 pays franchisés du réseau. Developpement et maintenance des sites web des agences, création un portail client, création d'outils informatiques divers utiles aux bon fonctionnement du réseau. Développement complet d'un ERP évolutive sur mesure répondant aux besoins spécifiques de la compagnie ainsi qu'aux différentes exigences et contraintes de chaque pays du réseau. Chargé de la formation des nouveaux franchisés aux différents outils ainsi que maintenance et SAV quotidien par la suite. Chargé de la mise en place et de la maintenance des serveurs dédiés hébèrgeants les outils du réseau.
              </p>
              <hr class="mt-4 mb-6"/>
            </div>
            <div class="mx-3">
              <h5 class="text-base">
                <span class="text-cv-500 font-semibold text-xl">Chef de projet</span> / Société Big Foot / Bali Indonésie
              </h5>
              <h6 class="text-gray-500 font-light mb-2 ml-4">
                <fa
                  :icon="['fal', 'calendar']"
                  class="fa-fw  mr-2"
                ></fa
                ><span>Décembre 2008 - Mars 2009</span>
              </h6>
              <p class="font-light text-justify">
                Chef de projet, résponsable d'une équipe de 4 programmeurs indonésiens dans le cadre du développement d'un projet de portail B2B pour les hôtels et resorts d'Asie. Analyse et mise en place des différentes étapes du développement et assignation des tâches aux différents membres de l'equipe.
              </p>
              <hr class="mt-4 mb-6"/>
            </div>
            <div class="mx-3">
              <h5 class="text-base">
                <span class="text-cv-500 font-semibold text-xl">Responsable commercial</span> / <a href="https://www.kitview.com" target="_blank">KitView</a> / Strasbourg, France
              </h5>
              <h6 class="text-gray-500 font-light mb-2 ml-4">
                <fa
                  :icon="['fal', 'calendar']"
                  class="fa-fw  mr-2"
                ></fa
                ><span>Septembre 2007 - novembre 2008</span>
              </h6>
              <p class="font-light text-justify">
                Responsable technique et commercial de la région Grand-Est pour la société KitView spécialisée dans le développement d'outils informatiques de gestion et d'imagerie médicale. Installation et maintenance des systèmes informatiques dans les cabinets médicaux de nos clients, et développement de différents outils pour la gestion des du réseau et participation au développement des différents logiciels de la gamme KitView. 
              </p>
              <hr class="mt-4 mb-6"/>
            </div> 
            <div class="mx-3">
              <h5 class="text-base">
                <span class="text-cv-500 font-semibold text-xl">Développeur</span> / Freelance / Montréal, Canada
              </h5>
              <h6 class="text-gray-500 font-light mb-2 ml-4">
                <fa
                  :icon="['fal', 'calendar']"
                  class="fa-fw  mr-2"
                ></fa
                ><span>Novembre 2004 - Juin 2007</span>
              </h6>
              <p class="font-light text-justify">
                Développeur de logiciels et de sites web en freelance. 
              </p>
              <hr class="mt-4 mb-6"/>
            </div> 
            <div class="mx-3">
              <h5 class="text-base">
                <span class="text-cv-500 font-semibold text-xl">Développeur Junior</span> / Diatélic / Nancy, France
              </h5>
              <h6 class="text-gray-500 font-light mb-2 ml-4">
                <fa
                  :icon="['fal', 'calendar']"
                  class="fa-fw  mr-2"
                ></fa
                ><span>Septembre 2003 - Octobre 2004</span>
              </h6>
              <p class="font-light text-justify">
                Chargé du développement d'un logiciel de gestion de planning pour le service de néphrologie le CHU de Brabois. Développement du site web de la société Diatélic, précurseuse dans la télémédecine et la création de systèmes intelligents pour le suivis de patients atteints d'insuffisance rénale.
              </p>
              <hr class="mt-4 mb-6"/>
            </div> 
            <div class="mx-3">
              <h5 class="text-base">
                <span class="text-cv-500 font-semibold text-xl">Administrateur Réseau</span> / Qualipse / Strasbourg, France
              </h5>
              <h6 class="text-gray-500 font-light mb-2 ml-4">
                <fa
                  :icon="['fal', 'calendar']"
                  class="fa-fw  mr-2"
                ></fa
                ><span>Septembre 2001 - Juillet 2003</span>
              </h6>
              <p class="font-light text-justify">
                Résponsable réseau en alternance dans le cadre d'études en BTS informatique de gestion.
              </p>
            </div> 
          </div>


          <div class="mt-12">
             <p class="text-3xl bg-cv-500 uppercase tracking-wide font-medium pl-3 pt-3 text-white pb-5 title">
                <fa
                  :icon="['fal', 'graduationcap']"
                  class="fa-fw mr-3"
                ></fa
                ><span class="text-2xl">Diplômes</span>
              </p>
            <div class="mx-3 mt-5">
              <h5 class="text-base">
                <span class="text-cv-500 font-semibold text-xl">BTS informatique de gestion</span> / IESA / Strasbourg, France
              </h5>
              <h6 class="text-gray-500 font-light mb-2 ml-4">
                <fa
                  :icon="['fal', 'calendar']"
                  class="fa-fw  mr-2"
                ></fa
                ><span>Septembre 2001 à Juillet 2003</span>
              </h6>
              <hr class="my-6"/>
            </div>
            <div class="mx-3">
              <h5 class="text-base">
                  <span class="text-cv-500 font-semibold text-xl">Baccalauréat section scientifique</span> / Institut Horizon / Strasbourg, France
              </h5>
              <h6 class="text-gray-500 font-light mb-2 ml-4">
                <fa
                  :icon="['fal', 'calendar']"
                  class="fa-fw  mr-2"
                ></fa
                ><span>Année 2000</span>
              </h6>
            </div>
          </div>

          

          <!-- End Right Column -->
        </div>

        <!-- End Grid -->
      </div>

      <!-- End Page Container -->
    </div>

  </div>
</template>

<script>
export default {}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.clipped{
  box-shadow: inset -1px -0px 3px rgba(0,0,0,0.2);
}

.title{
          box-shadow: inset -1px 1px 3px rgba(0,0,0,0.4);
    clip-path: polygon(100% 60%, 0% 100%, 0% 0%, 100% 0%);
}

.clipped img{
  clip-path: polygon(100% 70%, 0% 100%, 0% 0%, 100% 0%);
}


.button-download {
  position: relative;
  padding: 0;
  border: 2px solid #888888;
  outline: none;
  background-color: #f4f5f6;
  border-radius: 15px;
  box-shadow: -3px -5px 10px #ffffff, -3px -5px 7px #ffffff, -5px 0px 10px #ffffff, 2px 3px 5px rgba(0, 0, 0, 0.2);
  transition: 0.13s ease-in-out;
  cursor: pointer;
}
.button-download:hover {
  box-shadow: none;
}
.button-download:hover .button-download__content {
  box-shadow: none;
}
.button-download:hover .button-download__content .button-download__text, .button-download:hover .button-download__content i {
  transform: translate3d(0px, 0px, 0px);
}
.button-download__content {
  position: relative;
  display: grid;
  padding: 10px 0;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  /*grid-template-rows: 1fr 1fr;*/
  box-shadow: inset 0px -4px 0px #dddddd, 0px -4px 0px #f4f5f6;
  border-radius: 15px;
  transition: 0.13s ease-in-out;
  z-index: 1;
}
.button-download__text {
  position: relative;
  transform: translate3d(0px, -4px, 0px);
  margin: 0;
  align-self: end;
  grid-column: 2/5;
  /*grid-row: 2;*/
  text-align: center;
  font-size: 18px;
  /*line-height: 31px;*/
  background-color: #888888;
  color: transparent;
  text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.8);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  transition: 0.13s ease-in-out;
}

.button-download__content i{
  position: absolute;
  transform: translate3d(0px, -4px, 0px);
  font-size: 26px;
  margin: 8px 15px;
  background-color:rgba(234, 24, 15, 0.8);
  color: transparent;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.8);
  transition: 0.13s ease-in-out;
  /*text-shadow: 2px 2px 3px rgba(234, 24, 15, 0.8);*/
}

</style>
