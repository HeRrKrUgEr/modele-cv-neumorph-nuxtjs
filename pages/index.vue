<template>
  <div>
    <!-- Page Container -->
    <div class="xl:container mx-auto xl:p-6">
      <!-- The Grid -->
      <div class="grid grid-cols-3 lg:gap-4">
        <!-- Left Column -->
        <div
          class="col-span-3 lg:col-span-1 h-full bg-gray-300 shadow-neumorph rounded-lg"
        >
          <div
            id=""
            class="id-card w-full flex flex-col justify-center align-middle overflow-hidden"
          >
            <img class="absolute bottom-0 left-0" src="img/vincent.png" />
            <h1 class="text-left absolute top-0 right-0 mt-6 mr-4">
              <span class="prenom -ml-6">Vincent</span>
              <span class="nom -ml-3">Chanliau</span>
              <span class="titre -ml-6 my-1"
                >Développeur <i>'Full-Stack'</i></span
              >
            </h1>
          </div>
          <div class="overflow-hidden relative z-10 flex flex-col flex-between">
            <div>
              <div
                class="text-2xl text-cv-accent bg-gray-300 px-2 uppercase tracking-wide font-semibold mt-2 shadow-neumorph-sm"
              >
                <fa :icon="['fal', 'info']" class="fa-fw mr-3"></fa
                ><span class="text-lg">Informations</span>
              </div>

              <div class="flex flex-wrap mt-4 px-4">
                <div class="mb-2 text-xl w-1/2">
                  <fa
                    :icon="['fal', 'birthday-cake']"
                    class="fa-fw mr-3 text-cv-accent"
                  ></fa
                  ><span class="text-sm">14 août 1980 ({{ age }} ans)</span>
                </div>
                <div class="mb-3 text-xl w-1/2">
                  <fa
                    :icon="['fal', 'home']"
                    class="fa-fw mr-3 text-cv-accent"
                  ></fa
                  ><span class="text-sm">Nancy / Strasbourg</span>
                </div>
                <div class="w-1/2">
                  <a href="mailto:vchanliau@gmail.com" class="fa-link text-sm"
                    ><fa
                      :icon="['fal', 'envelope']"
                      class="fa-fw mr-3 text-cv-accent text-xl"
                    ></fa
                    >vchanliau@gmail.com</a
                  >
                </div>
                <div class="w-1/2">
                  <a href="tel:+33611826310" class="fa-link text-sm">
                    <fa
                      :icon="['fal', 'phone-rotary']"
                      class="fa-fw mr-3 text-cv-accent text-xl"
                    ></fa
                    >06.11.82.63.10</a
                  >
                </div>
              </div>
            </div>
            <div>
              <div
                class="text-2xl text-cv-accent uppercase tracking-wide font-semibold mt-16 px-2 shadow-neumorph-sm"
              >
                <fa :icon="['fal', 'cog']" class="fa-fw mr-3"></fa
                ><span class="text-lg">Compétences techniques</span>
              </div>
              <div class="px-4">
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
                <p class="text-base mb-2 font-light">
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
                class="text-2xl text-cv-accent uppercase tracking-wide font-semibold mt-16 px-2 shadow-neumorph-sm"
              >
                <fa :icon="['fal', 'cog']" class="fa-fw mr-3"></fa
                ><span class="text-lg">Frameworks et CMS</span>
              </div>
              <div class="grid grid-cols-6 gap-3 mt-4 justify-center px-4">
                <div class=""><img src="img/mnet.png" /></div>
                <div class=""><img src="img/vuejs.png" /></div>
                <div class=""><img src="img/tailwind.png" /></div>
                <div class=""><img src="img/bootstrap.png" /></div>
                <div class=""><img src="img/laravel.png" /></div>
                <div class=""><img src="img/wordpress.png" /></div>
              </div>
              <div
                class="text-2xl text-cv-accent uppercase tracking-wide font-semibold mt-10 px-2 shadow-neumorph-sm"
              >
                <fa :icon="['fal', 'cog']" class="fa-fw mr-3"></fa
                ><span class="text-lg">Langages informatiques</span>
              </div>
              <div class="grid grid-cols-7 gap-3 mt-6 justify-center px-4">
                <div class=""><img src="img/html.png" /></div>
                <div class=""><img src="img/css.png" /></div>
                <div class=""><img src="img/javascript.png" /></div>
                <div class=""><img src="img/php.png" /></div>
                <div class=""><img src="img/sql.png" /></div>
                <div class=""><img src="img/csharp.png" /></div>
                <div class=""><img src="img/python.png" /></div>
              </div>
            </div>
            <div>
              <div
                class="text-2xl text-cv-accent uppercase tracking-wide font-semibold mt-16 px-2 shadow-neumorph-sm"
              >
                <fa :icon="['fal', 'globe']" class="fa-fw mr-3"></fa
                ><span class="text-lg">Langues étrangères</span>
              </div>
              <div class="px-4">
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
              </div>
            </div>
            <div>
              <div
                class="text-2xl text-cv-accent uppercase tracking-wide font-semibold mt-16 px-2 shadow-neumorph-sm mb-4"
              >
                <fa :icon="['fal', 'golfball']" class="fa-fw mr-3"></fa
                ><span class="text-base">Hobbies</span>
              </div>
              <div class="px-4">
                <p
                  class="inline-block mx-3 pl-3 pr-4 py-1 bg-cv-accent text-white rounded-xl text-center"
                >
                  <fa
                    :icon="['fal', 'golfclub']"
                    class="fa-fw mr-2 text-white"
                  ></fa
                  ><span class="text-sm font-medium">Golf</span>
                </p>
                <p
                  class="inline-block mx-3 pl-3 pr-4 py-1 bg-cv-accent text-white rounded-xl text-center"
                >
                  <fa
                    :icon="['fal', 'piano']"
                    class="fa-fw mr-2 text-white"
                  ></fa
                  ><span class="text-sm font-medium">Piano</span>
                </p>
              </div>
            </div>
          </div>

          <!-- End Left Column -->
        </div>

        <!-- Right Column -->
        <div
          class="col-span-3 lg:col-span-2 bg-gray-300 xl:p-4 xl:rounded-md shadow-neumorph"
        >
          <div class="mt-20 lg:mt-0">
            <h2
              class="text-3xl bg-gray-300 shadow-neumorph-md rounded-md uppercase tracking-wide font-medium py-3 px-4 text-cv-accent"
            >
              <fa :icon="['fal', 'briefcase']" class="fa-fw mr-3"></fa
              ><span class="text-2xl">Expérience professionnelle</span>
            </h2>
            <div class="mx-3 mt-10">
              <h5 class="text-base mx-3">
                <span class="text-cv-accent font-semibold text-xl"
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
              <hr class="mt-4 mb-6" />
            </div>
            <div class="mx-3">
              <h5 class="ext-base mx-3">
                <span class="text-cv-accent font-semibold text-xl"
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
                <span class="text-cv-accent font-semibold text-xl"
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
              <hr class="mt-4 mb-6" />
            </div>
            <div class="mx-3">
              <h5 class="text-base mx-3">
                <span class="text-cv-accent font-semibold text-xl"
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
                <span class="text-cv-accent font-semibold text-xl"
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
                <span class="text-cv-accent font-semibold text-xl"
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
              class="text-3xl bg-gray-300 shadow-neumorph-md rounded-md uppercase tracking-wide font-medium py-3 px-4 text-cv-accent"
            >
              <fa :icon="['fal', 'graduationcap']" class="fa-fw mr-3"></fa
              ><span class="text-2xl">Diplômes</span>
            </h2>
            <div class="mx-3 mt-10">
              <h5 class="text-base">
                <span class="text-cv-accent font-semibold text-xl"
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
                <span class="text-cv-accent font-semibold text-xl"
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
        ax: -(this.windowWidth / 2 - this.x) / 20,
        ay: (this.windowHeight / 2 - this.y) / 10,
      }
    },
    age() {
      let date1 = Date.now()
      let date2 = new Date(1980, 8, 14).getTime()
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

<style lang="scss">
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
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

.id-card {
  position: relative;
  height: 200px;
  img {
    height: 100%;
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
}

.fa-link {
  width: 100%;
  transition: all 0.25s linear;
  border-radius: 5px;
  svg {
    transition: all 0.25s linear;
  }
  &:hover {
    color: #007fab;
    svg {
      transform: scale(1.1) translatex(5px);
    }
  }
}

.nm-block {
  box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
  border-radius: 20px;
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
