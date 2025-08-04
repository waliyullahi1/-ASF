<template>
  <div class=" bg-slate-800 ">
    <div>
      <div class="container  lg:w-[85%] py-20   gap-5 mx-auto w-full  text-white   px-4">
       
        <div class=" md:flex  block space-x-4 w-full">
          <div class=" md:w-1/4 sm:w-3/4 py-4 w-full h-full">
            <NuxtLink to="/" class="flex gap-3 items-center font-semibold text-2xl">
              <img src="@/assets/images/logo.jpg" class=" w-12 pb-5" alt="logo" />
              AFS
            </NuxtLink>
            <TypographyP> <span class=" text-sm">Makers and Leaders Hub (MALhub) is an open, serene and beautiful shared
                workspace for startups and entrepreneurs at a lower cost than they would spend on space of their
                own.</span></TypographyP>
          </div>

          <div
            class="  grid md:grid-cols-4 sm:grid-cols-2 place-content-between   w-full grid-cols-1 gap-5 justify-around md:w-3/4">
            <div v-for="(item, index) in list" :key="index">
              <TypographyH3>{{ item.header }}</TypographyH3>
              <ul class="mt-3  space-y-2  flex justify-between flex-col">
                <li v-for="(items, i) in item.list" :key="i">
                  <TypographyP>
                    <NuxtLink :to="items.link"><span class=" text-sm">{{ items.title }}</span></NuxtLink>
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
    header: "Relearn",
    list: [
      { title: "Frontend Coding", link: "#" },
      { title: "Data Analyst", link: "#" },
      { title: "Product Design", link: "#" },
      { title: "Cyber security", link: "#" },
      { title: "Graphic Design", link: "#" }
    ]
  },
  {
    header: "Quick Links",
    list: [
      { title: "Tech Skills", link: "#" },
      { title: "Physical Bootcamp", link: "#" },
      { title: "Innovation Hub", link: "#" },
      { title: "Startups", link: "#" },
      { title: "Become a Mentor", link: "#" }
    ]
  },

  {
    header: "Company",
    list: [
      { title: "About Us", link: "#" },
      { title: "Become a Tech Whiz", link: "#" },

      { title: "Careers", link: "#" },
      { title: "Affiliate", link: "#" },
      { title: "Event", link: "#" }
    ]
  },
  {
    header: "Policies",
    list: [
      { title: "Terms and Conditions", link: "#" },
      { title: "Refund Policy", link: "#" },
      { title: "Innovation Hub", link: "#" },
      { title: "Privacy and Policy", link: "#" },

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
