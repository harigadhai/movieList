import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader'
import PromoTileWrapper from '../PromoTileWrapper/PromoTileWrapper';
import FilterableList from '../FilterableList/FilterableList';
import love from '../love.jpg';

class LandingPage extends React.Component {


    componentDidMount() {

        fetch('/article/fetch/post/image',)
            .then(response => response.json())
            .then(result => {

            })
    }


    
    render() {
        return (
            <div className="LandingPageContainer">
                <SectionHeader heading="Hi Abi... I love u Babe " />
                <img src={love} alt="love u" />
                <div>
                    <FilterableList />
                    <PromoTileWrapper />
                </div>
            </div>
        );
    }
}


export default LandingPage;