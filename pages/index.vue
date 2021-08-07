<template>
  <div>
    <!-- Page Container -->
    <div class="xl:container mx-auto xl::p-6">
      <!-- The Grid -->
      <div class="grid grid-cols-3 lg:gap-4">
        <!-- Left Column -->
        <div
          class="col-span-3 lg:col-span-1 bg-white shadow-md lg:py-4 rounded-md"
        >
          <div class="overflow-hidden">
            <div
              class="relative p-1/3 mb-6 lg:rounded-md overflow-hidden clipped lg:px-4"
            >
              <img
                class="absolute top-0 left-0 w-full h-full object-cover"
                src="img/vincent.jpg"
              />
              <div
                class="text-2xl font-semibold text-right absolute right-0 bottom-0"
              >
                <h2 class="mr-3">
                  Vincent <span class="text-cv-500">Chanliau</span>
                </h2>
              </div>
            </div>

            <div class="px-4">
              <p class="mb-2 text-xl ml-1">
                <fa
                  :icon="['fal', 'briefcase']"
                  class="fa-fw mr-3 text-cv-500"
                ></fa
                ><span class="text-sm font-semibold"
                  >Développeur Web Full-Stack - Freelance</span
                >
              </p>
              <p class="mb-2 text-xl ml-1">
                <fa :icon="['fal', 'home']" class="fa-fw mr-3 text-cv-500"></fa
                ><span class="text-sm">Nancy / Strasbourg</span>
              </p>
              <p class="mb-2 text-xl ml-1">
                <fa
                  :icon="['fal', 'envelope']"
                  class="fa-fw mr-3 text-cv-500"
                ></fa
                ><a href="mailto:vchanliau@gmail.com" class="text-sm"
                  >vchanliau@gmail.com</a
                >
              </p>

              <p class="mb-3 text-xl ml-1">
                <fa
                  :icon="['fal', 'phone-rotary']"
                  class="fa-fw mr-3 text-cv-500"
                ></fa
                ><a href="tel:+33611826310" class="text-sm">06.11.82.63.10</a>
              </p>

              <a
                class="inline-block button-download mb-3 border-0"
                href="cv-vincentchanliau-2021.pdf"
              >
                <div class="button-download__content">
                  <p class="button-download__text">
                    <svg
                      id="svgm"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fal"
                      data-icon="filepdf"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      class="svg-inline--fa fa-filepdf fa-w-16"
                    >
                      <path
                        fill="black"
                        d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zm-22-171.2c-13.5-13.3-55-9.2-73.7-6.7-21.2-12.8-35.2-30.4-45.1-56.6 4.3-18 12-47.2 6.4-64.9-4.4-28.1-39.7-24.7-44.6-6.8-5 18.3-.3 44.4 8.4 77.8-11.9 28.4-29.7 66.9-42.1 88.6-20.8 10.7-54.1 29.3-58.8 52.4-3.5 16.8 22.9 39.4 53.1 6.4 9.1-9.9 19.3-24.8 31.3-45.5 26.7-8.8 56.1-19.8 82-24 21.9 12 47.6 19.9 64.6 19.9 27.7.1 28.9-30.2 18.5-40.6zm-229.2 89c5.9-15.9 28.6-34.4 35.5-40.8-22.1 35.3-35.5 41.5-35.5 40.8zM180 175.5c8.7 0 7.8 37.5 2.1 47.6-5.2-16.3-5-47.6-2.1-47.6zm-28.4 159.3c11.3-19.8 21-43.2 28.8-63.7 9.7 17.7 22.1 31.7 35.1 41.5-24.3 4.7-45.4 15.1-63.9 22.2zm153.4-5.9s-5.8 7-43.5-9.1c41-3 47.7 6.4 43.5 9.1z"
                        class=""
                      ></path></svg
                    >Télécharger mon CV
                  </p>
                </div>
              </a>

              <hr />

              <p
                class="text-xl text-cv-500 uppercase tracking-wide font-medium mt-10 mx-1"
              >
                <fa :icon="['fal', 'cog']" class="fa-fw mr-3"></fa
                ><span class="text-lg">Compétences techniques</span>
              </p>

              <p class="mt-4 text-base mb-2 font-light ml-2">
                <fa
                  :icon="['fal', 'asterisk']"
                  class="mr-2 text-cv-500 text-xs"
                ></fa
                >Analyse et gestion de projets informatiques
              </p>
              <p class="text-base mb-2 font-light">
                <fa
                  :icon="['fal', 'asterisk']"
                  class="mr-2 text-cv-500 text-xs"
                ></fa
                >Développement d'applications et outils ERP
              </p>
              <p class="text-base mb-2 font-light ml-2">
                <fa
                  :icon="['fal', 'asterisk']"
                  class="mr-2 text-cv-500 text-xs"
                ></fa
                >Développement d'applications et sites Web
              </p>
              <p class="text-base mb-2 font-light">
                <fa
                  :icon="['fal', 'asterisk']"
                  class="mr-2 text-cv-500 text-xs"
                ></fa
                >Administration de serveurs <i>bare metal</i> et <i>cloud</i>
              </p>

              <p
                class="text-xl text-cv-500 uppercase tracking-wide font-medium mt-10 mx-1"
              >
                <fa :icon="['fal', 'cog']" class="fa-fw mr-3"></fa
                ><span class="text-lg">Frameworks et CMS</span>
              </p>

              <div class="grid grid-cols-6 gap-3 mt-4 justify-center">
                <div class=""><img src="img/mnet.png" /></div>
                <div class=""><img src="img/vuejs.png" /></div>
                <div class=""><img src="img/tailwind.png" /></div>
                <div class=""><img src="img/bootstrap.png" /></div>
                <div class=""><img src="img/laravel.png" /></div>
                <div class=""><img src="img/wordpress.png" /></div>
              </div>

              <p
                class="text-xl text-cv-500 uppercase tracking-wide font-medium mt-10 mx-1"
              >
                <fa :icon="['fal', 'cog']" class="fa-fw mr-3"></fa
                ><span class="text-lg">Langages informatiques</span>
              </p>

              <div class="grid grid-cols-7 gap-3 mt-6 justify-center">
                <div class=""><img src="img/html.png" /></div>
                <div class=""><img src="img/css.png" /></div>
                <div class=""><img src="img/javascript.png" /></div>
                <div class=""><img src="img/php.png" /></div>
                <div class=""><img src="img/sql.png" /></div>
                <div class=""><img src="img/csharp.png" /></div>
                <div class=""><img src="img/python.png" /></div>
              </div>

              <p
                class="text-xl text-cv-500 uppercase tracking-wide font-medium mt-10 mx-1"
              >
                <fa :icon="['fal', 'globe']" class="fa-fw mr-3"></fa
                ><span class="text-lg">Langues</span>
              </p>

              <div class="flex flex-row items-center justify-start ml-4 mt-6">
                <img src="img/france.png" class="mr-3 shadow-md" />
                <p class="text-base font-light">Français (langue maternelle)</p>
              </div>

              <div class="flex flex-row items-center justify-start ml-4 mt-4">
                <img src="img/uk.png" class="mr-3 shadow-md" />
                <p class="text-base font-light">Anglais (bilingue)</p>
              </div>

              <div class="flex flex-row items-center justify-start ml-4 mt-4">
                <img src="img/indonesia.png" class="mr-3 shadow-md" />
                <p class="text-base font-light">Indonésien (intermédiaire)</p>
              </div>

              <div class="flex flex-row items-center justify-start ml-4 mt-4">
                <img src="img/spain.png" class="mr-3 shadow-md" />
                <p class="text-base font-light">Espagnol (basique)</p>
              </div>

              <p
                class="text-lg text-cv-500 uppercase tracking-wide font-medium mt-10 mx-1 mb-4"
              >
                <fa :icon="['fal', 'golfball']" class="fa-fw mr-3"></fa
                ><span class="text-base">Hobbies</span>
              </p>
              <p
                class="inline-block mx-3 pl-3 pr-4 py-1 bg-cv-500 text-white rounded-xl text-center"
              >
                <fa
                  :icon="['fal', 'golfclub']"
                  class="fa-fw mr-2 text-white"
                ></fa
                ><span class="text-sm font-medium">Golf</span>
              </p>
              <p
                class="inline-block mx-3 pl-3 pr-4 py-1 bg-cv-500 text-white rounded-xl text-center"
              >
                <fa :icon="['fal', 'piano']" class="fa-fw mr-2 text-white"></fa
                ><span class="text-sm font-medium">Piano</span>
              </p>
            </div>
          </div>
          <br />

          <!-- End Left Column -->
        </div>

        <!-- Right Column -->
        <div
          class="col-span-3 lg:col-span-2 bg-white shadow-md xl:p-4 xl:rounded-md"
        >
          <div class="mt-20 lg:mt-0">
            <h2
              class="text-3xl bg-cv-500 uppercase tracking-wide font-medium p-3 text-white title"
            >
              <fa :icon="['fal', 'briefcase']" class="fa-fw mr-3"></fa
              ><span class="text-2xl">Expérience professionnelle</span>
            </h2>
            <div class="mx-3 mt-10">
              <h5 class="text-base mx-3">
                <span class="text-cv-500 font-semibold text-xl"
                  >Directeur technique</span
                >
                /
                <a href="https://www.unmondeautrement.com" target="_blank"
                  >Un Monde Autrement</a
                >
                / Bali, Indonésie
              </h5>
              <h6 class="text-gray-500 font-light mb-2 ml-4">
                <fa :icon="['fal', 'calendar']" class="fa-fw mr-2"></fa
                ><span>Depuis avril 2009</span>
              </h6>
              <p class="font-light text-justify text-sm mx-2">
                Responsable du développement informatique des agences de
                tourisme <i>Un Monde autrement</i> pour les 8 pays franchisés du
                réseau. Développement et maintenance des sites web des agences,
                création d’un portail client, création de divers outils
                informatiques utiles au bon fonctionnement du réseau.
                Développement complet d'un ERP évolutif sur mesure répondant aux
                besoins spécifiques de la compagnie ainsi qu'aux différentes
                exigences et contraintes de chaque pays du réseau. Chargé de la
                formation des nouveaux franchisés aux différents outils ainsi
                que de la maintenance et du SAV quotidien par la suite. Chargé
                de la mise en place et de la maintenance des serveurs dédiés
                hébergeant les outils du réseau.
              </p>
              <hr class="mt-4 mb-6" />
            </div>
            <div class="mx-3">
              <h5 class="ext-base mx-3">
                <span class="text-cv-500 font-semibold text-xl"
                  >Chef de projet</span
                >
                / Société Big Foot / Bali Indonésie
              </h5>
              <h6 class="text-gray-500 font-light mb-2 ml-4">
                <fa :icon="['fal', 'calendar']" class="fa-fw mr-2"></fa
                ><span>Décembre 2008 - Mars 2009</span>
              </h6>
              <p class="font-light text-justify text-sm mx-2">
                Chef de projet, responsable d'une équipe de 4 programmeurs dans
                le cadre du développement d'un projet de portail B2B pour les
                hôtels et resorts d'Asie. Analyse et mise en place des
                différentes étapes du développement et assignation des tâches
                aux différents membres de l'équipe.
              </p>
              <hr class="mt-4 mb-6" />
            </div>
            <div class="mx-3">
              <h5 class="text-base mx-3">
                <span class="text-cv-500 font-semibold text-xl"
                  >Responsable commercial</span
                >
                /
                <a href="https://www.kitview.com" target="_blank">KitView</a> /
                Strasbourg, France
              </h5>
              <h6 class="text-gray-500 font-light mb-2 ml-4">
                <fa :icon="['fal', 'calendar']" class="fa-fw mr-2"></fa
                ><span>Septembre 2007 - novembre 2008</span>
              </h6>
              <p class="font-light text-justify text-sm mx-2">
                Responsable technique et commercial de la région Grand-Est pour
                la société <i>KitView</i> spécialisée dans le développement
                d'outils informatiques de gestion et d'imagerie médicale.
                Installation et maintenance des systèmes informatiques dans les
                cabinets médicaux de ses clients. Développement de plusieurs
                outils pour la gestion du réseau et participation au
                développement des différents logiciels de la gamme KitView.
              </p>
              <hr class="mt-4 mb-6" />
            </div>
            <div class="mx-3">
              <h5 class="text-base mx-3">
                <span class="text-cv-500 font-semibold text-xl"
                  >Développeur</span
                >
                / Freelance / Montréal, Canada
              </h5>
              <h6 class="text-gray-500 font-light mb-2 ml-4">
                <fa :icon="['fal', 'calendar']" class="fa-fw mr-2"></fa
                ><span>Novembre 2004 - Juin 2007</span>
              </h6>
              <p class="font-light text-justify text-sm">
                Développeur de logiciels et de sites web en freelance.
              </p>
              <hr class="mt-4 mb-6" />
            </div>
            <div class="mx-3">
              <h5 class="text-base mx-3">
                <span class="text-cv-500 font-semibold text-xl"
                  >Développeur Junior</span
                >
                / Diatélic / Nancy, France
              </h5>
              <h6 class="text-gray-500 font-light mb-2 ml-4">
                <fa :icon="['fal', 'calendar']" class="fa-fw mr-2"></fa
                ><span>Septembre 2003 - Octobre 2004</span>
              </h6>
              <p class="font-light text-justify text-sm mx-2">
                Chargé du développement d'un logiciel de gestion de planning
                pour le service de néphrologie du CHU de Brabois. Développement
                du site web de la société Diatélic, précurseuse dans la
                télémédecine et la création de systèmes intelligents pour le
                suivi de patients atteints d'insuffisance rénale.
              </p>
              <hr class="mt-4 mb-6" />
            </div>
            <div class="mx-3">
              <h5 class="text-base mx-3">
                <span class="text-cv-500 font-semibold text-xl"
                  >Administrateur Réseau</span
                >
                / Qualipse / Strasbourg, France
              </h5>
              <h6 class="text-gray-500 font-light mb-2 ml-4">
                <fa :icon="['fal', 'calendar']" class="fa-fw mr-2"></fa
                ><span>Septembre 2001 - Juillet 2003</span>
              </h6>
              <p class="font-light text-justify text-sm mx-2">
                Responsable réseau dans le cadre d'études en alternance en BTS
                informatique de gestion.
              </p>
            </div>
          </div>

          <div class="mt-20 lg:mt-12">
            <h2
              class="text-3xl bg-cv-500 uppercase tracking-wide font-medium text-white p-3 title"
            >
              <fa :icon="['fal', 'graduationcap']" class="fa-fw mr-3"></fa
              ><span class="text-2xl">Diplômes</span>
            </h2>
            <div class="mx-3 mt-10">
              <h5 class="text-base">
                <span class="text-cv-500 font-semibold text-xl"
                  >BTS informatique de gestion</span
                >
                / IESA / Strasbourg, France
              </h5>
              <h6 class="text-gray-500 font-light mb-2 ml-4">
                <fa :icon="['fal', 'calendar']" class="fa-fw mr-2"></fa
                ><span>Septembre 2001 à Juillet 2003</span>
              </h6>
              <hr class="my-6" />
            </div>
            <div class="mx-3">
              <h5 class="text-base">
                <span class="text-cv-500 font-semibold text-xl"
                  >Baccalauréat section scientifique</span
                >
                / Institut Horizon / Strasbourg, France
              </h5>
              <h6 class="text-gray-500 font-light mb-2 ml-4">
                <fa :icon="['fal', 'calendar']" class="fa-fw mr-2"></fa
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

