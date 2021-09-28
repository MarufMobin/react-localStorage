

const addToDb = (items) => {
     const db = getDb();
    if( items in db){
        db[items] = db[items] + 1;
    }
    else{
        db[items] = + 1;
    }
    saveItem(db);
}


const saveItem = (db) =>{

    const dbJSON =  JSON.stringify(db)
     localStorage.setItem("Shopping-cart",dbJSON)

}

const removeFromDb = (item) =>{

        const db = getDb();
        delete db[item]
        saveItem(db)
}

const getDb = () =>{

    let getData = localStorage.getItem('Shopping-cart');
    // getData = JSON.parse(getData);
    // if( getData == null){
    //     return {}
    // }
    return getData ? JSON.parse(getData) : {} ;

}

export {addToDb,removeFromDb,getDb}