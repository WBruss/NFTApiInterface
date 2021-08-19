import React, {useContext, useEffect, useState} from 'react';

import axios from 'axios';

// Antd
import { Table, Image } from 'antd';
import {AppContext} from "../../App";

const CollectionAssets = () => {


    const { appState, setAppState } = useContext(AppContext);

    console.log("CollectionAssests: ", appState);

    const [ tbData, setTbdata ] = useState(
        [
            {
                "id": 37610537,
                "token_id": "41706188062001134699484350233333886372103087161388248051793213678433842757633",
                "num_sales": 0,
                "image_url": "https://lh3.googleusercontent.com/zHdp8VtjC4Iv020JBVk0dlrVnO0IfQEQKPuomPuQpnuGQYBcXvOQNmJRBpXRcQ3BvmeuCPgfCsMmPhPHucC8iwXFxnszGVVT9jmB",
                "name": "CryptoSicle15",
                "description": "Just a spooky Popsicle person who really loves Crypto",
                "asset_contract": "0x495f947276749ce646f68ac8c248420045cb7b5e",
                "asset_link": "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/41706188062001134699484350233333886372103087161388248051793213678433842757633",
                "collection_name": "cryptosicles",
                "owner": "0x495f947276749ce646f6437367436476376483271",
                "sell_orders": null,
                "creator": "0x5c34ddacd0215e3dc1f69d7ef1bac66ae22511e5",
                "last_sale": null,
                "top_bid": null,
                "listing_date": null,
                "is_presale": true,
                "transfer_fee": null
            },
            {
                "id": 37610537,
                "token_id": "41706188062001134699484350233333886372103087161388248051793213678433842757633",
                "num_sales": 0,
                "image_url": "https://lh3.googleusercontent.com/zHdp8VtjC4Iv020JBVk0dlrVnO0IfQEQKPuomPuQpnuGQYBcXvOQNmJRBpXRcQ3BvmeuCPgfCsMmPhPHucC8iwXFxnszGVVT9jmB",
                "name": "CryptoSicle15",
                "description": "Just a spooky Popsicle person who really loves Crypto",
                "asset_contract": "0x495f947276749ce646f68ac8c248420045cb7b5e",
                "asset_link": "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/41706188062001134699484350233333886372103087161388248051793213678433842757633",
                "collection_name": "cryptosicles",
                "owner": "0x495f947276749ce646f6437367436476376483271",
                "sell_orders": null,
                "creator": "0x5c34ddacd0215e3dc1f69d7ef1bac66ae22511e5",
                "last_sale": null,
                "top_bid": null,
                "listing_date": null,
                "is_presale": true,
                "transfer_fee": null
            },
            {
                "id": 37610537,
                "token_id": "41706188062001134699484350233333886372103087161388248051793213678433842757633",
                "num_sales": 0,
                "image_url": "https://lh3.googleusercontent.com/zHdp8VtjC4Iv020JBVk0dlrVnO0IfQEQKPuomPuQpnuGQYBcXvOQNmJRBpXRcQ3BvmeuCPgfCsMmPhPHucC8iwXFxnszGVVT9jmB",
                "name": "CryptoSicle15",
                "description": "Just a spooky Popsicle person who really loves Crypto",
                "asset_contract": "0x495f947276749ce646f68ac8c248420045cb7b5e",
                "asset_link": "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/41706188062001134699484350233333886372103087161388248051793213678433842757633",
                "collection_name": "cryptosicles",
                "owner": "0x495f947276749ce646f6437367436476376483271",
                "sell_orders": null,
                "creator": "0x5c34ddacd0215e3dc1f69d7ef1bac66ae22511e5",
                "last_sale": null,
                "top_bid": null,
                "listing_date": null,
                "is_presale": true,
                "transfer_fee": null
            },
            {
                "id": 37610537,
                "token_id": "41706188062001134699484350233333886372103087161388248051793213678433842757633",
                "num_sales": 0,
                "image_url": "https://lh3.googleusercontent.com/zHdp8VtjC4Iv020JBVk0dlrVnO0IfQEQKPuomPuQpnuGQYBcXvOQNmJRBpXRcQ3BvmeuCPgfCsMmPhPHucC8iwXFxnszGVVT9jmB",
                "name": "CryptoSicle15",
                "description": "Just a spooky Popsicle person who really loves Crypto",
                "asset_contract": "0x495f947276749ce646f68ac8c248420045cb7b5e",
                "asset_link": "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/41706188062001134699484350233333886372103087161388248051793213678433842757633",
                "collection_name": "cryptosicles",
                "owner": "0x495f947276749ce646f6437367436476376483271",
                "sell_orders": null,
                "creator": "0x5c34ddacd0215e3dc1f69d7ef1bac66ae22511e5",
                "last_sale": null,
                "top_bid": null,
                "listing_date": null,
                "is_presale": true,
                "transfer_fee": null
            }
        ]
    );


    console.log("AppState: ", appState);


    const columns = [
        {
            title: 'Token ID',
            dataIndex: 'token_id'
        },
        {
            title: 'No of Sales',
            dataIndex: 'num_sales'
        },
        {
            title: 'Image',
            dataIndex: 'image_url',
            render: theImageURL => <Image
                width={100}
                alt={theImageURL}
                src={theImageURL} />
        },
        {
            title: 'Name',
            dataIndex: 'name'
        },
        {
            title: 'Description',
            dataIndex: 'description'
        },
        {
            title: 'Asset Contract',
            dataIndex: 'asset_contract'
        },
        {
            title: 'Asset Link',
            dataIndex: 'asset_link'
        },
        {
            title: 'collection_name',
            dataIndex: 'collection_name'
        },
        {
            title: 'owner',
            dataIndex: 'owner'
        },
        {
            title: 'sell_orders',
            dataIndex: 'sell_orders'
        },
        {
            title: 'creator',
            dataIndex: 'creator'
        },
        {
            title: 'last_sale',
            dataIndex: 'last_sale'
        },
        {
            title: 'top_bid',
            dataIndex: 'top_bid'
        },
        {
            title: 'listing_date',
            dataIndex: 'listing_date'
        },
        {
            title: 'is_presale',
            dataIndex: 'is_presale'
        },
        {
            title: 'transfer_fee',
            dataIndex: 'transfer_fee'
        }

    ]

    // console.log("Assets: ", props.data.assets)

    const[ selectedRowKeys, setSelectedRowKeys] = useState(
        []
    );

    const onSelectChange = selectedRKeys => {
        console.log('SelectedRowKeys changed: ', selectedRKeys)
        setSelectedRowKeys({
            selectedRKeys
        })
    }


    const selectedRKeys = setSelectedRowKeys;
    const rowSelection = {
        selectedRKeys,
        onChange:(selected) => {
            console.log("Selected: ", selected)
        },
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            Table.SELECTION_NONE,
            // {
            //     key: 'odd',
            //     text: 'Select Odd Row',
            //     onSelect: changableRowKeys => {
            //         let newSelectedRowKeys = [];
            //         newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            //             if (index % 2 !== 0) {
            //                 return false;
            //             }
            //             return true;
            //         });
            //         setSelectedRowKeys(
            //             { selectedRowKeys: newSelectedRowKeys }
            //         )
            //     },
            // },
            // {
            //     key: 'even',
            //     text: 'Select Even Row',
            //     onSelect: changableRowKeys => {
            //         let newSelectedRowKeys = [];
            //         newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            //             if (index % 2 !== 0) {
            //                 return true;
            //             }
            //             return false;
            //         });
            //         setSelectedRowKeys(
            //             { selectedRowKeys: newSelectedRowKeys }
            //         )
            //     },
            // },
        ]
    };

    return(
        <>
            <Table
                height={'80%'}
                width={200}
                rowSelection={rowSelection}
                columns={columns}
                rowKey={record => record.id}
                dataSource={appState}
                pagination={{ pageSize: 50 }} scroll={{ y: '24rem'}}
            />;
        </>
    )
}

export default CollectionAssets;