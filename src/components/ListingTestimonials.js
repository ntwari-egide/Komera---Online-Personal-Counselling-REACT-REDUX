import Testimonial from "./Testimonial";

export default function ListingTestimonials({testimonials}) {

    return testimonials.map( testimonial =>
            <Testimonial key={testimonial.id} {...testimonial}/>
        )
}