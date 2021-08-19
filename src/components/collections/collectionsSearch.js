import React, { useContext } from 'react';

import { AppContext } from '../../App';

// Antd
import { Layout, Menu } from 'antd';
import { RightOutlined } from '@ant-design/icons'
import { Input, Button } from "antd";
import axios from "axios";
const { Search } = Input;

const CollectionsSearch = () => {

    const { appState, setAppState } = useContext(AppContext);

    const onChange = value => {
        console.log(value);
    }

    const onSearch = search => {
        console.log("Search: ", search)
        // setAppState(search);

        getCollection(search).then(data => {
            // setAppState(data)

        })
    }

    const getCollection = async (collection) => {
        let response = await axios({
            method: 'GET',
            url: `https://api.opensea.io/api/v1/assets`,
            params: {
                collection: `${collection}`
            },
        })

        let data = response.data.assets

        console.log("getCollection: ",data[0])

        setAppState(data);

        return data;
    }

    return(
        <>
            <div className='collection_search'>
                <Search

                    placeholder="input search text"
                    onChange={onChange}
                    // addonAfter={<RightOutlined/>}
                    enterButton={
                        <Button
                            type="text"
                            size="large"
                            icon={<RightOutlined
                                style={{
                                    fontsize: '5rem'
                                }}
                            />}
                        />
                    }
                    onSearch={onSearch}
                    size="large"
                    bordered={false}
                />
            </div>
        </>
    )
}

export default CollectionsSearch;