<template>
  <div class=" bg-[#212121] ">
    <div>
      <div class="container  lg:w-[90%] py-20   gap-5 mx-auto w-full  text-white   px-">
       
        <div class=" md:flex  block space-x-10 w-full">
          <div class=" md:w-1/3 mb-5 sm:w-3/4 py-4 space-y-3 w-full h-full">
           <div class="flex items-center h-full">
          <NuxtLink to="/" class="flex gap-3 items-center font-semibold text-2xl">
            <img src="@/assets/images/logo2.png" class="w-10" alt="logo" />
            AFS
          </NuxtLink>
        </div>
            <TypographyP> <span class=" pt-6 text-sm">Achievers Scholars Forum (ASF) is a welcoming and supportive community space for students and scholars, offering affordable access to resources and guidance to help you succeed in your academic and international study journey.</span></TypographyP>
          </div>

          <div
            class="  grid sm:space-y-0 space-y-4 md:grid-cols-3 grid-cols-2 place-content-between   w-full  gap-5 justify-around md:w-3/4">
            <div v-for="(item, index) in list" :key="index">
              <TypographyH4>{{ item.header }}</TypographyH4>
              <ul class="mt-3  space-y-2  flex justify-between flex-col">
                <li v-for="(items, i) in item.list" :key="i">
                  <TypographyP>
                    <NuxtLink :to="items.link"><span class=" text-[14px] text-s">{{ items.title }}</span></NuxtLink>
                  </TypographyP>
                </li>

              </ul>
            </div>

          </div>
        </div>

        <!-- Hamburger menu for mobile -->

        <div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const list = [

  {
    header: "Quick Links",
    list: [
      { title: "Academic Resources", link: "#" },
      { title: "In-Person Workshops", link: "#" },
      { title: "Global Scholars Network", link: "#" },
      { title: "Scholarship Opportunities", link: "#" },
      { title: "Become a Mentor", link: "#" }
    ]
  },

  {
    header: "Organization",
    list: [
      { title: "About Us", link: "#" },
      { title: "Achieve Abroad Program", link: "#" },

      { title: "Careers", link: "#" },
      { title: "Events ", link: "#" },
      { title: "Workshops", link: "#" }
    ]
  },
  {
    header: "Policies",
    list: [
      { title: "Terms and Conditions", link: "#" },
      { title: "Cookies Policy", link: "#" },
      { title: "Privacy Policy", link: "#" },
      

    ]
  }
]

</script>

<style scoped>
.active-link {
  color: #FFC059 !important;
  border-bottom: 2px solid #FFC059;
}

.nuxt-link-active:not([href*='#']) {
  color: inherit !important;
}
</style>
