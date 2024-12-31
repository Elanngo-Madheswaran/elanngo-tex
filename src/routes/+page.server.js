export const prerender = true;



/** @type {import('./$types').PageLoad} */


export async function load({ params }) {
    let technologies = [
        { id: 'dhoti', name: 'Dhoti', images: ['https://via.placeholder.com/150?text=dhoti1', 'https://via.placeholder.com/150?text=dhoti2', 'https://via.placeholder.com/150?text=dhoti3', 'https://via.placeholder.com/150?text=dhoti4', 'https://via.placeholder.com/150?text=dhoti5', 'https://via.placeholder.com/150?text=dhoti6', 'https://via.placeholder.com/150?text=dhoti7', 'https://via.placeholder.com/150?text=dhoti8', 'https://via.placeholder.com/150?text=dhoti9', 'https://via.placeholder.com/150?text=dhoti10'] },
        { id: 'thundu', name: 'Thundu', images: ['https://via.placeholder.com/150?text=Thundu1', 'https://via.placeholder.com/150?text=Thundu2', 'https://via.placeholder.com/150?text=Thundu3', 'https://via.placeholder.com/150?text=Thundu4', 'https://via.placeholder.com/150?text=Thundu5', 'https://via.placeholder.com/150?text=Thundu6', 'https://via.placeholder.com/150?text=Thundu7', 'https://via.placeholder.com/150?text=Thundu8', 'https://via.placeholder.com/150?text=Thundu9', 'https://via.placeholder.com/150?text=Thundu10'] },
        { id: 'shirt', name: 'Shirt', images: ['https://via.placeholder.com/150?text=Shirt1', 'https://via.placeholder.com/150?text=Shirt2', 'https://via.placeholder.com/150?text=Shirt3', 'https://via.placeholder.com/150?text=Shirt4', 'https://via.placeholder.com/150?text=Shirt5', 'https://via.placeholder.com/150?text=Shirt6', 'https://via.placeholder.com/150?text=Shirt7', 'https://via.placeholder.com/150?text=Shirt8', 'https://via.placeholder.com/150?text=Shirt9', 'https://via.placeholder.com/150?text=Shirt10'] },
        { id: 'saree', name: 'Saree', images: ['https://via.placeholder.com/150?text=Saree1', 'https://via.placeholder.com/150?text=Saree2', 'https://via.placeholder.com/150?text=Saree3', 'https://via.placeholder.com/150?text=Saree4', 'https://via.placeholder.com/150?text=Saree5', 'https://via.placeholder.com/150?text=Saree6', 'https://via.placeholder.com/150?text=Saree7', 'https://via.placeholder.com/150?text=Saree8', 'https://via.placeholder.com/150?text=Saree9', 'https://via.placeholder.com/150?text=Saree10'] },
        { id: 'lungi', name: 'Lungi', images: ['https://via.placeholder.com/150?text=Lungi1', 'https://via.placeholder.com/150?text=Lungi2', 'https://via.placeholder.com/150?text=Lungi3', 'https://via.placeholder.com/150?text=Lungi4', 'https://via.placeholder.com/150?text=Lungi5', 'https://via.placeholder.com/150?text=Lungi6', 'https://via.placeholder.com/150?text=Lungi7', 'https://via.placeholder.com/150?text=Lungi8', 'https://via.placeholder.com/150?text=Lungi9', 'https://via.placeholder.com/150?text=Lungi10'] },
        { id: 'kurta', name: 'Kurta', images: ['https://via.placeholder.com/150?text=Kurta1', 'https://via.placeholder.com/150?text=Kurta2', 'https://via.placeholder.com/150?text=Kurta3', 'https://via.placeholder.com/150?text=Kurta4', 'https://via.placeholder.com/150?text=Kurta5', 'https://via.placeholder.com/150?text=Kurta6', 'https://via.placeholder.com/150?text=Kurta7', 'https://via.placeholder.com/150?text=Kurta8', 'https://via.placeholder.com/150?text=Kurta9', 'https://via.placeholder.com/150?text=Kurta10'] },
        { id: 'blouse', name: 'Blouse', images: ['https://via.placeholder.com/150?text=Blouse1', 'https://via.placeholder.com/150?text=Blouse2', 'https://via.placeholder.com/150?text=Blouse3', 'https://via.placeholder.com/150?text=Blouse4', 'https://via.placeholder.com/150?text=Blouse5', 'https://via.placeholder.com/150?text=Blouse6', 'https://via.placeholder.com/150?text=Blouse7', 'https://via.placeholder.com/150?text=Blouse8', 'https://via.placeholder.com/150?text=Blouse9', 'https://via.placeholder.com/150?text=Blouse10'] },
        { id: 'skirt', name: 'Skirt', images: ['https://via.placeholder.com/150?text=Skirt1', 'https://via.placeholder.com/150?text=Skirt2', 'https://via.placeholder.com/150?text=Skirt3', 'https://via.placeholder.com/150?text=Skirt4', 'https://via.placeholder.com/150?text=Skirt5', 'https://via.placeholder.com/150?text=Skirt6', 'https://via.placeholder.com/150?text=Skirt7', 'https://via.placeholder.com/150?text=Skirt8', 'https://via.placeholder.com/150?text=Skirt9', 'https://via.placeholder.com/150?text=Skirt10'] },
        { id: 'pants', name: 'Pants', images: ['https://via.placeholder.com/150?text=Pants1', 'https://via.placeholder.com/150?text=Pants2', 'https://via.placeholder.com/150?text=Pants3', 'https://via.placeholder.com/150?text=Pants4', 'https://via.placeholder.com/150?text=Pants5', 'https://via.placeholder.com/150?text=Pants6', 'https://via.placeholder.com/150?text=Pants7', 'https://via.placeholder.com/150?text=Pants8', 'https://via.placeholder.com/150?text=Pants9', 'https://via.placeholder.com/150?text=Pants10'] },
        { id: 'jacket', name: 'Jacket', images: ['https://via.placeholder.com/150?text=Jacket1', 'https://via.placeholder.com/150?text=Jacket2', 'https://via.placeholder.com/150?text=Jacket3', 'https://via.placeholder.com/150?text=Jacket4', 'https://via.placeholder.com/150?text=Jacket5', 'https://via.placeholder.com/150?text=Jacket6', 'https://via.placeholder.com/150?text=Jacket7', 'https://via.placeholder.com/150?text=Jacket8', 'https://via.placeholder.com/150?text=Jacket9', 'https://via.placeholder.com/150?text=Jacket10'] }
    ];

    // Preload images
    await Promise.all(
        technologies.flatMap(tech => tech.images.map(src => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = resolve;
                img.onerror = reject;
            });
        }))
    );

    return {
        props: technologies
    };
}