.clipped {
  box-shadow: inset -1px -0px 3px rgba(0, 0, 0, 0.2);
}

.title {
  box-shadow: 0px 15px 10px -6px rgb(0 0 0 / 40%);
  /* -webkit-clip-path: polygon(100% 60%, 0% 100%, 0% 0%, 100% 0%); */
  /* clip-path: polygon(100% 60%, 0% 100%, 0% 0%, 100% 0%); */

  /*clip-path: polygon(100% 60%, 0% 100%, 0% 0%, 100% 0%);*/
}

.clipped img {
  clip-path: polygon(100% 75%, 0% 100%, 0% 0%, 100% 0%);
}

.button-download {
  position: relative;
  padding: 0;
  border: 2px solid #888888;
  outline: none;
  background-color: #f4f5f6;
  border-radius: 2px;
  box-shadow: -3px -5px 10px #ffffff, -3px -5px 7px #ffffff,
    -5px 0px 10px #ffffff, 2px 3px 5px rgba(0, 0, 0, 0.2);
  transition: 0.13s ease-in-out;
  cursor: pointer;
}
.button-download:hover {
  box-shadow: none;
}
.button-download:hover .button-download__content {
  box-shadow: none;
}
.button-download:hover .button-download__content .button-download__text,
.button-download:hover .button-download__content svg {
  transform: translate3d(0px, 0px, 0px);
}
.button-download__content {
  position: relative;
  display: grid;
  padding: 2px 0;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  /*grid-template-rows: 1fr 1fr;*/
  box-shadow: inset 0px -2px 0px #dddddd, 0px -2px 0px #f4f5f6;
  border-radius: 2px;
  transition: 0.13s ease-in-out;
  z-index: 1;
}
.button-download__text {
  position: relative;
  transform: translate3d(0px, -2px, 0px);
  margin: 0;
  align-self: end;
  grid-column: 2/5;
  /*grid-row: 2;*/
  text-align: center;
  font-size: 14px;
  /*line-height: 31px;*/
  background-color: #888888;
  color: transparent;
  text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.8);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  transition: 0.13s ease-in-out;
}

