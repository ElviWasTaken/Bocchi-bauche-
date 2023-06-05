import React from 'react'
import "./List.scss"
import { Card } from "../Card/Card"
import useFetch from '../../hooks/useFetch'


export const List = ({ subCats, maxPrice, sort, catId }) => {

    const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][categories][id][$eq]=${catId}${subCats.map(
            (item) => `&[filters][sub_categories][id][$eq]=${item}`
        )}`
    );

    return (
        <div className="List">
            {loading ? "loading" : data?.map(item => (
                <Card item={item} key={item.id} />
            ))}
        </div>
    )
}

export default List