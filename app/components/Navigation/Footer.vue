<template>
  <div class=" bg-[#212121] ">
    <div>
      <div class="container  lg:w-[90%] py-20   gap-5 mx-auto w-full  text-white   px-">
       
        <div class=" md:flex  block space-x-10 w-full">
          <div class=" md:w-1/3 mb-5 sm:w-3/4 py-4 space-y-3 w-full h-full">
           <div class="flex items-center h-full">
          <NuxtLink to="/" class="flex gap-3 items-center font-semibold text-2xl">
            <img src="@/assets/images/logo2.png" class="w-10" alt="logo" />
            ASF
          </NuxtLink>
        </div>
            <TypographyP> <span class=" pt-6 text-sm">Achievers Scholars Forum (ASF) is a welcoming and supportive community space for students and scholars, offering affordable access to resources and guidance to help you succeed in your academic and international study journey.</span></TypographyP>
          </div>

          <div
            class="  grid sm:space-y-0 space-y-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-content-between   w-full  gap-5 justify-around md:w-3/4">
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
         <div class=" shadow-xl fixed bottom-9 right-4 p-3  rounded-full w-fit h-fit bg-[#25D366] text-white">
                <a href="http://wa.me/17207632847">
                <svg  class=" w-5 sm:w-9" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0.0078125C7.17969 0.0078125 0 7.19531 0 16.0078C0 18.9844 0.816406 21.8359 2.3125 24.2539L0.152344 31.4336L7.62891 29.3398C10.0039 30.6367 12.792 31.3516 15.7227 31.3516C24.542 31.3516 31.7266 24.1602 31.7266 16.0078C31.7266 7.19531 24.542 0.0078125 16 0.0078125ZM16 29.0039C13.3203 29.0039 10.8164 28.3086 8.71484 27.0977L8.23828 26.8438L3.85156 28.0742L5.14844 23.7227L4.92578 23.3047C3.51953 20.9766 2.72656 18.3242 2.72656 15.5547C2.72656 8.72656 8.69531 2.76172 16 2.76172C23.292 2.76172 29.2734 8.72656 29.2734 15.5547C29.2734 22.3789 23.292 28.3477 16 28.3477ZM23.417 18.8633C23.1094 18.7266 21.0195 17.7383 20.7852 17.6562C20.5508 17.5742 20.3867 17.5352 20.2227 17.832C20.0586 18.1289 19.292 19.0742 19.1719 19.2383C19.0547 19.4062 18.9375 19.4258 18.6289 19.2891C18.3203 19.1523 16.9375 18.6211 15.9375 17.6836C15.1562 16.9648 14.707 16.207 14.5703 15.9883C14.4336 15.7695 14.5703 15.6523 14.707 15.5156C14.832 15.3906 14.9492 15.2305 15.0664 15.1133C15.1836 14.9961 15.2227 14.917 15.3008 14.7539C15.3789 14.5938 15.3398 14.4375 15.2617 14.3008C15.1836 14.1641 14.4727 12.4492 14.207 11.792C13.9492 11.1445 13.6836 11.2109 13.4766 11.2109C13.292 11.2109 13.1328 11.207 12.9688 11.207C12.8047 11.207 12.5781 11.25 12.3164 11.5234C12.0547 11.7969 11.2344 12.5547 11.2344 14.167C11.2344 15.7812 12.4727 17.2578 12.6328 17.457C12.792 17.6602 14.9688 20.6016 18.1992 21.7812C18.5352 21.8984 18.8398 22.0156 19.1289 22.1133C19.5078 22.2344 19.8594 22.3555 20.1992 22.3555C20.6641 22.3555 21.0781 22.2344 21.3906 21.9805C21.7383 21.7031 22.0898 21.2617 22.2227 20.9688C22.3516 20.6758 22.3516 20.4258 22.2734 20.2891C22.1992 20.1562 22.1094 20.1211 21.8008 19.9844Z"></path>
                 </svg>
                </a>
            </div>
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
