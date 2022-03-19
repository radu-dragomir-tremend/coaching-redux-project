
import {useAppSelector } from "./app/hooks";

export const useSelectorNoDuplicates = () => {
    const items = useAppSelector(state => state.cart.items)
    const noDuplicates = [] as any[]
    items.forEach(item => {
        noDuplicates.push({ id: item.id, price: item.price, quantity: 1, title: item.title, total: item.price })
    })
    return noDuplicates
}
