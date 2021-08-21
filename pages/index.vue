<template>
  <div>
    <!-- Page Container -->
    <div class="xl:container mx-auto xl:p-8">
      <!-- The Grid -->
      <div class="grid grid-cols-3 lg:gap-8">
        <!-- Left Column -->
        <div class="col-span-3 lg:col-span-1 h-full bg-main neu-left">
          <div
            id=""
            class="id-card w-full overflow-hidden neu-inset flex justify-end"
          >
            <img class="absolute bottom-0 left-0" src="img/vincent.png" />

            <div>
              <h1 class="text-left top-0 right-0 mt-6 mr-4">
                <span class="prenom -ml-6">Vincent</span>
                <span class="nom -ml-3">Chanliau</span>
                <span class="titre -ml-6 my-1"
                  >Développeur <i>'Full-Stack'</i></span
                >
              </h1>
              <div
                class="inline-flex w-auto justify-start sm:justify-center absolute bottom-0 right-0 sm:mr-4 mb-4"
              >
                <a
                  href="https://www.facebook.com/vincent.chanliau/"
                  target="_blank"
                  role="button"
                  class="social-link"
                  data-color="#4267B2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path
                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/vincent-chanliau"
                  target="_blank"
                  role="button"
                  class="social-link"
                  data-color="#2867B2"
                  title="linkedin"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/HeRrKrUgEr"
                  target="_blank"
                  title="github"
                  role="button"
                  class="social-link"
                  data-color="#c9510c"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512">
                    <path
                      d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="overflow-hidden relative z-10 flex flex-col flex-between">
            <div>
              <div
                class="text-2xl text-cv-accent bg-main px-2 uppercase tracking-wide font-medium mt-2 neu-inset"
              >
                <fa :icon="['fal', 'info']" class="fa-fw mr-3"></fa
                ><span class="text-lg">Informations</span>
              </div>

              <div
                class="flex flex-col sm:flex-row sm:flex-wrap lg:flex-col mt-4 px-2 lg:px-8"
              >
                <div
                  class="mb-4 text-2xl inline-flex justify-start sm:justify-center align-middle w-full sm:w-1/2"
                >
                  <fa
                    :icon="['fal', 'birthday-cake']"
                    class="fa-fw mr-3 text-cv-accent"
                  ></fa>

                  <span class="text-base font-light"
                    >14 août 1980 - {{ age }} ans</span
                  >
                </div>
                <div
                  class="mb-4 text-2xl inline-flex justify-start sm:justify-center align-middle w-full sm:w-1/2"
                >
                  <fa
                    :icon="['fal', 'home']"
                    class="fa-fw mr-3 text-cv-accent"
                  ></fa>

                  <span class="text-base font-light">Alsace - Lorraine</span>
                </div>
                <div
                  class="mb-4 w-full sm:w-1/2 inline-flex justify-start sm:justify-center"
                >
                  <a
                    href="mailto:vchanliau@gmail.com"
                    class="fa-link text-lg align-middle"
                  >
                    <fa
                      :icon="['fal', 'envelope']"
                      class="fa-fw mr-3 text-cv-accent text-2xl"
                    ></fa>

                    <span class="text-base">vchanliau@gmail.com</span></a
                  >
                </div>
                <div
                  class="mb-4 inline-flex w-full sm:w-1/2 justify-start sm:justify-center"
                >
                  <a href="tel:+33611826310" class="fa-link text-lg">
                    <fa
                      :icon="['fal', 'phone-rotary']"
                      class="fa-fw mr-3 text-cv-accent text-2xl"
                    ></fa>

                    <span class="text-base">06.11.82.63.10</span></a
                  >
                </div>
                <div
                  class="mb-4 inline-flex w-full sm:w-1/2 justify-start sm:justify-center lg"
                >
                  <a
                    href="cv-vincentchanliau-2021.pdf"
                    class="fa-link text-lg align-middle"
                  >
                    <fa
                      :icon="['fal', 'cloud-download']"
                      class="fa-fw mr-3 text-cv-accent text-2xl"
                    ></fa>

                    <span class="text-base">Télécharger mon CV</span></a
                  >
                </div>
              </div>
            </div>
            <div>
              <div
                class="text-2xl text-cv-accent uppercase tracking-wide font-medium mt-16 px-2 neu-inset"
              >
                <fa :icon="['fal', 'cog']" class="fa-fw mr-3"></fa
                ><span class="text-lg">Compétences techniques</span>
              </div>
              <div class="px-2 sm:px-8 lg:px-8">
                <p class="mt-4 text-base mb-2 font-light ml-2">
                  <fa
                    :icon="['fal', 'asterisk']"
                    class="mr-2 text-cv-accent text-xs"
                  ></fa
                  >Analyse et gestion de projets informatiques
                </p>
                <p class="text-base mb-2 font-light">
                  <fa
                    :icon="['fal', 'asterisk']"
                    class="mr-2 text-cv-accent text-xs"
                  ></fa
                  >Développement d'applications et outils ERP
                </p>
                <p class="text-base mb-2 font-light ml-2">
                  <fa
                    :icon="['fal', 'asterisk']"
                    class="mr-2 text-cv-accent text-xs"
                  ></fa
                  >Développement d'applications et sites Web
                </p>
                <p class="text-base font-light">
                  <fa
                    :icon="['fal', 'asterisk']"
                    class="mr-2 text-cv-accent text-xs"
                  ></fa
                  >Administration de serveurs <i>bare metal</i> et
                  <i>cloud</i>
                </p>
              </div>
            </div>
            <div>
              <div
                class="text-2xl text-cv-accent uppercase tracking-wide font-medium mt-16 px-2 neu-inset"
              >
                <fa :icon="['fal', 'laptop-code']" class="fa-fw mr-3"></fa
                ><span class="text-lg">Langages et Frameworks</span>
              </div>
              <div
                class="grid grid-cols-7 gap-3 mt-6 justify-center px-2 lg:px-4"
              >
                <div class=""><img src="img/html.png" /></div>
                <div class=""><img src="img/css.png" /></div>
                <div class=""><img src="img/javascript.png" /></div>
                <div class=""><img src="img/php.png" /></div>
                <div class=""><img src="img/sql.png" /></div>
                <div class=""><img src="img/csharp.png" /></div>
                <div class=""><img src="img/python.png" /></div>
              </div>
              <div
                class="grid grid-cols-6 gap-3 mt-4 justify-center px-2 lg:px-4"
              >
                <div class=""><img src="img/mnet.png" /></div>
                <div class=""><img src="img/laravel.png" /></div>
                <div class=""><img src="img/vuejs.png" /></div>
                <div class=""><img src="img/gcloud.png" /></div>
                <div class=""><img src="img/iis.png" /></div>
                <div class=""><img src="img/apache.png" /></div>
              </div>
            </div>
            <div>
              <div
                class="text-2xl text-cv-accent uppercase tracking-wide font-medium mt-16 px-2 neu-inset"
              >
                <fa
                  :icon="['fal', 'globe']"
                  class="fa-fw mr-3 fa-swap-opacity"
                ></fa
                ><span class="text-lg">Langues étrangères</span>
              </div>
              <div class="px-2 lg:px-8">
                <div class="flex flex-row items-center justify-start mt-4">
                  <img src="img/uk.png" class="mr-3 shadow-md" />
                  <p class="text-base font-light">Anglais (bilingue)</p>
                </div>
                <div class="flex flex-row items-center justify-start mt-4">
                  <img src="img/indonesia.png" class="mr-3 shadow-md" />
                  <p class="text-base font-light">Indonésien (intermédiaire)</p>
                </div>
                <div class="flex flex-row items-center justify-start mt-4">
                  <img src="img/spain.png" class="mr-3 shadow-md" />
                  <p class="text-base font-light">Espagnol (basique)</p>
                </div>
              </div>
            </div>
            <div>
              <div
                class="text-2xl text-cv-accent uppercase tracking-wide font-medium mt-16 px-2 neu-inset mb-5"
              >
                <fa :icon="['fal', 'golfball']" class="fa-fw mr-3"></fa
                ><span class="text-base">Hobbies</span>
              </div>
              <div class="px-2 lg:px-8 pb-8">
                <p
                  class="inline-block mx-3 pl-3 pr-4 py-1 text-cv-accent neu-sm text-center"
                >
                  <fa :icon="['fal', 'golfclub']" class="fa-fw mr-2"></fa
                  ><span class="text-base font-medium">Golf</span>
                </p>
                <p
                  class="inline-block mx-3 pl-3 pr-4 py-1 text-cv-accent neu-sm m text-center"
                >
                  <fa :icon="['fal', 'piano']" class="fa-fw mr-2"></fa
                  ><span class="text-base font-medium">Piano</span>
                </p>
                <p
                  class="inline-block mx-3 pl-3 pr-4 py-1 text-cv-accent neu-sm text-center"
                >
                  <fa :icon="['fal', 'laptop']" class="fa-fw mr-2"></fa
                  ><span class="text-base font-medium">Dev</span>
                </p>
              </div>
            </div>
          </div>

          <!-- End Left Column -->
        </div>

        <!-- Right Column -->
        <div class="col-span-3 lg:col-span-2 bg-main xl:p-4 neu-left">
          <div class="mt-20 lg:mt-0">
            <h2
              class="text-3xl bg-main neu-inset rounded-md uppercase tracking-wide font-medium py-3 px-4 text-cv-accent"
            >
              <fa :icon="['fal', 'briefcase']" class="fa-fw mr-3"></fa
              ><span class="text-base sm:text-xl lg:text-2xl"
                >Expérience professionnelle</span
              >
            </h2>

            <div class="mx-3 mt-10">
              <div
                class="flex justify-between flex-col sm:flex-row lg:flex-row align-bottom mb-1"
              >
                <h5 class="text-base">
                  <a href="https://www.unmondeautrement.com" target="_blank">
                    <span class="text-cv-accent font-medium text-xl block"
                      >Un Monde Autrement</span
                    ></a
                  >

                  Directeur technique
                </h5>
                <div
                  class="flex flex-row sm:flex-col lg:flex-col justify-between sm:justify-end lg:justify-end lg:mx-2 text-gray-600"
                >
                  <h6 class="text-right">
                    <span>Depuis avril 2009</span>
                  </h6>
                  <h6 class="text-sm text-right">
                    <span><i>Bali, Indonésie</i></span>
                  </h6>
                </div>
              </div>

              <p class="font-light text-justify text-base sm:mx-2 lg:mx-2">
                Responsable du développement informatique des agences de
                tourisme
                <a target="_blank" href="https://www.unmondeautrement.com"
                  ><i>Un Monde autrement</i></a
                >
                pour les 8 pays franchisés du réseau. Développement et
                maintenance des sites web des agences, création d’un portail
                client, création de divers outils informatiques utiles au bon
                fonctionnement du réseau. Développement complet d'un ERP
                évolutif sur mesure répondant aux besoins spécifiques de la
                compagnie ainsi qu'aux différentes exigences et contraintes de
                chaque pays du réseau. Chargé de la formation des nouveaux
                franchisés aux différents outils ainsi que de la maintenance et
                du SAV quotidien par la suite. Chargé de la mise en place et de
                la maintenance des serveurs dédiés hébergeant les outils du
                réseau.
              </p>
              <div class="mt-4 mb-6 neu-in"></div>
            </div>

            <div class="mx-3">
              <div
                class="flex justify-between flex-col sm:flex-row lg:flex-row align-bottom mb-1"
              >
                <h5 class="text-base">
                  <span class="text-cv-accent font-medium text-xl block"
                    >Big Foot</span
                  >

                  Chef de projet
                </h5>
                <div
                  class="flex flex-row sm:flex-col lg:flex-col justify-between sm:justify-end lg:justify-end lg:mx-2 text-gray-600"
                >
                  <h6 class="text-right">
                    <span>Déc. 2008 - Mars 2009</span>
                  </h6>
                  <h6 class="text-sm text-right">
                    <span><i>Bali, Indonésie</i></span>
                  </h6>
                </div>
              </div>
              <p class="font-light text-justify text-base sm:mx-2 lg:mx-2">
                Chef de projet, responsable d'une équipe de 4 programmeurs dans
                le cadre du développement d'un projet de portail B2B pour les
                hôtels et resorts d'Asie. Analyse et mise en place des
                différentes étapes du développement et assignation des tâches
                aux différents membres de l'équipe.
              </p>
              <div class="mt-4 mb-6 neu-in"></div>
            </div>

            <div class="mx-3">
              <div
                class="flex justify-between flex-col sm:flex-row lg:flex-row align-bottom mb-1"
              >
                <h5 class="text-base">
                  <a href="https://www.kitview.com" target="_blank">
                    <span class="text-cv-accent font-medium text-xl block"
                      >KitView</span
                    ></a
                  >

                  Responsable commercial
                </h5>
                <div
                  class="flex flex-row sm:flex-col lg:flex-col justify-between sm:justify-end lg:justify-end lg:mx-2 text-gray-600"
                >
                  <h6 class="text-right">
                    <span>Sep. 2007 - Nov. 2008</span>
                  </h6>
                  <h6 class="text-sm text-right">
                    <span><i>Strasbourg, France</i></span>
                  </h6>
                </div>
              </div>

              <p class="font-light text-justify text-base sm:mx-2 lg:mx-2">
                Responsable technique et commercial de la région Grand-Est pour
                la société
                <a href="https://www.kitview.com" target="_blank"
                  ><i>KitView</i></a
                >
                spécialisée dans le développement d'outils informatiques de
                gestion et d'imagerie médicale. Installation et maintenance des
                systèmes informatiques dans les cabinets médicaux de ses
                clients. Développement de plusieurs outils pour la gestion du
                réseau et participation au développement des différents
                logiciels de la gamme KitView.
              </p>
              <div class="mt-4 mb-6 neu-in"></div>
            </div>

            <div class="mx-3">
              <div
                class="flex justify-between flex-col sm:flex-row lg:flex-row align-bottom mb-1"
              >
                <h5 class="text-base">
                  <span class="text-cv-accent font-medium text-xl block"
                    >Freelance</span
                  >

                  Développeur
                </h5>
                <div
                  class="flex flex-row sm:flex-col lg:flex-col justify-between sm:justify-end lg:justify-end lg:mx-2 text-gray-600"
                >
                  <h6 class="text-right">
                    <span>Nov. 2004 - Juin 2007</span>
                  </h6>
                  <h6 class="text-sm text-right">
                    <span><i>Montréal, Canada</i></span>
                  </h6>
                </div>
              </div>

              <p class="font-light text-justify text-base">
                Développeur de logiciels et de sites web en freelance.
              </p>
              <div class="mt-4 mb-6 neu-in"></div>
            </div>

            <div class="mx-3">
              <div
                class="flex justify-between flex-col sm:flex-row lg:flex-row align-bottom mb-1"
              >
                <h5 class="text-base">
                  <a href="https://hal.inria.fr/inria-00100067" target="_blank">
                    <span class="text-cv-accent font-medium text-xl block"
                      >Diatélic</span
                    ></a
                  >

                  Développeur Junior
                </h5>
                <div
                  class="flex flex-row sm:flex-col lg:flex-col justify-between sm:justify-end lg:justify-end lg:mx-2 text-gray-600"
                >
                  <h6 class="text-right">
                    <span>Sep. 2003 - Oct. 2004</span>
                  </h6>
                  <h6 class="text-sm text-right">
                    <span><i>Nancy, France</i></span>
                  </h6>
                </div>
              </div>

              <p class="font-light text-justify text-base sm:mx-2 lg:mx-2">
                Chargé du développement d'un logiciel de gestion de planning
                pour le service de néphrologie du CHU de Brabois. Développement
                du site web de la société Diatélic, précurseuse dans la
                télémédecine et la création de systèmes intelligents pour le
                suivi de patients atteints d'insuffisance rénale.
              </p>
              <div class="mt-4 mb-6 neu-in"></div>
            </div>

            <div class="mx-3">
              <div
                class="flex justify-between flex-col sm:flex-row lg:flex-row align-bottom mb-1"
              >
                <h5 class="text-base">
                  <span class="text-cv-accent font-medium text-xl block"
                    >Qualipse</span
                  >

                  Administrateur Réseau
                </h5>
                <div
                  class="flex flex-row sm:flex-col lg:flex-col justify-between sm:justify-end lg:justify-end lg:mx-2 text-gray-600"
                >
                  <h6 class="text-right">
                    <span>Sep. 2001 - Juil. 2003</span>
                  </h6>
                  <h6 class="text-sm text-right">
                    <span><i>Strasbourg, France</i></span>
                  </h6>
                </div>
              </div>
              <p class="font-light text-justify text-base sm:mx-2 lg:mx-2">
                Responsable réseau dans le cadre d'études en alternance en BTS
                informatique de gestion.
              </p>
            </div>
          </div>

          <div class="mt-20">
            <h2
              class="text-3xl bg-main neu-inset rounded-md uppercase tracking-wide font-medium py-3 px-4 text-cv-accent"
            >
              <fa :icon="['fal', 'graduationcap']" class="fa-fw mr-3"></fa
              ><span class="text-sm sm:text-xl lg:text-2xl">Diplômes</span>
            </h2>
            <div class="mx-3 mt-10">
              <h5 class="text-base">
                <span class="text-cv-accent font-medium text-xl"
                  >BTS informatique de gestion</span
                >
                / IESA / Strasbourg, France
              </h5>
              <h6 class="text-gray-600 font-light mb-2 ml-4">
                <fa :icon="['fal', 'calendar']" class="fa-fw mr-2"></fa
                ><span>Obtenu en juillet 2003</span>
              </h6>
              <hr class="my-6" />
            </div>
            <div class="mx-3">
              <h5 class="text-base">
                <span class="text-cv-accent font-medium text-xl"
                  >Baccalauréat section scientifique</span
                >
                / Institut Horizon / Strasbourg, France
              </h5>
              <h6 class="text-gray-600 font-light mb-2 ml-4">
                <fa :icon="['fal', 'calendar']" class="fa-fw mr-2"></fa
                ><span>Obtenu en juillet 2000</span>
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
export default {
  data() {
    return {
      x: 0,
      y: 0,
      windowWidth: 0,
      windowHeight: 0,
    }
  },
  computed: {
    coords() {
      return {
        ax: -(this.windowWidth / 2 - this.x) / 40,
        ay: (this.windowHeight / 2 - this.y) / 20,
      }
    },
    age() {
      let date1 = new Date()
      date1.setHours(0, 0, 0, 0)
      let date2 = new Date(1980, 7, 14)
      let yearsDiff = Math.floor((date1 - date2) / 1000 / 3600 / 24 / 365)
      return yearsDiff
    },
  },
  mounted() {
    //document.addEventListener('mousemove', this.onMouseMove)
  },
  methods: {
    onMouseMove(ev) {
      this.x = ev.clientX
      this.y = ev.clientY
      this.windowWidth = window.innerWidth
      this.windowHeight = window.innerHeight
    },
  },
}
</script>

