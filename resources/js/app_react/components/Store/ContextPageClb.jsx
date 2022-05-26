import {useState, createContext} from "react";

const PageClb = createContext();

const PageProvider = ({children}) => {

    const [page, setPage] = useState(0);
    const [id_clb, setIdClb] = useState('');



    // const page_0 = () => {
    //     setPage(0);
    // }

    const page_1 = () => {
        setPage(1);
    }

    const set_id_clb = (data) => {
        setIdClb(data);
    }

    // const page_2 = () => {
    //     setPage(2);
    // }

    const value = {
        page,
        id_clb,
        page_1,
        set_id_clb,
    }
    return (
        <PageClb.Provider value={value}>
            {children}
        </PageClb.Provider>

    )
}
export {PageClb, PageProvider}
