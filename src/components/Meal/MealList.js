import React from 'react'
import { MealData } from './Data/MealData'
import styles from '../css/MealList.module.scss'
import MealItem from './MealItem/MealItem'
import {Card} from '../UI/Card'

export default function MealList() {

    console.log("meallist");
    const dataMeal = MealData.map((val)=>{
        console.log("datameal map");
        return <MealItem  id={val.id} item={val.item} des={val.description} price={val.price} key={val.id}/>
    })

    return (
        <div>
            <section className={styles.MealList}>
                <Card>
                    <ul>{dataMeal}</ul>
                </Card>
            </section>
        </div>
    )
}
