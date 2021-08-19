import React, {useEffect, useState} from 'react';

// Local imports
import './collections.css';
import CollectionsSearch from "./collectionsSearch";
import CollectionsDisplay from "./collectionsDisplay";

// Antd
import { Layout, Menu } from 'antd';
import CollectionAssets from "./collectionAssets";
import axios from "axios";
const { Header, Content, Footer } = Layout;


const CollectionsPage = () => {

    return(
        <>
            <Layout className='collections_layout'>
                <Header className='collections_header'>
                    Header
                </Header>
                <Content className='collections_content'>
                    {/*     Search bar      */}
                    <CollectionsSearch />
                    {/*     Collections     */}
                    {/*<CollectionsDisplay/>*/}
                    <CollectionAssets />
                </Content>
                <Footer className='collections_footer'>
                    Copy right 2021
                </Footer>
            </Layout>
        </>
    )
}

export default CollectionsPage;