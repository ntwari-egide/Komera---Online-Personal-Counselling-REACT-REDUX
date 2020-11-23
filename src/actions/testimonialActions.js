import * as actions from "./actionTypes";

const addViewOnTestimonials = () => {
    console.log("add view is called from rendering")
    return {
        type: actions.TESTIMONIAL_VIEWS
    }
}


export const addTestimonial = (addTestimonialPayload) => {
    return {
        type: actions.ADD_TESTIMONIAL,
        payload: addTestimonialPayload
    }
}

export const getAllTestimonials = () => {
    addViewOnTestimonials()
    return {
        type: actions.GET_ALL_TESTIMONIALS
    }
}

export const getTestimonial = (getTestimonialPayload) => {
    return {
        type: actions.GET_TESTIMONIALS,
        payload: getTestimonialPayload
    }
}

export const updateTestimonial = (updateTestimonialPayload) => {
    return {
        type: actions.UPDATE_TESTIMONIAL,
        payload: updateTestimonialPayload
    }
}

export const deleteTestimonial = (deleteTestimonialPayload) => {
    return {
        type: actions.DELETE_TESTIMONIAL,
        payload: deleteTestimonialPayload
    }
}

export const likeTestimonial = (likeTestimonialPayload) => {
    return {
        type: actions.LIKE_TESTIMONIAL,
        payload : likeTestimonialPayload
    }
}

export const dislikeTestimonial = (dislikeTestimonialPayload) => {
    return {
        type: actions.DISLIKE_TESTIMONIAL,
        payload: dislikeTestimonialPayload
    }
}