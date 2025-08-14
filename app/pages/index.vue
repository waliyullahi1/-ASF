<template>
    <div class=" ">
        <NavigationNavBar />

        <!-- Hero Section -->
        <section class="py-10 px-2">
            <div class="container lg:w-[85%] w-full mx-auto rounded-2xl">
                <div class=" 4302607012 block md:flex justify-center items-center">
                    <div class="w-full sm:w-1/2   space-y-6 ">
                        <TypographyH1 class=" text-[#2B3068]"> Shaping Tomorrow Through Education <br> and Innovation
                        </TypographyH1>
                        <TypographyP>
                            Advance your academic and personal growth while gaining the knowledge, values, and skills to make a lasting impact in your field and community
                        </TypographyP>
                         <NuxtLink to="/contactus">  <ButtonsPrimary class=" mt-4 -">Contact</ButtonsPrimary></NuxtLink>
                       
                    </div>

                    <div class="md:w-1/2 sm:w-5/6 w-full">
                        <img src="@/assets/images/ladyss.png" alt="Hero w-full Image">
                    </div>
                </div>
            </div>
        </section>

      

        <!-- people patner with Us -->
        <section class="   py-10 ">
            <div class=" bg-rose-100  py-4   ">
                <div class="container mx-auto  flex gap-3  justify-center items-center   px-2 lg:w-[85%]  ">
                    <!-- picture patner with -->
                    <div>
                        <img src="@/assets/images/Frame-4.png" alt="" srcset="">
                    </div>
                    <TypographyH3>Over 5000+ scholars trained. Get started now to begin your journey.</TypographyH3>
                </div>

            </div>
        </section>

        <!-- Exporer more more on Course -->
        <section class="   py-10 ">
            <div class="   py-4   ">
                <div class="container mx-auto   text-center   px-2 lg:w-[85%]  ">
                    <!-- picture patner with -->
                    <TypographyH2>  Discover, Evolve, Achieve with Us</TypographyH2>

                    <TypographyP class=" w-full sm:w-3/4  mx-auto"> Our courses match your skill level and learning style, with free in-person and online options designed to fit your needs and lifestyle.</TypographyP>

                    <div class="space-y-16   mt-5  text-left">
                        <div class="space-y-10">
                            <div v-for="course in courses" :key="course.id"
                                class="flex flex-col-reverse md:flex-row  gap-6 p-6 rounded-xl"
                                :class="[course.bgColor, course.textColor, course.reverse ? 'md:flex-row-reverse' : '']">
                                <!-- Text Section -->

                                <div class="flex flex-col pb-5 justify-between w-full md:w-3/5 space-y-5">
                                    <div class=" w-[80%] space-y-5">
                                       <TypographyH2 class="font-semibold">{{ course.title }}</TypographyH2>
                                       <div class=" w-[90%]"><TypographyP >{{ course.description }}</TypographyP> </div>
                                    </div>
                                     <NuxtLink to="/contactus">  <ButtonsPrimary :arrow=true>{{ course.buttonText }}</ButtonsPrimary></NuxtLink>
                                  
                                </div>

                                <!-- Image Section -->
                                <div class="rounded-xl overflow-hidden w-full md:w-2/5">
                                    <img src="@/assets/images/people-in-class.jpg" alt="student in class" class="w-full h-full object-cover" />
                                    <!-- <img :src="course.image" alt="" class="w-full h-full object-cover" /> -->
                                </div>
                            </div>
                        </div>
                    </div>

                 </div>

            </div>
        </section>

        <!-- Servicer Section -->
        <section class="  bg-[#E6F6FD]  py-10 ">
            <div class="   py-4   ">
                <div class="container mx-auto    text-center   px-1 lg:w-[85%]  ">
                    <!-- picture patner with -->
                    <TypographyH2>Learn, grow, partner with us.</TypographyH2>

                    <TypographyP class=" w-full sm:w-3/4  mx-auto">Our other services includes;</TypographyP>

                    <div class="  pt-6 overflow-hidden text-left">
                        <div class="spa lg:grid-cols-4 md:grid-cols-2 grid gap-3  h-full ">
                            <div v-for="course in services" :key="course.id"
                                class=" m-0 space-y-3  b border-[1px] gap-6 p-6 h-full rounded-xl text-center"
                                :class="[...(course.extraClasses || [])]">

                                <!-- Image Section -->
                                <div class=" w-full flex justify-center">
                                    <img :src="`/images/icons/${course.image}`" alt="" class=" w-20  object-cover" />
                                    <!-- <img :src="course.image" alt="" class="w-full h-full object-cover" /> -->
                                </div>
                                <!-- Text Section -->

                                <div class="flex flex-col justify-between w-full space-y-4">
                                    <div class=" font-light space-y-5">
                                       <TypographyH3 class="font-semibold">{{ course.title }}</TypographyH3>
                                       <TypographyP class=" text-[11px] font-normal">{{ course.description }}</TypographyP> 
                                    </div>
                                    
                                    
                                </div>

                                
                            </div>
                        </div>
                    </div>

                  
                        
                </div>

            </div>
        </section>


         <!-- Impact Section -->
        <section class="   py-10 ">
            <div class="   py-4   ">
                <div class="container mx-auto   text-center   px-1 lg:w-[85%]  ">
                    <!-- picture patner with -->
                    <TypographyH2>Our Impact.</TypographyH2>

                    <TypographyP class=" w-full sm:w-3/4 mx-auto">Dedicated to creating a lasting impact by nurturing academic talent, strengthening community connections, and empowering scholars to drive positive change</TypographyP>

                    <div class=" px-2  mt-9 overflow-hidden text-left">
                        <div class="spa flex-wrap flex justify-around gap-3  h-full ">
                            <div v-for="course in impact" :key="course.id"
                                class=" m-0 sm:w-56 w-full h-72   flex flex-col items-center  justify-center  gap- p-15  rounded-xl text-center"
                                :class="[...(course.extraClasses || [])]">

                                <!-- Image Section -->
                               
                                    <img :src="`/images/${course.image}`" alt="" class=" w-24 " />
                                  
                                <!-- Text Section -->

                                
                                       <TypographyH3 class="font-semibold text-8xl"><span class=" text-3xl">{{ course.title }}</span></TypographyH3>
                                       <TypographyP class=" text-[11px] font-normal">{{ course.description }}</TypographyP> 
                                   
                                    
                                    
                              

                                
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>

         <!-- Impact Section -->
        <section class="  bg-[#E6F6FD]  py-10 ">
            <div class="  bg  py-4   ">
                <div class="container mx-auto  space-y-6  text-center   px-1 lg:w-[85%]  ">
                    <!-- picture patner with -->
                    <TypographyH2> Meet our Achievers  </TypographyH2>

               
                    <div class=" px-2  overflow-hidden text-left">
                        <div class="spa flex-wrap flex justify-around gap-3  h-full ">
                             <CarouselVediocarousel></CarouselVediocarousel>
                             <!-- <CarouselTest></CarouselTest> -->
                        </div>
                    </div>

                </div>

            </div>
        </section>

        
         <!-- teams Section -->
         <section class="   pb-10 ">
            <div class="   py-4   ">
                <div class="container mx-auto    text-center   px-1 lg:w-[85%]  ">
                    <!-- picture team review with -->
                    <TypographyH2>Explore our hand-on workshop today </TypographyH2>

                    <TypographyP class=" w-full sm:w-3/4 mx-auto">Dedicated to creating a lasting impact by nurturing talent, strengthening community bonds, and driving economic prosperity.</TypographyP>

                    <div class=" px-2 pt-6  overflow-hidden text-left">
                        <div class="spa grid grid-cols-1 sm:grid-cols-2 justify-around gap-4  h-full ">
                            <div v-for="course in team" :key="course.id"
                                class=" m-0  w-full  bg-[#FCFCFC]   p-5  gap- p-15  rounded-xl "
                                :class="[...(course.extraClasses || [])]">

                                <!-- Image Section -->
                                <div class=" py-4 border-b-[1px] border-gray-400 flex gap-2 leading-3 items-center">
                                   <img :src="`/images/${course.image}`" alt="" class=" w-14 rounded-full " /> 
                                   <div class="   ">
                                    <TypographyH4 class="">{{ course.name }}</TypographyH4>
                                    <TypographyP class="font-semibol  text-8xl"><span class=" font-normal  leading-[1px] text-sm">{{ course.title }}</span></TypographyP>
                                  
                                   </div>
                                </div>
                                    
                                 

                                
                                       
                                <TypographyP class=" pt-5 "> <span class="  text-[14px]  text-gray-500 leading-2 ">{{ course.description }}</span> </TypographyP> 
                                   
                                    
                                    
                              

                                
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>

         <!-- Blog  Section -->
         <section class="    py ">
            <div class="   py-4   ">
                <div class="container mx-auto  space-y-6  text-center   px-1 lg:w-[85%]  ">
                    <!-- picture team review with -->
                    <TypographyH2>Press & Blog Posts </TypographyH2>

                    <div class=" px-2  overflow-hidden text-left">
                        <div class="spa grid grid-cols-1 sm:grid-cols-3 justify-around gap-4  h-full ">
                            <div v-for="course in blog" :key="course.id"
                                class=" m-0  w-full  bg-[#FCFCFC]   p-5  gap- p-15  rounded-xl "
                                :class="[...(course.extraClasses || [])]">

                                <!-- Image Section -->
                                <div class="">
                                    
                                   <div class="   ">
                                    <img :src="`/images/${course.image}`" alt="" class=" w-full " /> 
                                    <div class=" flex pb-3">
                                        <img src="/images/icons/date.svg" alt="" class=" w-6 " /> 
                                        <TypographyP> <span class="  text-gray-400  text-sm t">{{ course.date }}</span></TypographyP>
                                    </div>
                                    <TypographyH4 class="">{{ course.title }}</TypographyH4>
                                    
                                  
                                   </div>
                                </div>     
                                <TypographyP class=" pt-5 "> <span class=" line-clamp-3   text-[14px]  text-gray-500 leading-2 ">{{ course.description }}</span> </TypographyP> 
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>

        <NavigationFooter/>

    </div>
