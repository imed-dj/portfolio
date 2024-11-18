
    const skillBars = document.querySelectorAll(".skill-bar");

    skillBars.forEach(bar => {
        const value = bar.getAttribute("data-value");
        bar.style.width = "0";
        setTimeout(() => {
            bar.style.transition = "width 2s ease";
            bar.style.width = value;
        }, 200);
    });
    const testimonials = document.querySelectorAll(".testimonial");
    let index = 0;
    const changeTestimonial = () => {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = (i === index) ? "block" : "none";
        });
        index = (index + 1) % testimonials.length;
    };
    setInterval(changeTestimonial, 3000); 
    changeTestimonial();