<style lang="scss" scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.bg-main {
  background-color: var(--bg-color);
}

body {
  perspective: 1000px;
  transform-style: preserve-3d;
}
.clipped {
  box-shadow: inset -1px -0px 3px rgba(0, 0, 0, 0.2);
}

.title {
  box-shadow: 0px 15px 10px -6px rgba(0, 0, 0, 0.4);
  /* -webkit-clip-path: polygon(100% 60%, 0% 100%, 0% 0%, 100% 0%); */
  /* clip-path: polygon(100% 60%, 0% 100%, 0% 0%, 100% 0%); */

  /*clip-path: polygon(100% 60%, 0% 100%, 0% 0%, 100% 0%);*/
}

.clipped img {
  clip-path: polygon(100% 75%, 0% 100%, 0% 0%, 100% 0%);
}

.download-btn {
  padding: 0.5rem 1rem;
  background-color: #e2e8f0;
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.7),
    5px 5px 10px rgba(0, 0, 0, 0.2);
  //text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 1rem;
  font-weight: bold;
  color: rgba(0, 127, 171, 0.6);
  text-shadow: 1px 1px 1px #fff, 0px 0px 0px #000;
  transition: all 0.25s linear;
  margin: 1rem auto 0;
  line-height: 1;
  border-radius: 15px;
  transition: all 0.2s ease-in-out;
  svg path {
    fill: #f40f02;
  }
  &:hover {
    color: rgba(0, 127, 171, 0.3);
    box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.7),
      1px 1px 2px rgba(0, 0, 0, 0.2);
    transform: translateY(1px);
  }
  &:active {
    box-shadow: inset -5px -5px 10px rgba(255, 255, 255, 0.7),
      inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
}

