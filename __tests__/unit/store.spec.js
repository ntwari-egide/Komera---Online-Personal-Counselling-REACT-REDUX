import testimonialsStore from "../../src/store/testimonialStore";
import {getAllTestimonials} from '../../src/actions/testimonialActions';


describe('testmonial store', () => {


    it('dispatches termonislas', () => {
        // Response body sample
        // const response = [
        //     {
        //         title: 'The Master and Margarita',
        //         author: 'Mikhail Bulgakov',
        //         isbn: '0679760806'
        //     },
        //     {
        //         title: '1984',
        //         author: 'George Orwell',
        //         isbn: '0451524934'
        //     }
        // ]

        // const expectedActions = [
        //  { type: booksActions.BOOKS_REQUEST, payload: undefined},
        //  { type: booksActions.BOOKS_SUCCESS, payload: { results: response}}
        // ]
        console.log(testimonialsStore.dispatch(getAllTestimonials))

    })
})