<template>
    <div class=" ">
        <NavigationNavBar />

        <!-- Hero Section -->
        <section class="py-10 px-2">
            <div class="container lg:w-[85%] w-full mx-auto rounded-2xl">
                <div class=" block md:flex justify-center items-center">
                    <div class="w-full sm:w-3/4   space-y-6 ">
                        <TypographyH1 class=" text-[#2B3068]"> Empowering Future Innovators and Change-Makers' Journey
                        </TypographyH1>
                        <TypographyP>
                            Advance your academic and personal growth. Gain the knowledge, values, and skills needed to
                            create a lasting impact in your chosen field and community.
                        </TypographyP>

                        <ButtonsPrimary class=" -">Get Started</ButtonsPrimary>
                    </div>

                    <div class="md:w-2/5 sm:w-5/6 w-full">
                        <img src="@/assets/images/Hero-Image1.png" alt="Hero Image">
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
                    <TypographyH3>Over 5000+ techies trained. Get started now to begin your journey.</TypographyH3>
                </div>

            </div>
        </section>

        <!-- Exporer more more on Course -->
        <section class="   py-10 ">
            <div class="   py-4   ">
                <div class="container mx-auto  space-y-6  text-center   px-2 lg:w-[85%]  ">
                    <!-- picture patner with -->
                    <TypographyH2>Physical or virtual? Beginner or intermediate?</TypographyH2>

                    <TypographyP class=" w-full sm:w-3/4  mx-auto">Our courses are tailored to your specific skill level and
                        learning preferences, offering both in-person and online options to suit your needs and
                        lifestyle.</TypographyP>

                    <div class="space-y-10 text-left">
                        <div class="space-y-10">
                            <div v-for="course in courses" :key="course.id"
                                class="flex flex-col-reverse md:flex-row  gap-6 p-6 rounded-xl"
                                :class="[course.bgColor, course.textColor, course.reverse ? 'md:flex-row-reverse' : '']">
                                <!-- Text Section -->

                                <div class="flex flex-col justify-between w-full md:w-3/5 space-y-5">
                                    <div class=" space-y-5">
                                       <TypographyH2 class="font-semibold">{{ course.title }}</TypographyH2>
                                       <TypographyP>{{ course.description }}</TypographyP> 
                                    </div>
                                    
                                    <ButtonsPrimary :arrow=true>{{ course.buttonText }}</ButtonsPrimary>
                                </div>

                                <!-- Image Section -->
                                <div class="rounded-xl overflow-hidden w-full md:w-2/5">
                                    <img src="@/assets/images/malhub-relearn.jpg" alt="" class="w-full h-full object-cover" />
                                    <!-- <img :src="course.image" alt="" class="w-full h-full object-cover" /> -->
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- <div class=" text-left">
                        <div class=" flex gap-4 p-6 justify-center bg-[#00A3E8] rounded-xl ">
                            <div class=" flex flex-col  justify-between text-white w-1/2">
                                <div class=" space-y-5">
                                    <TypographyH2 class=" font-semibold">Explore Our Physical Courses</TypographyH2>
                                    <TypographyP>Experience Immersive Learning: Our In-Person Training Programs
                                        Seamlessly Blend Expert Instruction with Practical, Hands-On Experience in a
                                        Dynamic and Engaging Classroom Environment.</TypographyP>
                                </div>
                                <ButtonsPrimary>Explore Courses</ButtonsPrimary>
                            </div>
                          
                            <div class=" rounded-xl overflow-hidden w-1/2 g">
                                <img src="@/assets/images/malhub-relearn.jpg" alt="" srcset="">
                            </div>

                        </div>
                    </div> -->
                </div>

            </div>
        </section>

        <!-- Servicer Section -->
        <section class="  bg-[#E6F6FD]  py-10 ">
            <div class="   py-4   ">
                <div class="container mx-auto  space-y-6  text-center   px-1 lg:w-[85%]  ">
                    <!-- picture patner with -->
                    <TypographyH2>Learn, grow, partner with us.</TypographyH2>

                    <TypographyP class=" w-full sm:w-3/4  mx-auto">Our other services includes;</TypographyP>

                    <div class="  overflow-hidden text-left">
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
                <div class="container mx-auto  space-y-6  text-center   px-1 lg:w-[85%]  ">
                    <!-- picture patner with -->
                    <TypographyH2>Our Impact.</TypographyH2>

                    <TypographyP class=" w-full sm:w-3/4 mx-auto">Dedicated to creating a lasting impact by nurturing talent, strengthening community bonds, and driving economic prosperity.</TypographyP>

                    <div class=" px-2  overflow-hidden text-left">
                        <div class="spa flex-wrap flex justify-around gap-3  h-full ">
                            <div v-for="course in impact" :key="course.id"
                                class=" m-0 sm:w-40 w-full h-64   flex flex-col items-center  justify-center  gap- p-15  rounded-xl text-center"
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
        <section class="   py-10 ">
            <div class="   py-4   ">
                <div class="container mx-auto  space-y-6  text-center   px-1 lg:w-[85%]  ">
                    <!-- picture patner with -->
                    <TypographyH2>Explore our hand-on workshop today </TypographyH2>

                    <TypographyP class=" w-full sm:w-3/4 mx-auto">Dedicated to creating a lasting impact by nurturing talent, strengthening community bonds, and driving economic prosperity.</TypographyP>

                    <div class=" px-2  overflow-hidden text-left">
                        <div class="spa flex-wrap flex justify-around gap-3  h-full ">
                            <div v-for="course in impact" :key="course.id"
                                class=" m-0 sm:w-40 w-full h-64   flex flex-col items-center  justify-center  gap- p-15  rounded-xl text-center"
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

        
         <!-- teams Section -->
         <section class="   py-10 ">
            <div class="   py-4   ">
                <div class="container mx-auto  space-y-6  text-center   px-1 lg:w-[85%]  ">
                    <!-- picture team review with -->
                    <TypographyH2>Explore our hand-on workshop today </TypographyH2>

                    <TypographyP class=" w-full sm:w-3/4 mx-auto">Dedicated to creating a lasting impact by nurturing talent, strengthening community bonds, and driving economic prosperity.</TypographyP>

                    <div class=" px-2  overflow-hidden text-left">
                        <div class="spa grid grid-cols-1 sm:grid-cols-2 justify-around gap-4  h-full ">
                            <div v-for="course in team" :key="course.id"
                                class=" m-0  w-full  bg-[#FCFCFC]   p-5  gap- p-15  rounded-xl "
                                :class="[...(course.extraClasses || [])]">

                                <!-- Image Section -->
                                <div class=" py-4 border-b-[1px] border-gray-400 flex gap-2 leading-3 items-center">
                                   <img :src="`/images/${course.image}`" alt="" class=" w-14 " /> 
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
         <section class="   py-10 ">
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
import { TypographyH3 } from '#components';