.id-card {
  position: relative;
  height: 200px;
  img {
    max-height: 100%;
    max-width: 65%;
    margin-left: -55px;
    //filter: drop-shadow(-2px 6px 6px rgba(0, 0, 0, 1));
    -webkit-filter: blur(50px);
    filter: blur(50px);
    animation: 2s linear 1s forwards unblur;
  }

  h1 {
    z-index: 1;
    font-size: 1.7rem;
    letter-spacing: 1px;

    span.prenom {
      font-weight: 300;
      display: block;
      line-height: 1;
      /*transform: rotateX(0deg) rotateY(0deg) rotateZ(15deg) skew(-20deg)
        translateX(100px) translateY(-60px) translatez(15px);*/
    }
    span.nom {
      font-weight: 600;
      display: block;
      text-transform: uppercase;
      line-height: 1;
      /* transform: rotateX(0deg) rotateY(0deg) rotateZ(15deg) skew(-20deg)
        translateX(30px) translateY(0px) translatez(6px);*/
    }
    span.titre {
      font-weight: 400;
      display: block;
      font-size: 0.9rem;
      letter-spacing: 0.5px;
    }
  }

  @media (min-width: 640px) and (max-width: 1024px) {
    img {
      height: 100%;
      width: auto;
      margin-left: -40px;
    }
  }

  @media (min-width: 1540px) {
    img {
      height: 100%;
      width: auto;
      margin-left: -40px;
    }
  }
}

