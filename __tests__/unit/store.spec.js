import testimonialsStore from "../../src/store/testimonialStore";
import {addTestimonial, deleteTestimonial, likeTestimonial} from '../../src/actions/testimonialActions';

// add,delete,like

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

    it("add testimonials test", async () => {
        const newTestimony =    {
                id: 3,
                OwnerFullName: "Divine elsa",
                OwnerId: 1,
                testimonialType: "illiness",
                testimonialTitle: "23 Years On Bed",
                testimonialBody: "Jamaica Hospital Medical Center regularly receives letters of thanks from former patients or their family members for the high level of care we provide throughout our facility.",
                views: 1,
                likes: 0,
                dislikes: 0
            }
        

        const initialLength = testimonialsStore.getState().length  // number of testimonials before addition
        
        await testimonialsStore.dispatch(addTestimonial(newTestimony))

        expect(testimonialsStore.getState().length).toBeGreaterThan(initialLength)
        
        expect(testimonialsStore.getState()[2].OwnerFullName).toEqual(newTestimony.OwnerFullName)
    })

    it("delete testimonials", async () => {

        const initialLength = testimonialsStore.getState().length

        await testimonialsStore.dispatch(deleteTestimonial(testimonialsStore.getState()[1]))

        expect(testimonialsStore.getState().length).toBeLessThan(initialLength)
    })

    it("like testimonials", async () =>{
        const testimonialToLike = testimonialsStore.getState()[0]

        await testimonialsStore.dispatch(likeTestimonial(testimonialToLike))

        expect(testimonialsStore.getState()[0].likes).toBeGreaterThan(testimonialToLike.likes)
        
    })
})