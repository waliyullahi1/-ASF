<template>
    <div class=" ">
        <NavigationNavBar />

        <!-- Hero Section -->
        <section class="py-10 px-2">
            <div class="container   justify-center lg:w-[85%] w-full mx-auto rounded-2xl">
                <div
                    class=" overflow-hidden  h-96  bg-cover bg-center rounded-lg bg-no-repeat  bg-[url('@/assets/images/about_image.jpg')] flex flex-col justify-between items-center   ">
                    <div class=" bg-primary/50 text-center flex justify-center items-center  w-full h-full ">
                        <div class="w-full   ">
                            <TypographyH1 class=" text-white"> About Us
                            </TypographyH1>


                        </div>


                    </div>

                </div>

                <div class="  mt-9 w-full flex-col items-center  flex justify-center item ">
                    <div class="md:w-4/5 w-full space-y-4 text-center mt-4">
                        <TypographyH2>Empowering Scholars and Guiding You Far Beyond Academic Limits</TypographyH2>
                        <TypographyP class="text-center">Achievers Scholar Forum began with a bold vision to transform global education. Today, that vision is a reality as we’ve had the privilege of empowering and guiding over 7000+ students and professionals—and we’re just getting started.
                        </TypographyP>
                    </div>

                </div>
            </div>
        </section>



        <!-- our more more on Course -->
        <section class="  4241307050  pb-10 ">
            <div class="   py-4   ">
                <div class="container mx-auto w-full  space-y-6  text-center   px-2 lg:w-[85%]  ">
                    <!-- picture patner with -->

                    <div class="space-y-10 text-left">
                        <div class="space-y-20">
                            <div v-for="course in courses" :key="course.id"
                                class="flex flex-col-reverse items-center  md:flex-row  gap-10 px-2 rounded-xl"
                                :class="[course.reverse ? 'md:flex-row-reverse' : '']">
                                <!-- Text Section -->

                                <div class="flex flex-col justify-between items-center w-full md:w-1/2 space-y-8">
                                    <div class=" space-y-5">
                                        <TypographyH2 class="font-semibold">{{ course.title }}</TypographyH2>
                                        <TypographyP> <span class=" text-gray-5
                                            00">{{ course.description }}</span></TypographyP>
                                    </div>


                                </div>

                                <!-- Image Section -->
                                <div class="rounded-xl overflow-hidden w-full md:w-1/2">
                                    
                                    <img :src="course.image" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>

        <!-- our Goals -->
        <section class="pb-10 px-2">
            <div class="container space-y-4    justify-center lg:w-[85%] w-full mx-auto rounded-2xl">
                <div class=" space-y-4  w-full flex-col items-center  flex justify-center item ">
                    <div class="md:w-4/5 w-full  text-center flex justify-center  items-center flex-col mt-4">
                        <TypographyH2>Our Goal</TypographyH2>
                        <TypographyP class="text-center text-slate-500">Foster a supportive and inclusive academic community. Create educational opportunities for Nigerian youths. Become the go-to platform for training global scholars.</TypographyP>
                        <div class="mt-5">
                            <img src="@/assets/images/people-office-work-day-1.png" alt="" srcset=""></img>
                        </div>


                        <div class=" bg-primary rounded-lg text-white relative  bottom-16  p-5 w-[90%]  md:w-[80%] h-fit">
                            <div class="spa  gap-2 grid grid-cols-2 sm:grid-cols-4 justify-center items-center g h-fit ">
                                <div v-for="course in impact" :key="course.id"
                                    class=" m-0  w-fit fit flex flex-col items-center  justify-center  gap-  rounded-xl text-center">


                                    <TypographyH3 class="font-semibold  "><span class=" text-lg md:text-2xl">{{ course.title
                                    }}</span></TypographyH3>
                                    <TypographyP class=" t"> <span class="">{{ course.description }}</span>
                                    </TypographyP>




                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>



        

        <!-- teams Section -->
        <section class="    ">
            <div class="   py-4   ">
                <div class="container mx-auto    text-center   px-1 lg:w-[85%]  ">
                    <!-- picture team review with -->
                    <TypographyH2>Explore our hand-on education </TypographyH2>

                    <TypographyP class="  w-full sm:w-3/4 mx-auto">Dedicated to creating a lasting impact by nurturing
                        talent, strengthening community bonds, and driving economic prosperity.</TypographyP>

                    <div class=" px-2 pt-6  overflow-hidden text-left">
                        <div class="spa grid grid-cols-1  sm:grid-cols-3 justify-around gap-4  h-full ">
                            <div v-for="course in team" :key="course.id"
                                class=" m-0  w-full  bg-[#FCFCFC]     gap- sm:p-15 p-0  rounded-xl "
                                :class="[...(course.extraClasses || [])]">

                                <!-- Image Section -->
                                <div class="   py-4 flex flex-col gap-2 leading-3 ">
                                    <div class=" sm:h-fit rounded-lg overflow-hidden h-fit bg-black ">
                                        <img :src="`/images/${course.image}`" alt="" class=" " />
                                    </div>
                                    
                                   
                                    <div class=" space-y-4   ">
                                        <div class=" leading-tight">
                                            <TypographyH4 class="leading-tight">{{ course.name }}</TypographyH4>
                                            <TypographyP class="font-semibol leading-tight  text-8xl"><span
                                                    class=" font-normal  leading-tight text-sm">{{ course.title
                                                    }}</span>
                                            </TypographyP>
                                        </div>
                                        <div class=" flex gap-2">
                                            <a href="" class=" bg-black rounded-full  p-2 w-8 h-fit">
                                                <img src="../assets/images/icons/linkdin.svg" class=" "
                                                    alt=" linkdin icon">
                                            </a>

                                            <a  href="" class="  bg-black rounded-full  p-2 w-8 h-fit">
                                                <img src="../assets/images/icons/x.svg" class=" " alt=" linkdin icon">
                                            </a>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>

          


        <NavigationFooter />

    </div>