</template>



<script setup>


const courses = [
  {
    id: 1,
    title: 'Join Our Classroom Learning',
    description: 'Experience immersive learning with our in-person training programs, seamlessly blending expert instruction and practical, hands-on activities in a dynamic, engaging classroom environment.',
    image: '/images/Google-IO.jpg',
    bgColor: 'bg-[#00A3E8]',
    textColor: 'text-white',
    buttonText: 'Contact',
    reverse: false,
  },
  {
    id: 2,
    title: 'Discover Our Virtual Courses',
    description: 'Experience Immersive Learning: Our Virtual Training Programs Seamlessly Combine Expert Instruction with Practical, Interactive Activities in a Flexible and Engaging Online Environment.',
    image: '/images/Google-IO.jpg',
    bgColor: 'bg-[#1A1D3D]',
    textColor: 'text-white',
    buttonText: 'Contact',
    reverse: true,
  },
  
]

const services = [
  {
    id: 1,
    title: 'Join ASF Scholars',
    description: 'Looking for a place to learn, connect, and grow? At ASF, we believe that the right community and resources can make all the difference in your academic and professional journey.',
    image: 'researve.svg',
    extraClasses: [" hover:bg-[#54C1F0]/10 ",  "border-[#54C1F0]"],
    textColor: 'text-white',
  
    
  },
  {
    id: 2,
    title: 'Apply for Scholarship',
    description: 'Achieving academic excellence requires more than ambition, and we are dedicated to providing the mentorship and resources you need to transform your educational aspirations into lasting success in your chosen field.',
    image: 'apply.svg',
    extraClasses: ["hover:bg-[#e26e6a]/20  ",  "border-[#e26e6a]"],
    textColor: 'text-white bg-white',
   
    
  },
  {
    id: 3,
    title: 'Academic Support & Mentorship',
    description: 'To begin your growth journey with Achievers Scholars Forum, connect with our team today.',
    image: 'business.svg',
     extraClasses: ["hover:bg-[#BEC4FF] ",  "border-[#7D82B6]"],
    textColor: 'text-white',
    buttonText: 'Start Online',
    
  },
    {
    id: 4,
    title: 'Partnership & Collaboration',
    description: 'At Achievers Scholars Forum, we truly believe that by working together, we can collectively shape the future of education.',
    image: 'partner.svg',
    bgColor: 'bg-[#1A1D3D]',
    textColor: 'text-white',
     extraClasses: ["hover:bg-[#BEC4FF] ",  "border-[#7D82B6]"],
     extraClasses: [" hover:bg-[#54C1F0]/10 ",  "border-[#54C1F0]"],
    
  },
  
]

