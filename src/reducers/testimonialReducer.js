import * as actions from "../actions/actionTypes"
let lastId = 0;

export default function testimonialReducer(state = [],action){
    switch (action.type){
        case actions.ADD_TESTIMONIAL:
            return [
                ...state,
                {
                    id: lastId + 1,
                    date: Date.now(),
                    OwnerFullName: action.payload.OwnerFullName,
                    OwnerId: action.payload.OwnerId,
                    testimonialType: action.payload.testimonialType,
                    testimonialTitle: action.payload.testimonialTitle,
                    testimonialBody: action.payload.testimonialBody,
                    views: 1,
                    likes: 0,
                    dislikes: 0
                }
            ]
            break
        case actions.GET_ALL_TESTIMONIALS:
            return state
            break
        case actions.GET_TESTIMONIALS:
            return state.filter(testimonial => testimonial.id === action.payload.id)
            break
        case actions.UPDATE_TESTIMONIAL:
            return state.map(testimonials => {
                if(testimonials.id === action.payload.id){
                    return {
                        id: testimonials.id,
                        date: testimonials.date,
                        OwnerFullName: testimonials.OwnerFullName,
                        OwnerId: testimonials.OwnerId,
                        testimonialType: action.payload.testimonialType,
                        testimonialTitle: action.payload.testimonialTitle,
                        testimonialBody: action.payload.testimonialBody,
                        views: testimonials.views,
                        likes: testimonials.likes,
                        dislikes: testimonials.dislikes
                    }
                }

                return state
            })
            break
        case actions.DELETE_TESTIMONIAL:
            return state.filter(testimonials => testimonials.id !== action.payload.id)
            break
        case actions.LIKE_TESTIMONIAL:
            return state.map(testimonials => {
                if(testimonials.id === action.payload.id && testimonials.OwnerId === action.payload.OwnerId){
                    return {
                        id: testimonials.id,
                        date: testimonials.date,
                        OwnerFullName: testimonials.OwnerFullName,
                        OwnerId: testimonials.OwnerId,
                        testimonialType: testimonials.testimonialType,
                        testimonialTitle: testimonials.testimonialTitle,
                        testimonialBody: testimonials.testimonialBody,
                        views: testimonials.views,
                        likes: testimonials.likes + 1,
                        dislikes: testimonials.dislikes
                    }
                }
                return  state
            })
            break;

        case actions.DISLIKE_TESTIMONIAL:
            return state.map(testimonials => {
                if(testimonials.id === action.payload.id && testimonials.OwnerId === action.payload.OwnerId){
                    return {
                        id: testimonials.id,
                        date: testimonials.date,
                        OwnerFullName: testimonials.OwnerFullName,
                        OwnerId: testimonials.OwnerId,
                        testimonialType: testimonials.testimonialType,
                        testimonialTitle: testimonials.testimonialTitle,
                        testimonialBody: testimonials.testimonialBody,
                        views: testimonials.views,
                        likes: testimonials.likes - 1,
                        dislikes: testimonials.dislikes + 1
                    }
                }
                return  state
            })
            break

        default:
            return state
    }
}