</template>



<script setup>


const courses = [
    {
        id: 1,
        title: ' Our Service',
        description: 'To provide world-class opportunities and premium academic programs, that empower our scholars to excel in their educational pursuits. We foster continuous learning and growth, adapting to the ever-changing global academic landscape. Through our collaborations with partners, we strive to make an impact in different aspects of society.',
        image: '/images/Google-IO.jpg',
        bgColor: 'bg-[#00A3E8]',
        textColor: 'text-white',
        buttonText: 'Explore Physical',
        reverse: false,
    },
    {
        id: 2,
        title: 'Our Vision',
        description: 'To become the go-to platform for world-class opportunities and unmatched guidance. We are shaping the future of education, empowering scholars and institutions and building trust through integrity. Support and sponsor academic community programs for positive change.',
        image: '/images/incubation.jpg',
        bgColor: 'bg-[#1A1D3D]',
        textColor: 'text-white',
        buttonText: 'Start Online',
        reverse: true,
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
        name: 'Bola Odunaro',
        title: 'Chairman',
        description: 'I’ve been fortunate to join Achievers Scholars Forum’s study abroad program, and it’s been life-changing. Their guidance and resources have strengthened my skills, opening doors for academic and personal growth. Together, we’re unstoppable!',
        image: 'second-man.jpg',


    },
    {
        id: 2,
        title: 'Member',
        name: "Temitope Oyedeji",
        description: 'Partnering with MALhub Technology on our talent outsourcing program has been transformative. Their expertise in talent development has elevated our team’s skills and opened doors for mutual growth. Together, we’re unstoppable!',
        image: 'temitope_Oyedeji.jpg',


    },
    {
        id: 3,
        title: 'Member',
        name: "Miracle Esekhile",
        description: 'I’m thrilled to commend MALhub as an exceptional partner in supporting startup programs. Our collaboration with them has been transformative, propelling ISNhubs to new heights. Fayo Williams, of ISNhubs, wholeheartedly appreciates their invaluable contribution to the ecosystem.',
        image: 'miracle_Esekhile.jpg',


    },
    {
        id: 4,
        title: 'Member',
        name: "Sarafina Napoleon",
        description: 'We are proud to partner with MALhub Technology as they continue to drive innovation and mentorship within their ecosystem. Their commitment to fostering growth aligns perfectly with our mission, and together, we’re creating a brighter future through technology and collaboration.',
        image: 'sarafina_napoleon.jpg',
        bgColor: '',

    },

     {
        id: 5,
        title: 'Member',
        name: "Arabambi Fatimah Damilola",
        description: 'We are proud to partner with MALhub Technology as they continue to drive innovation and mentorship within their ecosystem. Their commitment to fostering growth aligns perfectly with our mission, and together, we’re creating a brighter future through technology and collaboration.',
        image: 'arabambi_fatimah_damilola.jpg',
        bgColor: '',

    },

         {
        id: 6,
        title: 'Technical Officer',
        name: " Babatunde Abayomi'",
        description: 'We are proud to partner with MALhub Technology as they continue to drive innovation and mentorship within their ecosystem. Their commitment to fostering growth aligns perfectly with our mission, and together, we’re creating a brighter future through technology and collaboration.',
        image: 'babatunde_abayomi.jpg',
        bgColor: '',

    },
]




</script>
<style>
/* ✅ Correct font import */
@import url("https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap");

body {
    font-family: 'Sora', sans-serif;
    /* ❌ This affects everything */
}

/* ✅ Apply Sora font globally using a class */
</style>
