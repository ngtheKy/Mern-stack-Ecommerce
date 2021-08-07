import React from 'react'
import { View, Text, Image } from 'react-native'

const ProductItem = ({ product }) => {

    return (
        <View>
            <Image src={product.images.url} />
            <Text>{product.title}</Text>
            <Text>{product.price}</Text>
            <Text>{product.description}</Text>

        </View>
    )
}

export default ProductItem