.button-download__content .svg-wrap {
  position: absolute;
  transform: translate3d(0px, -4px, 0px);
  font-size: 18px;
  margin: 4px 8px;
  background-color: rgba(234, 24, 15, 0.8);

  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  box-shadow: 2px 2px 3px rgba(255, 255, 255, 0.8);
  transition: 0.13s ease-in-out;
}

.button-download__content .svg-wrap svg {
  color: transparent;
  /*text-shadow: 2px 2px 3px rgba(234, 24, 15, 0.8);*/
}
.button-download__content svg path {
  fill: transparent;
}

.social-buttons {
  margin: 30px 10px 40px;
}

.social-buttons a {
  display: inline-flex;
  text-decoration: none;
  font-size: 18px;
  width: 40px;
  height: 40px;
  color: #fff;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 8px;
}

.social-buttons a::before {
  content: '';
  position: absolute;
  width: 40px;
  height: 40px;
  background: linear-gradient(
    45deg,
    rgba(0, 127, 171, 0.5),
    rgba(0, 127, 171, 1)
  );
  border-radius: 50%;

  transition: 0.265s ease-out;
}

.social-buttons a:hover::before {
  transform: scale(0);
}

.social-buttons a svg {
  z-index: 1;
  transition: 0.265s ease-out;
}

.social-buttons a:hover svg {
  background: linear-gradient(
    45deg,
    rgba(0, 127, 171, 0.5),
    rgba(0, 127, 171, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transform: scale(1.5);
}
</style>