.fa-link {
  transition: all 0.25s ease-in-out;
  border-radius: 5px;
  font-weight: 300;
  text-shadow: -1px 1px 1px rgba(0, 0, 0, 0.1),
    1px -1px 1px rgba(255, 255, 255, 0.1);
  svg {
    transition: all 0.25s ease-in-out;
    filter: drop-shadow(-1px 1px 1px rgba(0, 0, 0, 0.1))
      drop-shadow(1px -1px 1px rgba(255, 255, 255, 0.1));
    path {
      transition: all 0.25s ease-in-out;
    }
  }
  &:hover {
    text-shadow: -2px 2px 2px rgba(0, 0, 0, 0.5),
      2px -2px 2px rgba(255, 255, 255, 1);
    svg {
      filter: drop-shadow(-1px 1px 1px rgba(0, 0, 0, 0.5))
        drop-shadow(1px -1px 1px rgba(255, 255, 255, 0.5));
      path {
        fill: #e2e8f0;
      }
    }
  }
}

.neu-left {
  border-radius: 25px;
  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
}

.neu-sm {
  border-radius: 15px;
  background: var(--bg-color);
  box-shadow: 2px 2px 5px rgba(136, 165, 191, 0.48), -2px -2px 5px #ffffff;
}

.neu-inset {
  padding: 0.3rem 1rem;

  background: var(--bg-color);

  box-shadow: inset 3px 3px 7px rgba(136, 165, 191, 0.48),
    inset -3px -3px 7px #ffffff;

  @media (min-width: 640px) {
    border-radius: 25px;
  }
}