const courses = [
  {
    id: 1,
    title: 'Explore Our Physical Courses',
    description: 'Experience Immersive Learning: Our In-Person Training Programs Seamlessly Blend Expert Instruction with Practical, Hands-On Experience in a Dynamic and Engaging Classroom Environment.',
    image: '/images/physical.jpg',
    bgColor: 'bg-[#00A3E8]',
    textColor: 'text-white',
    buttonText: 'Explore Physical',
    reverse: false,
  },
  {
    id: 2,
    title: 'Explore Our Virtual Courses',
    description: 'Experience Immersive Learning: Our Virtual Training Programs Seamlessly Blend Expert Instruction with Practical, Hands-On Experience in a Dynamic and Engaging Classroom Environment.',
    image: '/images/online.jpg',
    bgColor: 'bg-[#1A1D3D]',
    textColor: 'text-white',
    buttonText: 'Start Online',
    reverse: true,
  },
  
]

const services = [
  {
    id: 1,
    title: 'Reserve a Work Space',
    description: 'Need a space to get creative and get work done? At MALhub, we believe that a conducive work environment can make all the difference in your professional journey.',
    image: 'researve.svg',
    extraClasses: [" hover:bg-[#54C1F0]/10 ",  "border-[#54C1F0]"],
    textColor: 'text-white',
  
    
  },
  {
    id: 2,
    title: 'Apply for Incubation',
    description: 'Building a successful business requires more than just a great idea and we are committed to providing the guidance and resources you need to turn your entrepreneurial dreams into reality.',
    image: 'apply.svg',
    extraClasses: ["hover:bg-[#e26e6a]/20  ",  "border-[#e26e6a]"],
    textColor: 'text-white bg-white',
   
    
  },
  {
    id: 3,
    title: 'Business Support & Consultations',
    description: 'To embark on a collaborative journey with MALhub Technology, get in touch with us today.',
    image: 'business.svg',
     extraClasses: ["hover:bg-[#BEC4FF] ",  "border-[#7D82B6]"],
    textColor: 'text-white',
    buttonText: 'Start Online',
    
  },
    {
    id: 4,
    title: 'Partnership & collaboration',
    description: 'At MALhub Technology, we wholeheartedly believe that by joining forces, we can collectively shape the future of technology.',
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
    title: '200+',
    description: 'Jobs Created',
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
    name:'Adewale Adisa',
    title: 'Co-founder, Grey Matter.',
    description: 'We’ve been fortunate to partner with Malhub Technology on a Talent upscaling program, and it’s been a game-changer. their expertise in talent grooming has elevated our capabilities, paving the way for mutual growth. Together we’re unstoppable!.',
    image: 'Adewale-Adisa.png',
   
    
  },
  {
    id: 2,
    title: 'CEO, VN Sync',
     name:"Rachel Onamusi",
    description: 'Partnering with MALhub Technology on our talent outsourcing program has been transformative. Their expertise in talent development has elevated our team’s skills and opened doors for mutual growth. Together, we’re unstoppable!',
    image: 'Fayose.png',
   
    
  },
  {
    id: 3,
    title: 'Board Member, ISNhubs',
     name:"Fayo Williams",
    description: 'I’m thrilled to commend MALhub as an exceptional partner in supporting startup programs. Our collaboration with them has been transformative, propelling ISNhubs to new heights. Fayo Williams, of ISNhubs, wholeheartedly appreciates their invaluable contribution to the ecosystem.',
    image: 'Rachel.png',
 
    
  },
    {
    id: 4,
    title: 'MD Plat Technologies LTD',
    name:"Taofik Abdulkareem",
    description: 'We are proud to partner with MALhub Technology as they continue to drive innovation and mentorship within their ecosystem. Their commitment to fostering growth aligns perfectly with our mission, and together, we’re creating a brighter future through technology and collaboration.',
    image: 'Mr-Taofeeq.png',
    bgColor: '',
    
  },
  
]

const blog = [
  {
    id: 1,
    title: 'Breaking Into Cybersecurity: 7 Roles You Should Know in 2025',
    date:"june 23, 2024",
    description: 'Global change is driving demand for cybersecurity professionals at an unprecedented rate the way for mutual growth. Together we’re unstoppable!.',
    image: 'blog1.jpg',
   
    
  },
  {
    id: 2,
    title: 'Why Coding Is Important for Kids',
     date:"July 29, 2025",
    description: 'Coding is more than just a useful skill; it’s a new literacy. has elevated our team’s Together, we’re unstoppable!',
   image: 'blog2.jpg',
   
    
  },
  {
    id: 3,
    title: 'What Is Product Management? Everything You Need to Know',
     date:"July 29, 2025",
    description: 'It takes strategy, coordination, and a deep understanding of customers supporting startup programs. Our collaboration with them has been transformative, propelling ISNhubs to new heights. Fayo Williams, of ISNhubs, wholeheartedly appreciates their invaluable contribution to the ecosystem.',
   image: 'blog3.jpg',
 
    
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
