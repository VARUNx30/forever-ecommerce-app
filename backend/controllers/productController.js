

//funtion for add product
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, size, bestseller } = req.body
        const files = req.files || {}
        const image1 = req.files?.image1?.[0]
        const image2 = req.files?.image2?.[0]
        const image3 = req.files?.image3?.[0]
        const image4 = req.files?.image4?.[0]

        if (!image1 || !image2 || !image3 || !image4) {
            return res.json({ success: false, message: 'All 4 images are required' })
        }

        console.log(name, description, price, category, subCategory, size, bestseller);
        console.log(image1, image2, image3, image4);

        res.json({ success: true })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}
//funtion for list product
const listProduct = async (req, res) => {

}
//funtion for remove product
const removeProduct = async (req, res) => {

}
//funtion for single product info
const singleProduct = async (req, res) => {

}

export { listProduct, addProduct, removeProduct, singleProduct }