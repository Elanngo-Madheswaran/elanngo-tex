export const prerender = true;



/** @type {import('./$types').PageLoad} */


export async function load({ params }) {
    let technologies = [
        { id: 'dhothy', name: 'Dhothy', images: Array.from({length: 10}, (_, i) => `https://placehold.co/150?text=Dhothy${i+1}`) },
        { id: 'thundu', name: 'Thundu', images: Array.from({length: 10}, (_, i) => `https://placehold.co/150?text=Thundu${i+1}`) },
        { id: 'shirt', name: 'Shirt', images: Array.from({length: 10}, (_, i) => `https://placehold.co/150?text=Shirt${i+1}`) },
        { id: 'saree', name: 'Saree', images: Array.from({length: 10}, (_, i) => `https://placehold.co/150?text=Saree${i+1}`) },
        { id: 'lungi', name: 'Lungi', images: Array.from({length: 10}, (_, i) => `https://placehold.co/150?text=Lungi${i+1}`) },
        { id: 'kurta', name: 'Kurta', images: Array.from({length: 10}, (_, i) => `https://placehold.co/150?text=Kurta${i+1}`) },
        { id: 'blouse', name: 'Blouse', images: Array.from({length: 10}, (_, i) => `https://placehold.co/150?text=Blouse${i+1}`) },
        { id: 'skirt', name: 'Skirt', images: Array.from({length: 10}, (_, i) => `https://placehold.co/150?text=Skirt${i+1}`) },
        { id: 'pants', name: 'Pants', images: Array.from({length: 10}, (_, i) => `https://placehold.co/150?text=Pants${i+1}`) },
        { id: 'jacket', name: 'Jacket', images: Array.from({length: 10}, (_, i) => `https://placehold.co/150?text=Jacket${i+1}`) }
    ];


    return {
        props: technologies
    };
}