.neu-in {
  padding: 0.1rem;
  color: var(--bg-color);
  background: var(--bg-color);
  border-radius: 3px;
  box-shadow: inset 1px 1px 1px 0 rgba(0, 0, 0, 0.2),
    inset -1px -1px 1px 0 rgba(255, 255, 255, 0.6);
}

.social-link {
  margin: 0.5rem 0.8rem;
  position: relative;
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 0.6rem;
  background: var(--bg-color);
  perspective: 1500px;

  -webkit-transition: box-shadow 0.2s linear;
  transition: box-shadow 0.2s linear;
  box-shadow: 3px 3px 7px rgba(136, 165, 191, 0.48), -3px -3px 7px #ffffff;
  @media (min-width: 640px) and (max-width: 1023px) {
    width: 30px;
    height: 30px;
    padding: 0.3rem;
    margin: 0 1rem;
  }
  svg {
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    transform: scale(1.05) translateY(0px);

    path {
      //fill: rgba(255, 255, 255, 0.5);
      stroke: rgba(0, 127, 171, 0.2);
      // stroke-width: 30px;
    }
  }
  &:nth-child(1) {
    svg path {
      fill: #4267b2;
    }
  }
  &:nth-child(2) {
    svg path {
      fill: #2867b2;
    }
  }
  &:nth-child(3) {
    svg path {
      fill: #c9510c;
    }
  }
  &:hover {
    box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.7),
      1px 1px 2px rgba(136, 165, 191, 0.54);
    svg {
      opacity: 1;
      transform: translateY(1px);
    }
  }
  &:active {
    box-shadow: inset 3px 3px 7px rgba(136, 165, 191, 0.48),
      inset -3px -3px 7px #ffffff;
    svg {
      transform: scale(0.95) translateY(1px);
      opacity: 0.8;
    }
  }

  @media (min-width: 640px) {
    margin: 0.5rem 1rem;
  }
}

