<template>
    <div class=" ">
        <NavigationNavBar />

               <!-- Hero Section -->
        <section class="py-20 px-2">
            <div class="container   justify-center lg:w-[85%] w-full mx-auto rounded-2xl">
                <div
                    class=" overflow-hidden  h-96  bg-cover bg-center rounded-lg bg-no-repeat  bg-[url('@/assets/images/about_image.jpg')] flex flex-col justify-between items-center   ">
                    <div class=" bg-primary/50  py flex  items-end  w-full h-full ">
                        <div class="w-full  p-5 space-y-6 ">
                            <TypographyH1 class=" text-white"> Contact Us
                            </TypographyH1>


                        </div>


                    </div>

                </div>

               
            </div>
        </section>

        <!-- Hero Section -->
        <section class="py-20 px-2">
            <div class="container grid-cols-1  grid md:grid-cols-2 justify-center lg:w-[85%] w-full mx-auto rounded-2xl">
                

                <div class="  flex-col items-center space-y-9  2023 waec 4302317046 english c6, math b3, government d7, islamic study e8, lit-in-english c6, agric c6, civic c4, geography c5, market e8  flex justify-center item ">
                    <div class=" w-full space-y-  ">
                        <TypographyH3 class=" font-semibold">Office Address:</TypographyH3>
                        <TypographyP class="">No 1 Ilofa Road GRA Ilorin Kwara State.
                        </TypographyP>
                    </div>

                     <div class=" w-full space-y-2 ">
                        <TypographyH3 class=" font-semibold">Working hours:</TypographyH3>
                        <TypographyP class="">9:00AM - 6:00PM: Monday - Friday</TypographyP>
                         <TypographyP class="">10:00AM - 4:00PM: Saturdays</TypographyP>
                           <TypographyP class="">Sunday - Special Demand</TypographyP>
                       
                    </div>

                    <div class=" w-full space-y-2 ">
                        <TypographyH3 class=" font-semibold">Contact Details</TypographyH3>
                        <TypographyP class="">+234-8168 953 635</TypographyP>
                         <TypographyP class="">10:00AM - 4:00PM: Saturdays</TypographyP>
                           <TypographyP class="">Sunday - Special Demand</TypographyP>
                       
                    </div>
                    

                </div>

                <div
                    class="  h-96  md:h-full bg-slate-500  bg-cover bg-center rounded-lg bg-no-repeat  bg-[url('@/assets/images/about_image.jpg')] flex flex-col justify-between items-center   ">
                    <div class=" bg-primary/50 text-center flex justify-center items-center  w-full h-full ">
                        <div class="w-full h-full bg-amber-600 ">
                           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15817.856260816996!2d4.158857942236048!3d7.633138330089847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039db7a534e7a05%3A0xcfef3c42c4f602b2!2sOsun%20Greenwich%20Hotels%20%26%20Suites!5e0!3m2!1sen!2sng!4v1754843285881!5m2!1sen!2sng"  style="border:0;" allowfullscreen="true" class=" h-full w-full " loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

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
        description: 'To provide cutting-edge solutions and top-notch training programs, that empower our clients stay ahead of their competition. We foster continuous learning and growth, adapting to the ever-evolving tech landscape. Through our collaborations with partners, we strive to make an impact in different aspects of society.',
        image: '/images/Google-IO.jpg',
        bgColor: 'bg-[#00A3E8]',
        textColor: 'text-white',
        buttonText: 'Explore Physical',
        reverse: false,
    },
    {
        id: 2,
        title: 'Our Vision',
        description: 'To become the go-to partner for cutting-edge solutions and unmatched expertise. We are shaping the future of technology, empowering individuals and organizations and building trust through integrity. Support and sponsor tech community programs for positive change.',
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
        name: 'Adebayo itunu',
        title: 'Bredford  university',
        description: 'I’ve been fortunate to join Achievers Scholars Forum’s study abroad program, and it’s been life-changing. Their guidance and resources have strengthened my skills, opening doors for academic and personal growth. Together, we’re unstoppable!',
        image: 'kamal.png',


    },
    {
        id: 2,
        title: 'CEO, VN Sync',
        name: "Rachel Onamusi",
        description: 'Partnering with MALhub Technology on our talent outsourcing program has been transformative. Their expertise in talent development has elevated our team’s skills and opened doors for mutual growth. Together, we’re unstoppable!',
        image: 'sodiq.png',


    },
    {
        id: 3,
        title: 'Board Member, ISNhubs',
        name: "Fayo Williams",
        description: 'I’m thrilled to commend MALhub as an exceptional partner in supporting startup programs. Our collaboration with them has been transformative, propelling ISNhubs to new heights. Fayo Williams, of ISNhubs, wholeheartedly appreciates their invaluable contribution to the ecosystem.',
        image: 'Jaiye.png',


    },
    {
        id: 4,
        title: 'MD Plat Technologies LTD',
        name: "Taofik Abdulkareem",
        description: 'We are proud to partner with MALhub Technology as they continue to drive innovation and mentorship within their ecosystem. Their commitment to fostering growth aligns perfectly with our mission, and together, we’re creating a brighter future through technology and collaboration.',
        image: 'Drey-pix.png',
        bgColor: '',

    },

     {
        id: 5,
        title: 'Program Manager',
        name: "Olumo Tunde",
        description: 'We are proud to partner with MALhub Technology as they continue to drive innovation and mentorship within their ecosystem. Their commitment to fostering growth aligns perfectly with our mission, and together, we’re creating a brighter future through technology and collaboration.',
        image: 'olumo.png',
        bgColor: '',

    },

         {
        id: 6,
        title: ' Program Manager',
        name: " Ibikunle Adedayo'",
        description: 'We are proud to partner with MALhub Technology as they continue to drive innovation and mentorship within their ecosystem. Their commitment to fostering growth aligns perfectly with our mission, and together, we’re creating a brighter future through technology and collaboration.',
        image: 'Ibukun.png',
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
