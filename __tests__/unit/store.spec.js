import testimonialsStore from "../../src/store/testimonialStore";
import {getAllTestimonials} from '../../src/actions/testimonialActions';


describe('testmonial store', () => {


    it('Initial State test', () => {
        // Response body sample
        const initialState = [
            {
                id: 1,
                OwnerFullName: "ntwari egide",
                OwnerId: 1,
                testimonialType: "illiness",
                testimonialTitle: "23 Years On Bed",
                testimonialBody: "Jamaica Hospital Medical Center regularly receives letters of thanks from former patients or their family members for the high level of care we provide throughout our facility.",
                views: 1,
                likes: 0,
                dislikes: 0
            },
            {
                id: 2,
                OwnerFullName: "mugisha jules",
                OwnerId: 1,
                testimonialType: "illiness",
                testimonialTitle: "23 Years On Bed",
                testimonialBody: "Jamaica Hospital Medical Center regularly receives letters of thanks from former patients or their family members for the high level of care we provide throughout our facility.",
                views: 1,
                likes: 0,
                dislikes: 0
            }
        ]
        
        expect(testimonialsStore.getState()).toEqual(initialState)
    })
})