@keyframes gradi {
  0% {
    background: linear-gradient(
      -45deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(255, 255, 255, 0.3) 50%
    );
  }
  100% {
    background: linear-gradient(
      -45deg,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(0, 0, 0, 0.2) 50%
    );
  }
}

@-webkit-keyframes unblur {
  0% {
    -webkit-filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.7))
      drop-shadow(0px 0px 0px rgba(255, 255, 255, 0.4)) blur(50px);
  }
  75% {
    -webkit-filter: drop-shadow(6px 6px 8px rgba(0, 0, 0, 0.7))
      drop-shadow(-4px -4px 6px rgba(255, 255, 255, 0.4)) blur(0);
  }
  100% {
    -webkit-filter: drop-shadow(12px 12px 16px rgba(0, 0, 0, 0.7))
      drop-shadow(-8px -8px 12px rgba(255, 255, 255, 0.4)) blur(0);
  }
}

@keyframes unblur {
  0% {
    filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.7))
      drop-shadow(0px 0px 0px rgba(255, 255, 255, 0.4)) blur(50px);
  }
  75% {
    filter: drop-shadow(6px 6px 8px rgba(0, 0, 0, 0.7))
      drop-shadow(-4px -4px 6px rgba(255, 255, 255, 0.4)) blur(0);
  }
  100% {
    filter: drop-shadow(12px 12px 16px rgba(0, 0, 0, 0.7))
      drop-shadow(-8px -8px 12px rgba(255, 255, 255, 0.4)) blur(0);
  }
}
</style>