const impact = [
  {
    id: 1,
    title: '50+',
    description: 'Committee',
    image: 'jobicon.png',
    extraClasses: [" bg-[#ECECF4] "],
    textColor: 'text-white',
  
    
  },
  {
    id: 2,
    title: '5,000+',
    description: 'Students Trained',
    image: 'gancap.png',
    extraClasses: ["bg-[#E6F6FD] " ],
    textColor: 'text-white bg-white',
   
    
  },
  {
    id: 3,
    title: '1,000+',
    description: 'Business Supported',
    image: 'people-icon.png',
     extraClasses: ["bg-[#FDEBEB] "],
    textColor: 'text-white',
    buttonText: 'Start Online',
    
  },
    {
    id: 4,
    title: '10,000+',
    description: 'Community Members',
    image: 'group-icon.png',
    bgColor: 'bg-[#1A1D3D]',
    textColor: 'text-white',
    buttonText: 'Start Online',
     extraClasses: ["bg-[#ECECF4] "],
 
    
  },
  
]

const team = [
  {
    id: 1,
    name:'Adebayo itunu',
    title: 'Bredford university',
    description: 'I’ve been fortunate to join Achievers Scholars Forum’s study abroad program, and it’s been life-changing. Their guidance and resources have strengthened my skills, opening doors for academic and personal growth. Together, we’re unstoppable!',
    image: 'photo4.jpg',
   
    
  },
  {
    id: 2,
    title: ' San Diego university',
     name:"Saleem Feranmi",
    description: 'Joining Achievers Scholars Forum’s support network has truly transformed my study abroad journey. Their expert advice and encouragement have boosted my confidence and prepared me for success overseas. Together, we’re unstoppable!',
    image: 'photo2.jpg',
   
    
  },
  {
    id: 3,
   title: 'Bredford university',
     name:"Fayo Williams",
  description: 'I’ve been fortunate to join Achievers Scholars Forum’s study abroad program, and it’s been life-changing. Their guidance and resources have strengthened my skills, opening doors for academic and personal growth. Together, we’re unstoppable!',
    image: 'photo3.jpg',
 
    
  },

  
    {
    id: 4,
    title: ' San Diego university',
     name:"Taofik Abdulkareem",
     description: 'Joining Achievers Scholars Forum’s support network has truly transformed my study abroad journey. Their expert advice and encouragement have boosted my confidence and prepared me for success overseas. Together, we’re unstoppable!',
    image: 'photo1.jpg',
    bgColor: '',
    
  },
  
]

const blog = [
  {
    id: 1,
     title: 'Why Education Is Important in  Kids',
    date:"june 23, 2024",
    description: 'Education is the foundation for personal growth, empowerment, and success. It shapes how we think, opens doors to opportunities, and equips us with the skills to navigate life’s challenges.',
  image: 'blog2.jpg',
   
    
  },
  {
    id: 2,
    title: 'Why Education Is Important in  Kids',
     date:"July 29, 2025",
    description: 'Education is the foundation for personal growth, empowerment, and success. It shapes how we think, opens doors to opportunities, and equips us with the skills to navigate life’s challenges.',
   image: 'blog2.jpg',
   
    
  },
  {
    id: 3,
    title: 'Why Education Is Important in  Kids',
     date:"July 29, 2025",
   description: 'Education is the foundation for personal growth, empowerment, and success. It shapes how we think, opens doors to opportunities, and equips us with the skills to navigate life’s challenges.',
   image: 'blog2.jpg',
 
    
  },
  
  
]


</script>
<style>
/* ✅ Correct font import */
@import url("https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap");

body {
  font-family: 'Sora', sans-serif; /* ❌ This affects everything */
}
/* ✅ Apply Sora font globally using a class */


</style>
