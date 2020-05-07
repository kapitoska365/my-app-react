let initialState = {
    siteBar:[
        {id: 1, name: "Putin", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQg0xts6ni7PLCTMn2aTeTBnlvrL1nbUSfg9Y_qNS2vW62at1rv&usqp=CAU"},
        {id: 2, name: "Trump", avatar: "https://cdn.dribbble.com/users/1210339/screenshots/2909973/trump2_dribbble.jpg"},
        {id: 3, name: "Dodon", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSla7pOCzstVHKtrozQ3z1eCOZG458dVoae5DZOOgYQtDVnNY6q&usqp=CAU"}
    ]
};

const siteBarReducer = (state = initialState, action) => {
    return state;
}

export default siteBarReducer;