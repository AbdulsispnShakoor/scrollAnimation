

const scrollParent = document.getElementById("scrollParent");
const scrollContainer = document.getElementById("scroll__container");
const heading = document.querySelector(".heading");
const paragraph = document.querySelector(".paragraph");
const image = document.getElementById("img");
const count = document.querySelector(".count");






const data = [
    {
        id: "01",
        heading: "Expertise",
        paragraph: "We provide a group of professionals with extensive knowledge of the technology sector. We are up to date on the latest trends. with a thorough understanding of the products and services we offer, and provide you with solutions tailored to your specific requirements.",
        image: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80"
    },
    {
        id: "02",
        heading: "Quality Products And Services",
        paragraph: "To guarantee that our clients have access to the greatest goods and services available, we only work with top manufacturers and service providers. Each product and service goes through a thorough testing and evaluation process to ensure it meets our high standards.",
        image: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
        id: "03",
        heading: "Customizable Solutions",
        paragraph: "Since each business is different and has various technological requirements, we promise to offer multiple custom solutions to ensure that the client receives the solution most suited for their business.",
        image: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80"
    },
    {
        id: "04",
        heading: "Competitive Pricing",
        paragraph: "We care for our clients’ budgets. That’s why we offer competitive and reasonable prices without compromising on quality.",
        image: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80"
    },
    {
        id: "05",
        heading: "Exceptional Customer Service",
        paragraph: "We believe that our clients deserve to be treated with the utmost professionalism and respect. We are committed to offering outstanding customer service and making sure that every customer is happy with our goods and services.",
        image: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80"
    },
    {
        id: "06",
        heading: "On-going Support & Scalability",
        paragraph: "As a respected and well-known company, we don’t just sell you anything and walk away from you. To make sure you have a flawless experience using our products and services, we offer ongoing support, which includes installation, training, and maintenance. You can be sure that your technology will meet your future needs because our solutions are built to grow with your company as it expands.",
        image: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80"
    },
]




scrollParent.addEventListener("scroll", () => {
   

    heading.textContent = data[Math.floor(Math.random()*data.length)].heading;
    paragraph.textContent = data[Math.floor(Math.random()*data.length)].paragraph;
    image.src = data[Math.floor(Math.random()*data.length)].image;
    count.textContent = data[Math.floor(Math.random()*data.length)].id;

});

