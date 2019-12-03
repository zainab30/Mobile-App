import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import Product from '../components/Product';

import Item1 from '../../Images/ring.jpg'
import Item2 from '../../Images/circlependant.jpg'
import Item3 from '../../Images/threestroktops.jpg'
import Item4 from '../../Images/circletops.jpg'


const products =[
    { id: 1, title: 'Golden Ring', desc: "Classic Golden Beaded Ring", price: 80, img: Item1 },
    { id: 2, title: 'Elegant Pendant', desc: "Elegant Gold Pendant", price: 180, img: Item2 },
    { id: 3, title: 'Stylish Earring', desc: "Shiny Stylish Earrings", price: 120, img: Item3 },
    { id: 4, title: 'Casual Tops', desc: "Classic Casual Tops", price: 100, img: Item4 },
];

class HomeScreen extends React.Component {
    render() {
        return (
            <ScrollView
                style={{
                    flexGrow: 0,
                    width: "100%",
                    height: "100%",
                }}>
                {
                    products.map((product, index) => {
                        return (
                            <View style={styles.row} key={index}>
                                <View style={styles.col}>
                                    <Product />
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    col: {
        flex: 1,
    },
});

export default withNavigation(HomeScreen);
