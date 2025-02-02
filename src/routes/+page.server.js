export const prerender = true;



/** @type {import('./$types').PageLoad} */


export async function load({ params }) {
    let technologies = [
        { id: 'thundu', name: 'Thundu', images: Array.from({length: 135}, (_, i) => `/assets/thundhu/im (${i+1}).jpg`) },
        { id: 'thoorth', name: 'Thoorth', images: Array.from({length: 24}, (_, i) => `/assets/thoorth/im (${i+1}).jpg`) },
        { id: 'bed_sheet', name: 'Bed Sheet', images: Array.from({length: 22}, (_, i) => `/assets/bed_sheet/im (${i+1}).jpg`) },
        { id: 'inskirt', name: 'Inskirt', images: Array.from({length: 2}, (_, i) => `/assets/inskirt/im (${i+1}).jpg`) },
        /* { id: 'shirt', name: 'Shirt', images: Array.from({length: 10}, (_, i) => `https://placehold.co/150?text=Shirt${i+1}`) },
        { id: 'saree', name: 'Saree', images: Array.from({length: 10}, (_, i) => `https://placehold.co/150?text=Saree${i+1}`) },
        { id: 'lungi', name: 'Lungi', images: Array.from({length: 10}, (_, i) => `https://placehold.co/150?text=Lungi${i+1}`) },
        { id: 'kurta', name: 'Kurta', images: Array.from({length: 10}, (_, i) => `https://placehold.co/150?text=Kurta${i+1}`) },
        { id: 'blouse', name: 'Blouse', images: Array.from({length: 10}, (_, i) => `https://placehold.co/150?text=Blouse${i+1}`) },
        { id: 'skirt', name: 'Skirt', images: Array.from({length: 10}, (_, i) => `https://placehold.co/150?text=Skirt${i+1}`) },
        { id: 'pants', name: 'Pants', images: Array.from({length: 10}, (_, i) => `https://placehold.co/150?text=Pants${i+1}`) },
        { id: 'jacket', name: 'Jacket', images: Array.from({length: 10}, (_, i) => `https://placehold.co/150?text=Jacket${i+1}`) } */
    ];


    return {
        props: technologies
    };
}
