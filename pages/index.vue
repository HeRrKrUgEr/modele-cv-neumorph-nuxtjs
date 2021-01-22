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
              <hr />
           

              <p class="text-lg text-cv-500 uppercase tracking-wide font-medium mt-4 mx-1">
                <fa
                  :icon="['fal', 'globe']"
                  class="fa-fw mr-3"
                ></fa
                ><span class="text-base">Langues parlées</span>
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
              <br />
              <p class="text-lg text-cv-500 uppercase tracking-wide font-medium mt-4 mx-1 mb-4">
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
             <p class="text-2xl bg-cv-500 uppercase tracking-wide font-medium pl-3 pt-3 text-white pb-5 title">
                <fa
                  :icon="['fal', 'briefcase']"
                  class="fa-fw mr-3"
                ></fa
                ><span class="text-xl">Expérience professionnelle</span>
              </p>
            <div class="">
              <h5 class="text-lg">
                <span class="text-cv-500 font-semibold">Directeur technique</span> / <a href="https://www.unmondeautrement.com" target="_blank">Un Monde Autrement</a>
              </h5>
              <h6 class="text-cv-500">
                <i class="fa fa-calendar  mr-2"></i>Jan 2015 -
                <span class="w3-tag w3-teal w3-round">Current</span>
              </h6>
              <p>
                Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel
                in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora
                soluta ea et odio, unde doloremque repellendus iure, iste.
              </p>
              <hr />
            </div>
            <div class="w3-container">
              <h5 class="w3-opacity"><b>Web Developer / something.com</b></h5>
              <h6 class="text-cv-500">
                <i class="fa fa-calendar  mr-2"></i>Mar 2012 - Dec 2014
              </h6>
              <p>
                Consectetur adipisicing elit. Praesentium magnam consectetur vel
                in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora
                soluta ea et odio, unde doloremque repellendus iure, iste.
              </p>
              <hr />
            </div>
            <div class="w3-container">
              <h5 class="w3-opacity">
                <b>Graphic Designer / designsomething.com</b>
              </h5>
              <h6 class="text-cv-500">
                <i class="fa fa-calendar  mr-2"></i>Jun 2010 - Mar 2012
              </h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <br />
            </div>
          </div>

          <div class="w3-container w3-card w3-white">
            <h2 class="w3-text-grey w3-padding-16">
              <i class="fa fa-certificate  mr-2 w3-xxlarge text-cv-500"></i
              >Education
            </h2>
            <div class="w3-container">
              <h5 class="w3-opacity"><b>W3Schools.com</b></h5>
              <h6 class="text-cv-500">
                <i class="fa fa-calendar fa-fw mr-2"></i>Forever
              </h6>
              <p>Web Development! All I need to know in one place</p>
              <hr />
            </div>
            <div class="w3-container">
              <h5 class="w3-opacity"><b>London Business School</b></h5>
              <h6 class="text-cv-500">
                <i class="fa fa-calendar fa-fw mr-2"></i>2013 - 2015
              </h6>
              <p>Master Degree</p>
              <hr />
            </div>
            <div class="w3-container">
              <h5 class="w3-opacity"><b>School of Coding</b></h5>
              <h6 class="text-cv-500">
                <i class="fa fa-calendar fa-fw mr-2"></i>2010 - 2013
              </h6>
              <p>Bachelor Degree</p>
              <br />
            </div>
          </div>

          <!-- End Right Column -->
        </div>

        <!-- End Grid -->
      </div>

      <!-- End Page Container -->
    </div>

    <footer class="w3-container w3-teal w3-center w3-margin-top">
      <p>Find me on social media.</p>
      <i class="fa fa-facebook-official w3-hover-opacity"></i>
      <i class="fa fa-instagram w3-hover-opacity"></i>
      <i class="fa fa-snapchat w3-hover-opacity"></i>
      <i class="fa fa-pinterest-p w3-hover-opacity"></i>
      <i class="fa fa-twitter w3-hover-opacity"></i>
      <i class="fa fa-linkedin w3-hover-opacity"></i>
      <p>
        Powered by
        <a href="https://www.w3schools.com/w3css/default.asp" target="_blank"
          >w3.css</a
        >
      </p>
    </footer>
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
      box-shadow: inset -2px 1px 4px rgba(0,0,0,0.4);
    clip-path: polygon(100% 60%, 0% 100%, 0% 0%, 100% 0%);
}

.clipped img{
  clip-path: polygon(100% 70%, 0% 100%, 0% 0%, 100% 0%);
}

</style>
