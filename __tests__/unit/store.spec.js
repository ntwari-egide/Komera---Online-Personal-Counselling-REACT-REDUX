import testimonialsStore from "../../src/store/testimonialStore";
import { getAllTestimonials, updateTestimonial,likeTestimonial, dislikeTestimonial, getTestimonial} from '../../src/actions/testimonialActions';
import { range } from "lodash";

// update,view,dislike

describe('Testmonial store', () => {


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


    it('Update testmonial test', async () => {
        // Response body sample
        const stateToUpdate = {
            id: 2,
            OwnerFullName: "mugisha jules",
            OwnerId: 1,
            testimonialType: "illiness",
            testimonialTitle: "30 Years On Bed",
            testimonialBody: "Rwanda Hospital Medical Center regularly receives letters of thanks from former patients or their family members for the high level of care we provide throughout our facility.",
            views: 1,
            likes: 0,
            dislikes: 0
        }
        
        await testimonialsStore.dispatch(updateTestimonial(stateToUpdate))
        expect(testimonialsStore.getState()[1]).toEqual(stateToUpdate)
    })

    
    it('Update Unexisting testmonial test', async () => {
        // Response body sample
        const stateToUpdate = {
            id: 4,
            OwnerFullName: "mugisha jules",
            OwnerId: 1,
            testimonialType: "illiness",
            testimonialTitle: "30 Years On Bed",
            testimonialBody: "Rwanda Hospital Medical Center regularly receives letters of thanks from former patients or their family members for the high level of care we provide throughout our facility.",
            views: 1,
            likes: 0,
            dislikes: 0
        }
        
        await testimonialsStore.dispatch(updateTestimonial(stateToUpdate))
        expect(testimonialsStore.getState()[1]).not.toEqual(stateToUpdate)
    })
    
    it('View testmonial test', async () => {
        // Response body sample
        
        const initialState = testimonialsStore.getState()
        let views = initialState[0].views
        await testimonialsStore.dispatch(getAllTestimonials())
        expect(testimonialsStore.getState()[0].views).toEqual(views+1)
        ++views 

        for(const i in range(40))
            await testimonialsStore.dispatch(getAllTestimonials())
        
        expect(testimonialsStore.getState()[0].views).toEqual(views + 40)
    })

    it('Dislike testmonial test', async () => {
        // Response body sample
        
        const testMonialToReact = {
            id: 2,
            OwnerId: 1,
        }

        const likes = 40
        for(const i in range(likes))
        await testimonialsStore.dispatch(likeTestimonial(testMonialToReact))
        
        const dislikes = 20
        for(const i in range(dislikes))
            testimonialsStore.dispatch(dislikeTestimonial(testMonialToReact))

        expect(testimonialsStore.getState()[1].dislikes).toEqual(likes - dislikes)
    })

})